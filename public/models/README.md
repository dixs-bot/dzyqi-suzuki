# 3D model swap path

No licensed GLB is bundled. The configurator renders a labelled **3D MODEL PLACEHOLDER** (procedural PBR mesh).

## Replace with a licensed GLB

1. Obtain a licensed `.glb` you have rights to use.
2. Place it at `public/models/<slug>.glb`  
   Example: `public/models/xl7.glb`
3. In `src/data/vehicles.js`, set that vehicle’s `model3d`:

```js
model3d: {
  src: "/models/xl7.glb",
  placeholder: false,
  label: "Licensed XL7",
  swapPath: "/public/models/xl7.glb",
}
```

4. Optional Draco / KTX2: the loader is drei `useGLTF` (Draco/KTX2-ready). Place decoder files under `public/draco` if you enable compressed assets.
5. Named materials (`paint`, `body`, `carpaint`, `interior`, `leather`, `seat`) receive colour overrides. Missing names are ignored — the scene never crashes.
6. Headlights, doors, and trunk animate only if those nodes exist on the licensed model.

Do not invent official Suzuki GLB URLs.
