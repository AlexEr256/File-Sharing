
import React from 'react';
import Extension from '../../helpers/Extension'
import betterNumber from '../../helpers/betterNumber'
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';

import { Scrollbars } from 'react-custom-scrollbars';

export default function NonEmpty({classes, YourFiles, UploadFiles, getExtension, DeleteFile, handleClose, handleClick, open, Anchor }){
    

    return(
    <div className={classes.nonEmpty}>
     
        <List className={classes.fileList}>
          <Scrollbars style={{ width: '100%', height: '100%' }}>
            {Array.from(YourFiles).map((file, index) =>{
                return(
                  <ListItem key={index}>
                      <ListItemAvatar>
                          <Avatar>
                            <Extension file = {getExtension(file)} />
                          </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                          primary={file.name}
                          secondary={betterNumber(file.size)}/>

                      <ListItemSecondaryAction  onClick ={DeleteFile}>
                          <IconButton className={classes.deleteButton} edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
                )
            })}
             </Scrollbars>
        </List>
       
      <input className={classes.inputNone}  id="AddFile" type="file" multiple={true} onChange={UploadFiles} />
      <input className={classes.inputNone}  id="AddFolder" type="file"  directory="" webkitdirectory="" onChange={UploadFiles} />
      <div className={classes.inputLabel}>
        <IconButton color="primary" aria-label="upload file" component="span" onClick={handleClick}>
          <ControlPointIcon style={{color:'#3452DB'}} />
        </IconButton>
            <Menu
            id="fade-menu"
            anchorEl={Anchor}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
              <MenuItem onClick={handleClose}>
                  <label htmlFor="AddFile">Files</label>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                  <label htmlFor="AddFolder">Folder</label>
              </MenuItem>
          </Menu>
        <p>
          <span className={classes.inputLabelDecoration}>Add more files</span>
          <br/>
          <span className={classes.inputLabelDecoration}>{YourFiles.length} files added</span>
        </p>
      </div>
    </div>
    )
}