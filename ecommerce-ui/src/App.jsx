import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let tagline="Flowers are the music of the ground. From earth's lips spoken without sound."
  let flower={
    name: "sunflower",
    color: "yellow",
    price: 5,
    description : "A bright and cheerful flower that follows the sun."
  }

  return (
    <>
      <h1>Transflower store </h1>
      <hr/>
      <img src={reactLogo} className='logo react' alt="React logo"></img>
      <ol>
        <li>Roses</li>
        <li>Tulips</li>
        <li>Daisies</li>
        <li>Sunflowers</li>
        <li>orchids</li>
      </ol>

    </>
  )
}

export default App
