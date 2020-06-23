/* eslint-disable no-extend-native */

// eslint-disable-next-line no-extend-native
String.prototype.endWith = function (endStr) {
    var d = this.length - endStr.length;
    return (d >= 0 && this.lastIndexOf(endStr) === d);
}

String.prototype.startWith = function (startStr) {
    return this.indexOf(startStr) === 0
}