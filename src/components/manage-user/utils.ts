
export const validateEmail = (email: string) => {
    const trimmedMail = email.trim();

    if (trimmedMail) {
        return true;
    }
    return 'Please Enter an Email';
}

export const validatePassword = (password: string) => {
    const trimmedPass = password.trim();
    if (trimmedPass) {
        if (trimmedPass.length < 7) {
            return 'Password should contain atleast 8 characters';
        }
        return true;
    }
    return 'Please Enter a Valid Password'
};

export const validateUserName = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
        if (trimmedValue.length < 3) {
            return 'User Name should consists atleast 4 characters';
        }
        return true;
    }
    return 'Please Enter a Valid User name';
}
