'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyToClipboard = copyToClipboard;
exports.copyToClipboardThis = copyToClipboardThis;
function copyToClipboard(text) {
    console.log(text);
    var copyText = text;
    return function () {
        console.info(copyText);
        var textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        var successful = void 0;
        try {
            successful = document.execCommand('copy');
        } catch (err) {
            console.warn('cant copy to clipboard');
        }
        textElem.remove();
        return successful;
    };
}

function copyToClipboardThis(text) {
    var textElem = document.createElement('textarea');
    document.body.appendChild(textElem);
    textElem.value = text;
    textElem.select();

    var successful = void 0;
    try {
        successful = document.execCommand('copy');
    } catch (err) {
        console.warn('cant copy to clipboard');
    }
    textElem.remove();
    return successful;
}
