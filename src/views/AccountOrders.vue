<script setup>
// Раздел «Заказы» личного кабинета.
// Отрисовывается внутри AccountLayout через <router-view />.
</script>

<template>
  <section class="section">
    <h3>Заказы</h3>
    <p>Здесь будет история заказов пользователя.</p>
  </section>
</template>

<style scoped>
.section {
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #dbe3e6;
  border-radius: 10px;
}

h3 {
  margin: 0 0 10px;
  font-size: 20px;
  color: #35495e;
}

p {
  margin: 0;
  line-height: 1.6;
  color: #4a5b68;
}
</style>