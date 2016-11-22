export default function setCSS(palette, className) {
    const style = `
.${className} div {
    color: ${palette.textColor};
    /*color: red;*/
    background-color: ${palette.canvasColor};
    border-width: 1px;
    border-color: ${palette.borderColor};
    font-family: Roboto, sans-serif;
    font-size: 12px;
}

.${className} h1 {
    font-size: 18px;
    font-weight: 800;
    opacity: 0.8;
}

.${className} h2 {
    font-size: 16px;
}

.${className} code {
    background: ${palette.alternate2Color};
    border-color: ${palette.borderColor};
}

.${className} a {
    color: ${palette.primary1Color};
}

.${className} span {
    color: ${palette.accent1Color};
}

.${className} ::selection {
    background: ${palette.primary3Color};
}
.${className} a::selection {
    color: ${palette.primary2Color};
    background: ${palette.primary3Color};
}
`;
    return style;
}
