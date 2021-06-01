import axios from 'axios'

export  function ShowExtra(choice){
    return{
        type: 'Switch',
        choice
    }
}
export function Answer(answer){
    return{
        type:'Answer',
        answer
    }
}
export function Failure(err){
    return{
        type:'Failure',
        err
    }
}

export function GetPercentage(percent){
    return{
        type: 'Percentage',
        percent
    }
}

export function SendFiles(URL, files, config ){
    return function(dispatch){
        axios.post(URL, files, config).then( answer => { 
                dispatch(Answer(answer))
        }).catch( err => {
            if(axios.isCancel(err)){
                alert('Abort')
            }
            dispatch(Failure(err))
        })
    }
}