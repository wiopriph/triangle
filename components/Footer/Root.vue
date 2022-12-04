<template>
  <footer :class="$style.root">
    <div :class="$style.content">
      footer
    </div>
  </footer>
</template>

<style lang="scss" module>
.root {
  width: 100%;
  height: 240px;
  margin-top: auto;
  padding: 24px 20px;
  background-color: $ui-color-black;

  @include sm {
    padding-top: 64px;
  }
}

.content {
  @include ui-simple-container;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  color: #E0E0E0;
  font-size: 22px;
  text-transform: uppercase;
}
</style>
