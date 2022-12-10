<script>
import IconFind from 'assets/images/icon-find.svg';

export default {
  components: {
    IconFind,
  },

  data() {
    return {
      // query: '',
    };
  },
};
</script>

<template>
  <div :class="$style.root">
    coming soon...
    <template v-if="false">
      <IconFind />

      <input
        type="text"
        placeholder="product search"
        :class="$style.input"
      >

      <button :class="$style.findButton">
        find
      </button>
    </template>
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-round-ui-elements;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid $ui-color-transparent;
}

.findButton {
  @include ui-button;
  width: 95px;
  margin-right: 10px;
}

.adButton {
  @include ui-button;
  @include ui-round-ui-elements;
  max-width: 250px;
  margin-right: 10px;
  padding: 15px;
  color: $ui-color-white;
  background-color: $ui-color-add;

  &:hover {
    @include ui-button-hover;
  }

  &:active {
    @include ui-button-active;
  }
}
</style>
