<template>
  <div :class="$style.root">
    <TeaserList :class="$style.teaser" />

    <h2 :class="$style.title">
      Category
    </h2>

    <CategoryList :class="$style.category" />

    <h2 :class="$style.title">
      Fresh ads
    </h2>

    <ul>
      <li />
    </ul>
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
  margin-top: 160px; // @todo: fix header
  padding: 24px 20px;

  //@include md {
  //  padding: 24px 0;
  //}
}

.teaser {
  margin-top: 26px;
  margin-bottom: 64px;
}

.category {
  margin-bottom: 64px;
}

.title {
  margin-bottom: 36px;
}
</style>
