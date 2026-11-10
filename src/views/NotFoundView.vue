
<template>
  <section class="not-found">
    <h2>404 — Page Not Found</h2>
    <p>
      Sorry! The page you're looking for
      doesn't exist.
    </p>

    <router-link to="/about">
      Return to About
    </router-link>
  </section>
</template>

<style scoped>
.not-found {
  padding: 40px 20px;
}

.not-found h2 {
  font-size: 32px;
}

.not-found a {
  color: #3458a4;
  font-weight: bold;
}
</style>
