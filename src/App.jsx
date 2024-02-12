import {useLayoutEffect,useEffect} from "react"
import axios from "axios"
import SquashCourt from "./pages/SquashCourt"
import SquashStore from "./pages/SquashStore"
import Layout from "./components/Layout/Layout"
import { useGlobalStore } from "./ContextProvider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const WrappedSquashCourtWithLayout = Layout(SquashCourt)
const WrappedSquashStoreWithLayout = Layout(SquashStore)

function App() {
  
  const {dispatch} = useGlobalStore()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WrappedSquashCourtWithLayout/>
              
    },
    {
      path: '/store',
      element: <WrappedSquashStoreWithLayout/>
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
    const fetchData = async(endpoint) =>{
      try {
        const response = await axios(`http://localhost:3000/${endpoint}`)

        if(response){

          if(endpoint === "courts"){
            dispatch({type:"SET_COURTS",payload:{courts:response.data.courts}})
            
          }
          else(
            dispatch({type:"SET_STORES",payload:{stores:response.data.stores}})
          )
        }
        
      } 
      
      catch (error) {
        console.log(error)
      }

      finally{
        if(endpoint === "courts"){
          dispatch({type:"SET_COURT_LOADING",payload:{status:false}})
          
        }
        else(
          dispatch({type:"SET_STORE_LOADING",payload:{status:false}})
          
        )
      }
    }

    setTimeout(()=>fetchData("courts"),2000)
    setTimeout(()=>fetchData("stores"),6000)
    
  },[])

  return (
        <RouterProvider router={router} />
  )
}

export default App
