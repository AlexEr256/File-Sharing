
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Extra({classes,choice, handleChange, type }){
    return(
        <FormControl className={choice ? classes.auto : classes.none} component="fieldset">
            <RadioGroup aria-label="extra" name="extra-options" value={type} onChange={handleChange}>
                <FormControlLabel value="email" control={<Radio style={{color:'#3452DB'}}/>} label="Send email transfer" />
                <FormControlLabel  value="link" control={<Radio style={{color:'#3452DB'}}/>} label="Get transfer link" />
            </RadioGroup>
        </FormControl>
)
}