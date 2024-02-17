import {useLayoutEffect,useEffect} from "react"
import axios from "axios"
import SquashCourt from "./pages/SquashCourt"
import SquashStore from "./pages/SquashStore"
import Layout from "./components/Layout/Layout"
import { useGlobalStore } from "./ContextProvider"
import { createBrowserRouter, RouterProvider,Navigate, useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next"

function App() {

  const { i18n } = useTranslation();
  
  const {dispatch} = useGlobalStore()


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><SquashCourt/></Layout>
              
    },
    {
      path: '/store',
      element: <Layout><SquashStore/></Layout>
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
 //

  useLayoutEffect(()=>{
    const lng = navigator.language
    i18n.changeLanguage(lng)
  },[])

  
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
        const response = await axios(`https://all-squash-courts.onrender.com/${endpoint}`)

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

    fetchData("courts")
    fetchData("stores")
    
  },[])

  return (
        <RouterProvider router={router} />
  )
}

export default App
