export default {
  $subnav: $('.js-subnav'),
  $chapterNav: $('.js-chapter-nav'),
  $overlay: $('.overlay'),
  $showChapterNav: $('.js-show-chapter-nav'),
  $hideChapterNav: $('.js-hide-chapter-nav'),
  $mobileChapterNav: $('.js-show-chapter-contents-nav'),

  show() {
    this.$chapterNav.removeClass('hide').addClass('active');
    this.$overlay.removeClass('hide');
  },

  hide() {
    this.$chapterNav.removeClass('active');
    this.$overlay.addClass('hide');
  },

  showMobile() {
    this.$subnav.removeClass('hidden-mobile--block');
  },

  hideMobile() {
    this.$subnav.addClass('hidden-mobile--block');
  },

  bindEvents() {
    this.$showChapterNav.click(() => this.show());
    this.$overlay.click(() => this.hide());
    this.$hideChapterNav.click(() => this.hide());
    this.$mobileChapterNav.click(
      () => this.showMobile(),
    );
  }
};
