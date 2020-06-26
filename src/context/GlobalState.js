import React, {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'
const initialState = {

    transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
   
    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(id, name , cost){
        console.log("wah", id,name, cost )
        dispatch({
            type: 'ADD_TRANSACTION',
            id: id,
            name: name,
            cost: cost
           
        })
    }
    return(
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

/*
const [state, dispatch] = useReducer(GlobalState, initialState)

const GlobalState = (state,action)=>{
    switch(action.type){
        default:
            return state;
    }

}

export default GlobalState*/