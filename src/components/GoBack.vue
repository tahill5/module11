
<template>
  <div class="back-container">
    <button @click="goBack">
      ← Go Back
    </button>
  </div>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.back-container {
  margin: 30px auto;
  text-align: center;
}
</style>
