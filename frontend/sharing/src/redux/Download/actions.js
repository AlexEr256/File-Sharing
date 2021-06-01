export  function DownloadFiles(files){
    return{
        type: 'Download',
        files
    }
}

export  function Zip(zip){
    return{
        type: 'ZIP',
        zip
    }
}