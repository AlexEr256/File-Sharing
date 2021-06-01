import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/More';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom'


export default function ControlPanel({YourFiles, classes, ShowExtra, type, emails, Valid}){

 
    return(
        <div className={classes.control}>
            <IconButton aria-label="more-options" className={classes.margin} onClick ={ShowExtra}>
                <MoreIcon style={{ color: '#3452DB' }}></MoreIcon>
            </IconButton>
            <Link className = {classes.LinkRouter} to={(!YourFiles.length) ? '#' : (type === 'link' ? `/uploads` : (!emails.length ? '#' : (Valid ? `/uploads` : '#')))}>
                <Button
                    disabled={(!YourFiles.length) ? true : (type === 'link' ? false : (!emails.length ? true : (Valid ? false : true))) }
                    variant="contained"
                    color="primary"
                    className={classes.ControlPanelButton}>
                        Get Link!
                </Button>
            </Link>
           
        </div>
    )
}