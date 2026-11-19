<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:42b883,100:35495e&height=220&section=header&text=Vue%20Training&desc=Composition%20API%20%20Pinia%20%20Vite&descSize=18&descAlignY=68&fontSize=68&fontColor=ffffff&animation=fadeIn&fontAlignY=38" width="100%" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=800&color=42B883&center=true&vCenter=true&width=600&lines=Vue%203%20%2B%20Composition%20API%3BPinia%20State%20Management%3BDynamic%20Components%20%2B%20KeepAlive%3BForm%20Validation%20%26%20localStorage" alt="Typing SVG" />
</a>

<br/>

![Vue](https://img.shields.io/badge/Vue-3.5-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-2.x-FFD859?style=for-the-badge&logo=pinia&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/Статус-В%20разработке-42b883?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-35495e?style=flat-square)
![PRs](https://img.shields.io/badge/PRs-welcome-42b883?style=flat-square)

</div>

---

## 📖 О проекте

Учебный проект на **Vue 3**, в котором последовательно реализованы ключевые механики фреймворка: от жизненного цикла компонента до управления глобальным состоянием через Pinia и валидации форм.

Каждый блок на странице — это отдельная практическая работа, демонстрирующая конкретную возможность Vue. Всё собрано в одном приложении, чтобы можно было наглядно сравнить подходы: `v-if` против `<component :is>`, `props` против `provide/inject`, локальный `ref` против `store`.

> 💡 Проект задуман как «живая шпаргалка»: открыл страницу — увидел, как работает каждая фича, и тут же можешь посмотреть код.

---

## 🛠 Стек технологий

<div align="center">
  <img src="https://skillicons.dev/icons?i=vue,vite,pinia,js,html,css,git,vscode&theme=dark&perline=8" />
</div>

| Технология | Зачем используется |
|---|---|
| **Vue 3** | Компонентный подход, Composition API, `<script setup>` |
| **Vite** | Мгновенный HMR и быстрая сборка |
| **Pinia** | Глобальное состояние: `state`, `getters`, `actions` |
| **JavaScript (ES6+)** | Логика приложения без TypeScript |
| **localStorage** | Сохранение состояния между сессиями |

---

## ✨ Что реализовано

<table>
<tr><th>№</th><th>Тема</th><th>Ключевые механики</th></tr>
<tr><td align="center"><b>14</b></td><td>♻️ Жизненный цикл компонента</td><td><code>onMounted</code> / <code>onUnmounted</code>, <code>setInterval</code> + <code>clearInterval</code>, обратный отсчёт, разница <code>v-if</code> и <code>v-show</code></td></tr>
<tr><td align="center"><b>15</b></td><td>🔀 Динамические компоненты</td><td><code>&lt;component :is&gt;</code>, объект вкладок, <code>&lt;KeepAlive&gt;</code>, <code>onActivated</code> / <code>onDeactivated</code></td></tr>
<tr><td align="center"><b>16</b></td><td>💉 Provide / Inject</td><td>Передача данных через промежуточные компоненты, реактивность через <code>ref</code>, значение по умолчанию в <code>inject</code></td></tr>
<tr><td align="center"><b>17</b></td><td>🍍 Pinia: основы</td><td><code>defineStore</code>, <code>state</code> как функция, подключение через <code>app.use(createPinia())</code></td></tr>
<tr><td align="center"><b>18</b></td><td>🧮 Getters</td><td>Вычисляемые свойства, кэширование, getter от другого getter через <code>this</code></td></tr>
<tr><td align="center"><b>19</b></td><td>⚡ Actions</td><td>Инкапсуляция логики, валидация входных данных, обычные функции вместо стрелочных</td></tr>
<tr><td align="center"><b>20</b></td><td>🗂 Несколько stores</td><td>Разделение по смыслу, вызов одного store из другого, борьба с циклическими зависимостями</td></tr>
<tr><td align="center"><b>21</b></td><td>💾 localStorage</td><td><code>watch</code> для записи, чтение в <code>state</code>, <code>JSON.stringify</code> / <code>JSON.parse</code></td></tr>
<tr><td align="center"><b>22</b></td><td>✅ Валидация форм</td><td>Проверка на <code>submit</code> и <code>input</code>, флаг <code>submitted</code>, регулярки, сброс ошибок</td></tr>
</table>

---

## 🚀 Быстрый старт

```bash
# 1. Клонируем репозиторий
git clone https://github.com/USERNAME/vue-training.git

# 2. Переходим в папку
cd vue-training

# 3. Устанавливаем зависимости
npm install

# 4. Запускаем dev-сервер
npm run dev
```

Открываем **http://localhost:5173/** — и всё работает 🎉

```bash
# Сборка для продакшена
npm run build

# Предпросмотр собранной версии
npm run preview
```

---

## 📂 Структура проекта

```
vue-training/
├── public/
├── src/
│   ├── components/
│   │   ├── PageHeader.vue          # Шапка приложения
│   │   ├── ProductCard.vue         # Карточка товара (props + emit)
│   │   ├── Modal.vue               # Модальное окно со slot
│   │   ├── BaseInput.vue           # Обёртка input с v-model
│   │   ├── Timer.vue               # ПЗ-14: жизненный цикл
│   │   ├── TabProfile.vue          # ПЗ-15: вкладки
│   │   ├── TabSettings.vue
│   │   ├── TabContact.vue
│   │   ├── ThemePanel.vue          # ПЗ-16: промежуточный уровень
│   │   ├── ThemeStatus.vue         # ПЗ-16: inject
│   │   ├── SettingsPanel.vue
│   │   └── SettingsDisplay.vue
│   ├── stores/
│   │   ├── user.js                 # Пользователь + getters + actions
│   │   ├── settings.js             # Тема и язык
│   │   ├── cart.js                 # Корзина + totalPrice
│   │   ├── counter.js              # Счётчик с валидацией
│   │   └── favorites.js            # Избранное
│   ├── App.vue                     # Корневой компонент + валидация
│   └── main.js                     # Точка входа + createPinia()
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔍 Интересные решения

### ♻️ Очистка таймеров — чтобы не было утечек

```js
onMounted(() => {
  timerId = setInterval(() => seconds.value++, 1000)
})

onUnmounted(() => {
  clearInterval(timerId)   // без этого счётчик «убегает» при повторном показе
})
```

### 🔀 Сохранение состояния вкладок

```vue
<KeepAlive>
  <component :is="tabs[activeTab]" />
</KeepAlive>
```

Без обёртки состояние сбрасывается. С ней — счётчик и введённый текст остаются на месте.

### 🗂 Общение stores между собой

```js
// stores/user.js
logout() {
  this.name = 'Гость'
  this.isLoggedIn = false
  useSettingsStore().theme = 'light'   // вызов ВНУТРИ action, не на верхнем уровне
  useCartStore().clear()
}
```

### 💾 Двусторонняя синхронизация с localStorage

```js
// Запись при изменении
watch(() => settingsStore.theme, (t) => localStorage.setItem('theme', t))

// Чтение при инициализации
state: () => ({ theme: localStorage.getItem('theme') || 'light' })
```

### ✅ Умная валидация формы

```js
// Ошибки не мозолят глаза до первой попытки отправки
@input="submitted && validateField('email')"

// Но исчезают сразу, как только поле исправлено
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

---

## 🎯 Чему научился

- 🧩 Разбираться, **где должно жить состояние**: локальный `ref`, `provide/inject` или `store`
- ⚙️ Понимать **жизненный цикл** компонента и почему очистка ресурсов обязательна
- 🏗 Строить **масштабируемую архитектуру** вместо цепочек `v-if` на десять условий
- 🐛 Читать предупреждения Vue и находить причину, а не просто гуглить текст ошибки
- 📝 Писать понятный код, который не стыдно показать на защите

---

## 🗺 Планы

- [ ] Подключить Vue Router и разнести блоки по страницам
- [ ] Вынести валидацию в отдельный composable
- [ ] Добавить тёмную тему не только в state, но и в CSS-переменные
- [ ] Написать тесты на Vitest
- [ ] Подключить реальный API вместо заглушек

---

## 📚 Полезные ссылки

| Ресурс | Ссылка |
|---|---|
| Vue 3 (рус.) | https://ru.vuejs.org/guide/introduction.html |
| Pinia | https://pinia.vuejs.org/core-concepts/ |
| Vite | https://vite.dev/guide/ |
| MDN: localStorage | https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage |

---

<div align="center">

### ⭐ Если проект был полезен — поставь звезду!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:35495e,100:42b883&height=140&section=footer" width="100%" />

</div>