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

  $('.js-show-chapter-nav').click(function() {
    $('.js-subnav').addClass('hide');
    $('.js-chapter-nav').removeClass('hide');
    $('.js-chapter-nav').addClass('active');
    $('.overlay').removeClass('hide');
  });

  $('.overlay').click(hideChapterNav);
  $('.js-hide-chapter-nav').click(hideChapterNav);

  prepareNavigation();
  hideApplicationSharer();
});

function hideChapterNav() {
  $('.js-chapter-nav').removeClass('active');
  //$('.js-chapter-nav').addClass('hide');
  $('.js-subnav').removeClass('hide');
  $('.overlay').addClass('hide');
}

function hideApplicationSharer() {
  $(window).click(function(event) {
    $('#selectionSharerPopover').hide();
  });
}

function prepareNavigation() {
  $('#toc-chapters').find('a').each(function(){
    var that = $(this);
    updateText(that);
    updateHref(that);
  });
}

function updateText(element) {
  var currentText = element.text();
  var chapterNo = currentText.split('-')[0];
  var newText = currentText.split('#')[1];
  var capitalized = newText.split('-')
    .map(function(token) { return capitalizeFirstLetter(token); })
    .join(' ');

  element.text(capitalized).prepend('<span class="chapter-number">' + chapterNo + '</span>');
}

function updateHref(element) {
  var currentHref = element.attr('href')
  var newHref = currentHref.slice(1, currentHref.length)
  element.attr("href", newHref)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
