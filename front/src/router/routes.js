
const routes = [
  {
    path: '/',
    component: () => import('layouts/General.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue'), 'name': 'cart' },
      { path: 'account', component: () => import('pages/Account.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'product/:id', component: () => import('pages/Product.vue'), name: 'product-detail' },
      { path: 'category/:id/:category', component: () => import('pages/Category.vue'), name: 'category' },
      { path: 'editprofile', component: () => import('pages/EditProfile.vue')},
      { path: 'payment', component: () => import('pages/Payment.vue')}
    ]
  },
  {
    path: '/admin/',
    component: () => import('layouts/Admin'),
    children: [
      { path: '', component: () => import('pages/admin/Home.vue') },
      {path: 'products', component: () => import('pages/admin/ProductList.vue')},
      {path: 'products/add', component: () => import('pages/admin/ProductAdd.vue')},
      {path: 'products/edit/:id', component: () => import('pages/admin/ProductEdit.vue'), name: 'product-edit'},
      {path: 'users', component: () => import('pages/admin/UserList.vue')},
      {path: 'users/add', component: () => import('pages/admin/UserAdd.vue')},
      {path: 'users/edit/:id', component: () => import('pages/admin/UserEdit.vue'), name: 'user-edit'}
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
