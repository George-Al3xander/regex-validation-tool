type options = Partial<{
    isEmail: RegExp,
    isPhone: RegExp,
    isUrl: RegExp,
    isPasswordLow: RegExp,
    isPasswordMedium: RegExp,
    isPasswordStrong: RegExp,   
}>



export class RVTool {
    validEmail: RegExp;
    validPhone: RegExp;
    validUrl: RegExp;
    passwordLow: RegExp;
    passwordMedium: RegExp;
    passwordStrong: RegExp;
    constructor(options: options) {
        this.validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        this.validUrl = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;        
        this.passwordLow = /^[A-Za-z]\w{7,15}$/
        this.passwordMedium = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        this.passwordStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        
        if(options) {
            const {isEmail, isPasswordLow, isPasswordMedium, isPasswordStrong, isPhone, isUrl} = options;
            if(isEmail) {
                this.validEmail = isEmail;
            }
            if(isPhone) {
                this.validPhone = isPhone 
            }
            if(isUrl) {
                this.validUrl = isUrl 
            }
            if(isPasswordLow) {
                this.passwordLow =  isPasswordLow 
            }  
            if(isPasswordMedium) {
                this.passwordMedium =  isPasswordMedium
            }
            if(isPasswordStrong) {
                this.passwordStrong = isPasswordStrong
            }              
        }         
    }

    isEmail (str: string){
        return this.validEmail.test(str)
    }

    isPhone (str: string){
        return this.validPhone.test(str)
    }

    isUrl (str: string){
        return this.validUrl.test(str)
    }

    isPasswordLow (str: string){
        return this.passwordLow.test(str)
    }

    isPasswordMedium (str: string){
        return this.passwordMedium.test(str)
    }

    isPasswordStrong (str: string){
        return this.passwordStrong.test(str)
    }

    customRegex (regex: RegExp) {
       return (str: string) => regex.test(str)
    }
}