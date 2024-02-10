import { useState, useLayoutEffect} from "react"
import axios from "axios"

import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  
  const [courts, setCourts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(()=>{
    const fetchData = async() =>{
      try {
        const response = await axios("http://localhost:3000/squash")

        if(response){
          setCourts(response.data.courts)
        }
        
      } 
      
      catch (error) {
        console.log(error)
      }

      finally{
        setIsLoading(false)
      }
      
    }

    setTimeout(fetchData,2000)
    
  },[])

  return (

    <>
      <Navbar/>
      <Main courts={courts} isLoading={isLoading}/>
      {!isLoading && <Footer />}
    </>
  )
}

export default App
