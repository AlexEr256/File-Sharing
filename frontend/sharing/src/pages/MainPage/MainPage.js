import React from 'react'
import {connect} from 'react-redux'
import {AddFiles} from '../../redux/Uploader/actions'
import Uploader from '../../Uploader/container/Uploader'
import Greetings from '../../Greetings/Greetings'
import Card from '@material-ui/core/Card';
import useStyles from './MainTheme'


function MainPage({ADD}){

    const DropRef = React.useRef(null);
    const [Drag, SetDrag] = React.useState(false);
    let DragCounter ;

    const classes = useStyles();

    React.useEffect(() => {
        let page = DropRef.current;
        page.addEventListener('dragenter', DragIn);
        page.addEventListener('dragleave', DragOut);
        page.addEventListener('dragover', DragOver);
        page.addEventListener('drop', DragDrop);
        DragCounter = 0;
    })

    function DragOver(e){
        e.preventDefault();
        e.stopPropagation();

    }
    function DragIn(e){
        e.preventDefault();
        e.stopPropagation();
        DragCounter++;
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0){
            SetDrag(true)
        }
        
     
    }
    function DragOut(e){
        e.preventDefault();
        e.stopPropagation();
        DragCounter--;
        if(DragCounter === 0){
            SetDrag(false)
        }
        
    }
    function DragDrop(e){
        e.preventDefault();
        e.stopPropagation();
        SetDrag(false)
        if(e.dataTransfer.files && e.dataTransfer.files.length > 0){
           console.log([...e.dataTransfer.files]);
           ADD(e.dataTransfer.files)
           e.dataTransfer.clearData();
           DragCounter = 0;
        }
    }
    return(
         <div className={classes.MainPage} ref={DropRef}>
             {!Drag ?
                 <>
                    <Card className={classes.paper} elevation={3}>
                        <Uploader classes={classes}/>
                    </Card>
                    <Greetings/>
                </> : <span className={classes.DragnDrop}>Drop you files here</span>}
        </div> 
    )
}

function mapStateToProps(state){
    return{
        YourFiles: state.UploadReducer.files
    }
}
function mapDispatchToProps(dispatch){
    return{
        ADD: (files) => dispatch(AddFiles([...files])),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)