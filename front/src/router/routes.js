
const routes = [
  {
    path: '/',
    component: () => import('layouts/General.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'account', component: () => import('pages/Account.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'product/:id', component: () => import('pages/Product.vue'), name: 'product-detail' },
      { path: 'category/:id/:category', component: () => import('pages/Category.vue'), name: 'category' }
    ]
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
