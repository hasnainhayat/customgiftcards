const initialState={
    card:"",
}
const editCardReducer=(state=initialState,action)=>{
 
    switch(action.type){
        case "editCard":
            return{
                ...state,
                card:action.payload.card
           }
        
        default:
            return state;
        };
    }
    export default editCardReducer;