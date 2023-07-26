<template>
  <div class="floating-label">
    <label
      :for="label"
      :class="
        isFocused || inputValue != ''
          ? 'floating-label-text-float'
          : 'floating-label-text'
      "
      >{{ label }}</label
    >
    <input
      :id="label"
      class="input w-100"
      :type="type"
      @blur="handleBlur"
      @focus="handleFocus"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  // props: {
  //   label: {
  //     type: String,
  //     required: true,
  //   },
  //   value: {
  //     type: String,

  //   },
  // },
  props: ["value", "label","type"],
  data() {
    return {
      isFocused: false,
      // inputValue: "",
    };
  },
  computed:{
    inputValue: {
            get: function () {
                return this.value;
            },
            set: function (value) {
                this.$emit('input',value)
            }
        },

  },
  methods:  {
    handleInput(event) {
      this.inputValue = event.target.value;
      var result = this.$emit('input', this.inputValue);
      console.log(this.inputValue, result);
    },
    handleBlur() {
      this.isFocused = false;
      this.$emit("blur", this.value); // 用当前输入框的值触发blur事件
    },
    handleFocus() {
      this.isFocused = true;
    },
  },
};
</script>

<style lang="css" scoped>
.floating-label {
  position: relative;
}

.floating-label-text {
  position: absolute;
  top: 16px;
  left: 12px;
  /* pointer-events: none; */
  transition: 0.1s ease-out;
}
.floating-label-text-float {
  position: absolute;
  top: 0px;
  left: 12px;
  font-size: 14px;
  color: rgba(219, 101, 116);
  /* pointer-events: none; */
  transition: 0.1s ease-out;
}

.input {
  padding: 20px 12px 12px 12px;
  border: 0px;
  border-bottom: 1px solid aliceblue;
  color: aliceblue;
  background-color: #2d3035;
  outline: none;
}
.input:focus {
  border: 0px;
  border-bottom: 1px solid rgba(219, 101, 116);
  outline: none;
}
</style>