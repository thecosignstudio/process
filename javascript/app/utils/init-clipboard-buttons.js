const headerSelector = '.chapter :header:not(h5):not(h1)';

const addClipboardButtons = () => {
  $(headerSelector).filter(':visible').each(function () {
    const [url] = window.location.href.split('#');
    const text = $(this).text();
    const href = `${url}#${text.toLowerCase().replace(/ /g, '-')}`;
    const className = 'clipboard-btn hide';
    const buttonElement = `<button class="${className}" data-clipboard-text="${href}">
      <img src="../assets/svgs/link.svg" class="clipboard-btn__icon">
      <div class="clipboard-btn__text">Copied!</div>
    </button>`;
    $(this).append(buttonElement);
  });
};

export default function () {
  addClipboardButtons();
  // eslint-disable-next-line no-new
  new Clipboard('.clipboard-btn');

  $(headerSelector).hover(function () {
    $(this).find('.clipboard-btn').removeClass('hide');
  }, function () {
    $(this).find('.clipboard-btn').addClass('hide');
    $('.clipboard-btn__text').removeClass('clipboard-btn__text--visible');
  });

  $('.clipboard-btn').click(function () {
    $('.clipboard-btn__text').addClass('clipboard-btn__text--visible');
  });
}
