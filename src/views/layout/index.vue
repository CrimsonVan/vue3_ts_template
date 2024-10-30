<template>
  <div style="width: 380px; height: 400px; margin: 0px auto 10px; background-color: cornsilk">
    {{ list[0].a }}
  </div>
  <div ref="itemArrRef" :style="{ height: itemArrHeight + 'px' }" class="waterfall">
    <img
      class="waterfall-item"
      v-for="(item, index) in waterfallList"
      :key="index"
      ref="itemRef"
      :src="item.pic"
      :style="{ left: item.left + 'px', top: item.top + 'px' }"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let column = ref(2) //瀑布流布局的列数
let itemRef = ref()
let itemArrRef = ref()
let itemArrHeight = ref(300)
const waterfallList = ref([
  {
    text: '0',
    left: 0,
    top: 0,
    height: 150,
    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/e69858186deb93429436ec0b194e3967_720.jpg'
  },
  {
    text: '1',
    left: 0,
    top: 0,
    height: 90,
    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/s28447008.jpg'
  },
  {
    text: '2',
    left: 0,
    top: 0,
    height: 90,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/E721CEB99185577D3256A73512D8DE12.jpg'
  },
  {
    text: '3',
    left: 0,
    top: 0,
    height: 170,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/3454545372.jpg'
  },
  {
    text: '4',
    left: 0,
    top: 0,
    height: 180,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/3454666570.jpg'
  },
  {
    text: '5',
    left: 0,
    top: 0,
    height: 90,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/615DFB41613FC1BC3672D5933E28EEF4.jpg'
  },
  {
    text: '6',
    left: 0,
    top: 0,
    height: 90,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/CD55142D8F50F651E3C0D3B1D6C9006B.jpg'
  },
  {
    text: '7',
    left: 0,
    top: 0,
    height: 150,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/3454420933.jpg'
  },
  {
    text: '8',
    left: 0,
    top: 0,
    height: 150,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/cloudstorage/895ea7ab-056a-4957-86e5-0da5637d0ae8.jpg'
  },
  {
    text: '9',
    left: 0,
    top: 0,
    height: 80,

    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/yufan.jpg'
  },
  {
    text: '10',
    left: 0,
    top: 0,
    height: 100,
    pic: 'https://mp-e0d15f0f-d6bf-4f95-b183-b82aede04535.cdn.bspapp.com/e69858186deb93429436ec0b194e3967_720.jpg'
  }
])
const list = ref([{ a: 1 }, { a: 2 }])
function renderWaterfall() {
  setTimeout(() => {
    waterfallList.value.forEach((item, index) => {
      console.log('打印src', itemRef.value[index].src)
      item.left = index % column.value === 1 ? 190 : 10
      item.top = getTop(index)!
      if (index === waterfallList.value.length - 2) {
        itemArrHeight.value =
          itemRef.value[index].clientHeight + waterfallList.value[index].top + 10
      }
      if (index === waterfallList.value.length - 1) {
        //itemArrHeight.value
        let res = itemRef.value[index].clientHeight + waterfallList.value[index].top + 10
        itemArrHeight.value = res < itemArrHeight.value ? itemArrHeight.value : res
      }
    })
  }, 100)
}

function getTop(index: number) {
  if (index === 0 || index === 1) {
    return 10
  } else {
    console.log('打印高度', itemRef.value[index - 2].clientHeight)

    let top = itemRef.value[index - 2].clientHeight + waterfallList.value[index - 2].top + 10
    return top
  }
}
renderWaterfall()
</script>
<style lang="scss" scoped>
.waterfall {
  width: 380px;
  // background-color: salmon;
  margin: 0 auto;
  position: relative;
  // border: 1px solid #ccc;
  .waterfall-item {
    background-color: #ffffff;
    width: 170px;
    height: auto;
    position: absolute;
    border-radius: 6px;
  }
}
</style>
