<template>
  <header class="w-full bg-white py-3 px-10 flex justify-between text-black font-bold items-center">
    <!-- <img class="h-8" src="@/assets/img/logo.png" /> -->
    <div class="flex">
      <div class="mx-5">特色活動</div>
      <div class="mx-5">美食饗宴</div>
      <div class="mx-5">精選住宿</div>
    </div>
    <div class="relative">
      <input class="rounded-full py-2 px-4 bg-gray2 border-2 border-gray-200 text-sm" placeholder="搜尋關鍵字..." />
      <span class="absolute right-5 top-1/4 text-gray3">
        <i class="fas fa-search"></i>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style></style>
