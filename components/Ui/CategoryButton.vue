<script>
import IconHamburger from '~/assets/images/icon-hamburger.svg?inline';
import IconClose from '~/assets/images/icon-close.svg?inline';

export default {
  components: {
    IconHamburger,
    IconClose,
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    rootClassNames() {
      return {
        [this.$style.root]: true,
        [this.$style.isActive]: this.isActive,
      };
    },
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<template>
  <button :class="rootClassNames" @click="toggle">
    <IconClose v-if="isActive" :class="$style.icon" />
    <IconHamburger v-else :class="$style.icon" />

    <span :class="$style.text">category</span>
  </button>
</template>

<style lang="scss" module>
.root {
  @include ui-button;
  @include ui-round-ui-elements;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: $ui-color-white;
  background-color: $ui-color-blue;

  @include exclude-md {
    padding: 13px 16px 13px 14px;

    &:hover {
      background-color: $ui-color-blue-light;
    }
  }

  @include md {
    padding: 9px;
  }
}

.isActive {
  @include ui-button-active;

  &:hover {
    background-color: $ui-color-black;
  }
}

.icon {
  width: 24px;
  height: 24px;

  @include md {
    width: 18px;
    height: 18px;
  }
}

.text {
  @include ui-typo-15;

  @include md {
    @include ui-typo-12;
  }
}
</style>
