<template>
  <div class="modal_wrapper" @click="closePost">
        <form @submit.prevent @click.stop class="recipe_form">
          <div class="form_block">
            <label for="recipe_name">Recipe name</label>
            <input id="recipe_name" type="text" v-model="recipe.name">
            <label for="recipe_description">Recipe description</label>
            <textarea v-model="recipe.description" name="" id="recipe_description" cols="30" rows="5"></textarea> 
          </div>

          <label for="recipe_ingridients">Recipe ingridients</label>
          <div v-for="ingridient in recipe.ingridientsRow" :key="ingridient" class="form_block">
            <input v-model="recipe.ingridients[ingridient - 1]" id="recipe_ingridients" type="text">
          </div>
          <div class="form_buttons">
          <AppButton @click="addNewIngridient">Add ingridient</AppButton>
          <AppButton @click="deletIngridient">Delet ingridient</AppButton>
          </div>

          <label for="recipe_step">Recipe steps</label>
          <div v-for="step in recipe.stepsRow" :key="step" class="form_block">
            <input v-model="recipe.steps[step - 1]" id="recipe_step" type="text">
          </div>
          <div class="form_buttons">
          <AppButton @click="addNewStep">Add step</AppButton>
          <AppButton @click="deletStep">Delet step</AppButton>
          </div>

          <label for="recipe_tags">Add tags</label>
          <input v-model="recipe.tag" id="recipe_tags" type="text">

          <div class="form_buttons">
            <AppButton
            @click="pushRecipe"
            >Post</AppButton>

            <AppButton
            @click="closePost"
            >
              Close
            </AppButton>  
          </div>
        </form>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  components: {
    AppButton
  },
  data() {
    return {
      modal: false,
      recipe: {
        id: '',
        name: '',
        description:'',
        ingridients: [],
        steps: [],
        tags: [],
        ingridientsRow: 1,
        stepsRow: 1,
        tag: '',
      }
    }
  },
  methods: {
    closePost() {
      this.$emit('close', this.modal)
    },
    addNewStep() {
      this.recipe.stepsRow ++
    },
    deletStep() {
      this.recipe.stepsRow --
      this.recipe.steps.pop()
    },
    addNewIngridient() {
      this.recipe.ingridientsRow ++
    },
    deletIngridient() {
      this.recipe.ingridientsRow --
      this.recipe.ingridients.pop()
    },
    madeId() {
      this.recipe.id = this.recipe.name.toLowerCase().replace(/\s/g, '')
    },
    collectTags() {
      const TagArr = this.recipe.tag.split(' ')
      this.recipe.tags.push(...TagArr)
    },
    pushRecipe() {
      //проверка заполнения полей, отключена для упрощения тестирования
      //if (this.recipe.name && this.recipe.description && this.recipe.ingridients && this.recipe.steps) {
      this.collectTags()
      this.madeId()
      this.store.commit('ADD_RECIPE', {...this.recipe})
      this.closePost()
     // } else { 
       // alert('Add recipe')
    //  }
    }
  },  
}
</script>

<style>

  .modal_wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    background: rgba(239,239,240,0.3 );
    overflow-x: none;
    overflow-y: scroll;
  }

  .recipe_form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50vw;
    padding: 20px;
    background: #202225;
    border-radius: 25px;
  }

  .form_block {
    display: flex;
    flex-direction: column;
  }

  .tag_form {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .form_buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end;
  }

  #recipe_description {
    resize: none;
  }
</style>