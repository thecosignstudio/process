import updateText from './update-text';
import updateHref from './update-href';

export default function () {
  $('#toc-chapters').find('a').each(function () {
    const element = $(this);
    updateText(element);
    updateHref(element);
  });
}
