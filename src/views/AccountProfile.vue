<script setup>
// Раздел «Профиль» личного кабинета.
// Отрисовывается внутри AccountLayout через <router-view />.
</script>

<template>
  <section class="section">
    <h3>Профиль</h3>
    <p>Здесь будут данные пользователя: имя, email, аватар.</p>
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