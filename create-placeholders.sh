#!/bin/bash
# create-placeholders.sh
mkdir -p public/images

# Create placeholder images using ImageMagick (if installed)
if command -v convert &> /dev/null; then
    convert -size 1920x1080 xc:#1a472a public/images/hero-bg.jpg
    convert -size 800x600 gradient:#2e8b57-#d4af37 public/images/hwange.jpg
    convert -size 800x600 gradient:#1a472a-#2e8b57 public/images/victoria-falls.jpg
    convert -size 400x200 xc:#d4af37 -font Arial -pointsize 72 -fill white -gravity center -draw "text 0,0 'Logo'" public/images/logo.png
    echo "Placeholder images created!"
else
    echo "ImageMagick not found. Creating empty files..."
    touch public/images/hero-bg.jpg
    touch public/images/hwange.jpg
    touch public/images/victoria-falls.jpg
    touch public/images/logo.png
fi