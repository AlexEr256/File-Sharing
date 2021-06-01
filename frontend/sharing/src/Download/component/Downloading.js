import React from 'react'
import betterNumber from '../../helpers/betterNumber'
import Card from '@material-ui/core/Card';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ArrowDown32 from '../../IMG/down-arrow-32.png'

import { Scrollbars } from 'react-custom-scrollbars';

export default function Downloading({classes, files, zip, match}){

    function getExtension(file){
        return file.split('.').pop();
    }
    console.log(match)

    return(
        <Card className ={classes.Card}>
        <Scrollbars>
            <div className={ files.length <=2 ? classes.DownloadWrapper : classes.DownloadWrapperExtra }>
                <span className={ files.length <=2 ? classes.DownloadReady : classes.DownloadReadyExtra}>
                    Ready when you are
                </span>
                <span className={classes.DownloadReadyExpires}>
                    Transfer expires in 7 days
                </span>
                <Divider className={classes.Divider}/>   
                <List className={classes.FileList}>
                    {files && Array.from(files).map((file) => {  
                        return(              
                        <>
                            <ListItem className={classes.FileListItem} key = {file._id}  >
                                <ListItemText
                                    primary={file.originalname}
                                    secondary={`${betterNumber(file.size)} ${getExtension(file.originalname)}`}
                                />
                                <a href ={`http://localhost:3000/download/${match.params.post}/${file._id}`}>
                                    <img className={classes.DownloadImg} src={ArrowDown32} alt="Загрузить"></img>
                                </a>
                            </ListItem>
                            <Divider className={classes.Divider}/> 
                        </>
                        )
                    })    
                    } 
                </List>
            </div>
        </Scrollbars>
        <Divider className={classes.Divider}/>
        <a className={classes.DownloadButton} href={`http://localhost:3000/download/${match.params.post}/${zip}`}>
            <span>
                    Download
            </span> 
        </a>    
    </Card>   
    )
}