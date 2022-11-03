import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [{
      id: 'loremipsum1',
      name: 'Lorem ipsum',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates aliquid voluptate illum. Nulla, in id',
      ingridients: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      steps: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      tags: ['Lorem','Lorem',],
      ingridientsRow: 1,
      stepsRow: 1,
      tag: '',
    },
    {
      id: 'loremipsum2',
      name: 'Lorem ipsum',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates aliquid voluptate illum. Nulla, in id',
      ingridients: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      steps: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      tags: ['Lorem','Lorem '],
      ingridientsRow: 1,
      stepsRow: 1,
      tag: '',
    },
    {
      id: 'loremipsum3',
      name: 'Lorem ipsum',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates aliquid voluptate illum. Nulla, in id',
      ingridients: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      steps: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      tags: ['Lorem','Lorem',],
      ingridientsRow: 1,
      stepsRow: 1,
      tag: '',
    },
    {
      id: 'loremipsum4',
      name: 'Lorem ipsum',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates aliquid voluptate illum. Nulla, in id',
      ingridients: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      steps: ['Lorem ipsum','Lorem ipsum','Lorem ipsum',],
      tags: ['Lorem','Lorem'],
      ingridientsRow: 1,
      stepsRow: 1,
      tag: '',
    },
    ]
  

  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes = [recipe, ...state.recipes]
    }
  },
  getters: {
    
  }
})