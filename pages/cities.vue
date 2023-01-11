<script>
export default {
  name: 'CitiesPage',

  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cities',
        },
      ],
    };
  },
};
</script>

<template>
  <div :class="$style.root">
    <h1 :class="$style.title">
      Cities
    </h1>
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  padding: 24px 20px;

}

.title {
  margin-bottom: 36px;
}
</style>
