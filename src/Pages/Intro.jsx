import React, { useState, useEffect } from 'react';

import './_canvas.scss'

const Intro = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

  })

  // const
  function renderCanvas() {
    if (loaded) {
      function createHiPPICanvas(width, height) {
        const ratio = window.devicePixelRatio;
        const canvas = document.getElementById("introCanvas");

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.getContext("2d").scale(ratio, ratio);

        return canvas;
      }
      let container = document.getElementById('container');
      let pWidth = container.offsetWidth;
      let pHeight = container.offsetHeight;
      const ctx = createHiPPICanvas(pWidth, pHeight).getContext('2d');
      // window.addEventListener("resize", () => {
      //   ctx.setCanvasDimensions(pWidth, pHeight);
      // });
      ctx.font = `2em 'Orbitron'`
      ctx.fillStyle = '#00FF41'

      const drawLoading = () => {
        ctx.fillText('<\\ Loading . . .', 10, 50)
      }
      drawLoading();

      const blink = () => {
        setTimeout(() => {
          ctx.clearRect(0, 0, pWidth, pHeight)
        }, 500)
        setTimeout(() => {
          ctx.fillText('<\\ Loading . . .', 10, 50)
        }, 1000)
        setTimeout(() => {
          ctx.clearRect(0, 0, pWidth, pHeight)
        }, 1500)
        setTimeout(() => {
          ctx.fillText('<\\ Loaded~', 0, 50)
        }, 2000)
        setTimeout(() => {
          // ctx.fillText('<\\ Welcome to the portfolio~', 10, 90)
          loadText('<\\ My name is David Kroll and I welcome you to my portfolio')
        }, 3000)
        setTimeout(() => {
          loadText('<\\ I am a software engineer and full-stack web developer')
        }, 4000)
        setTimeout(() => {
          loadText('<\\ My preferred tech stack is PostgreSQL, Express.js, React.js, & Node.js')
        }, 5000)
        setTimeout(() => {
          loadText('<\\ I am a quick learner and can pick up other languages on the fly')
        }, 6000)
        setTimeout(() => {
          loadText('<\\ I am also competent in GoLang, Python, and am comfortable in the CLI in any OS')
        }, 7000)
        setTimeout(() => {
          loadText('<\\ I have a variety of projects available to browse - scroll down or click the Projects tab above')
        }, 8000)
        setTimeout(() => {
          loadText('<\\ I am open to full-time roles, part-time roles, and contract work')
        }, 9000)
        setTimeout(() => {
          loadText('<\\ I can be reached via my email at the bottom of the page')
        }, 10000)
      }
      let line = 80;
      let delay = 0;
      function loadText(string) {
        let words = string.split(' ')
        string = string.split('')
        let map = {};
        let index = 0;
        let spacing = {
          'a': 25, 'b': 25, 'c': 25, 'd': 25, 'e': 25, 'f': 20, 'g': 25, 'h': 25, 'i': 10, 'j': 10, 'k': 25,
          'l': 15, 'm': 35, 'n': 25, 'o': 25, 'p': 25, 'q': 25, 'r': 20, 's': 25, 't': 15, 'u': 25, 'v': 25,
          'w': 35, 'x': 25, 'y': 25, 'z': 30,
          'A': 30, 'B': 30, 'C': 30, 'D': 30, 'E': 30, 'F': 25, 'G': 30, 'H': 30, 'I': 10, 'J': 25, 'K': 25, 'L': 30,
          'M': 35, 'N': 30, 'O': 30, 'P': 30, 'Q': 30, 'R': 30, 'S': 30, 'T': 30, 'U': 30, 'V': 35, 'W': 40,
          'X': 25, 'Y': 30, 'Z': 30,
          ' ': 20, '.': 5, ',': 5, '-': 25, '<': 15, '\\': 10, '&': 15
        }
        while (string.length > 0) {
          let splice = string.splice(0, 1);
          map[index] = splice[0]
          index++;
        }
        // console.log(map)
        let maxTime = 75;
        let minTime = 25;

        index = 0;
        let space = 10;


        const setDelay = (char, space, line, time) => {
          setTimeout(function () {
            ctx.fillText(char, space, line)
          }
            , time
          )
        }


        // refactor so that it only checks fit if char is first letter in the printed word
        const calcSpacing = (word) => {
          let res = 0;
          word = word.split('');
          word.map((char, index) => {
            res += spacing[char]
          })
          return res;
        }

        let container = document.getElementById('container');
        let pWidth = container.offsetWidth;
        let pHeight = container.offsetHeight;
        let count = 0;
        while (map[index]) {
          let priorChar = map[index - 1] ? map[index - 1] : null
          let char = map[index];
          if (char === ' ') count++;
          let cur = words[count];
          let sp = calcSpacing(cur);
          // console.log(cur, 'has length of', sp, 'pixels')
          console.log(pWidth - space, 'pixels remain on the line -', cur, 'is', sp, '-', char)

          line += space + (sp * 2) > pWidth + 50 ? 40 : 0
          space = space + (sp * 2) > pWidth + 50 ? 0 : space;
          space += priorChar ? spacing[priorChar] : 0;
          delay += Math.floor(Math.random() * maxTime) + minTime
          setDelay(char, space > pWidth - 50 ? 0 : space, space > pWidth - 50 ? line += 40 : line, delay)
          index++;
        }
        line += 40;
        // setTimeout(ctx.fillText('a', spacing['a'], 80), 1500)
        const a = () => {
          // setTimeout(() => {
          //   ctx.fillText('<', 10, 80)
          // }, 100)
          // setTimeout(() => {
          //   ctx.fillText('\\', 25, 80)
          // }, 300)
          // setTimeout(() => {
          //   ctx.fillText('W', 50, 80)
          // }, 500)
          // setTimeout(() => {
          //   ctx.fillText('e', 85, 80)
          // }, 650)
          // setTimeout(() => {
          //   ctx.fillText('l', 110, 80)
          // }, 800)
          // setTimeout(() => {
          //   ctx.fillText('c', 120, 80)
          // }, 950)
          // setTimeout(() => {
          //   ctx.fillText('o', 142, 80)
          // }, 1100)
          // setTimeout(() => {
          //   ctx.fillText('m', 164, 80)
          // }, 1250)
          // setTimeout(() => {
          //   ctx.fillText('e', 198, 80)
          // }, 1500)
          // setTimeout(() => {
          //   ctx.fillText('~', 222, 80)
          // }, 1650)
          setTimeout(() => {
            ctx.fillText('a', 0, 80)
          }, 100)
          setTimeout(() => {
            ctx.fillText('b', 25, 80)
          }, 300)
          setTimeout(() => {
            ctx.fillText('c', 50, 80)
          }, 500)
          setTimeout(() => {
            ctx.fillText('d', 75, 80)
          }, 650)
          setTimeout(() => {
            ctx.fillText('e', 100, 80)
          }, 800)
          setTimeout(() => {
            ctx.fillText('f', 125, 80)
          }, 950)
          setTimeout(() => {
            ctx.fillText('g', 140, 80)
          }, 1100)
          setTimeout(() => {
            ctx.fillText('h', 165, 80)
          }, 1250)
          setTimeout(() => {
            ctx.fillText('i', 190, 80)
          }, 1500)
          setTimeout(() => {
            ctx.fillText('j', 200, 80)
          }, 1650)
          setTimeout(() => {
            ctx.fillText('k', 210, 80)
          }, 100)
          setTimeout(() => {
            ctx.fillText('l', 235, 80)
          }, 300)
          setTimeout(() => {
            ctx.fillText('m', 250, 80)
          }, 500)
          setTimeout(() => {
            ctx.fillText('n', 285, 80)
          }, 650)
          setTimeout(() => {
            ctx.fillText('o', 310, 80)
          }, 800)
          setTimeout(() => {
            ctx.fillText('p', 335, 80)
          }, 950)
          setTimeout(() => {
            ctx.fillText('q', 360, 80)
          }, 1100)
          setTimeout(() => {
            ctx.fillText('r', 385, 80)
          }, 1250)
          setTimeout(() => {
            ctx.fillText('s', 405, 80)
          }, 1500)
          setTimeout(() => {
            ctx.fillText('t', 430, 80)
          }, 1650)
          setTimeout(() => {
            ctx.fillText('u', 445, 80)
          }, 100)
          setTimeout(() => {
            ctx.fillText('v', 470, 80)
          }, 300)
          setTimeout(() => {
            ctx.fillText('w', 495, 80)
          }, 500)
          setTimeout(() => {
            ctx.fillText('x', 530, 80)
          }, 650)
          setTimeout(() => {
            ctx.fillText('y', 555, 80)
          }, 800)
          setTimeout(() => {
            ctx.fillText('z', 580, 80)
          }, 950)
        }
        const upper = () => {
          setTimeout(() => {
            ctx.fillText('A', 0, 110)
          }, 100)
          setTimeout(() => {
            ctx.fillText('B', 30, 110)
          }, 300)
          setTimeout(() => {
            ctx.fillText('C', 60, 110)
          }, 500)
          setTimeout(() => {
            ctx.fillText('D', 90, 110)
          }, 650)
          setTimeout(() => {
            ctx.fillText('E', 120, 110)
          }, 800)
          setTimeout(() => {
            ctx.fillText('F', 150, 110)
          }, 950)
          setTimeout(() => {
            ctx.fillText('G', 175, 110)
          }, 1100)
          setTimeout(() => {
            ctx.fillText('H', 205, 110)
          }, 1250)
          setTimeout(() => {
            ctx.fillText('I', 235, 110)
          }, 1500)
          setTimeout(() => {
            ctx.fillText('J', 245, 110)
          }, 1650)
          setTimeout(() => {
            ctx.fillText('K', 270, 110)
          }, 100)
          setTimeout(() => {
            ctx.fillText('L', 295, 110)
          }, 300)
          setTimeout(() => {
            ctx.fillText('M', 325, 110)
          }, 500)
          setTimeout(() => {
            ctx.fillText('N', 360, 110)
          }, 650)
          setTimeout(() => {
            ctx.fillText('O', 390, 110)
          }, 800)
          setTimeout(() => {
            ctx.fillText('P', 420, 110)
          }, 950)
          setTimeout(() => {
            ctx.fillText('Q', 450, 110)
          }, 1100)
          setTimeout(() => {
            ctx.fillText('R', 480, 110)
          }, 1250)
          setTimeout(() => {
            ctx.fillText('S', 510, 110)
          }, 1500)
          setTimeout(() => {
            ctx.fillText('T', 540, 110)
          }, 1650)
          setTimeout(() => {
            ctx.fillText('U', 570, 110)
          }, 100)
          setTimeout(() => {
            ctx.fillText('V', 600, 110)
          }, 300)
          setTimeout(() => {
            ctx.fillText('W', 635, 110)
          }, 500)
          setTimeout(() => {
            ctx.fillText('X', 675, 110)
          }, 650)
          setTimeout(() => {
            ctx.fillText('Y', 700, 110)
          }, 800)
          setTimeout(() => {
            ctx.fillText('Z', 730, 110)
          }, 950)
        }
      }

      blink()
    }
  }

  renderCanvas()

  const load = () => {
    setLoaded(true);
  }

  setTimeout(load, 500)

  return (
    <div className="intro" id="intro">
      <div className="canvasContainer" id="container">
        <canvas id="introCanvas" />
      </div>
    </div>
  )
}

export default Intro;