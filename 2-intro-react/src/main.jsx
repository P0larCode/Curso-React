import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import{ HelloWorldApp } from './HelloWorldApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <HelloWorldApp 
    user={{name: 'Pablo', lastName: 'Padilla'}} 
    id = { 1 } 
    title = 'Hola Mundo'
  />

  </StrictMode>,
)
