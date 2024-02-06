const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const validUrl = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;        
const passwordLow = /^[A-Za-z]\w{7,15}$/
const passwordMedium = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
const passwordStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/


export function isEmail (str: string){
    return validEmail.test(str)
}

export function isPhone (str: string){
    return validPhone.test(str)
}

export function isUrl (str: string){
    return validUrl.test(str)
}

export function isPasswordLow (str: string){
    return passwordLow.test(str)
}

export function isPasswordMedium (str: string){
    return passwordMedium.test(str)
}

export function isPasswordStrong (str: string){
    return passwordStrong.test(str)
}

export function customRegex (regex: RegExp) {
   return (str: string) => regex.test(str)
}