export  function AddFiles(files){
    return{
        type: 'Add',
        files
    }

}

export function RemoveFile(file){
    return{
        type:'Remove',
        file
    }
}