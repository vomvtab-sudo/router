<script setup>
// Корневой компонент: здесь живёт <router-view /> —
// место, куда роутер подставляет компонент текущего маршрута.
</script>

<template>
  <div class="app">
    <!-- Навигация из самостоятельного задания.
         Обычные <a> перезагружают документ;
         на ПЗ-24 заменим их на <router-link to="...">. -->
    <nav class="nav">
      <a href="/">Главная</a>
      <a href="/about">О сайте</a>
      <a href="/contacts">Контакты</a>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #f5f7f8;
  font-family: Arial, Helvetica, sans-serif;
}

.nav {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  background: #35495e;
}

.nav a {
  padding: 6px 10px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 15px;
  text-decoration: none;
}

.nav a:hover {
  background: #42b883;
}

.content {
  padding: 24px 16px;
}
</style>