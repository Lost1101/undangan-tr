import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './flower.css'; // Pastikan CSS sudah diimport

const FallingLeaves = () => {
  const containerRef = useRef(null); // Referensi ke container

  useEffect(() => {
    const total = 20;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const container = containerRef.current;

    // Fungsi untuk mendapatkan nilai random antara min dan max
    const R = (min, max) => min + Math.random() * (max - min);

    // Fungsi untuk animasi setiap daun
    const animateLeaf = (leaf) => {
      gsap.to(leaf, R(6, 15), { y: h + 100, ease: "none", repeat: -1, delay: -15 });
      gsap.to(leaf, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(leaf, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: "sine.inOut", delay: -5 });
    };

    // Menambahkan daun ke dalam container dan menjalankan animasi
    for (let i = 0; i < total; i++) {
      const leaf = document.createElement('div');
      gsap.set(leaf, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
      container.appendChild(leaf);
      animateLeaf(leaf);
    }
  }, []);

  return (
    <div ref={containerRef} id="container" style={{ position: 'fixed', width: '100vw', height: '100vh', overflow: 'hidden', top:0, left:0 }}>
      {/* Daun-daun akan di-append ke sini */}
    </div>
  );
};

export default FallingLeaves;
