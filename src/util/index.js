function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function add(...args) {
    return args.reduce((a, b) => a + b);
}

function compose(...fns) {
    return fns.reduceRight((f, g) =>
        (...args) => g(f(...args)),
         value => value
    );
}

export default {
    add,
    compose,
    randomNumber
}