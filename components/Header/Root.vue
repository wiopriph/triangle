<template>
  <header :class="$style.root">
    <HeaderDesktop :class="$style.desktop" />
    <HeaderMobile :class="$style.mobile" />
  </header>
</template>

<style lang="scss" module>
.root {
  @include ui-simple-container;
}

.desktop {
  @include md {
    display: none;
  }
}

.mobile {
  @include exclude-md {
    display: none;
  }
}
</style>
