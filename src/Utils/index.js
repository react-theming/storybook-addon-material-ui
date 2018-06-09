export function copyToClipboard(text) {
    console.log(text);
    const copyText = text;
    return () => {
        console.info(copyText);
        const textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        let successful;
        try {
            successful = document.execCommand('copy');
        } catch (err) {
            console.warn('cant copy to clipboard');
        }
        textElem.remove();
        return successful;
    };
}

export function copyToClipboardThis(text) {
    const textElem = document.createElement('textarea');
    document.body.appendChild(textElem);
    textElem.value = text;
    textElem.select();

    let successful;
    try {
        successful = document.execCommand('copy');
    } catch (err) {
        console.warn('cant copy to clipboard');
    }
    textElem.remove();
    return successful;
}

