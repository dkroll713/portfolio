import React from 'react';
import { createRoot } from 'react-dom/client'

import Home from './Pages/Home.jsx'

const root = createRoot(document.getElementById('root'));

import './_global.scss'

const App = () => {
  return (
    <>
      <canvas id="canvas"></canvas>
      <Home />
    </>
  )
}

root.render(<App />)