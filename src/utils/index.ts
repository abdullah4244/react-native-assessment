export const emailValidator = (email :string) : {status : boolean,msg :string} => {
    if(!email.length) {
        return {status : false,msg : "Email is required"}
    }
    var re = /\S+@\S+\.\S+/;
    if(!re.test(email)) {
        return {status : false,msg : "Please Enter Valid Email"}
    }
    return {status : true ,msg : "Email is valid"}
}