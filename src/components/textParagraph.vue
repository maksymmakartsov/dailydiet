<template>
  <p class="text-paragraph">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'textParagraph'
}
</script>

<style lang="scss" scoped>
  .text-paragraph {
    font-size: 2em;
    text-align: justify;
    background-color: #ffffff4f;
    box-shadow: 0 0 100px #ffffff47;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
</style>
