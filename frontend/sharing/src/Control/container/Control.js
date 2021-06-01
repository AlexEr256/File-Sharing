import React from 'react'
import {connect} from 'react-redux'
import {ShowExtra} from '../../redux/UploaderControl/actions'

import ControlPanel from '../component/ControlPanel'

 function Control({ShowExtra, YourFiles, type, emails, email, Valid, SendFiles, classes}){


    return(
       <ControlPanel
            classes={classes}
            ShowExtra={ShowExtra}
            YourFiles={YourFiles}
            type={type}
            emails={emails}
            email={email}
            Valid={Valid}
            SendFiles={SendFiles}/>
    )
}

function mapStateToProps(state){
    return{
        YourFiles: state.UploadReducer.files,
        type:state.ExtraOptionsReducer.value,
        emails: state.ToReducer.emails,
        email: state.FromReducer.email,
        Valid: state.IsValidReducer.validFrom,
    }
}

function mapDispatchToProps(dispatch){
    return{
        ShowExtra: (choice) => dispatch(ShowExtra(choice)),    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control)