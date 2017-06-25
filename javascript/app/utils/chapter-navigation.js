export default {
  $subnav: $('.js-subnav'),
  $chapterNav: $('.js-chapter-nav'),
  $overlay: $('.overlay'),
  $showChapterNav: $('.js-show-chapter-nav'),
  $hideChapterNav: $('.js-hide-chapter-nav'),

  show() {
    this.$subnav.addClass('hide');
    this.$chapterNav.removeClass('hide').addClass('active');
    this.$overlay.removeClass('hide');
  },

  hide() {
    this.$chapterNav.removeClass('active');
    this.$subnav.removeClass('hide');
    this.$overlay.addClass('hide');
  },

  bindEvents() {
    this.$showChapterNav.click(() => this.show());
    this.$overlay.click(() => this.hide());
    this.$hideChapterNav.click(() => this.hide());
  }
};
