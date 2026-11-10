
<template>
  <div id="app" class="container">
    <h1>Random Quote Generator</h1>

    <p v-if="loading">Loading...</p>

    <template v-else>
      <p class="quote">"{{ quote }}"</p>
      <p class="author">— {{ author }}</p>
    </template>

    <button @click="getQuote" :disabled="loading">
      {{ loading ? 'Loading...' : 'Get New Quote' }}
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      quote: '',
      author: '',
      loading: false
    }
  },

  methods: {
    async getQuote() {
      this.loading = true

      try {
        const response = await axios.get(
          'https://dummyjson.com/quotes/random'
        )

        this.quote = response.data.quote
        this.author = response.data.author

      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },

  mounted() {
    this.getQuote()
  }
}
</script>

<style>
.container {
  max-width: 650px;
  margin: 80px auto;
  padding: 30px;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #25334a;
}

.quote {
  font-size: 24px;
  line-height: 1.6;
}

.author {
  font-style: italic;
  color: #555;
  margin-top: 10px;
}

button {
  margin-top: 25px;
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #3458a4;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #253f78;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

