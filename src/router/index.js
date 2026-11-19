import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Services from '../views/Services.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ProductEdit from '../views/ProductEdit.vue'

// Компоненты личного кабинета
import AccountLayout from '../views/AccountLayout.vue'
import AccountProfile from '../views/AccountProfile.vue'
import AccountSettings from '../views/AccountSettings.vue'
import AccountOrders from '../views/AccountOrders.vue'
import AccountSecurity from '../views/AccountSecurity.vue'

// Подразделы настроек (вложенность второго уровня)
import AccountSettingsProfile from '../views/AccountSettingsProfile.vue'
import AccountSettingsNotifications from '../views/AccountSettingsNotifications.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/services', component: Services },

  // Более специфичный маршрут идёт раньше общего /product/:id
  {
    path: '/product/:id/edit',
    name: 'product-edit',
    component: ProductEdit,
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetails,
    props: true
  },

  // Личный кабинет — вложенные маршруты.
  // redirect: '/account/profile' — при входе на /account автоматически
  // перенаправляет на /account/profile (самостоятельное задание, п. 2).
  {
    path: '/account',
    component: AccountLayout,
    redirect: '/account/profile',
    children: [
      { path: 'profile', component: AccountProfile },
      {
        path: 'settings',
        component: AccountSettings,
        // Вложенность второго уровня: у «Настроек» свои подразделы
        children: [
          { path: 'profile', component: AccountSettingsProfile },
          { path: 'notifications', component: AccountSettingsNotifications }
        ]
      },
      { path: 'orders', component: AccountOrders },
      { path: 'security', component: AccountSecurity }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router