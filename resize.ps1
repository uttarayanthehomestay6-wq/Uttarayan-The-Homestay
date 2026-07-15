Add-Type -AssemblyName System.Drawing
$imgPath = "e:\Uttarayan The Homestay\Logo and photo\font copy.jpg.jpeg"
$img = [System.Drawing.Image]::FromFile($imgPath)

$bmpIcon = New-Object System.Drawing.Bitmap 256, 256
$gIcon = [System.Drawing.Graphics]::FromImage($bmpIcon)
$gIcon.DrawImage($img, 0, 0, 256, 256)
$bmpIcon.Save("e:\Uttarayan The Homestay\src\app\icon.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$gIcon.Dispose()
$bmpIcon.Dispose()

$ratio = $img.Width / $img.Height
$newW = 800
$newH = [int](800 / $ratio)
if ($ratio -lt 1) {
    $newH = 800
    $newW = [int](800 * $ratio)
}

$bmpLogo = New-Object System.Drawing.Bitmap $newW, $newH
$gLogo = [System.Drawing.Graphics]::FromImage($bmpLogo)
$gLogo.DrawImage($img, 0, 0, $newW, $newH)
$bmpLogo.Save("e:\Uttarayan The Homestay\public\logo.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$gLogo.Dispose()
$bmpLogo.Dispose()

$img.Dispose()
