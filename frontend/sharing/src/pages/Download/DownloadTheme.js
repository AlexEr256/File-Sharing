import { makeStyles } from '@material-ui/core/styles';
import ArrowDown from '../../IMG/down-arrow.png'

const useStyles = makeStyles((theme) => ({
    DownloadPage: {
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
    DownloadWrapper:{
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
            background: `url(${ArrowDown}) center no-repeat`,
            width:'128px',
            height:'128px'
        }
    },
    DownloadImg:{
        width:'80%',
        height:'80%'
    },
    DownloadWrapperExtra:{
        width:'100%',
        maxHeight:'350px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    DownloadReady:{
        marginTop:'160px',
        fontSize:'25px',
        fontWeight:'400',
        marginBottom:'5px'
    },
    DownloadReadyExtra:{
        marginTop:'20px',
        fontSize:'25px',
        fontWeight:'400',
        marginBottom:'5px',
    },
    DownloadReadyExpires:{
        marginBottom:'20px',
        color:'grey',
        fontSize:'14px'
    },
    Divider:{
        width:'100%',
    },
    FileList:{
        width:'100%',
    },
    DownloadButton:{
        textDecoration:'none',
        color: "#fff",
        backgroundColor:"rgb(27, 101, 248)",
        textAlign:'center',
        fontSize:'17px',
        padding:'8px 0px',
        marginTop: '15px',
        marginBottom: '15px',
        fontWeight:'500',
        borderRadius: '20px',
        width:'60%',
        '&:hover':{
            backgroundColor:"rgb(27, 101, 248)",
            opacity: '0.5'
        }
    },

}))

export default useStyles;