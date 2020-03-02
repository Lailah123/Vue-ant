<template>
  <div>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
  </div>
</template>

<script>
export default {
  props:['str'],
    data() {
    return {
      // str:"option2",
    };
  }
};
</script>

<style>
h3 {
  text-align: center;
}
</style>