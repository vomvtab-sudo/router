<script setup>
// Корневой компонент: главное меню навигации + <router-view />.
</script>

<template>
  <div class="app">
    <nav class="menu">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О сайте</router-link>
      <router-link to="/contacts">Контакты</router-link>
      <router-link to="/services">Услуги</router-link>
      <router-link to="/account">Кабинет</router-link>
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

.menu {
  display: flex;
  gap: 16px;
  padding: 14px 20px;
  background: #35495e;
  border-bottom: 2px solid #42b883;
}

.menu a {
  padding: 6px 12px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 15px;
  text-decoration: none;
  transition: background 0.2s;
}

.menu a:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* router-link-active — выделение при частичном совпадении пути.
   Для пункта «Кабинет» это означает, что он будет активен и на /account/settings,
   потому что путь начинается с /account. */
.menu a.router-link-active {
  background: #42b883;
  font-weight: bold;
}

/* router-link-exact-active — выделение только при точном совпадении.
   Используется в самостоятельном задании, п. 4, чтобы «Кабинет»
   выделялся только на /account, но не на /account/settings. */
.menu a.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.content {
  padding: 24px 16px;
}
</style>