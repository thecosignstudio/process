import prepareNavigation from './utils/prepare-navigation';
import chapterNavigation from './utils/chapter-navigation';
import initClipboardButtons from './utils/init-clipboard-buttons';

function hideApplicationSharer() {
  $(window).click(function(event) {
    $('#selectionSharerPopover').hide();
  });
}

$( document ).ready(function() {
  initClipboardButtons();
  $("#toc").toc({
    container: '.chapter',
    selectors: 'h1, h2',
    highlightOnScroll: true,
  });

  $("#toc-chapters").toc({
    container: '.nav',
    selectors: 'h1',
    highlightOnScroll: false,
    smoothScrolling: false,
    anchorName(i, heading) {
      return $(heading)
        .text()
        .replace('/chapters/', '');
    }
  });

  chapterNavigation.bindEvents();
  prepareNavigation();
  hideApplicationSharer();

  $('.chapter p').selectionSharer();
  $('.chapter .content-img').baselineElement(32);
});

