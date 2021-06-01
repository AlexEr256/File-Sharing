export  function Type(value){
    return{
        type: "Type",
        value
    }
}

export function To(emails){
    return{
        type: "To",
        emails
    }
}

export function From(email){
    return{
        type: "From",
        email
    }
}
export function IsValidFrom(validFrom){
    return{
        type:"ValidFrom",
        validFrom
    }
}
export function IsValidTo(validTo){
    return{
        type:"ValidTo",
        validTo
    }
}
export function MessageText(text){
    return{
        type: "Message",
        text
    }
}