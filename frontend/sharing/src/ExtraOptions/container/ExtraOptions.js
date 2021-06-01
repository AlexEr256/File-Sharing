import React from 'react'
import {connect} from 'react-redux'
import {Type, To, From, MessageText, IsValidTo, IsValidFrom} from '../../redux/ExtraOptions/actions'
import MailTo from '../components/MailTo'
import MailFrom from '../components/MailFrom'
import Message from '../components/Message'
import Extra from '../components/Extra'

import { Scrollbars } from 'react-custom-scrollbars';


function ExtraOptions({choice, Type, type, EmailsTo, EmailFrom, MessageText, emails, email, validFrom, validTo, ValidateFrom, ValidateTo, classes}){

    const ref = React.useRef();
    const ref2 = React.useRef();

    const EmailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const BlurFrom = () => {
        let test = EmailReg.test(email);
        ValidateFrom(test)
    }

    const handleChange = (event) => {
      Type(event.target.value);
      if(type === 'email'){
          EmailsTo([]);
          EmailFrom('');
          ref2.current.firstChild.nextElementSibling.value = ''
          ValidateFrom(true);
          ValidateTo(true);
      }  
    };


    React.useEffect(() => {
        ref.current.scrollToBottom();         
    }, [choice])
        
    

    return(
        <form className={classes.ExtraOptions} >
           <Scrollbars style={{ width: '100%', height: '100%' }} ref = {ref} autoHide>
               <MailTo 
                    classes = {classes}
                    EmailsTo = {EmailsTo}
                    emails = {emails}
                    type = {type}
                    Valid={validTo}
                    Validate={ValidateTo}/>
                <MailFrom
                    classes = {classes}
                    EmailFrom = {EmailFrom}
                    type = {type}
                    Blur={BlurFrom}
                    Valid={validFrom}
                    ref2={ref2}/>
                <Message
                    classes = {classes}
                    type = {type}
                    MessageText={MessageText}/>
                <Extra
                    classes={classes}
                    type={type}
                    handleChange={handleChange}
                    choice={choice}/> 
            </Scrollbars>   
        </form>               
    )
}
function mapStateToProps(state){
    return{
        choice: state.UploadControlReducer,
        type:state.ExtraOptionsReducer.value,
        emails: state.ToReducer.emails,
        email: state.FromReducer.email,
        validFrom: state.IsValidReducer.validFrom,
        validTo: state.IsValidReducer.validTo,
    
    }
}
function mapDispatchToProps(dispatch){
    return{
        Type: (value) => dispatch(Type(value)),
        EmailsTo: (emails) => dispatch(To(emails)),
        EmailFrom: (email) => dispatch(From(email)),
        MessageText: (text) => dispatch(MessageText(text)),
        ValidateFrom: (valid) => dispatch(IsValidFrom(valid)),
        ValidateTo: (valid) => dispatch(IsValidTo(valid)),
       
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(ExtraOptions)