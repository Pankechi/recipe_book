<template>
<div class="main_page">
  <AppModal 
  v-if="showModal"
  @close="closeModal"
  />
  <h1>Recipe Book</h1>
  <AppButton @click="popModal">Add new recipe</AppButton>
    <div class="recipe_wrapper">
      <RecipePreview 
      v-for="recipe in $store.state.recipes" 
      :key="recipe.name"
      :name="recipe.name"
      :description="recipe.description"
      :tags="recipe.tags"
      :id="recipe.id"
      > 
      </RecipePreview>
    </div>  
</div> 
</template>

<script>
import AppButton from '../UI/AppButton.vue'
import RecipePreview from "../RecipePreview.vue"
import AppModal from "../UI/AppModal.vue"
export default {
    components: {AppButton,
    RecipePreview,
    AppModal,},
    
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        popModal() {
            this.showModal = true;
        },
        closeModal(modal) {
            this.showModal = modal;
        }
    },
}
</script>

<style>

.main_page {
  color: antiquewhite;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 45px;
  width: 750px;
  margin-top: 20px;
} 

</style>