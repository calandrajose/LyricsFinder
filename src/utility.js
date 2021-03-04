export const validateInput = (input)=>{
    if(input.trim() === ''){
        return false
    }else{
        return true;
    }
}


export const toggleState = (time, callback, secondAction = null)=>{
    callback(true)
    setTimeout(() => {
        callback(false)
        if(secondAction){
            secondAction()
        }
    }, time)   
}