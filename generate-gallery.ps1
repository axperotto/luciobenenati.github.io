<#
.SYNOPSIS
    Genera il file imgs/gallery.json scansionando tutte le immagini JPG/JPEG
    presenti nella cartella imgs/.

.DESCRIPTION
    Esegui questo script ogni volta che aggiungi o rimuovi foto dalla cartella imgs/.
    Il JSON generato viene letto da gallery.js per costruire la gallery e il lightbox.

.HOW TO RUN
    Dal terminale PowerShell, nella root del repository:
        .\generate-gallery.ps1

    Poi committa il gallery.json aggiornato:
        git add imgs/gallery.json
        git commit -m "Update gallery"
        git push

.REQUIREMENTS
    - Windows con .NET (incluso in tutti i Windows moderni)
    - Assembly System.Drawing.Common OPPURE la libreria ImageMagick/ffmpeg
    - Alternativa senza dipendenze: usa la .NET classe System.Drawing (vedi sotto)
#>

Add-Type -AssemblyName System.Drawing

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$imgsDir   = Join-Path $scriptDir "imgs"
$outFile   = Join-Path $imgsDir "gallery.json"

# Estensioni supportate
$extensions = @("*.jpg", "*.jpeg", "*.JPG", "*.JPEG")

# Funzione per calcolare span e size in base al rapporto larghezza/altezza
function Get-SpanSize {
    param([int]$w, [int]$h)
    if ($h -eq 0) { return @{ span = "span-6"; size = "med" } }
    $ratio = $w / $h
    if ($ratio -ge 1.5)  { return @{ span = "span-12"; size = "med" } }
    elseif ($ratio -ge 0.9) { return @{ span = "span-6"; size = "med" } }
    else                 { return @{ span = "span-6"; size = "tall" } }
}

# Raccogli tutti i file JPG ordinati per nome
$files = $extensions | ForEach-Object {
    Get-ChildItem -Path $imgsDir -Filter $_ -File
} | Sort-Object Name -Unique

$items = @()
$isFirst = $true

foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $w = $img.Width
        $h = $img.Height
        $img.Dispose()
    } catch {
        Write-Warning "Impossibile leggere le dimensioni di: $($file.Name) — skipped"
        continue
    }

    $ss = Get-SpanSize -w $w -h $h

    $item = [ordered]@{
        src   = "/imgs/$($file.Name)"
        width = $w
        height = $h
        alt   = ""
        span  = $ss.span
        size  = $ss.size
        eager = $isFirst
    }

    $items += $item
    $isFirst = $false
}

# Serializza in JSON
$json = $items | ConvertTo-Json -Depth 5

# ConvertTo-Json wrappa in un oggetto se c'è un solo elemento — forza array
if ($items.Count -eq 1) {
    $json = "[$json]"
}

# Scrivi il file con encoding UTF-8 senza BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outFile, $json, $utf8NoBom)

Write-Host "✅  gallery.json generato con $($items.Count) immagini → $outFile"
Write-Host ""
Write-Host "Prossimi passi:"
Write-Host "  git add imgs/gallery.json"
Write-Host "  git commit -m `"Update gallery`""
Write-Host "  git push"
