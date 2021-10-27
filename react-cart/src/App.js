import React from 'react'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Total from './Components/Total'
import "./Css/style.css"
import { useCartContext } from './Components/CartContext'
import Loading from './Components/Loading'

const App = () => {
    const{loading} = useCartContext();
    if(loading){
       return <Loading/>
    }
    return (
      <div>
        <Navbar />
        <Main />
        <hr />
        <Total />
      </div>
    );
}

export default App
