$( document ).ready(function() {
  addLinks();
  hideLinks();
  showLinksOnHover();
});


function addLinks() {
  $(':header').filter(':visible').each(function(){
    var url = window.location.href.split('#')[0];
    var text = $(this).text();
    console.log(text)
    var href = url + '#' + text.toLowerCase().replace(/ /g,'-')
    $(this).after('<div>' +  href + '</div>')
  });
}

function hideLinks() {
  $(':header').filter(':visible').next('div').hide();
}

function showLinks() {
  $(':header').filter(':visible').next('div').show();
}

function showLinksOnHover() {
  $(':header').filter(':visible').hover(
    function() { showLinks() },
    function() { hideLinksOnHoverOut() }
  );
}

function hideLinksOnHoverOut() {
  setTimeout(  hideLinks, 3000);
}
