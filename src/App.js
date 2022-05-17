import './App.css';
import Header from "./componints/Header/header"
import About from "./componints/About/about"
import Work from "./componints/Work/work"
import { useRef } from 'react'



function App() {

  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()  

  return (
    <>
      <Header executeScroll={executeScroll} />
      <About myRef={myRef} />
      <Work myRef={myRef} />
    </>
  )
}

export default App;
