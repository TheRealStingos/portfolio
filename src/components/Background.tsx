"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-screen h-screen z-0"
      options={{
        background: {
          color: { value: "#f8fafc" },
        },
        fpsLimit: 60,
        detectRetina: false,
        particles: {
          number: { value: 120 },
          color: { value: "#60a5fa" },
          links: {
            enable: true,
            color: "#93c5fd",
            opacity: 0.5,
            distance: 150,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: .7 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
        },
      }}
    />
  );
}