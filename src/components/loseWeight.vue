<template>
  <div class="lose-weight__wrapper">
    <div class="lose-weight">
      <header-logo />
      <div class="lose-weight__content">
        <title-secondary>Для тих, хто хоче скинути вагу</title-secondary>
        <text-paragraph>Ви повинні розуміти, що швидкі дієти не приводять до довгострокового результату. Вони, як правило, спрямовані на те, щоб в короткі терміни позбавитися від зайвих кілограмів. Але після того, як дієта буде закінчена, ті ж самі втрачені кілограми з легкістю повернуться до вас. Тому, якщо хочеш схуднути назавжди, краще перейти на постійне правильне харчування.
          <br>
          <br>
          Ще одним важливим аспектом в схудненні є фізична активність. Для зниження ваги рекомендується замінити всю газовану воду і покупні соки на звичайну воду. Нічого поганого в перекусах немає. Важливо лише те, скільки і що ви вживаєте. Намагайтеся виключити з перекусів шкідливі продукти, такі як чіпси, солодку випічку і т.д. Віддайте перевагу горіхам, вівсяному печиву, овочам і фруктам.
          <br>
          <br>
          Сніданок - не пізніше 10 ранку, обід - не пізніше 14, а вечеря - не пізніше 19 годин.</text-paragraph>
      </div>
      <router-link class="nav-arrow__link--next" to="/calc-recommended/lose"><img class="nav-arrow" src="../assets/arrow.svg" alt="nav"></router-link>
    </div>
  </div>
</template>

<script>
import headerLogo from './headerLogo'
import titleSecondary from './titleSecondary'
import textParagraph from './textParagraph'

export default {
  name: 'loseWeight',
  components: {
    headerLogo,
    titleSecondary,
    textParagraph
  }
}
</script>

<style lang="scss" scoped>
  .lose-weight {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    max-width: 1800px;
    width: 100%;

    &__content {
      padding: 60px 7.375em 0 7.375em;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 4.3em 3.75em;
      position: relative;
      background-image: url('../assets/lose_bg.png');
      background-repeat: no-repeat;
      background-position: top right;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      height: 100vh;
      width: 100%;
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
