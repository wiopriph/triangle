<script>
import { directive } from 'vue-awesome-swiper';
import { CATEGORIES } from '~/constants/categories';
import 'swiper/css/swiper.css';

export default {
  directives: {
    swiper: directive,
  },

  data() {
    return {
      categories: CATEGORIES,
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
      <CategoryCard
        v-for="item in categories"
        :key="item.type"
        :alias="item.type"
        :icon="item.img"
        :label="item.label"
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
