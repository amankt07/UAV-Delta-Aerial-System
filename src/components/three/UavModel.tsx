"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function UavModel() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Procedural geometry for a futuristic UAV silhouette
  const { lines, points } = useMemo(() => {
    const l = [];
    const p = [];
    
    // Central fuselage
    for (let i = 0; i < 20; i++) {
      const z = (i / 20) * 8 - 4;
      const r = Math.sin((i / 20) * Math.PI) * 0.8;
      
      // Fuselage lines
      if (i < 19) {
        const nextZ = ((i + 1) / 20) * 8 - 4;
        const nextR = Math.sin(((i + 1) / 20) * Math.PI) * 0.8;
        
        for (let j = 0; j < 8; j++) {
          const angle = (j / 8) * Math.PI * 2;
          const x1 = Math.cos(angle) * r;
          const y1 = Math.sin(angle) * r;
          const x2 = Math.cos(angle) * nextR;
          const y2 = Math.sin(angle) * nextR;
          
          l.push([new THREE.Vector3(x1, y1, z), new THREE.Vector3(x2, y2, nextZ)]);
          p.push(new THREE.Vector3(x1, y1, z));
        }
      }
    }
    
    // Wings (swept back)
    const wingSpan = 6;
    const rootChord = 2;
    const tipChord = 0.5;
    
    // Left Wing
    l.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-wingSpan, 0, -2)]); // Leading edge
    l.push([new THREE.Vector3(0, 0, -rootChord), new THREE.Vector3(-wingSpan, 0, -2 - tipChord)]); // Trailing edge
    l.push([new THREE.Vector3(-wingSpan, 0, -2), new THREE.Vector3(-wingSpan, 0, -2 - tipChord)]); // Tip
    
    // Right Wing
    l.push([new THREE.Vector3(0, 0, 0), new THREE.Vector3(wingSpan, 0, -2)]); // Leading edge
    l.push([new THREE.Vector3(0, 0, -rootChord), new THREE.Vector3(wingSpan, 0, -2 - tipChord)]); // Trailing edge
    l.push([new THREE.Vector3(wingSpan, 0, -2), new THREE.Vector3(wingSpan, 0, -2 - tipChord)]); // Tip

    // V-Tail
    l.push([new THREE.Vector3(0, 0.5, -3.5), new THREE.Vector3(-1.5, 1.5, -4.5)]);
    l.push([new THREE.Vector3(0, 0.5, -3.5), new THREE.Vector3(1.5, 1.5, -4.5)]);
    
    // Add points along the wings and tail for a point-cloud effect
    for (let i = 0; i < 50; i++) {
      const t = Math.random();
      p.push(new THREE.Vector3(-wingSpan * t, (Math.random() - 0.5) * 0.1, -2 * t - Math.random() * (rootChord * (1 - t) + tipChord * t)));
      p.push(new THREE.Vector3(wingSpan * t, (Math.random() - 0.5) * 0.1, -2 * t - Math.random() * (rootChord * (1 - t) + tipChord * t)));
    }

    // Convert to Float32Array for Points geometry
    const positions = new Float32Array(p.length * 3);
    for (let i = 0; i < p.length; i++) {
      positions[i * 3] = p[i].x;
      positions[i * 3 + 1] = p[i].y;
      positions[i * 3 + 2] = p[i].z;
    }

    return { lines: l, points: positions };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle hovering effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 + 0.2;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      
      // Mouse interaction parallax
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      
      groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
      groupRef.current.rotation.x += 0.05 * (targetY + 0.2 - groupRef.current.rotation.x);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Wireframe lines */}
      {lines.map((line, i) => (
        <Line 
          key={i} 
          points={line as any} 
          color="#00E5FF" 
          lineWidth={0.5} 
          opacity={0.3} 
          transparent 
        />
      ))}
      
      {/* Point cloud */}
      <Points positions={points} ref={pointsRef as any}>
        <PointMaterial 
          transparent 
          color="#ffffff" 
          size={0.05} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.6}
        />
      </Points>
    </group>
  );
}
