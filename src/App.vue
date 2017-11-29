<template>
  <div id="app">
    <v-header :seller="seller" />
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
      
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {urlParse} from '@/common/js/util'
import Header from '@/components/header/Header'

export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      },
      ratings: {},
      goods: {}
    }
  },
  created () {
    this.axios.get('/api/seller?id=' + this.seller.id).then((res) => {
      if (res.data.errno === 0) {
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
    this.axios.get('/api/goods').then((res) => {
      if (res.data.errno === 0) {
        this.goods = res.data.data
      }
    })
    this.axios.get('/api/ratings').then((res) => {
      if (res.data.errno === 0) {
        this.ratings = res.data.data
      }
    })
  }
}
</script>

<style lang="stylus">
@import "./common/stylus/mixin.styl"
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style>
