import React from 'react'
import {connect} from 'react-redux'
import {DownloadFiles, Zip} from '../../redux/Download/actions'
import Downloading from '../component/Downloading'
import axios from 'axios'


 function Download({match, SetFiles, files, zip, SetZip, classes}){

    console.log(match)
    React.useEffect(() =>{
        axios.get(`http://localhost:3000/download/${match.params.post}`)
        .then(answer => {
            SetFiles(answer.data.files);
            SetZip(answer.data.zipPath);
        })
        .catch(err => console.log(err))
    }, [])

  


    return(
        <Downloading
            files={files}
            classes={classes}
            zip={zip}
            match={match}/>
      
    )
}
function mapStateToProps(state){
    return{
        files:state.DownloadFilesReducer.files,
        zip:state.DownloadFilesReducer.zip,
    }
}
function mapDispatchToProps(dispatch){
    return{
        SetFiles: (files) => dispatch(DownloadFiles(files)),
        SetZip: (zip) => dispatch(Zip(zip))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Download)