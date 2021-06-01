import DoneIcon from '../../IMG/check.png'

import { makeStyles} from '@material-ui/core/styles';

   const useStyles = makeStyles((theme) =>({
    SendingPage:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        height:'100vh',
        [theme.breakpoints.down('md')]: {
          flexDirection:'column-reverse',
          justifyContent:'center',
        },
    },
    Card:{
        paddingRight:theme.spacing(2),
        paddingLeft:theme.spacing(2),
        marginLeft: theme.spacing(5),
        width:theme.spacing(38),
        height: theme.spacing(50),
        borderRadius: theme.spacing(2.5),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        position:'relative',
        },
        Send:{
            marginTop:'25px'
        },
        PercentUploaded:{
            fontSize:'60px',
            color:'#000',
            fontWeight:'500'
        },
        PercentUploadedExtra:{
            fontSize:'20px',
            marginBottom:'25px',
            fontWeight:'500'
        },
        Transfering:{
            fontSize:'22px',
            fontWeight:'500',
            marginTop:'10px'
        },
        ViewMore:{
            padding:'0 0 0 0',
            textTransform: 'none',
            color:'#409fff',
            '&>span':{
                borderBottom:'1px solid #409fff',
            },
            '&:hover':{
                backgroundColor:'transparent',
                opacity:'0.6'
            },                       
            '&:focus': {
                boxShadow: 'none',
                backgroundColor:'transparent',
              },
        },
        ViewMoreForEmails:{
            padding:'0 0 0 0',
            textTransform: 'none',
            color:'#409fff',
            marginBottom:'80px',
            '&>span':{
                borderBottom:'1px solid #409fff',
            },
            '&:hover':{
                backgroundColor:'transparent',
                opacity:'0.6'
            },                       
            '&:focus': {
                boxShadow: 'none',
                backgroundColor:'transparent',
              },
        },
        Downloaded:{
            fontSize:'16px',
            color:'grey',
        },
        SendButtonWrapper:{
            width:'100%',
            height:'13%',
            display:'flex',
            justifyContent:'center',
            marginTop:'25px',
            borderTop:'0.5px solid grey'

        },
        SendButton:{
            color: "#fff",
            backgroundColor:"rgb(27, 101, 248)",
            marginTop: '10px',
            borderRadius: '20px',
            width:'60%',
            '&:hover':{
                backgroundColor:"rgb(27, 101, 248)",
                opacity: '0.5'
            }
        },
        LinkRouter:{
            textDecoration:'none',
           
        },
        ConfirmWrapper:{
            width:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            borderTop:'1px solid black',
            marginTop:'80px',
        },
        ConfirmButton:{
            color: "#fff",
            backgroundColor:"rgb(27, 101, 248)",
            marginTop: '12px',
            borderRadius: '20px',
            marginRight:'12px',
            width:'100px',
            '&:hover':{
                backgroundColor:"rgb(27, 101, 248)",
                opacity: '0.5'
            }
        },
        Cancel:{
            backgroundColor:"red",
            '&:hover':{
                backgroundColor:"red",
                opacity: '0.5'
            }
        },
        DoneWrapper:{
            width:'100%',
            height:'100%',
            position:'relative',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            '&:before':{
                content:"''",
                position:'absolute',
                top: '20px',
                background: `url(${DoneIcon}) center no-repeat`,
                width:'128px',
                height:'128px'
            }
        },
        DoneContent:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop: '170px'            
        },
        DoneContentHeader:{
            fontSize:'24px',
        },
        DoneContentDescr:{
            marginTop:'12px',
            fontSize:'16px',
            color:'grey'
        },
        DoneContentLink:{ 
            marginTop: '15px',
            marginBottom: '15px'
        },
        Divider:{
            width:'100%'
        },
        Link:{
            textDecoration:'none',
            width:'100%',
            textAlign:'center',
            marginBottom:'70px'
        },
        LinkText:{
            color:'#409fff',
            cursor:'pointer',
            borderBottom:'0.5px solid #409fff',
            '&:hover':{
                opacity:'0.6'
            }
        }
      
    }))

    export default useStyles