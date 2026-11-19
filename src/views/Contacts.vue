<script setup>
// Страница «Контакты» — маршрут '/contacts' (самостоятельное задание ПЗ-23)
</script>

<template>
  <section class="page">
    <h2>Контакты</h2>
    <p>Связаться с автором проекта:</p>
    <ul class="contacts">
      <li>Email: <a href="mailto:student@college.ru">student@college.ru</a></li>
      <li>Телефон: <a href="tel:+79001234567">+7 (900) 123-45-67</a></li>
    </ul>
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
  margin: 0 0 12px;
  line-height: 1.6;
  color: #4a5b68;
}

.contacts {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contacts li {
  margin: 0 0 8px;
  color: #4a5b68;
}

.contacts a {
  color: #42b883;
  font-weight: bold;
  text-decoration: none;
}

.contacts a:hover {
  text-decoration: underline;
}
</style>