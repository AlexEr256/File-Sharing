import React from 'react'
import Download from '../../Download/container/Download'
import Greetings from '../../Greetings/Greetings'
import useStyles from './DownloadTheme'


export  default function DownloadPage({match}){
    const classes = useStyles();
    return(
    <div className={classes.DownloadPage}>
        <Download
            classes={classes}
            match={match}/>
        <Greetings/>
    </div>
    )
}