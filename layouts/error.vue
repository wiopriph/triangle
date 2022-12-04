<script>
export default {
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  computed: {
    errorCode() {
      return (this.error && this.error.statusCode) || 500;
    },

    errorMessage() {
      return (this.error && this.error.message) || 'An error has occurred';
    },
  },

  methods: {
    goToHome() {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    },
  },
};
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <h1 :class="$style.title" v-text="errorCode" />

      <p :class="$style.message" v-text="errorMessage" />

      <button :class="$style.button" @click="goToHome">
        home
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #E0E0E0;
}

.title {
  color: $ui-color-ui-0;
  font-weight: bold;
  font-size: 200px;
  line-height: 240px;
  opacity: .3;

  @include sm {
    font-size: 140px;
    line-height: 200px;
  }
}

.message {
  @include ui-typo-15;
}

.button {
  margin-top: 20px;
}
</style>
