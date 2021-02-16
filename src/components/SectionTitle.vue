<template>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>



