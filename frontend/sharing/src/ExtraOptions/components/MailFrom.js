import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default function MailFrom({classes, EmailFrom, type, Blur, Valid, ref2}){

    return(
        <FormControl className={`${classes.input} ${(type === 'email') ? null : classes.none}`}>
            <Input
                id="from"
                ref={ref2}
                error={Valid ? null : true}
                variant="outlined"
                placeholder="Email From"
                className={classes.input} 
                onChange={(e) => EmailFrom(e.target.value)}
                onBlur={Blur}
                startAdornment={
                    <InputAdornment position="start">
                        {Valid ? <MailOutlineOutlinedIcon  style={{ color: '#3452DB' }}/> : <ErrorOutlineIcon style={{ color: 'red' }}/>}
                    </InputAdornment>
                }/>
        </FormControl>
    )
}