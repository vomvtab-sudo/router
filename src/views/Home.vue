<script setup>
import { useRouter } from 'vue-router'
import { products } from '../data/products'

const router = useRouter()

function goToContacts() {
  router.push('/contacts')
}
</script>

<template>
  <section class="page">
    <h2>Главная</h2>
    <p>Добро пожаловать в приложение!</p>

    <h3 class="subtitle">Товары</h3>

    <!-- Именованные ссылки: устойчивы к изменению пути маршрута -->
    <ul class="products">
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
        <span class="price">{{ product.price }} ₽</span>
      </li>
    </ul>

    <button class="btn" @click="goToContacts">Перейти к контактам</button>
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

.subtitle {
  margin: 24px 0 12px;
  font-size: 20px;
  color: #35495e;
}

.products {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  text-align: left;
}

.products li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0 0 8px;
  padding: 10px 14px;
  background: #ffffff;
  border: 1px solid #dbe3e6;
  border-radius: 8px;
}

.products a {
  color: #42b883;
  font-weight: bold;
  text-decoration: none;
}

.products a:hover {
  text-decoration: underline;
}

.price {
  color: #7b8a95;
  font-size: 14px;
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