import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Divider } from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function Complete({classes, Post, SetPopup, popup, type, textInput, YourFiles, emailsTo, SetFiles, SetTo, SetFrom, SetMessage, SetType}){

    const [Open, SetOpen] = React.useState(false)

    function CopyHandler(){
        textInput.current.firstChild.firstChild.select();
        document.execCommand('copy');
        SetOpen(true);
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
    
        SetOpen(false);
      };
    function beautifyFiles(files){
        if(files.length === 1){
            return files.length + ' file';
        }else{
            return files.length + ' files';
        }
    }

    function beautifyPersons(persons){
        if(persons.length === 1){
            return persons.length + ' person';
        }else{
            return persons.length + ' persons';
        }
    }

    function Back(){
        SetFiles([]);
        SetType('link')
        SetTo([]);
        SetFrom('');
        SetMessage('');
        window.location.reload();
    }

    return(
        <div className={classes.DoneWrapper}>
            <div className={classes.DoneContent}>
                <span className={classes.DoneContentHeader}>You're done!</span> 
                {type === 'link' ? 
                <>
                    <span className={classes.DoneContentDescr}>Copy your link or</span>   
                    <Button
                        onClick={() => SetPopup(!popup)}
                        className ={classes.ViewMore}
                        disableRipple={true}>
                           see what's inside
                    </Button>
                </> :
                <>
                    <span className={classes.DoneContentDescr}>The download email has been sent</span>
                    <Button
                        onClick={() => SetPopup(!popup)}
                        className ={classes.ViewMoreForEmails}
                        disableRipple={true}>
                            {beautifyFiles(YourFiles)}  send to {beautifyPersons(emailsTo)}
                    </Button>
                </>
                }
                { type === 'link' ?
                    <TextField
                        id="read-only-input"
                        className={classes.DoneContentLink}
                        ref={textInput}
                        onFocus={CopyHandler}
                        value={`http://localhost:3001/download/${Post}`}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                        size="small"/> :
                    null}
                <Snackbar open={Open} autoHideDuration={2000} onClose={handleClose}>
                    <MuiAlert elevation={6} variant="filled" severity="success">
                        Copied to clickboard!
                    </MuiAlert>
                </Snackbar>
            </div>
            <Divider className={classes.Divider} variant="middle" />
            {type === 'link' ?
            <Button variant="contained" className ={classes.SendButton} onClick={CopyHandler}>
                Copy link
            </Button>
            :
            <Link className={classes.Link} to="/">
               <Button variant="contained" className ={classes.SendButton} onClick={Back}>
                    Send another?
                </Button>
            </Link>       
            }       
        </div>
    )
}