$(document).ready(() => {
  const settings = {
    paginationClickable: true,
    direction: 'vertical',
    nested: true,
    mousewheel: true,
    simulateTouch: false,
  };

  const swiperMain = new Swiper('.swiper-container-h', {
    paginationClickable: true,
    simulateTouch: false,
  });
  const swiper2 = new Swiper('.swiper-container-2', settings);
  const swiper3 = new Swiper('.swiper-container-3', settings);
  const swiper4 = new Swiper('.swiper-container-4', settings);

  const innerSlider = [swiper2, swiper3, swiper4];

  // eslint-disable-next-line no-restricted-syntax
  for (const i of innerSlider) {
    i.on('slideChangeTransitionEnd', () => {
      if (i.progress === 1) {
        swiperMain.mousewheel.enable();
      }
      if (i.previousIndex === 1 && i.progress === 0) {
        swiperMain.mousewheel.enable();
      }
    });

    i.on('slideChange', () => {
      if (swiperMain.mousewheel.enabled) {
        swiperMain.mousewheel.disable();
      }
    });
  }
});
