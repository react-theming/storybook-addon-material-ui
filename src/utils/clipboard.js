/* eslint-disable no-undef */
export const copyToClipboard = str => () => {
  const el = window.document.createElement('textarea');
  el.value = str;
  window.document.body.appendChild(el);
  el.select();
  window.document.execCommand('copy');
  window.document.body.removeChild(el);
};
