import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './components/myApp'
import SegundoComp from './components/SegundoComp'
import Arreglo from './components/Arreglo'
import ElJason from './components/ElJason'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <SegundoComp />
    <Arreglo />
    <ElJason />
  </StrictMode>,
)
