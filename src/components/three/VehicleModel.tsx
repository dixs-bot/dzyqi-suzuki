"use client";
import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function VehicleModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = 4 / Math.max(size.x, size.y, size.z || 1);
    cloned.scale.setScalar(s);
    cloned.position.set(-center.x * s, -box.min.y * s, -center.z * s);
  }, [cloned]);
  return <primitive object={cloned} />;
}
