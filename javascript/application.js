import prepareNavigation from './utils/prepare-navigation';
import chapterNavigation from './utils/chapter-navigation';

$( document ).ready(function() {
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
  });

  chapterNavigation.bindEvents();
  prepareNavigation();
  hideApplicationSharer();
  $('.chapter p').selectionSharer();
});

function hideApplicationSharer() {
  $(window).click(function(event) {
    $('#selectionSharerPopover').hide();
  });
}
