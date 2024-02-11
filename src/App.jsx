import {useLayoutEffect,useEffect} from "react"
import axios from "axios"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useGlobalStore } from "./ContextProvider"

function App() {
  
  const {state,dispatch} = useGlobalStore()

  console.log(state.courts)
  
  useLayoutEffect(()=>{
    if (JSON.parse(sessionStorage.getItem("dark")) === true) {
      document.documentElement.classList.add('dark')
      dispatch({type:"SET_DARKMODE",payload:{mode:true}})
    } else {
      document.documentElement.classList.remove('dark')
      dispatch({type:"SET_DARKMODE",payload:{mode:false}})
    }

  },[])

  useLayoutEffect(()=>{
    const fetchData = async() =>{
      try {
        const response = await axios("http://localhost:3000/squash")

        if(response){
          dispatch({type:"SET_COURTS",payload:{courts:response.data.courts}})
        }
        
      } 
      
      catch (error) {
        console.log(error)
      }

      finally{
        dispatch({type:"SET_LOADING",payload:{status:false}})
      }
      
    }

    setTimeout(fetchData,2000)
    
  },[])

  return (

    <div className="flex flex-col h-full transition-all duration-500 ease-in-out dark:bg-[#181619]">
      <Navbar/>
      <Main/>
      {!state.isLoading && <Footer />}
    </div>

  )
}

export default App
