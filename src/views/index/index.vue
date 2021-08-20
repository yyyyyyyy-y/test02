<template>
<div class="outer">
  <div class="inner inner1" @click="aaa">1</div>
  <div class="inner inner2">2</div>
  <div class="inner inner3">3</div>
  <div class="inner inner4">4</div>
</div>
</template>

<script>
export default {
  name: "index",
  methods:{
    aaa(){
      console.log(111);
    }
  }
}
</script>

<style scoped lang="scss">
.outer{
  width: 400px;
  height: 400px;
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;

  .inner{
    width: 150px;
    height: 100px;
    border: 1px solid green;
  }
}
</style>