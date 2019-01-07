/*
 * 这是公告api级的状态管理, 从全局@/config 导入api配置地址
 * */

import { menu } from "@/util/api/common";
const state = {
  navMenu: []
};

const getters = {
  async navMenu(state) {
      // return await menu()
      return  await menu()
  },
};
const mutations = {
  navMenu(state, data) {
    state.navMenu = data;
  }
};

const actions = {
  async navMenu({ commit }) {
    let cc=await menu()
    commit("navMenu", cc);
    return cc
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
