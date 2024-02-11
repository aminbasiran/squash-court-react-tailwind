import {useLayoutEffect,useEffect} from "react"
import axios from "axios"
import SquashCourt from "./pages/SquashCourt"
import SquashStore from "./pages/SquashStore"
import Layout from "./components/Layout/Layout"
import { useGlobalStore } from "./ContextProvider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  
  const {dispatch} = useGlobalStore()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SquashCourt />,
    },
    {
      path: '/store',
      element: <SquashStore />,
    },
  ]);
  
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
        <RouterProvider router={router} />
  )
}

export default App
