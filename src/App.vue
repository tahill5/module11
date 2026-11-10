
<template>
  <div id="app">
    <header>
      <h1>WEB125 | Module 11</h1>
      <p>A Vue Router Single Page Application</p>

      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/quotes">Random Quotes</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <GoBack />
  </div>
</template>

<script>
import GoBack from './components/GoBack.vue'

export default {
  name: 'App',
  components: {
    GoBack
  }
}
</script>

<style>
body {
  margin: 0;
  background: #f4f6f9;
  font-family: Arial, sans-serif;
  color: #25334a;
}

#app {
  text-align: center;
}

header {
  background: #25334a;
  color: white;
  padding: 30px 20px;
}

header h1 {
  margin-bottom: 8px;
}

nav {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover,
nav a.router-link-active {
  color: #64d8b4;
}

main {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

button {
  padding: 12px 22px;
  border: none;
  border-radius: 6px;
  background: #3458a4;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #253f78;
}
</style>
