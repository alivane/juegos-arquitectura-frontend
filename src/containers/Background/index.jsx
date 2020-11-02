import React from 'react';
import Particles from "react-tsparticles";

export default class Stylespar extends React.Component {
  render() {
    return (
     
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 10 * 10 * 2
              }
            },
            color: {
              value: "random"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "random",
              opacity: 8,
              width: 2
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 2
              },
              remove: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}