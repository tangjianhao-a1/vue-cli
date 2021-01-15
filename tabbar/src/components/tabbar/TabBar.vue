<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  font-size: 20px;
  box-shadow: 10px -3px 15px rgba(100, 100, 100, 0.5);
}


</style>