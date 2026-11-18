<script setup>
// Страница «О сайте» — маршрут '/about'
</script>

<template>
  <section class="page">
    <h2>О сайте</h2>
    <p>Учебное приложение для изучения Vue Router.</p>
    <p class="hint">Блок «Роутинг»: страницы в src/views/, маршруты в src/router/.</p>
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
  margin: 0 0 8px;
  line-height: 1.6;
  color: #4a5b68;
}

.hint {
  font-size: 14px;
  color: #7b8a95;
}
</style>