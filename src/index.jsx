import React from 'react';

import reactDom from 'react-dom';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div>Hello world</div>
  )
}

root.render(<App />)