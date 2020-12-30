import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
// import ProjectPage from './views/ProjectPage.vue'
// import ContactPage from './views/ContactPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    // {
    //   path: '/projects',
    //   name: 'projectpage',
    //   component: ProjectPage
    // },
    // {
    //   path: '/contact',
    //   name: 'contactpage',
    //   component: ContactPage
    // },

  ]
})
