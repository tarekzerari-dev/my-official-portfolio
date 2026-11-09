$files = Get-ChildItem -Filter *.html

foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw -Encoding UTF8
    
    # UTF-8 decoded as Windows-1252 replacements
    $c = $c.Replace("â€”", "—")
    $c = $c.Replace("â†’", "→")
    $c = $c.Replace("â€“", "–")
    $c = $c.Replace("â€œ", "“")
    $c = $c.Replace("â€", "”")
    $c = $c.Replace("â€™", "’")
    
    # Handle the cases where the trailing character was lost
    $c = $c.Replace("â€ ", "”")
    
    # Also handle the HTML encoded ampersand that got corrupted
    $c = $c.Replace("UI/UX &amp; Product Designer", "UI/UX & Product Designer")
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($f.FullName, $c, $utf8NoBom)
}
