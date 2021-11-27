<template>
  <div class="text-left font-bold" :class="checkTypeClass(searchInfo.type)">
    <div class="top-line w-11/12 md:w-full h-2 mx-auto"></div>
    <div class="py-5 px-10">
      <div class="font-bold text-3xl my-2">{{ searchInfo.title }}</div>
      <p class="text-gray2">{{ searchInfo.desc }}</p>
      <p class="search-desc mt-12">{{ searchInfo.searchDesc }}</p>
      <input class="w-full border-gray-200 border-2 rounded-lg py-2 px-3 mt-1" :placeholder="searchInfo.placeholder" />
    </div>
    <div class="flex justify-center mb-10">
      <button class="search-btn">搜尋</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBlock',
  props: ['searchInfo'],
  methods: {
    checkTypeClass(type) {
      return type + '-type';
    }
  }
};
</script>

<style lang="scss" scoped>
$primary1: #83cc61;
$primary2: #5a9e7c;
$secondary1: #ffce4b;
$secondary2: #feaa2b;

.top-line {
  border-radius: 25px;
}

.search-btn {
  color: #ffffff;
  border-radius: 8px;
  width: 180px;
  height: 56px;
  font-weight: bold;
}
.bus-type {
  .top-line {
    background-color: $primary1;
  }

  .search-btn {
    background-color: $primary1;
  }

  .search-desc {
      color: $primary2;
  }
}

.stop-type {
  .top-line {
    background-color: $secondary1;
  }

  .search-btn {
    background-color: $secondary1;
  }

  .search-desc {
      color: $secondary2;
  }
}
</style>

<style lang="postcss" scoped>
.bus-type {
  @apply text-primary1;
}

.stop-type {
  @apply text-secondary1;
}
</style>
