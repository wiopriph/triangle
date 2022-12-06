<script>
import IconBuy from '~/assets/images/teaser/icon-buy.svg?inline';
import IconFb from '~/assets/images/teaser/icon-fb.svg?inline';
import IconShield from '~/assets/images/teaser/icon-shield.svg?inline';
import IconStar from '~/assets/images/teaser/icon-star.svg?inline';

export default {
  components: {
    IconBuy,
    IconFb,
    IconShield,
    IconStar,
  },

  props: {
    url: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'buy', 'fb', 'shield', 'star'].includes(value);
      },
    },

    color: {
      type: String,
      default: '#F1F1F1',
    },
  },

  computed: {
  },
};
</script>

<template>
  <a
    :href="url"
    :style="{ color: color }"
    :class="$style.root"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      :style="{ backgroundColor: color }"
      :class="$style.ellipse"
    >
      <component :is="`icon-${icon}`" :class="$style.icon" />
    </div>

    <span :class="$style.title" v-text="title" />
  </a>
</template>

<style lang="scss" module>
.root {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  background: #F1F1F1;

  @include exclude-sm {
    width: 302px;
    height: 110px;
    padding: 16px 20px;
    border-radius: 0 8px 8px 8px;
  }

  @include sm {
    width: 150px;
    height: 80px;
    padding: 10px;
    border-radius: 0 4px 4px 4px;
  }
}

.ellipse {
  position: absolute;
  top: -10px;
  left: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $ui-color-background-color;
  border-radius: 50%;

  @include exclude-sm {
    width: 76px;
    height: 76px;
  }

  @include sm {
    width: 45px;
    height: 45px;
  }
}

.icon {
  @include exclude-sm {
    width: 24px;
    height: 24px;
  }

  @include sm {
    width: 14px;
    height: 14px;
  }
}

.title {
  max-width: 100%;
  margin-top: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @include exclude-sm {
    @include ui-typo-16-medium;
  }

  @include sm {
    @include ui-typo-10-medium;
  }
}
</style>
