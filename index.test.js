const {stringLength, reverseString, capitalizeString} = require('./index');

test('check string length jones tobe 5', () => {
    expect(stringLength('jones')).toBe(5);
});

test('throw exception when string is ghakanyuyjonesgilles', () => {
    expect(() => stringLength('ghakanyuyjonesgilles')).toThrow();
    expect(() => stringLength('ghakanyuyjonesgilles')).toThrow("string must have length longer than 1 but not more than 10");
    expect(() => stringLength('ghakanyuyjonesgilles')).toThrow(Error);
});

test('revers jones to senoj', () => {
    expect(reverseString('jones')).toMatch('senoj');
});

const myBeverage = {
    delicious: true,
    sour: false,
};

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

test('capitalize string', ()=>{
    expect(capitalizeString('jones')).toMatch('Jones');
});

/*
describe('my calculator', ()=> {
    const calculator = new Calculator(1,2);
   test('add is a function', () => {
        expect(typeof calculator.add).toBe('function');
    });
});
*/
