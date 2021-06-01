import React from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button';
import CustomProgress from '../../helpers/CircularProgress'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import betterNumber from '../../helpers/betterNumber'



export default function Send({classes, percent, YourFiles, GetPercent, SendFiles, Confirm, SetConfirm, Popup, SetPopup, SizeOfFiles, emails, email, message, SetFiles, SetTo, SetFrom, SetMessage, SetType}){

  const ref = React.useRef(null);

   React.useEffect(() => {

    let CancelToken = axios.CancelToken;

        const config = {
            onUploadProgress: function(e){
                let percentage = Math.round((e.loaded*100) / e.total);
                GetPercent(percentage)
    
            },
            cancelToken: new CancelToken(function handler(c){
                ref.current = c;
            }),
        }  
        let body = new FormData();
            for(let file of YourFiles){
                body.append('files', file);
            }
            if(emails.length){
              for(let email of emails){
                body.append('emailsTo', email);
              }
            }else{
              body.append('emailsTo', []);
            }
            body.append('emailFrom', email);
            body.append('message', message);
          
            let URL = `http://localhost:3000/uploads`
            SendFiles(URL, body, config)
    }, [])

    

    function beautify(YourFiles){
      if(YourFiles.length === 1){
          return `${YourFiles.length} file`
      }
      else{
          return `${YourFiles.length} files`
      }
    }
    console.log(percent)
    function CancelUpload(){ 
      if(ref.current){
          ref.current('Abortion');
          GetPercent(0)
      }
    }
    function ConfirmRefuse(){
      CancelUpload();
      SetConfirm(false);
      SetPopup(false);
      SetFiles([]);
      SetType('link')
      SetTo([]);
      SetFrom('');
      SetMessage('');
      window.location.reload();
    }
    
    return(
        <>
         <Box className={classes.Send} position="relative" display="inline-flex">
            <CustomProgress variant="determinate" thickness={2} size={180} value={percent}/>
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
            <Typography className={classes.PercentUploaded} variant="caption" component="div">{`${Math.round(
              percent
            )}`}</Typography>
            <Typography className={classes.PercentUploadedExtra} variant="caption" component="div" color="textSecondary">%</Typography>
            </Box>
         </Box>

            

        {!Confirm ?
            <>
              <span className={classes.Transfering}>Transfering...</span>
              <Button className ={classes.ViewMore} disableRipple={true} onClick = {() => SetPopup(!Popup)}>
                <span>
                    Sending {beautify(YourFiles)}
                </span>          
              </Button>
                <span className={classes.Downloaded}>
                    {(percent/100 * parseFloat(betterNumber(SizeOfFiles(YourFiles)))).toFixed(1)}/{betterNumber(SizeOfFiles(YourFiles))} uploaded
                </span>
                <div className={classes.SendButtonWrapper}>
                  <Button variant="contained" className ={classes.SendButton} onClick ={() => SetConfirm(true)}>
                      Cancel
                  </Button> 
                </div>
              </>
              :
              <>
                <span className={classes.Transfering}>Cancel this transfer?</span>
                <div className ={classes.ConfirmWrapper}> 
                  <Link className={classes.LinkRouter} to="/">
                      <Button variant="contained"  className ={`${classes.ConfirmButton} ${classes.Cancel}`}  onClick ={ConfirmRefuse}>
                          Yes
                      </Button>
                  </Link>
                  <Button variant="contained" className ={classes.ConfirmButton} onClick = {() => SetConfirm(false)}>
                          No
                  </Button>
                </div>
              </>
              }
           
             
           
        </>
    )
    
}