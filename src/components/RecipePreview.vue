<template>
  <div class="preview_wrapper">
  <div class="recipe_preview">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <div class="preview_tags">
      <div v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</div>
    </div>
  </div>
  <AppButton><router-link :to="`${id}`">Open</router-link></AppButton>
  </div>
</template>

<script>
import AppButton from "./UI/AppButton.vue"
export default {
  components: {
    AppButton
  },
  data() {
    return {
      hover: false
  
    }
  },

  props: {
    name: String,
    description: String,
    tags: Array,
    id: String
  },

  methods: {
    openRecipe() {

    }
  }
}
</script>

<style>

  .preview_wrapper {
    background-color: #33353B;
    padding: 10px;
  }

  .recipe_preview {
    display: flex;
    flex-direction: column;
    color: #F4FFFF;
    gap: 10px;
    width: 200px;
    margin-bottom: 10px;
  }

  .recipe_preview p {
    word-break: break-word;
  }
  
  
  .preview_tags {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .tag {
    background-color: #3BA55D;
    padding: 0px 5px;
    border-radius: 25px;
  }
</style>