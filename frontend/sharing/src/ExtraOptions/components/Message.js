import TextFieldsIcon from '@material-ui/icons/TextFields';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Message({classes, MessageText, type}){
    return(
        <TextField
            className={classes.input}
            id="message"
            placeholder="Message"
            multiline
            rows = {(type ==='email' ? 1 : 4)}
            onChange={(e) => MessageText(e.target.value)} 
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    < TextFieldsIcon  style={{ color: '#3452DB' }} />
                </InputAdornment>
        ),
        }}/>
    )
}