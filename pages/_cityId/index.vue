<script>
import { CITIES_IDS } from '~/constants/cities';

export default {
  name: 'CityPage',

  validate({ params, redirect }) {
    return CITIES_IDS.includes(params.cityId) || redirect({ name: 'cities' });
  },

  head() {
    const cityId = this.$route.params.cityId;

    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Bulletin board - fresh announcements for the sale and purchase of goods of all categories in ${cityId}. The easiest way to sell or buy things. Post an ad for free in Triângulo.`,
        },
      ],
    };
  },
};
</script>

<template>
  <div :class="$style.root">
    <TeaserList :class="$style.teaser" />

    <h2 :class="$style.title">
      Category
    </h2>

    <CategoryList :class="$style.category" />

    <h2 :class="$style.title">
      Fresh ads
    </h2>

    <p v-text="'No ad. Modify your search to see more products'" />
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  padding: 24px 20px;

}

.teaser {
  margin-top: 26px;
  margin-bottom: 64px;
}

.category {
  margin-bottom: 64px;
}

.title {
  margin-bottom: 36px;
}
</style>
