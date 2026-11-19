<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<template>
  <section class="page">
    <h2>О сайте</h2>
    <p>Учебное приложение для изучения Vue Router.</p>
    <button class="btn" @click="goBack">Назад</button>
  </section>
</template>

<style scoped>
.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 20px;
  text-align: center;
}

h2 {
  margin: 0 0 12px;
  font-size: 28px;
  color: #35495e;
}

p {
  margin: 0 0 16px;
  line-height: 1.6;
  color: #4a5b68;
}

.btn {
  padding: 10px 20px;
  background: #42b883;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #35495e;
}
</style>