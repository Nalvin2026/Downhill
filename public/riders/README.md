# Rider photos

Drop rider photos in this folder and reference them in `src/data.js`.

## Workflow

1. **Find a photo you have rights to use.** Options:
   - **Wikimedia Commons** ([commons.wikimedia.org](https://commons.wikimedia.org)) — free with attribution. Search the rider's name, click an image, download.
   - **Your own race photos** — totally yours.
   - **Team press kits** — many teams (Specialized, Canyon, Trek) publish official press photos for media use.

2. **Crop to a square.** The portrait card is square. Aim for 600×600 or 800×800 px.

3. **Save with a kebab-case filename** matching the rider — e.g.:
   - `jackson-goldstone.jpg`
   - `loic-bruni.jpg`
   - `vali-holl.jpg`
   - `tahnee-seagrave.jpg`

4. **Reference in `src/data.js`** — add a `photoUrl` field to the rider profile:
   ```js
   'Jackson Goldstone': {
     nationality: 'CAN',
     // ...existing fields...
     photoUrl: '/riders/jackson-goldstone.jpg',
   },
   ```

5. **Reload the app.** The portrait card shows the photo. If the file is missing or the URL is broken, it falls back to the stylized SVG silhouette automatically.

## Attribution

If you use Wikimedia Commons or other CC-licensed photos, credit the photographer somewhere visible (e.g. in the app footer, or in the rider profile under "PHOTO BY"). The license text on each Commons page tells you exactly what's required.
