const AppReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            console.log("aap reducer received" , action.id, action.name, action.cost)
            console.log(state.transactions)
            return{
                ...state,
                transactions: [...state.transactions ,{id: action.id , name: action.name, cost: action.cost}]
                
            }
        default:
            return state;
    }

}
export default AppReducer