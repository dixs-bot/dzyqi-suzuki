"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

/**
 * Loads a licensed GLB when src is provided.
 * Applies PBR color / wheel / interior overrides when named materials exist.
 * Never throws on missing named materials — those controls simply no-op.
 */
export function CarModel({ src, color = "#f4f1ea", interiorTone = "#e8e2d6" }) {
  const { scene } = useGLTF(src);

  const cloned = useMemo(() => {
    const copy = scene.clone(true);
    copy.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
      const mat = node.material;
      if (!mat) return;
      const name = (mat.name || node.name || "").toLowerCase();
      try {
        if (name.includes("paint") || name.includes("body") || name.includes("carpaint")) {
          node.material = mat.clone();
          node.material.color = new THREE.Color(color);
          node.material.metalness = 0.55;
          node.material.roughness = 0.28;
        }
        if (name.includes("interior") || name.includes("leather") || name.includes("seat")) {
          node.material = mat.clone();
          node.material.color = new THREE.Color(interiorTone);
        }
      } catch {
        /* named material missing — leave original */
      }
    });
    return copy;
  }, [scene, color, interiorTone]);

  return <primitive object={cloned} />;
}

export function PlaceholderCar({ color = "#f4f1ea", interiorTone = "#e8e2d6" }) {
  return (
    <group>
      <mesh position={[0, 0.38, 0]} castShadow>
        <boxGeometry args={[2.4, 0.45, 1.15]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.78, -0.1]} castShadow>
        <boxGeometry args={[1.5, 0.42, 1.05]} />
        <meshStandardMaterial color={interiorTone} metalness={0.15} roughness={0.6} />
      </mesh>
      <mesh position={[0.55, 0.95, -0.1]}>
        <boxGeometry args={[0.9, 0.28, 1.02]} />
        <meshPhysicalMaterial color="#88a8c8" transmission={0.55} roughness={0.08} thickness={0.2} />
      </mesh>
      {[
        [-0.75, 0.22, 0.58],
        [0.75, 0.22, 0.58],
        [-0.75, 0.22, -0.58],
        [0.75, 0.22, -0.58],
      ].map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.16, 24]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.35} />
        </mesh>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[4.5, 48]} />
        <meshStandardMaterial color="#0b1220" roughness={0.95} />
      </mesh>
    </group>
  );
}
