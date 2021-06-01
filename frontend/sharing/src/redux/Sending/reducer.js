export default function SendingReducer(initialState = {popup:false, confirm:false}, action){
    switch(action.type){
        case 'IsPopup':
            return{
                ...initialState,
                popup: action.popup
            }
        case 'IsConfirm':
            return{
                ...initialState,
                confirm: action.confirm
            }
        default:
            return initialState
    }
}