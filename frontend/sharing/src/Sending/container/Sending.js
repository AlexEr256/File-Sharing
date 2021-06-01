import React from 'react'
import {connect} from 'react-redux'
import {GetPercentage, SendFiles} from '../../redux/UploaderControl/actions'
import {IsConfirm, IsPopup} from '../../redux/Sending/actions'
import {AddFiles} from '../../redux/Uploader/actions'
import {To, From, MessageText, Type} from '../../redux/ExtraOptions/actions'
import Send from '../component/Send'



function Sending({percent, YourFiles, GetPercent, SendFiles, popup, SetPopup, confirm, SetConfirm, emails, email, message, SetFiles, SetTo, SetFrom, SetMessage, SetType, classes}){

    function SizeOfFiles(YourFiles){
       return YourFiles.reduce(function(sum, current){
                return sum + current.size
       }, 0)
    } 
    window.onpopstate = function(e){
        e.preventDefault();
        window.location.reload();
    }
    return(
           <Send
                classes={classes}
                percent={percent}
                YourFiles={YourFiles}
                GetPercent={GetPercent}
                SendFiles={SendFiles}
                Confirm={confirm}
                SetConfirm={SetConfirm}
                Popup={popup}
                SetPopup={SetPopup}
                SizeOfFiles={SizeOfFiles}
                emails={emails}
                email={email}
                message={message}
                SetFiles={SetFiles}
                SetTo={SetTo}
                SetFrom={SetFrom}
                SetMessage={SetMessage}
                SetType={SetType}/>
    )
}
function mapStateToProps(state){
    return{
        percent:state.UploadFilesReducer.percent,
        YourFiles: state.UploadReducer.files,
        confirm:state.SendingReducer.confirm,
        popup:state.SendingReducer.popup,
        emails: state.ToReducer.emails,
        email: state.FromReducer.email,
        message: state.MessageReducer.text,
    }
}

function mapDispatchToProps(dispatch){
    return {
        SendFiles: (URL, files, config) => dispatch(SendFiles(URL, files, config)),
        GetPercent: (percent) => dispatch(GetPercentage(percent)),
        SetConfirm: (confirm) => dispatch(IsConfirm(confirm)),
        SetPopup: (popup) => dispatch(IsPopup(popup)),
        SetFiles: (files) =>dispatch(AddFiles(files)),
        SetTo: (emails) => dispatch(To(emails)),
        SetFrom:(email) => dispatch(From(email)),
        SetMessage:(message) => dispatch(MessageText(message)),
        SetType:(type) => dispatch(Type(type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sending)