import updateText from './update-text';
import updateHref from './update-href';

function addToc() {
  const $chapters = $('#toc-chapters');
  const $currentChapter = $('#toc');
  const $currentChapterTitle = $('#toc-chapter-title');
  const $allChapters = $('#toc-all-chapters');

  $chapters.toc({
    container: '.nav',
    selectors: 'h1',
    highlightOnScroll: false,
    smoothScrolling: false,
    anchorName(i, heading) {
      return $(heading)
        .text()
        .replace('/chapters/', '');
    },
  });

  $chapters.find('a').each(function () {
    const element = $(this);
    updateText(element);
    updateHref(element);
  });

  $currentChapter.toc({
    container: '.chapter',
    selectors: 'h1, h2',
    highlightOnScroll: true,
  });

  $currentChapterTitle.toc({
    container: '.chapter',
    selectors: 'h1',
    highlightOnScroll: false,
  });

  $allChapters.toc({
    container: '.nav',
    selectors: 'h1',
    highlightOnScroll: false,
    smoothScrolling: false,
    anchorName(i, heading) {
      return $(heading)
        .text()
        .replace('/chapters/', '');
    },
  });

  $allChapters.find('a').each(function () {
    const element = $(this);
    updateText(element);
    updateHref(element);
  });

  $allChapters.find('.toc-h1').each(function () {
    if ($(this).find('.chapter-number').text() === $('.subnav__mobile .chapter-number').text()) {
      const chapterNumber = $(this).find('.chapter-number').text();
      $(this)
        .empty().toc({
          container: '.chapter',
          selectors: 'h1, h2',
          highlightOnScroll: true,
          smoothScrolling: false,
        })
        .addClass('chapter-sidebar__current-chapter')
        .find('.toc-h1 a')
        .prepend(`<span class="chapter-number">${chapterNumber}</span>`);

      $(this).find('a').click(function (e) {
        e.preventDefault();
        const navHeight = $('.subnav').height();
        const targetOffset = $($(this).attr('href')).offset().top;
        $('html, body').animate({
          scrollTop: targetOffset - navHeight - 30,
        }, 300);
      });
    }
  });
}

function handleChapterAnimation() {
  const $navContainer = $('.subnav');
  const $toggleHandlers = $('.chapter-toggle, .chapter-nav__listing ul li a');
  const $chaptersContainer = $('.chapter-nav__listing');
  const $chapters = $chaptersContainer.find('li').toArray();
  const $currentChapterContainer = $('.subnav__chapters-container');
  const chapterNumber = $currentChapterContainer.find('.chapter-number').text();

  const navContainerTopPadding = '8rem';
  const navContainerLeftPadding = '3.1rem';
  const chapterTransformY = 30;
  const singleChapterAnimationDuration = 100;
  const currentChapterAnimationDuration = 600;
  const moveCurrentChapterAnimationDuration = 200;

  const moveCurrentChapter = (delay, isForwardAnimation) => {
    setTimeout(() => {
      if (!isForwardAnimation) {
        $currentChapterContainer.css({
          top: navContainerTopPadding,
          left: 'initial',
          marginLeft: 0,
          width: '100%',
        });
        return setTimeout(() => $currentChapterContainer.css('position', 'static'), moveCurrentChapterAnimationDuration);
      }

      $currentChapterContainer.css({
        position: 'absolute',
        left: 0,
        marginLeft: navContainerLeftPadding,
        width: `calc(100% - ${navContainerLeftPadding} - 15px`,
      });
      const chapterPositionInNav = $chapters.reduce((prevValue, chapter) => {
        if ($(chapter).find('.chapter-number').text() === chapterNumber) {
          return $(chapter).position().top - chapterTransformY;
        }
        return prevValue;
      }, null);
      return $currentChapterContainer.css('top', chapterPositionInNav);
    }, delay);
  };

  function animateChapters(delay) {
    setTimeout(() => {
      $chaptersContainer.toggleClass('chapter-nav__listing--active');
    }, delay);
  }

  function switchNavPadding(delay) {
    setTimeout(() => {
      $navContainer.toggleClass('subnav--small-padding');
    }, delay);
  }

  function animateCurrentChapterItems(delay, isForwardAnimation) {
    setTimeout(() => {
      const chaptersWithoutCurrent = $chapters.filter(chapter => (
        $(chapter).find('.chapter-number').text() !== chapterNumber
      ));
      if (!isForwardAnimation) {
        $(chaptersWithoutCurrent).removeClass('visible');
        $navContainer.removeClass('animating');
      } else {
        chaptersWithoutCurrent.map((chapter, index, array) => (
          setTimeout(() => {
            $(chapter).addClass('visible');
            if (index === array.length - 1) {
              $navContainer.removeClass('animating');
            }
          }, index * singleChapterAnimationDuration)
        ));
      }
    }, delay);
  }

  $toggleHandlers.click(() => {
    if ($navContainer.hasClass('animating')) return;

    const isForwardAnimation = $currentChapterContainer.hasClass('subnav__chapters-container--active');

    const currentChapterAnimationDelay = isForwardAnimation ? 0 :
      singleChapterAnimationDuration + moveCurrentChapterAnimationDuration;
    const moveAnimationDelay = isForwardAnimation ? currentChapterAnimationDuration : 0;
    const paddingSwitchDelay = isForwardAnimation ?
      currentChapterAnimationDuration : singleChapterAnimationDuration;
    const currentChapterItemsAnimationDelay = isForwardAnimation ?
      (currentChapterAnimationDuration + moveCurrentChapterAnimationDuration) - 100 : 0;

    $navContainer.addClass('animating');
    setTimeout(() => {
      $currentChapterContainer.toggleClass('subnav__chapters-container--active');
      animateChapters(currentChapterAnimationDuration);
      switchNavPadding(paddingSwitchDelay);
      moveCurrentChapter(moveAnimationDelay, isForwardAnimation);
    }, currentChapterAnimationDelay);

    animateCurrentChapterItems(currentChapterItemsAnimationDelay, isForwardAnimation);
  });
}

function handleMobileNavigation() {
  const $nav = $('.subnav');
  const $mobileSidebar = $('.chapter-sidebar');
  const $toggleHandlers = $('.subnav__mobile__sidebar-toggle, .chapter-sidebar__close, .chapter-sidebar ul li a');
  $toggleHandlers.click(function () {
    $nav.toggleClass('active');
    $mobileSidebar.toggleClass('active');
    $('body').toggleClass('sidebar-active');
  });
}

export default function () {
  addToc();
  handleChapterAnimation();
  handleMobileNavigation();
}
