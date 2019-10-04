function hello(str) {
    if (str.startsWith("h")) {
        return "hello";
    } else if (str.startsWith('b')) {
        return "boy";
    } else if (str.starsWith('t')) {
        return "tis";
    } else {
        return "yeah";
    }
}
module.exports = hello;