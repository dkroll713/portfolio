import React, { useState } from 'react';

import './_canvas.scss'

const Intro = () => {

  const [loaded, setLoaded] = useState(false);

  // const
  if (loaded) {
    // console.log('loaded')
    // const ctx = document.getElementById('introCanvas').getContext('2d')
    // const draw = () => {
    //   console.log('drawing')
    //   const ratio = window.devicePixelRatio;
    //   ctx.font = `1em 'Orbitron'`
    //   ctx.fillStyle = '#00FF41'
    //   let size = 150;
    //   let width = 10;
    //   let height = 20;
    //   let container = document.getElementById('container')
    //   let parentWidth = container.offsetWidth;
    //   let parentHeight = container.offsetHeight;

    //   console.log(parentWidth, parentHeight)


    //   ctx.fillText('<\\ Loading . . .', width, height)

    // }

    // function clear() {
    //   console.log('clearing');
    //   ctx.clearRect(0, 0, 500, 500)
    // }

    // const init = () => {
    //   draw()
    //   setTimeout(() => clear(), 500);
    //   setTimeout(() => draw(), 1000);
    //   setTimeout(() => clear(), 1500)
    //   setTimeout(() => {
    //     ctx.fillText('<\\ Loaded~', 20, 20)
    //   }, 2000)
    // }

    // init();
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
        ctx.fillText('<\\ Loaded~', 10, 50)
      }, 2000)
      setTimeout(() => {
        // ctx.fillText('<\\ Welcome to the portfolio~', 10, 90)
        loadText('Welcome to the portfolio')
      }, 2000)
    }

    function loadText(string) {
      string = string.split('')
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
        ctx.fillText('w', 500, 80)
      }, 500)
      setTimeout(() => {
        ctx.fillText('x', 535, 80)
      }, 650)
      setTimeout(() => {
        ctx.fillText('y', 560, 80)
      }, 800)
      setTimeout(() => {
        ctx.fillText('z', 585, 80)
      }, 950)

      setTimeout(() => {
        ctx.fillText('A', 0, 110)
      }, 100)
      setTimeout(() => {
        ctx.fillText('B', 25, 110)
      }, 300)
      setTimeout(() => {
        ctx.fillText('C', 50, 110)
      }, 500)
      setTimeout(() => {
        ctx.fillText('D', 75, 110)
      }, 650)
      setTimeout(() => {
        ctx.fillText('E', 100, 110)
      }, 800)
      setTimeout(() => {
        ctx.fillText('F', 125, 110)
      }, 950)
      setTimeout(() => {
        ctx.fillText('G', 140, 110)
      }, 1100)
      setTimeout(() => {
        ctx.fillText('H', 165, 110)
      }, 1250)
      setTimeout(() => {
        ctx.fillText('I', 190, 110)
      }, 1500)
      setTimeout(() => {
        ctx.fillText('J', 200, 110)
      }, 1650)
      setTimeout(() => {
        ctx.fillText('K', 210, 110)
      }, 100)
      setTimeout(() => {
        ctx.fillText('L', 235, 110)
      }, 300)
      setTimeout(() => {
        ctx.fillText('M', 250, 110)
      }, 500)
      setTimeout(() => {
        ctx.fillText('N', 285, 110)
      }, 650)
      setTimeout(() => {
        ctx.fillText('O', 310, 110)
      }, 800)
      setTimeout(() => {
        ctx.fillText('P', 335, 110)
      }, 950)
      setTimeout(() => {
        ctx.fillText('Q', 360, 110)
      }, 1100)
      setTimeout(() => {
        ctx.fillText('R', 385, 110)
      }, 1250)
      setTimeout(() => {
        ctx.fillText('S', 405, 110)
      }, 1500)
      setTimeout(() => {
        ctx.fillText('T', 430, 110)
      }, 1650)
      setTimeout(() => {
        ctx.fillText('U', 445, 110)
      }, 100)
      setTimeout(() => {
        ctx.fillText('V', 470, 110)
      }, 300)
      setTimeout(() => {
        ctx.fillText('W', 500, 110)
      }, 500)
      setTimeout(() => {
        ctx.fillText('X', 535, 110)
      }, 650)
      setTimeout(() => {
        ctx.fillText('Y', 560, 110)
      }, 800)
      setTimeout(() => {
        ctx.fillText('Z', 585, 110)
      }, 950)
    }

    blink()
  }

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