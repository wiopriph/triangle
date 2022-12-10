<script>
import IconAnbuy from '~/assets/images/icon-anbuy.svg?inline';
import IconProfile from '~/assets/images/header/icon-profile.svg?inline';

export default {
  components: {
    IconAnbuy,
    IconProfile,
  },
};
</script>

<template>
  <div :class="$style.root">
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
</template>

<style lang="scss" module>
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
</style>
