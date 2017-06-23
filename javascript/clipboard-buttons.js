var headerSelector = ".chapter :header:not(h5):not(h1)";

$( document ).ready(function() {
  addClipboardButtons();
  new Clipboard('.clipboard-btn');

  $(headerSelector).hover(function() {
    $(this).find('.clipboard-btn').removeClass('hide');
  }, function() {
    $(this).find('.clipboard-btn').addClass('hide');
  });
});

function addClipboardButtons() {
  $(headerSelector).filter(':visible').each(function(){
    var url = window.location.href.split('#')[0];
    var text = $(this).text();
    var href = url + '#' + text.toLowerCase().replace(/ /g,'-');
    var className = '"clipboard-btn hide"';
    $(this).append('<button class=' + className + ' data-clipboard-text=' + href + '><img src="../assets/svgs/link.svg" class="clipboard-btn__icon"></button>');
  });
}
