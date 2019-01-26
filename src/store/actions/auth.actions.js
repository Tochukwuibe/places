export const Types = {
    Login: 'Login'
}




export const Actions =  {
    login: ({email, password}, cb) => {
        cb();
        return {type: Types.Login}
    }
}