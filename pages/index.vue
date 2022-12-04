<template>
  <div :class="$style.root">
    <Hello />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  flex: 1;
  margin-top: 60px; // @todo: fix header
  padding: 24px 20px;
}
</style>
