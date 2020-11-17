export function  isEmpty(value) {
    return value.trim() === '';
}
export function validateEmail(value) {
    if(isEmpty(value)){
        return false;
    }
    else if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value))){
        return false;
    }
        return true;

}
export function validateConfirmation (value,compareValue){
    
    if(isEmpty(value)  ){
        
        return false;
    }
    if (value !== compareValue) {
      return false;
    }
    return true;
}
export function validatePassword(value){
    if(isEmpty(value)){
        return false;
    }
   
        return true
	
}
export function validateName(value){
    if(isEmpty(value)){
        return false;
    }
  
        return true;	
}




