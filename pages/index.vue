<script>
import { ADS } from '~/mocks/ads';

export default {
  name: 'IndexPage',

  data() {
    return {
      ads: ADS,
    };
  },
};
</script>

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

    <div :class="$style.content">
      <div :class="$style.main">
        <div
          v-for="(ad, index) in ads"
          :key="index"
          :class="$style.card"
        >
          <AdvertCard :ads="ad" />
        </div>
      </div>

      <div :class="$style.right">
        <div :class="$style.ad">
          ads
          block
        </div>

        <div :class="$style.ad">
          ads
          block
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;
  padding: 24px 20px;
}

.teaser {
  margin-top: 26px;
  margin-bottom: 64px;
}

.title {
  margin-bottom: 36px;
}

.category {
  margin-bottom: 64px;
}

.content {
  display: flex;
}

.main {
  @include ui-row;
  flex: 1 1;
  min-width: 0;
  //height: 2000px; //@todo: убрать
}

.card {
  @include ui-col-ready;
  @include ui-col(2);

  @include lg {
    @include ui-col(2.5);
  }

  @include md {
    @include ui-col(4, 12);
  }

  @include sm {
    @include ui-col(5);
  }
}

.right {
  position: relative;
  flex: 0 $ui-element-ad-card-width;
  max-width: $ui-element-ad-card-width;
  margin-left: 10px;

  @include md {
    display: none;
  }
}

.ad {
  width: 100%;
  height: 500px;
  padding: 20px;
  border-radius: 8px;

  &:first-child {
    background: #ECFAFF;
  }

  &:last-child {
    position: sticky;
    top: $ui-element-header-height;
    margin-top: 36px;
    background: #FEF1F7;
  }
}


</style>
