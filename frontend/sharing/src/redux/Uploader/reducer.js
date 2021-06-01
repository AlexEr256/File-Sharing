
export default function UploadReducer(initialState ={files:[]}, action){
    switch(action.type){
        case 'Add':
            return{
                ...initialState,
                files: action.files
            }
        case 'Remove':{
            return{
                ...initialState,
                files: initialState.files.filter((file, index) => index !== action.file)
            }
        }
        default:
            return initialState
                   
}
}