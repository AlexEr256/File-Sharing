import React from 'react'
import {connect} from 'react-redux'
import {IsPopup} from '../../redux/Sending/actions'
import { Scrollbars } from 'react-custom-scrollbars';
import betterNumber from '../../helpers/betterNumber'

import { IconButton } from '@material-ui/core';
import {makeStyles} from  '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';


import Alert from '@material-ui/lab/Alert';
import {AlertTitle} from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    popup:{
        width:'60%',
        height:'100vh',
        backgroundColor:'#fff',
        position:'relative',
        [theme.breakpoints.down(1280)]: {
                width:'100%',
          },
    },
    Close:{
        position:'absolute',
        top:'10px',
        left:'10px',
    },
    CloseIcon:{
        fontSize:'40px',
        opacity:'0.5'
    },
    Divider:{
        width:'100%',
        marginTop:'70px'
    },
    DividerExtra:{
        marginTop:'20px'
    },
    popupContent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginLeft:'100px'
    },
    Response:{
        marginTop:'30px',
        width:'60%',
        minWidth:'400px',
        height:'150px'
    },
    ResponseAlert:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        "& .MuiAlert-icon": {
            fontSize: '50px'
          }
    },
    ResponseAlertTitle:{
        fontSize:'30px'
    },
    ResponseAlertText:{
        fontSize:'18px'
    },
    TransferDetailsTitle:{
        marginTop:'60px',
        fontSize:'35px',
        fontWeight:'400',
        marginBottom:'10px',
    },
    TransferDetailsExtraInfo:{
        fontSize:'15px',
        color:'grey',
        marginRight:'10px'
    },
    DetailsWrapper:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    ExtraDetailsWrapper:{
        marginTop:'20px',
        width:'50%'
    },
    FileDetailsWrapper:{
        marginTop:'20px',
        width:'50%'
    },
    TransferFiles:{
        marginTop:'20px',
        fontSize:'20px',
        fontWeight:'500',
        marginBottom:'10px',
    }, 
    ListItem:{
        marginLeft:'-15px',
        '&:hover':{
            opacity:'0.6',
            cursor:'default'
        }
    },
    TransferText:{
        display:'flex',
        flexDirection:'column'
    }
}))
 function Popup({YourFiles, SetPopup, id, message, emailsTo, answer}){ 

    const classes = useStyles();
    console.log(answer)

    let [Status, SetStatus] = React.useState(0)

    React.useEffect(() => {
        if(id.data){
            SetStatus(id.status);
            console.log(Status)
        }      
    }, [id.data])

    function getExtension(file){
        return file.name.split('.').pop();
    }

    function SizeOfFiles(Files){
        return Files.reduce(function(sum, current){
                 return sum + current.size
        }, 0)
     }

     function beautify(Files){
         if(Files.length === 1){
             return `${Files.length} file`
         }else{
            return `${Files.length} files`
         }
     }
    
    return(
        <div className = {classes.popup}>
            <IconButton className = {classes.Close} onClick ={() => SetPopup(false)}>
                <HighlightOffIcon className = {classes.CloseIcon} />
            </IconButton>
            <Divider className = {classes.Divider}/>

            <Scrollbars autohide style={{height:'90%'}}>  
            <div className = {classes.popupContent}>
           

                <Card className = {classes.Response}>
                    <Alert
                        className = {classes.ResponseAlert}
                        variant="filled"
                        severity={Status === 0 ? "info" : (Status >= 200 && Status < 300) ? "success" : "error" }>
                            <AlertTitle className = {classes.ResponseAlertTitle} >
                                {Status === 0 ? "Pending..." : (Status >= 200 && Status < 300) ? "Success" : "Error" } 
                            </AlertTitle>
                            <span className = {classes.ResponseAlertText}>
                                {Status === 0 ?
                                "Pending..." : (Status >= 200 && Status < 300) ?
                                "Your files are successfully send to the server" : 
                                "Something bad has happened" } 
                            </span>
                    </Alert>
                </Card>

                <div className = {classes.TransferDetails}>
                    <p className = {classes.TransferDetailsTitle}>
                        Your transfer details
                    </p>
                    <div className = {classes.TransferDetailsExtra}>
                        <span className = {classes.TransferDetailsExtraInfo}>
                            {beautify(YourFiles)}
                        </span>
                        <span className = {classes.TransferDetailsExtraInfo}>
                            {betterNumber(SizeOfFiles(YourFiles))}
                        </span>
                        <span className = {classes.TransferDetailsExtraInfo}>
                            Expires in 1 week
                        </span>
                    </div>
                </div>
                <Divider className = {`${classes.Divider} ${classes.DividerExtra}`}/>

            <div className={classes.DetailsWrapper}>
                <div className={classes.ExtraDetailsWrapper}>
                    {emailsTo.length ?
                    <> 
                        <span className = {classes.TransferFiles}>Sending to</span>
                        <List>
                        {   
                            emailsTo.map((email, index) =>{
                                return (
                                    <>
                                        <ListItem key = {index} className ={classes.ListItem}>
                                            <ListItemText
                                                primary= {email}
                                            />
                                        </ListItem>     
                                    </>
                                )

                        })
                        }
                        </List>
                    </> : null}
                
                    {
                        message ? 
                        <div className={classes.TransferText}>
                            <span className = {classes.TransferFiles}>Message</span>
                            <span>{message}</span>
                        </div> : null
                    }

                </div>
                  
                <div className={classes.FileDetailsWrapper}>
                    <span className = {classes.TransferFiles}>{beautify(YourFiles)}</span>
                    <List>
                        { YourFiles ?
                            YourFiles.map((file, index) =>{
                                return (
                                    <>
                                        <ListItem key = {index} className ={classes.ListItem}>
                                            <ListItemText
                                                primary= {file.name}
                                                secondary= {`${betterNumber(file.size)} ${getExtension(file)}`}
                                            />
                                        </ListItem>   
                                        <Divider/>    
                                    </>
                                )
                            }) : null
                        }
                    
                    </List>
                </div>
            </div>
                 
            </div>
            </Scrollbars>  
       </div>
    )
}

function mapStateToProps(state){
    return{
        YourFiles: state.UploadReducer.files,
        id: state.UploadFilesReducer.answer,
        message: state.MessageReducer.text,
        emailsTo: state.ToReducer.emails,
        answer: state.UploadFilesReducer.answer
    }
}
function mapDispatchToProps(dispatch){
    return{
        SetPopup: (popup) => dispatch(IsPopup(popup)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Popup)