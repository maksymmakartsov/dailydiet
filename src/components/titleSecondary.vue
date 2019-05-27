<template>
    <p class="title-secondary">
      <slot></slot>
    </p>
</template>

<script>
export default {
  name: 'title_secondary'
}
</script>

<style lang="scss" scoped>
  .title-secondary {
    font-size: 4em;
    font-weight: 700;
    margin-bottom: .92em;
  }
</style>
