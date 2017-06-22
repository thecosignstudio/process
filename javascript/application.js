$( document ).ready(function() {
  $("#toc").toc({content: '.nav', headings: 'h2'});

  prepareNavigation();
  hideApplicationSharer();
});

function hideApplicationSharer() {
  $(window).click(function(event) {
    $('#selectionSharerPopover').hide();
  });
}

function prepareNavigation() {
  $('#toc').find('a').each(function(){
    var that = $(this);
    updateText(that);
    updateHref(that);
  });
}

function updateText(element) {
  var currentText = element.text();
  var newText = currentText.split('#')[1]
  element.text(newText);
}

function updateHref(element) {
  var currentHref = element.attr('href')
  var newHref = currentHref.slice(1, currentHref.length)
  element.attr("href", newHref)
}
