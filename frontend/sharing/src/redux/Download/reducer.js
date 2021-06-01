export default function DownloadFilesReducer(initialState={files:[], zip:''}, action){
    switch(action.type){
        case 'Download':
            return{
                ...initialState,
                files:action.files
            }
        case 'ZIP':
            return{
                ...initialState,
                zip:action.zip
            }
        default:
            return initialState
    }
}