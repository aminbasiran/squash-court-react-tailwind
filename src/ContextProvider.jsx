import { useContext, createContext,useState, useReducer} from "react"

const GlobalStateContext  = createContext()

const initialState = {
    courts : [],
    isLoading : true,
    isDarkMode : false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_COURTS":
            return { ...state, courts : action.payload.courts };
        case "SET_LOADING":
            return { ...state, isLoading : action.payload.status };
        case "SET_DARKMODE":
            return { ...state, isDarkMode : action.payload.mode };
        default:
            return state;
    }
};

export const ContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <GlobalStateContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalStore = () => {
    
    const context = useContext(GlobalStateContext)

    if(!context){
        throw new Error("must be used inside a jsx component")
    }

    return context

}

