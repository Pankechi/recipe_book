import {createRouter,createWebHashHistory} from 'vue-router'
import PreviewPage from '../components/pages/PreviewPage.vue'
import RecipePage from '../components/pages/RecipePage.vue'



export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: PreviewPage},
    {path: '/page', component: RecipePage},
    {path: '/:id', component: RecipePage},
  ]
})


