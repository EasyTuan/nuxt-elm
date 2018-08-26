/**
 * 用户模块
 */
import cookies from "js-cookie";
import {
  LOGIN,
  OUT_LOGIN,
} from '../types.js';

const state = {
  userInfo: {}
}

const getters = {
  userInfo(state) {
    return state.userInfo;
  },
}

const actions = {
  login({ commit }, value) {
    commit(LOGIN,value);
  },
  outLogin({ commit }) {
    commit(OUT_LOGIN);
  },
}

const mutations = {
  [LOGIN](state,value) {
    cookies.set('userInfo',{
      avatar: value.avatar,
      // create_time: value.create_time,
      mobile: value.mobile,
      user_id: value.user_id,
      username: value.username
    });
    state.userInfo = value;
  },
  [OUT_LOGIN](state) {
    cookies.remove('userInfo');
    state.userInfo = {};
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
