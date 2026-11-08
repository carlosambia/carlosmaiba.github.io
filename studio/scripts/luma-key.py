"""
Stand-in layer extraction for FLAT artwork: keys bright/neon pixels inside a rectangle into a
canvas-sized transparent PNG (so it drops straight into a `layers` scene at x=0,y=0).

  python3 luma-key.py <in.jpg> <out.png> <x> <y> <w> <h> [--min 175] [--blue-bias 12]

Production path is better: SAM segmentation (Magnific images_segment / remove_background) or
Magnific design_auto_layers, or simply export layers from the designer's PSD/Figma file.
"""
import sys
from PIL import Image, ImageFilter

src, out, x, y, w, h = sys.argv[1], sys.argv[2], *map(int, sys.argv[3:7])
args = sys.argv[7:]
vmin = int(args[args.index('--min') + 1]) if '--min' in args else 175
bias = int(args[args.index('--blue-bias') + 1]) if '--blue-bias' in args else 12

im = Image.open(src).convert('RGB')
mask = Image.new('L', im.size, 0)
px, mp = im.load(), mask.load()
for j in range(y, min(y + h, im.height)):
    for i in range(x, min(x + w, im.width)):
        r, g, b = px[i, j]
        if max(r, g, b) >= vmin and b >= r + bias:  # bright AND cool (neon/ice), skips skin & neutral whites
            mp[i, j] = 255
mask = mask.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(2.2))
rgba = im.copy()
rgba.putalpha(mask)
rgba.save(out)
print(f'keyed -> {out}')
