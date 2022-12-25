<script>
import IconLocation from '~/assets/images/header/icon-location.svg?inline';
import IconMail from '~/assets/images/header/icon-mail.svg?inline';
import IconHeart from '~/assets/images/header/icon-heart.svg?inline';
import IconWallet from '~/assets/images/header/icon-wallet.svg?inline';
import IconAnbuy from '~/assets/images/icon-anbuy.svg?inline';

export default {
  components: {
    IconLocation,
    IconMail,
    IconHeart,
    IconWallet,
    IconAnbuy,
  },

  data() {
    return {
      location: 'Location',
    };
  },
};
</script>

<template>
  <div :class="$style.wrap">
    <div aria-label="Header" :class="$style.root">
      <div :class="$style.navigationMenu">
        <button :class="[$style.button, $style.locationButton]">
          <IconLocation :class="$style.icon" />
          <span :class="$style.location" v-text="location" />
        </button>

        <div :class="$style.userControls">
          <button :class="$style.button">
            <IconMail :class="$style.icon" />
          </button>

          <button :class="$style.button">
            <IconHeart :class="$style.icon" />
          </button>

          <button :class="$style.button">
            <IconWallet :class="$style.icon" />
          </button>
        </div>
      </div>

      <div :class="$style.actionMenu">
        <NuxtLink :to="{ name: 'index' }" :class="$style.homeButton">
          <IconAnbuy />
        </NuxtLink>

        <UiCategoryButton :class="$style.categoryButton" />

        <FindInput :class="$style.find" />

        <button :class="$style.adButton">
          post ad
        </button>

        <button :class="$style.loginButton">
          login / register
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.wrap {
  width: 100%;
  max-width: inherit;
  height: 160px;
  min-height: 160px;
}

.root {
  position: fixed;
  top: 0;
  z-index: $z-idx-super;
  width: 100%;
  max-width: inherit;
  height: 160px;
  padding: 0 20px;
  color: $ui-color-text-black;
  background-color: $ui-color-white;
}

.navigationMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.location {
  @include ui-typo-12;
  padding: 0 10px;
  transition: color .2s linear;
}

.button {
  @include ui-button;
  display: flex;
  align-items: center;
  padding: 16px;
  color: $ui-color-transparent;
  background-color: inherit;

  &:hover {
    color: $ui-color-blue-light;
  }

  &:active {
    color: $ui-color-black;
  }

  &:disabled {
    cursor: default;
  }
}

.icon {
  width: 18px;
  height: 18px;
}

.locationButton {
  max-width: 150px;
  margin-right: auto;
}

.userControls {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.actionMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.homeButton {
  display: flex;
  width: 100px;
  margin-right: 10px;
}

.categoryButton {
  max-width: 200px;
}

.find {
  flex: 1;
  margin-right: 10px;
  margin-left: 10px;
}

.adButton {
  @include ui-button;
  @include ui-round-ui-elements;
  max-width: 250px;
  margin-right: 10px;
  padding: 16px;
  color: $ui-color-white;
  background-color: $ui-color-add;

  &:hover {
    @include ui-button-hover;
  }

  &:active {
    @include ui-button-active;
  }
}

.loginButton {
  @include ui-button;
  @include ui-round-ui-elements;
  width: 100%;
  max-width: 150px;
  padding: 15px;
  color: $ui-color-black;
  background-color: $ui-color-white;
  border: 1px solid $ui-color-black;

  &:hover {
    @include ui-button-hover;
    border: 1px solid $ui-color-transparent;
  }

  &:active {
    @include ui-button-active;
    border: 1px solid $ui-color-transparent;
  }
}

</style>
