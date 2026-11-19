<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { products } from '../data/products'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

const product = computed(() => {
  return products.find((p) => p.id === Number(props.id)) || null
})

function goToDetails() {
  router.push({ name: 'product', params: { id: props.id } })
}
</script>

<template>
  <section class="page">
    <h2>Редактирование товара</h2>
    <p class="id">ID товара: {{ id }}</p>

    <p v-if="product" class="name">
      {{ product.name }} — {{ product.price }} ₽
    </p>
    <p v-else class="error">Товар не найден.</p>

    <p class="hint">Форма редактирования появится в следующем блоке.</p>

    <button class="btn" @click="goToDetails">К деталям товара</button>
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
  margin: 0 0 12px;
  font-size: 14px;
  color: #7b8a95;
}

.name {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: bold;
  color: #4a5b68;
}

.hint {
  margin: 0 0 20px;
  font-size: 14px;
  color: #7b8a95;
}

.error {
  margin: 0 0 16px;
  padding: 14px;
  background: #fdf1f0;
  border: 1px solid #f0c4c0;
  border-radius: 10px;
  color: #b03a2e;
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