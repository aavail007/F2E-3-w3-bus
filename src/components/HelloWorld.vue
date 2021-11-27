<template>
  <div class="banner bg-cover bg-no-repeat w-full">
    <div class="relative w-full flex flex-col justify-center items-center md:p-20 lg:p-32 xl:p-44">
      <h4 class="text-5xl text-white font-bold text-shadow-md">想去哪裡玩?</h4>
      <p class="text-white font-bold my-3 text-shadow">這裡共有上千個活動及美食等著你去一同體驗</p>
      <div class="relative md:w-4/5 lg:w-3/5 mt-10">
        <input class="rounded-full w-full py-3 px-4 bg-white border-6 border-gray4" placeholder="搜尋關鍵字..." />
        <span class="absolute right-3 transform top-2/4 -translate-y-1/2 btn-primary text-white">
          <i class="fas fa-search"></i>
          搜尋
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
