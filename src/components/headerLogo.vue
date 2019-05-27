<template>
    <router-link to="/" :class="textWhite === true ? 'white' : ''" class="logo-title">Daily<span>Diet</span></router-link>
</template>

<script>
export default {
  name: 'headerLogo',
  props: ['textWhite']
}
</script>

<style lang="scss" scoped>
  .logo-title {
    font-size: 48px;
    font-weight: 600;
    color: #000;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    margin: 0;
    text-decoration: none;

    span {
      font-weight: 300;
    }
  }
  .white {
    color: #fff;
  }
</style>
