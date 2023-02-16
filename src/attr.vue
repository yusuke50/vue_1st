<script>
export default {
  data() {
    return {
      message: 'Hello',
      isRed: false,
      color: 'green',
    };
  },
  methods: {
    hoverSpan: function () {
      console.log(this.message);
    },
    toggleRed: function () {
      this.isRed = !this.isRed;
    },
    toggleColor: function () {
      this.color = this.color === 'green' ? 'yellow' : 'green';
    },
  },
};
</script>

<template>
  <p>
    <span :data-vno="message" @mouseover="hoverSpan">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </p>

  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<style>
.red {
  color: red;
}
</style>
