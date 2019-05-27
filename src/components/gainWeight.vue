<template>
  <div class="gain-weight__wrapper">
    <div class="gain-weight">
      <header-logo />
      <div class="gain-weight__content">
        <title-secondary>Для тих, хто хоче набрати вагу</title-secondary>
        <text-paragraph>При складанні правильної дієти для набору ваги слід збалансувати своє харчування. Тут головний показник – калорійність їжі. Як і при схудненні, збільшення добового раціону не повинно бути різким. Організм повинен поступово піддаватися цим процесам. Також варто відзначити важливість підрахунку калорій.
          <br>
          <br>
          У процесі дієти, спрямованої на набір ваги, слід в день випивати більше 2,5 літрів рідини. Це можуть бути морси, соки. Вода, але не газована, чай і какао. Варто також подбати про надходження в організм всієї категорії корисних речовин. Це і мінерали, і вітаміни, і амінокислоти, які людський організм не здатний виділяти самостійно.
          <br>
          <br>
          Важливий принцип у справі збільшення маси тіла – харчуватися регулярно і по кілька разів на день.</text-paragraph>
      </div>
      <router-link class="nav-arrow__link--next" to="/calc-recommended/gain"><img class="nav-arrow" src="../assets/arrow.svg" alt="nav"></router-link>
    </div>
  </div>
</template>

<script>
import headerLogo from './headerLogo'
import titleSecondary from './titleSecondary'
import textParagraph from './textParagraph'

export default {
  name: 'gainWeight',
  components: {
    headerLogo,
    titleSecondary,
    textParagraph
  }
}
</script>

<style lang="scss" scoped>
  .gain-weight {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1800px;
    width: 100%;
    height: 100%;

    &__content {
      padding: 60px 7.375em 0 7.375em;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    &__wrapper {
      padding: 4.3em 3.75em;
      position: relative;
      height: 100vh;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-image: url('../assets/gain_bg.png');
      background-repeat: no-repeat;
      background-position: top right;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
  .nav-arrow {
    width: 75px;
    height: 35px;

    &--up {
      transform: rotate(180deg);
    }
    &__link {
      position: absolute;
      left: calc(50% - 39.5px);
      top: 4.875em;

      &--next {
        position: absolute;
        left: calc(50% - 39.5px);
        bottom: 4.875em;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
