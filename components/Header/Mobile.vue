<script>
import IconAnbuy from '~/assets/images/icon-anbuy.svg?inline';
import IconProfile from '~/assets/images/header/icon-profile.svg?inline';

export default {
  components: {
    IconAnbuy,
    IconProfile,
  },

  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      currentScrollPosition: 0,
    };
  },

  computed: {
    rootClassNames() {
      return {
        [this.$style.root]: true,
        [this.$style.pinned]: this.showNavbar,
        [this.$style.unpinned]: !this.showNavbar,
        [this.$style.unfixed]: !this.currentScrollPosition,
      };
    },

    adButtonClassNames() {
      return {
        [this.$style.adButton]: true,
        [this.$style.showButton]: this.showNavbar,
      };
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (this.currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(this.currentScrollPosition - this.lastScrollPosition) < 120) {
        return;
      }

      this.showNavbar = this.currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = this.currentScrollPosition;
    },
  },
};
</script>

<template>
  <div :class="$style.wrap">
    <div :class="rootClassNames">
      <div :class="$style.navigationMenu">
        <UiCategoryButton :class="$style.button" />

        <NuxtLink :to="{ name: 'index' }" :class="$style.homeButton">
          <IconAnbuy />
        </NuxtLink>

        <button :class="[$style.loginButton, $style.button]">
          <IconProfile />
        </button>
      </div>

      <FindInput :class="$style.find" />
    </div>

    <button :class="adButtonClassNames">
      post ad
    </button>
  </div>
</template>

<style lang="scss" module>
.wrap {
  height: 136px;
  min-height: 136px;
}

.root {
  position: fixed;
  top: 0;
  z-index: $z-idx-super;
  width: 100%;
  max-width: inherit;
  height: 136px;
  padding: 8px 20px 26px;
  color: $ui-color-text-black;
  background-color: $ui-color-white;
  transition: .2s transform linear;
}

.pinned {
  transform: translateY(0);
}

.unpinned {
  transform: translateY(-100%);
}

.unfixed {
  position: relative;
}

.navigationMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.button {
  max-width: 100px;
  height: 36px;
}

.homeButton {
  position: relative;
  top: -8px;
  border: 1px solid $ui-color-transparent;
  border-radius: 0 0 4px 4px;
}

.loginButton {
  @include ui-button;
  @include ui-round-ui-elements;
  width: 100%;
  max-width: 100px;
  padding: 6px;
  color: $ui-color-black;
  background-color: $ui-color-white;
  border: 1px solid $ui-color-transparent;

  &:active {
    @include ui-button-active;
    border: 1px solid $ui-color-transparent;
  }
}

.find {
  margin-top: 16px;
}

$ad-height: 50px;
$ad-gap: 50px;

.adButton {
  @include ui-button;
  @include ui-round-ui-elements;
  position: fixed;
  bottom: $ad-gap;
  left: 50%;
  z-index: $z-idx-super;
  width: 190px;
  max-width: 190px;
  height: $ad-height;
  padding: 16px;
  color: $ui-color-white;
  background-color: $ui-color-add;
  transform: translateX(-50%) translateY($ad-height + $ad-gap);
  transition: .2s transform linear;

  &:hover {
    @include ui-button-hover;
  }

  &:active {
    @include ui-button-active;
  }
}

.showButton {
  transform: translateX(-50%) translateY(0);
}
</style>
