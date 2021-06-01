
import React from 'react'
import {connect} from 'react-redux'
import {AddFiles, RemoveFile} from '../../redux/Uploader/actions'
import ExtraOptions from '../../ExtraOptions/container/ExtraOptions'
import Control from '../../Control/container/Control'
import Empty from '../component/Empty'
import NonEmpty from '../component/NonEmpty'




 function Uploader({ADD, YourFiles, Remove, classes}){

    const [Anchor, setAnchor] = React.useState(null);
    let open = Boolean(Anchor);


    const handleClick = (event) => {
        setAnchor(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchor(null);
      };
  

    function UploadFiles(e){ 
        e.preventDefault();
        let files = [];
        if(YourFiles){
            files = YourFiles;
        }      
        for(let i=0; i<e.target.files.length; i++){
            files.push(e.target.files[i])        
        }
        ADD(files)   
    }

    function DeleteFile(e){
        e.preventDefault();
        let choice = e.currentTarget.parentNode.firstChild.firstChild.nextElementSibling.firstChild.textContent
        Array.from(YourFiles).find((file, index) =>{
            if(file.name === choice){
                Remove(index);
            }
        
        })
        
    }

    function getExtension(file){
        return file.name.split('.').pop();
    }
  
    return(
        <div className = {classes.wrapper}>  
            {(YourFiles && YourFiles.length) ?
                        <NonEmpty
                            UploadFiles={UploadFiles}
                            YourFiles={YourFiles}
                            getExtension={getExtension}
                            DeleteFile={DeleteFile}
                            classes={classes}
                            handleClick={handleClick}
                            handleClose={handleClose}
                            open={open}
                            Anchor={Anchor}/> :
                        <Empty
                            UploadFiles={UploadFiles} 
                            classes={classes} />}
              
            <ExtraOptions classes={classes}/>
            <Control classes={classes}/>   
        </div>
    )
}

function mapStateToProps(state){
    return{
        YourFiles: state.UploadReducer.files
    }
}

function mapDispatchToProps(dispatch){
    return{
        ADD: (files) => dispatch(AddFiles([...files])),
        Remove: (file) => dispatch(RemoveFile(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader)