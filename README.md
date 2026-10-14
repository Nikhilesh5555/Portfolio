# Competition-Grade 3D Scroll-Driven Portfolio
**R. Nethra Nikhilesh ("Nikhil")**  
*Crafting Code & Creating Impact*

---

## 🌟 Architecture Overview

This portfolio is an agency showcase website (Awwwards/FWA tier) built with a continuous, single-take 3D world that the camera flies through as you scroll:

- **Base Framework**: React 19 + Vite
- **3D Engine**: React Three Fiber (`@react-three/fiber`) + `@react-three/drei`
- **Spatial Flight**: GSAP ScrollTrigger + CameraRig (continuous scroll lerp & lookAt trajectory)
- **Smooth Inertial Scrolling**: Lenis (`@studio-freight/lenis`) feeding GSAP's rendering ticker
- **Micro-Interactions & Overlays**: Framer Motion layered on top of the 3D canvas
- **Postprocessing**: Bloom and Vignette via `@react-three/postprocessing`

---

## 🪐 3D Scene Map (Scroll Stations)

1. **Hero (y = 0)**: Abstract DNA-helix meets circuit board geometry with an octahedron data crystal, orbiting rings, and particle field.
2. **About (y = -6)**: Camera glides to floating panels with photo, CGPA score badge, and bio.
3. **Skills Constellation (y = -12)**: 3D orbit of interconnected glowing nodes with skill badges and links.
4. **Flagship Projects (y = -22)**:
   - **AgroScope Stage** (Centerpiece): Organic Torus Knot representing agricultural growth and waste transformation (green & gold accents).
   - **Smart Crop Advisory Stage**: Rotating AI faceted icosahedron with teal illumination.
5. **Achievements Trophy Shelf (y = -32)**: 4 glowing plinths with hovering trophy gems for Hack Mind, RED-HAT, SIH, and INNOHACK.
6. **Stats & Metrics (y = -38)**: Clean backdrop with metric counters and academic timeline.
7. **Contact Finale (y = -42)**: Wide-angle establishing pull-back revealing the full 3D universe with an intensified star field.

---

## 🚀 How to Run Locally

Navigate into the `Portfolio-3D` directory:

```bash
cd "Portfolio-3D"
npm install
npm run dev
```

Open your browser at:
`http://localhost:5173`

Or run `run-dev.bat` from the parent directory.

---

## 🎨 How to Swap in Custom 3D Models (.gltf / .glb)

To replace any primitive geometry with custom 3D models (e.g. a 3D leaf model for AgroScope or custom trophy models):

1. Place your `.glb` or `.gltf` model in the `public/` directory (e.g., `public/models/agroscope.glb`).
2. Use `@react-three/drei`'s `useGLTF` hook inside any component in `src/objects/`:

```jsx
import { useGLTF } from '@react-three/drei';

export function CustomModel(props) {
  const { scene } = useGLTF('/models/agroscope.glb');
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/agroscope.glb');
```

3. Replace `<ProjectObjects>` or `<HeroObject>` with `<CustomModel />`.

---

## 📱 Performance & Graceful Fallback

- **Device Performance Detection**: Capped device pixel ratio (`Math.min(window.devicePixelRatio, 2)`).
- **Reduced Motion**: Automatically falls back to a clean 2D glassmorphic experience when `prefers-reduced-motion: reduce` is detected.
- **Mobile & Low-End Devices**: Switches off heavy postprocessing bloom and lowers particle counts for solid 60 FPS performance.
