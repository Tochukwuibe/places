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

const emailValidator = val => {
    console.log('the email valid ', val.indexOf('@') > 0)
    return val.indexOf('@') > 0;
}


const minLenghtValidator = (val, minLength) => {
    return val.length >= minLength
}

const matchValidator = (value, match) => {
    console.log('the match ', {value, match}, value === match)
    return value === match;
}


export default validate;