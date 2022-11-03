<template lang="">
  <div class="recipe__wrapper">
    <h1>{{ $route.params.id }}</h1>
    <p class="recipe__description">
      {{description}}
    </p>
    <div class="recipe__ingridients">
      <h2>Ingridients</h2>
      <ul>
        <li v-for="ingridient in ingridients" :key="ingridient">
        {{ingridient}}
        </li>
      </ul>
    </div>
    <div class="recipe__steps">
      <h2>Steps</h2>
      <ol>
        <li v-for="step in steps" :key="step">
         {{step}} 
        </li>
      </ol>  
    </div>  
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  recipe: {
    name: this.store.this.state.recipes[$route.pa].name,
    description: String,
    ingridients: Array,
    steps: Array,
    tags: Array,
    id: String,
  },
  data() {

  },
  methods:
  
}
</script>
<style>
  .recipe__wrapper {
    display: flex;
    color: antiquewhite;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .recipe__description {
    border-bottom: 5px solid;
  }
  
  .recipe__ingridients {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 5px solid;
    width: 100%;
    align-items: center;
  }

  .recipe__steps {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 5px solid;
    width: 100%;
    align-items: center;
  }

</style>