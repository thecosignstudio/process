const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function updateText(element) {
  const currentText = element.text().replace('/chapters/', '');
  const [chapterNo] = currentText.split('-');
  const [, newText] = currentText.split('#');
  const capitalized = newText.split('-')
    .map(token => capitalizeFirstLetter(token))
    .join(' ');

  element.text(capitalized).prepend(`<span class="chapter-number">${chapterNo}</span>`);
}
