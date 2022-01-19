// stringLength(string)
const stringLength = (string) => {
    if (string.length > 1 && string.length < 10) {
        return string.length
    }else {
        throw new Error("string must have length longer than 1 but not more than 10");
    }
}

const reverseString = (string) => {
    let array = string.split('');
    let fil = array.reverse().join('');
    return fil;
}

const capitalizeString = (string) => {
    let array = string.split('');
    const char = array[0].toLocaleUpperCase();
    array.shift();
    array.unshift(char);
    return array.join('');
}

module.exports = {stringLength, reverseString, capitalizeString};
