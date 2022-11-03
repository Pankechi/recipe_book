<template>
<button type="button" class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  
}
</script>

<style>
.btn {
  background-color: #5865F2;
  color: #F4FFFF;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
  cursor: pointer;
}


</style>