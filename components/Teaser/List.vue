<script>
import { directive } from 'vue-awesome-swiper';
import { TEASER_SLIDES } from '~/mocks/teaser';

import 'swiper/css/swiper.css';

export default {
  directives: {
    swiper: directive,
  },

  data() {
    return {
      teaserSlides: TEASER_SLIDES,
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 'auto',
        slidesPerGroup: 1,

        // @todo: запилить навигацию
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    };
  },
};
</script>

<template>
  <div v-swiper="swiperOption" :class="$style.root">
    <div class="swiper-wrapper">
      <TeaserCard
        v-for="item in teaserSlides"
        :key="item.type"
        :title="item.title"
        :icon="item.icon"
        :url="item.url"
        :color="item.color"
        class="swiper-slide"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  overflow: hidden;


  @include md {
    margin-right: -20px; // fix: компенсация бокового маржина
  }
}
</style>
