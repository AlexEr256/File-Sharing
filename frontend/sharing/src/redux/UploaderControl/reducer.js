
export function UploadControlReducer(initialState = false, action){
    switch(action.type){
        case 'Switch':{
            return !initialState
        }
        default:
            return initialState
    }
}
export function UploadFilesReducer(initialState ={answer:{}, percent: 0}, action){
    switch(action.type){
        case 'Answer':
            return{
                ...initialState,
                answer:action.answer
            }
        case 'Failure':
                return{
                    ...initialState,
                    files:action.err
                }
      
        case 'Percentage':
            return{
                ...initialState,
                percent:action.percent
            }
        default:
            return initialState
    }
}