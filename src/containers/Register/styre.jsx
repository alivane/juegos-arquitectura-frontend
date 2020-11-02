import React from 'react';
import Particles from "react-tsparticles";

export default class Styleslo extends React.Component {
  render() {
    return (
      <Particles
        id="tsparticles_register"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "random",
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 8,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 1,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 6,
              anim: {
                enable: true,
                speed: 80,
                size_min: 0.1,
                sync: true,
              },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}