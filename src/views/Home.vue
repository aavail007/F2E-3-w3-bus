<template>
  <div>
    <div class="container mx-auto text-center">
      <img class="mx-auto h-40 mt-36" src="@/assets/img/logo.png" />
      <h1 class="text-4xl font-bold text-gray1 mt-6">公車在哪裡</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-12 my-20">
        <div>
          <SearchBlock :searchInfo="busDynamic"></SearchBlock>
        </div>
        <div><SearchBlock :searchInfo="stopSign"></SearchBlock></div>
        <div><img class="w-full" src="@/assets/img/wait.png" /></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBlock from '@/components/SearchBlock';
import Footer from '@/components/Layout/Footer';
import { reactive } from '@vue/reactivity';

export default {
  name: 'Home',
  components: {
    SearchBlock,
    Footer
  },
  setup() {
    const busDynamic = reactive({
      title: '公車動態',
      desc: '指定公車路線，查看公車途經站牌及動態',
      searchDesc: '路線名稱 或 關鍵字',
      placeholder: '請選擇路線名稱',
      type: 'bus'
    });

    const stopSign = reactive({
      title: '站牌搜尋',
      desc: '指定站牌，查看有哪些公車路線經過',
      searchDesc: '站牌關鍵字',
      placeholder: '請輸入站牌關鍵字',
      type: 'stop'
    });
    return { busDynamic, stopSign };
  }
};
</script>

<style lang="scss" scoped></style>
