const validate = (value, rules, match) => {
    let valid = true;
    for (let rule in rules) {
        console.log('the rule ', rule);
        switch (rule) {
            case 'email': {
                valid = valid && emailValidator(value);
                break;
            }
            case 'match': {
                valid = valid && matchValidator(value, match[rules[rule]]);
                break;
            }
            case 'minLenght': {
                valid = valid && minLenghtValidator(value, rules[rule]);
                break;
            }
        }
    }

    return valid
}

export const emailValidator = (value) => {
    return value.indexOf('@') < 0;
}


export const minLenghtValidator = (minLength) => (value) => value.length < minLength;


export const matchValidator = (match) => (value) => {
    // console.log('the match ', {value, match}, value === match)
    return value !== match;
}


export default validate;