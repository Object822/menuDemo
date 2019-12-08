import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  ADD(state) {
    state.count++
  },
  DEL(state) {
    state.count--
  }
}

const actions = {
  add({ commit }) {
    commit('ADD')
  },
  del({ commit }) {
    commit('DEL')
  }
}

const getters = {
  changeCount() {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
