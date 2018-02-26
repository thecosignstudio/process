import updateText from './update-text';
import updateHref from './update-href';

function addToc() {
  const $chapters = $('.js-toc-chapters');
  const $currentChapter = $('.js-toc');
  const $currentChapterTitle = $('.js-toc-chapter-title');
  const $allChapters = $('.js-toc-all-chapters');

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
    smoothScrolling: false,
  });

  $currentChapter.find('.toc-h2 a').click(function (e) {
    e.preventDefault();
    const targetOffset = $($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset,
    }, 300);
  });

  $currentChapter.find('.toc-h1 a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, 300);
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

      $(this).find('.toc-h1 a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0,
        }, 300);
      });

      $(this).find('.toc-h2 a').click(function (e) {
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
  const singleChapterAnimationDuration = 150;
  const currentChapterAnimationDuration = 750;
  const moveCurrentChapterAnimationDuration = 250;

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
        $(chaptersWithoutCurrent).removeClass('chapter-nav__listing-element--visible');
        $navContainer.removeClass('animating');
      } else {
        chaptersWithoutCurrent.map((chapter, index, array) => (
          setTimeout(() => {
            $(chapter).addClass('chapter-nav__listing-element--visible');
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
      (currentChapterAnimationDuration + moveCurrentChapterAnimationDuration) - 150 : 0;

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
  function toggleMobileNavigation(scrollAfterClosing) {
    const windowScrollTop = $(window).scrollTop();
    const windowDataScroll = $('body').data('scroll');
    $nav.toggleClass('subnav--active');
    $mobileSidebar.toggleClass('chapter-sidebar--active');
    if ($nav.hasClass('subnav--active')) {
      $('body').css('position', 'static');
      if (scrollAfterClosing) {
        window.scrollTo(windowDataScroll, windowDataScroll);
      }
    } else {
      $('body').data('scroll', windowScrollTop);
      $('body').css('position', 'fixed');
    }
  }

  $('.js-subnav-mobile-sidebar-toggle, .js-chapter-sidebar-close').click(function () {
    toggleMobileNavigation(true);
  });

  $('.chapter-sidebar ul li a').click(toggleMobileNavigation);
}

export default function () {
  addToc();
  handleChapterAnimation();
  handleMobileNavigation();
}
