<template>
  <div :class="$style.root">
    <div :class="$style.content" aria-label="Header">
      <NuxtLink v-if="false" :to="{ name: 'index' }" :class="$style.link">
        index
        <span :class="$style.sr">Go to the main page</span>
      </NuxtLink>
      header
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;

  position: fixed;
  top: 0;
  z-index: $z-idx-super;
  width: 100%;
  height: 60px;
  padding: 24px 20px;
  background-color: $ui-color-transparent;
}

.sr {
  @include ui-typo-screen-readers;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  text-transform: uppercase;
}
</style>
