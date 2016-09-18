


export function copyToClipboard(text) {
    return () => {
        const textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        let successful;
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


