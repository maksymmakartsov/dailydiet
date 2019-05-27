<template>
  <div class="select-field__field-wrapper">
    <select
        v-model="currentCal"
        @change="$emit('calculate')"
        :name="field.name">
      <template v-if="type === 'gain'">
        <option
            v-for="(meal, index) in field.food1"
            :key="index"
            :value="meal.cal">
          {{ meal.name }} / {{ meal.cal }} ккал
        </option>
      </template>
      <template v-else>
        <option
            v-for="(meal, index) in field.food2"
            :key="index"
            :value="meal.cal">
          {{ meal.name }} / {{ meal.cal }} ккал
        </option>
      </template>
    </select>
    <div class="select-field__quantity-wrapper">
      <span
          @click="reduceQty"
          class="select-field__quantity-changer select-field__quantity-changer--minus">-</span>
      <span class="select-field__quantity">{{ qty }}</span>
      <span
          @click="increaseQty"
          class="select-field__quantity-changer select-field__quantity-changer--plus">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectField',
  props: ['field', 'type'],
  data: function () {
    return {
      qty: this.field.qty,
      currentCal: this.type === 'gain' ? this.field.food1[0].cal : this.field.food2[0].cal
    }
  },
  computed: {
    totalCal () {
      return this.currentCal * this.qty
    }
  },
  mounted: function () {
    this.$emit('calculate')
  },
  methods: {
    reduceQty () {
      if (this.qty === 1 || this.qty === '1') {
        return
      }
      this.qty--
      this.$emit('calculate')
    },
    increaseQty () {
      this.qty++
      this.$emit('calculate')
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-field {
    &__field-wrapper {
      position: relative;
      width: 100%;
      margin-bottom: 1.9em;

      select {
        border-radius: 10px;
        height: 1.974em;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        box-shadow: none;
        border: 1px solid #000;
        background-color: transparent;
        font-size: 1.9em;
        font-weight: 300;
        outline: none !important;
      }
    }
    &__quantity-wrapper {
      display: flex;
      align-items: center;
      position: absolute;
      top: -33%;
      right: 5%;
    }
    &__quantity {
      background-color: #b80b0b;
      color: #fff;
      height: 1.0559em;
      width: 1.0559em;
      border: 1px solid #000;
      border-radius: 100%;
      font-size: 2.25em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__quantity-changer {
      height: 1em;
      width: 1em;
      border: 1px solid #000;
      border-radius: 100%;
      font-size: 1.5em;
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      vertical-align: middle;
      transition: all ease-in-out .2s;

      &--minus {
        margin-right: -0.3em;
      }
      &--plus {
        margin-left: -0.3em;
      }
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #b80b0b;
        transition: all ease-in-out .2s;
      }
    }
  }
</style>
