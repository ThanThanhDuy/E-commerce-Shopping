export default function checkString(string :string, maxLength:number, regex?: RegExp){
    if (string.trim().length <=0 || string.trim().length>maxLength){
        return false;
    }
    if(regex && !regex.test(string)){
        return false
    }
    return true;
}