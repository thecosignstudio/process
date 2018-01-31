import prepareNavigation from './utils/prepare-navigation';
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
  prepareNavigation();
  hideApplicationSharer();

  $('.chapter p').selectionSharer();
  $('.chapter .content-img').baselineElement(32);
});

