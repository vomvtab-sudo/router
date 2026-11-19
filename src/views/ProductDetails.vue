<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { products } from '../data/products'

// id приходит из маршрута как prop (props: true в router/index.js).
// Вариант с useRoute() разбирал на шагах 2.2–4.3, итоговый — через props.
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

// Параметр из URL — всегда строка, приводим к числу
const productId = computed(() => Number(props.id))

// /product/abc -> Number('abc') = NaN -> id некорректный
const isValidId = computed(() => Number.isInteger(productId.value) && productId.value > 0)

// computed, а не const/onMounted: компонент при смене id переиспользуется,
// поэтому значение должно пересчитываться реактивно
const product = computed(() => {
  if (!isValidId.value) return null
  return products.find((p) => p.id === productId.value) || null
})

function goToList() {
  router.push('/')
}
</script>

<template>
  <section class="page">
    <h2>Детали товара</h2>
    <p class="id">ID товара: {{ id }}</p>

    <div v-if="!isValidId" class="error">
      Некорректный ID товара: «{{ id }}». В адресе ожидается число, например /product/1.
    </div>

    <div v-else-if="!product" class="error">
      Товар не найден.
    </div>

    <div v-else class="card">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }} ₽</p>
      <p class="desc">{{ product.description }}</p>

      <router-link
        class="edit"
        :to="{ name: 'product-edit', params: { id: product.id } }"
      >
        Редактировать товар
      </router-link>
    </div>

    <button class="btn" @click="goToList">Назад к списку</button>
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

.id {
  margin: 0 0 16px;
  font-size: 14px;
  color: #7b8a95;
}

.card {
  margin: 0 0 20px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #dbe3e6;
  border-radius: 10px;
  text-align: left;
}

.card h3 {
  margin: 0 0 8px;
  font-size: 22px;
  color: #35495e;
}

.price {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: bold;
  color: #42b883;
}

.desc {
  margin: 0 0 14px;
  line-height: 1.6;
  color: #4a5b68;
}

.edit {
  color: #42b883;
  font-weight: bold;
  text-decoration: none;
}

.edit:hover {
  text-decoration: underline;
}

.error {
  margin: 0 0 20px;
  padding: 16px;
  background: #fdf1f0;
  border: 1px solid #f0c4c0;
  border-radius: 10px;
  color: #b03a2e;
  line-height: 1.5;
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