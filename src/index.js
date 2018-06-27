import util from './util';

function templateUID(uid) {
    return  `Your Randomly generated ID is: [${uid}]`;
}

function templateFoobarUtilHeader(dispStr) {
    return `ShopRunner: Foobar Utility CLI\n-----------------\n${dispStr}`;
}

export function start(max) {
    if (max <= 1) {
        throw new Error('invalidMaximum!');
    }

    const base = util.randomNumber(5, max);
    const exponent = util.randomNumber(1, max);

    const id = util.add(util.randomNumber(10, 50), Math.pow(base, exponent));

    const uid = util.add(
        util.randomNumber(10, 50),
        Math.pow(base, exponent),
        new Date().getTime()
    );

    const template = util.compose(templateFoobarUtilHeader, templateUID);
    console.log(template(uid));
}

