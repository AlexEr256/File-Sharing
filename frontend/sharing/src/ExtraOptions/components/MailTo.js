import { ReactMultiEmail, isEmail } from 'react-multi-email';
import FormControl from '@material-ui/core/FormControl';

import 'react-multi-email/style.css';

export default function MailTo({classes, EmailsTo, emails, type, Validate, Valid}){
    
    return(
        <FormControl className={`${classes.input} ${(type === 'email') ? null : classes.none}`}>
            <ReactMultiEmail
                className={`${(emails.length === 0) ? classes.newInputWith : classes.newInputWithout} ${Valid ? null : classes.inputError}`}
                placeholder="Email To"
                emails={emails}
                onChange={(_emails) => EmailsTo([..._emails])}
                validateEmail={email => {
                    Validate(isEmail(email))
                    return isEmail(email)        
                }}
                getLabel={(
                    email,
                    index,
                    removeEmail,
                ) => {
                    return (
                    <div data-tag key={index}>
                        {email}
                        <span data-tag-handle onClick={() => removeEmail(index)}>
                        ×
                        </span>
                    </div>
                    );
                }}
                />
        </FormControl>
    )
}