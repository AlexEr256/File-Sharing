import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Empty({UploadFiles, classes}){
    return(
        <div className={classes.state}>
            <input className={classes.inputNone} multiple id="form" type="file" onChange={UploadFiles} />
            <input className={classes.inputNone} directory="" webkitdirectory="" id="folder" type="file" onChange={UploadFiles}/>
            <label className={classes.formLabel} htmlFor="form" >
                <IconButton color="primary" className={classes.IconButton} aria-label="upload" component="span">
                    <AddCircleIcon className={classes.addFiles}  />
                </IconButton>
                    <span className={classes.formLabelText}>Add your files</span>
                   
            </label>
            <label className={classes.folderLabel} htmlFor="folder">
                <span className={classes.folderLabelText}> Or select a folder</span>
            </label>
        </div>
    )
}