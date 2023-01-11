<script>
export default {
  props: {
    ads: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    link() {
      return {
        name: 'cityId-categoryId-adId',
        params: {
          categoryId: this.ads.categoryId,
          cityId: this.ads.cityId,
          adId: this.ads.id,
        },
      };
    },
  },
};
</script>

<template>
  <NuxtLink
    :to="link"
    :class="$style.root"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div :class="$style.photoWrap">
      <span :class="$style.address" v-text="ads.city" />
      <img
        :src="ads.photo"
        :class="$style.photo"
        :alt="ads.title"
      >
    </div>

    <div :class="$style.info">
      <div :class="$style.price" v-text="`$ ${ads.price}`" />
      <div :class="$style.name" v-text="ads.title" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  color: $ui-color-text-black;
  text-decoration: none;
  background-color: rgba(224, 224, 224, .3);
  border-radius: 4px 4px 8px 8px;
}

.photoWrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover; // @todo изменить мб
}

.address {
  @include ui-typo-8;

  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  padding: 4px 8px;
  color: #161616;
  background: rgba(231, 231, 231, .5);
  border-radius: 60px;
  backdrop-filter: blur(2px);

  @include exclude-sm {
    position: absolute;
  }

  @include sm {
    display: none;
  }
}

.info {
  padding: 10px;
}

.price {
  @include exclude-sm {
    @include ui-typo-18-bold;
  }

  @include sm {
    @include ui-typo-14-bold;
  }
}

.name {
  margin-top: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @include exclude-sm {
    @include ui-typo-15;
  }

  @include sm {
    @include ui-typo-12;
  }
}
</style>
