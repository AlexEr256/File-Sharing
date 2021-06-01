import React from 'react'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import Greetings from '../../Greetings/Greetings'
import Sending from '../../Sending/container/Sending'
import Done from '../../Done/container/Done'
import Popup from '../../Popup/container/Popup'
import useStyles from './UploadTheme'

 function UploadsPage({percent, confirm, popup}){

    const classes = useStyles()
    
    return(
        <div className={classes.SendingPage}>
        <Card className ={classes.Card}>
        {(percent === 100 && !confirm) ? <Done classes={classes}/> : <Sending classes={classes}/>
        }
        </Card>
        {popup ? <Popup/> : <Greetings/>}
        </div>
    )
} 
function mapDispatchToProps(dispatch){
    return{}
}
function mapStateToProps(state){
    return{
        percent: state.UploadFilesReducer.percent,
        confirm: state.SendingReducer.confirm,
        popup: state.SendingReducer.popup,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadsPage)