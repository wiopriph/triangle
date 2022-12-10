<template>
  <div :class="$style.root">
    <div :class="$style.teaser">
      <TeaserCard
        v-for="item in teaserSlides"
        :key="item.type"
        :title="item.title"
        :icon="item.icon"
        :url="item.url"
        :color="item.color"
      />
    </div>

    <h2 :class="$style.title">
      Category
    </h2>

    <ul :class="$style.categories">
      <li
        v-for="item in categories"
        :key="item.type"
        :class="$style.category"
      >
        <CategoryCard
          :alias="item.type"
          :icon="item.img"
          :label="item.label"
        />
      </li>
    </ul>

    <h2 :class="$style.title">
      Fresh ads
    </h2>

    <ul>
      <li />
    </ul>
  </div>
</template>

<script>
import { CATEGORIES } from '~/constants/categories';
import { TEASER_SLIDES } from '~/mocks/teaser';

export default {
  name: 'IndexPage',

  data() {
    return {
      categories: CATEGORIES,
      teaserSlides: TEASER_SLIDES,
    };
  },
};
</script>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  margin-top: 160px; // @todo: fix header
  padding: 24px 20px;
}

.teaser {
  margin-top: 26px;
  margin-bottom: 64px;
}

.title {
  margin-bottom: 36px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.category {
  margin-bottom: 16px;

  & + & {
    margin-left: 8px;
  }
}
</style>
