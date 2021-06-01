
import {makeStyles} from  '@material-ui/core/styles';
import  Arrow from '../IMG/right-arrow.png'

const useStyles = makeStyles((theme) => ({
    greetings:{
        display:'flex',
        flexDirection:'column',
        marginRight:'30%',
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {
          marginRight:'0%',
          marginBottom: '35px'
        },
      },
        label:{
          color:'#fff',
          fontSize:'60px',
          fontWeight:'900',
          position:'relative', 
          paddingLeft:'75px',
            "&::before":{
                content:"''",
                position:'absolute',
                display:'inline-block',
                background: `url(${Arrow}) left no-repeat`, 
                width: '64px',
                top:'15px',
                left:'0px',
                height:'64px', 
          }
        },
        header:{
          color:'#fff',
          fontSize:'80px',
          fontWeight:'300',
          margin:'5px',
        },
        descr:{
          color:'#fff',
          fontSize:'30px',
          fontWeight:'300',
          margin:'5px',
        },
}))

export default function Greetings(){
    const classes = useStyles();
    return(
        <div className={classes.greetings}>
                        <span className={classes.label}>Share</span>
                        <h1 className={classes.header}>Share your files</h1>
                        <span className={classes.descr}>Fast and Free</span>
                    </div>  
    )
}