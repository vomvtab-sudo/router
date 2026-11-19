<script setup>
// Оболочка личного кабинета.
// Содержит общий заголовок, меню разделов и <router-view /> для дочерних компонентов.
</script>

<template>
  <div class="account-layout">
    <h2>Личный кабинет</h2>

    <nav class="submenu">
      <router-link to="/account/profile">Профиль</router-link>
      <router-link to="/account/settings">Настройки</router-link>
      <router-link to="/account/orders">Заказы</router-link>
      <router-link to="/account/security">Безопасность</router-link>
    </nav>

    <!-- Сюда Vue Router отрисовывает дочерний компонент:
         AccountProfile / AccountSettings / AccountOrders / AccountSecurity -->
    <router-view />
  </div>
</template>

<style scoped>
.account-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px;
}

h2 {
  margin: 0 0 16px;
  font-size: 26px;
  color: #35495e;
}

.submenu {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  background: #eef2f4;
  border-radius: 8px;
  margin-bottom: 20px;
}

.submenu a {
  padding: 6px 12px;
  border-radius: 6px;
  color: #4a5b68;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.submenu a:hover {
  background: rgba(66, 184, 131, 0.15);
  color: #35495e;
}

.submenu a.router-link-active {
  background: #42b883;
  color: #ffffff;
  font-weight: bold;
}
</style>