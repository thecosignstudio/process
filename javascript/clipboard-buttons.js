$( document ).ready(function() {
  addClipboardButtons();
  new Clipboard('.clipboard');
});

function addClipboardButtons() {
  $(':header').filter(':visible').each(function(){
    var url = window.location.href.split('#')[0];
    var text = $(this).text();
    var href = url + '#' + text.toLowerCase().replace(/ /g,'-');
    var className = 'clipboard';
    $(this).after('<button class=' + className + ' data-clipboard-text=' + href + '>copy to clipboard</button>');
  });
}
