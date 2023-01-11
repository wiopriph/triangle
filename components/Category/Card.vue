<script>
export default {
  props: {
    alias: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },
  },

  computed: {
    link() {
      return {
        name: 'cityId-categoryId',
        params: {
          categoryId: this.alias,
          cityId: 'luanda', // @todo: заменить на утилитку
        },
      };
    },
  },
};
</script>

<template>
  <NuxtLink :to="link" :class="$style.root">
    <div :class="$style.ellipse">
      <img
        v-if="icon"
        :src="icon"
        :alt="`${label} image`"
        :class="$style.icon"
      >
    </div>

    <span :class="$style.label" v-text="label" />
  </NuxtLink>
</template>

<style lang="scss" module>
$iconWidth: 146px;

.ellipse {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $iconWidth;
  height: $iconWidth;
  background: #F1F1F1;
  border-radius: 50%;
  transition: background-color .2s linear;
}

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: $iconWidth;
  max-width: $iconWidth;
  color: $ui-color-text-black;
  text-decoration: none;

  @include exclude-md {

    &:hover {

      .ellipse {
        background: $ui-color-blue-light;
      }
    }

    &:active {

      .ellipse {
        background: $ui-color-black;
      }
    }
  }
}

.icon {
  max-width: 70px;
  max-height: 70px;
}

.label {
  @include ui-typo-15;

  margin-top: 8px;
  text-align: center;
}
</style>
