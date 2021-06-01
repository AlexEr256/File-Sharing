import React from 'react'
import {connect} from 'react-redux'
import {IsPopup} from '../../redux/Sending/actions'
import {AddFiles} from '../../redux/Uploader/actions'
import {To, From, MessageText, Type} from '../../redux/ExtraOptions/actions'
import Complete from '../component/Complete'



 function Done({id, SetPopup, popup, type, emailsTo, YourFiles, SetFiles, SetTo, SetFrom, SetMessage, SetType, classes}){
    

    const textInput= React.useRef(null);

    const [Post, SetPost] = React.useState('')

    window.onpopstate = function(e){
        e.preventDefault();
        window.location.reload();
    }

    React.useEffect(() => {
        if(id.data){
            SetPost(id.data.post)
        }       
    }, [id.data])

    return(
        <Complete
            classes={classes}
            Post={Post}
            SetPopup={SetPopup}
            popup={popup}
            type={type}
            textInput={textInput}
            YourFiles={YourFiles}
            emailsTo={emailsTo}
            SetFiles={SetFiles}
            SetTo={SetTo}
            SetFrom={SetFrom}
            SetMessage={SetMessage}
            SetType={SetType}/>
    )
}
function mapDispatchToProps(dispatch){
    return{
        SetPopup: (popup) => dispatch(IsPopup(popup)),
        SetFiles: (files) =>dispatch(AddFiles(files)),
        SetTo: (emails) => dispatch(To(emails)),
        SetFrom:(email) => dispatch(From(email)),
        SetMessage:(message) => dispatch(MessageText(message)),
        SetType:(type) => dispatch(Type(type))
    }
}
function mapStateToProps(state){
    return{
        id: state.UploadFilesReducer.answer,
        popup:state.SendingReducer.popup,
        type:state.ExtraOptionsReducer.value,
        emailsTo: state.ToReducer.emails,
        YourFiles: state.UploadReducer.files

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Done)