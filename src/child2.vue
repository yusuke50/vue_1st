<script>
export default {
  emits: ['res'],
  created() {
    this.$emit('res', 'hello from child');
  },
};
</script>

<template>
  <h2>child2</h2>
</template>
