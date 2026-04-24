$path = "c:\Users\Athulya das\Desktop\IAuitwebhome\src\app\industries\[slug]\IndustryContent.tsx"
$content = Get-Content -LiteralPath $path
$content | ForEach-Object {
    if ($_ -match '^\d+: ') {
        $_ -replace '^\d+: ', ''
    } else {
        $_
    }
} | Set-Content -LiteralPath $path
