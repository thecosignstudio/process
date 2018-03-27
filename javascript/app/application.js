import chapterNavigation from './utils/chapter-navigation';
import initClipboardButtons from './utils/init-clipboard-buttons';

function hideApplicationSharer() {
  $(window).click(function () {
    $('#selectionSharerPopover').hide();
  });
}

$(document).ready(function () {
  initClipboardButtons();

  chapterNavigation();
  hideApplicationSharer();

  $('.chapter p').selectionSharer();
  $('.chapter .content-img').baselineElement(32);
});

