<template>
  <nav :class="$style.root">
    <span
      v-for="(item, index) in items"
      :key="item.id"
      :class="$style.item"
    >
      <NuxtLink
        v-if="item.to"
        :key="`route_${index}`"
        :to="item.to"
        :class="$style.link"
      >
        <span v-text="item.title" />
      </NuxtLink>

      <span
        v-else
        :key="`simple_${index}`"
        v-text="item.title"
      />
    </span>
  </nav>
</template>

<script>
// @todo: заменить на настоящий домен
const DOMAIN_URL = 'https://dev-triangle.onrender.com';

export default {
  props: {
    /**
     * type: Array
     * item.title - Заголовок
     * item.to - Route
     */
    items: {
      type: Array,
      default: () => [],
    },

    disableMicrodata: {
      type: Boolean,
      default: false,
    },
  },

  head() {
    if (this.disableMicrodata) {
      return {};
    }

    return {
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org/',
          '@type': 'BreadcrumbList',
          itemListElement: this.breadcrumbsMicrodata,
        },
      }],
    };
  },

  computed: {
    breadcrumbsMicrodata() {
      return this.items
        .filter(item => !!(item && item.to))
        .map((item, index) => {
          const route = this.$router.resolve(item.to);

          if (route && route.resolved && route.resolved.path) {
            return {
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@id': `${DOMAIN_URL}${route.resolved.path}`,
                name: item.title,
              },
            };
          }

          return {};
        });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  @include ui-typo-12;
  display: inline-block;
  padding: 4px 8px;
  color: $ui-color-black;
  background-color: #F9F9F9; // @todo: убрать
}

.item {
  word-break: break-word;

  &:last-child {
    font-weight: $font-bold-weight;
  }

  &:not(:last-child)::after {
    margin: 0 4px;
    content: '/';
  }
}

.link {
  color: $ui-color-black;
  text-decoration: none;
}
</style>
