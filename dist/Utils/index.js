'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyToClipboard = copyToClipboard;
function copyToClipboard(text) {
    return function () {
        var textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        var successful = void 0;
        try {
            // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
            successful = document.execCommand('copy');
            //        const res = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            console.log('cant copy to clipboard');
        }
        textElem.remove();
        return successful;
    };
}
