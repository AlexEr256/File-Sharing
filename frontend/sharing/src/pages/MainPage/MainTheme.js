import { makeStyles } from '@material-ui/core/styles';
import MessageIMG from '../../IMG/envelope.png'
import WarningIMG from '../../IMG/exclamation.png'


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'rgb(27, 101, 248)',
      height:'100vh',
      width:'100%',
     
    }, 
    MainPage:{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      height:'100vh',
      [theme.breakpoints.down('md')]: {
        flexDirection:'column-reverse',
        justifyContent:'center',
      },
    },
    DragnDrop:{
      color:'#fff',
      fontSize:'60px',
      fontWeight:'900',
    },
    paper:{
      paddingRight:theme.spacing(2),
      paddingLeft:theme.spacing(2),
      marginLeft: theme.spacing(5),
      width:theme.spacing(38),
      height: theme.spacing(50),
      borderRadius: theme.spacing(2.5),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(0),
      },
    },
    
      wrapper:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width:'300px',
        height:'400px',
    },
    state:{
      height:'75%',
      width:'100%',
      position:'relative',
      zIndex:'0',
    },
    formLabel:{
        width:'100%', 
        position:'relative',
        zIndex:'-1',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottom: '0.5px solid black',
        '&:hover':{
          cursor:'pointer'
        }    
    },
    formLabelText:{
      fontSize:'24px'
    },
    folderLabel:{
      position:'absolute',
      top:'55%',
      left:'27%',
      zIndex:'2'
    },
    folderLabelText:{
      fonstSize:'11px',
      color:'grey',
      borderBottom:'0.5px solid black',
      '&:hover':{
        color:'#409fff',
        cursor:'pointer',
        borderBottom:'0.5px solid #409fff',
      }
    },
    IconButton:{
      marginTop:'25px'
    },
    addFiles:{
      fontSize:'58px'
    },
    form:{
        opacity: '0',
        width:'0px',
        height:'0px',
    },
    nonEmpty:{
        height:'180px',
        width:'100%',
        paddingBottom: '40px'
    },
    fileList:{
        height:'140px',
        width:'100%',
        overflowY: "auto",
        overflowX: "none",
        margin: '0',
        padding: '0',
        listStyle: "none",
    },
    inputNone:{
        display:'none'
    },
    inputLabel:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
    },
    inputLabelDecoration:{
      fontSize:'15px',
      color:'grey'
    },
    svgIcon:{
        width:'40px',
        height:'40px'
    },
    deleteButton:{
      "&:hover":{
        color:'red'
      }

    },
    input: {
      width: '100%',
      '&:hover':{
          borderBottom:'none'
      },        
},
ExtraOptions:{
  height:'125px',
  width:'100%',
  overflowY:'auto',
  overflowX: 'hidden',
  margin: '0',
  padding: '0',
},
none:{
    display:'none'
}, 
newInputWith:{
  position: 'relative',
  width: '95%',
  border: '0',
  borderRadius:'0',
  borderBottom:'1px solid black',
  '&::before':{
      content:"''",
      background:`url(${MessageIMG}) left no-repeat`,
      width:'24px',
      height:'24px',
      display:'inline-block',    
      marginRight:'10px'
  },   
  '&>span': {
      fontSize: '15px',
      paddingRight:'25px',
      marginLeft:'25px'
      
  }
},
newInputWithout:{
  position: 'relative',
  width: '95%',
  border: '0',
  borderRadius:'0',
  borderBottom:'1px solid black',   
  '&>span': {
      fontSize: '15px',
      paddingRight:'25px',
      marginLeft:'25px'
      
  }
},
inputError:{
  borderBottom:'1px solid red',
  '&::before':{
      content:"''",
      background:`url(${WarningIMG}) left no-repeat`,
      width:'24px',
      height:'24px',
      display:'inline-block', 
      marginRight:'10px'     
  },   
},
control:{
  width:"100%",
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems:'center',
  paddingTop:'10px',
  paddingBottom:'10px'
},
ControlPanelButton:{
  width:'80%',
  paddingTop:'7px',
  paddingBottom:'7px',
  backgroundColor:'#3452DB',
  borderRadius:'20px',
  color:'#fff',
  fontWeight:'700',
  '&:disabled':{
      color:'#fff',
      backgroundColor:'grey',
      opacity:'0.5'
  }
},
margin:{
  marginRight: theme.spacing(1)
},
LinkRouter:{
  width:'80%',
  textDecoration:'none'
}
    
  }));
  

  export default useStyles