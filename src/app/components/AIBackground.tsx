"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function AIBackground() {
  const particlesInit = useCallback(async (engine : Engine) => {
    await loadFull(engine); // load tsparticles full bundle
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: {
      color: {
        value: "#0a0a0a",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "random",
        animation: {
          enable: true,
          speed: 20,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 200,
        color: "#00ffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
      },
      opacity: {
        value: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "trail", // we'll simulate spikes with this
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.8,
            color: "#00ffff",
          },
        },
        trail: {
          delay: 0,
          pauseOnStop: false,
          quantity: 6,
          particles: {
            move: {
              speed: 8, // spike speed
              direction: "none",
              outModes: {
                default: "destroy", // remove after flying out
              },
            },
            size: {
              value: { min: 1, max: 2 },
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
                startValue: "max",
                destroy: "min",
              },
            },
          },
        },
      },
    },
    detectRetina: true,
  }}
/>
)}