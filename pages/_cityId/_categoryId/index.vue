<script>
import { TYPES } from '~/constants/categories';

export default {
  name: 'CategoryPage',

  validate({ params }) {
    return TYPES.includes(params.categoryId);
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

  computed: {
    breadcrumbs() {
      const { cityId, categoryId } = this.$route.params;

      return [
        {
          title: 'home',
          to: {
            name: 'index',
          },
        },
        {
          title: cityId,
          to: {
            name: 'cityId',
            params: {
              cityId,
            },
          },
        },
        {
          title: categoryId,
        },
      ];
    },
  },
};
</script>

<template>
  <div :class="$style.root">
    <UiBreadcrumbs :items="breadcrumbs" />

    <p v-text="'category page'" />
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  padding: 24px 20px;
}

</style>
