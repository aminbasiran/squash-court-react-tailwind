import { useContext, createContext, useReducer} from "react"

const GlobalStateContext  = createContext()

const initialState = {
    courts : [],
    stores : [],
    courtIsLoading : true,
    storeIsLoading : true,
    isDarkMode : false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_COURTS":
            return { ...state, courts : action.payload.courts };
        case "SET_STORES":
            return { ...state, stores : action.payload.stores };
        case "SET_COURT_LOADING":
            return { ...state, courtIsLoading : action.payload.status };
        case "SET_STORE_LOADING":
            return { ...state, storeIsLoading : action.payload.status };
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

