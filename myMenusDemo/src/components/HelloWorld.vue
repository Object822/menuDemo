<template>
  <div class="hello">
    数量：{{ newCount }}
    <button @click="add1()">增加</button><button @click="del1()">减少</button>
    <br>
    <p>他是：{{ changeCount }}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({ newCount: 'count' }),
    ...mapGetters(['changeCount'])
    // changeCount() {
    //   return this.$store.getters.changeCount
    // }
  },
  created() {
    console.log(this.$store)
  },
  methods: {
    ...mapActions({ add1: 'add', del1: 'del' })
    // add(type) {
    //   if (type === 'add') {
    //     // this.$store.state.count++
    //     this.$store.dispatch('add')
    //   } else {
    //     // this.$store.state.count--
    //     this.$store.dispatch('del')
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
