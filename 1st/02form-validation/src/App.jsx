import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello World!!! we will validate the form using React</div>
      <Form />
    </>
  )
}

export default App
