<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <section class="page">
    <h2>Услуги</h2>
    <p>Список услуг компании:</p>
    <ul>
      <li>Разработка веб-приложений</li>
      <li>Консультации по Vue.js</li>
      <li>Обучение frontend-разработке</li>
    </ul>
    <button class="btn" @click="goHome">Вернуться на главную</button>
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

ul {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  text-align: left;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

li {
  margin: 0 0 8px;
  padding: 8px 12px;
  background: #f0f4f5;
  border-radius: 6px;
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