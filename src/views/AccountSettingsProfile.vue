<script setup>
// Подраздел «Профиль настроек» — вложенный маршрут второго уровня.
// Отрисовывается внутри AccountSettings через её <router-view />.
</script>

<template>
  <div class="subsection">
    <h4>Профиль настроек</h4>
    <p>Здесь можно изменить имя, email и аватар.</p>
  </div>
</template>

<style scoped>
.subsection {
  padding: 14px 16px;
  background: #f5f7f8;
  border-radius: 8px;
}

h4 {
  margin: 0 0 8px;
  font-size: 17px;
  color: #35495e;
}

p {
  margin: 0;
  line-height: 1.6;
  color: #4a5b68;
}
</style>