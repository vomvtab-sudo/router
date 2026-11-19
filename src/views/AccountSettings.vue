<script setup>
// Раздел «Настройки» личного кабинета.
// Сам является оболочкой для подразделов: «Профиль настроек» и «Уведомления».
// Внутри — своё подменю и <router-view /> для дочерних компонентов.
</script>

<template>
  <section class="section">
    <h3>Настройки</h3>

    <nav class="sub-submenu">
      <router-link to="/account/settings/profile">Профиль</router-link>
      <router-link to="/account/settings/notifications">Уведомления</router-link>
    </nav>

    <!-- Сюда Vue Router отрисовывает AccountSettingsProfile или AccountSettingsNotifications -->
    <router-view />
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
  margin: 0 0 12px;
  font-size: 20px;
  color: #35495e;
}

.sub-submenu {
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  background: #f5f7f8;
  border-radius: 6px;
  margin-bottom: 16px;
}

.sub-submenu a {
  padding: 5px 10px;
  border-radius: 5px;
  color: #4a5b68;
  font-size: 13px;
  text-decoration: none;
  transition: background 0.2s;
}

.sub-submenu a:hover {
  background: rgba(66, 184, 131, 0.15);
}

.sub-submenu a.router-link-active {
  background: #42b883;
  color: #ffffff;
  font-weight: bold;
}
</style>