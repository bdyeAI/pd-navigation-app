# PD Navigation (GitHub Pages)

This is a simple phone-friendly web app:
- Tap your animal on the map to see the route image
- Tap **Back** to return

## Replace images
1. Replace the map image:
   - `assets/main-map.png`

2. Replace each route image (keep filenames the same):
   - `assets/routes/hippo.png`
   - `assets/routes/bunny.png`
   - `assets/routes/iguana.png`
   - `assets/routes/beetle.png`
   - `assets/routes/croc.png`
   - `assets/routes/giraffe.png`
   - `assets/routes/bird.png`
   - `assets/routes/ladybug.png`
   - `assets/routes/tortoise.png`
   - `assets/routes/frog.png`
   - `assets/routes/mouse.png`
   - `assets/routes/fish.png`

## Publish on GitHub Pages
1. Create a new GitHub repo and upload all files/folders from this project.
2. In GitHub: **Settings → Pages**
3. **Source:** Deploy from a branch  
   **Branch:** `main` / **(root)**
4. Save. GitHub will give you the public URL.
5. Make a QR code pointing to that URL.

## Adjust hotspot positions (if needed)
Hotspots are in `index.html` as buttons with inline `left/top/width` percentages.

Tip: To temporarily *see* the hotspots while adjusting, edit `styles.css`:
- change `.hotspot` border to `border: 2px solid rgba(255,0,0,0.35);`
