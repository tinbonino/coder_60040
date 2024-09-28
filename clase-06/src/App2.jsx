import { useState } from 'react'
import ThemeContext, {themes} from './context'

import Navbar from './components/Navbar'
import Body from './components/Body'
import Layout from './components/Layout'
import Renderizado from './components/Renderizado'

import './App.css'

function App() {
  const [tema,setTema]=useState(themes.claro);

  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro)
  }

  return (
    <>
     <ThemeContext.Provider value={{tema, handleTema}}>
        <Layout>
            {/* <Navbar/> */}
            {/* <Body/> */}
            <Renderizado/>
        </Layout>
     </ThemeContext.Provider>
    </>
  )
}

export default App
