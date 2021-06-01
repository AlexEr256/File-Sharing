export function ExtraOptionsReducer(initialState={value:'link'}, action){

    switch(action.type){
        case 'Type':
            return{
                value: action.value
            }
         
        default:
            return initialState
        
    }
}
export function ToReducer(initialState={emails:[]}, action){
    switch(action.type){
        case 'To':
            return{
                ...initialState,
                emails:action.emails
            }
        default:
            return initialState
    }
}
export function FromReducer(initialState={email:''}, action){
    switch(action.type){
        case 'From':
            return{
                ...initialState,
                email:action.email
            } 
    
        default:
            return initialState
    }
}
export function IsValidReducer(initialState={validTo: true, validFrom:true}, action){
    switch(action.type){
        case "ValidTo":
            return{
                ...initialState,
                validTo: action.validTo
            }
        case "ValidFrom":
            return{
                ...initialState,
                validFrom: action.validFrom
            }
        default:{
            return initialState
        }
    }
}
export function MessageReducer(initialState={text:''}, action){
    switch(action.type){
        case "Message":
            return{
                ...initialState,
                text:action.text
            }  
        default:
            return initialState
    }
}