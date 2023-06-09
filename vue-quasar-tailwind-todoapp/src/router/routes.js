
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/todolist', component: () => import('pages/TodoPage.vue') },
    ]
  },
  // {
  //     path: '/todolist',
  //     component:()=>import('layouts/MainLayout.vue'),
  //     children:[
  //       {path:'',component:()=>import('src/pages/TodoPage.vue')}
  //     ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
