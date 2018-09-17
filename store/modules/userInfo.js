/**
 * 用户模块
 */
import cookies from "js-cookie";
import {
  LOGIN,
  OUT_LOGIN,
  USER_INFO_UPDATA
} from '../types.js';

const state = {
  userInfo: {}
}

const getters = {
  userInfo(state) {
    if (typeof window !== "undefined" && JSON.stringify(state.userInfo) === '{}' && cookies.get('userInfo')) {
      state.userInfo = JSON.parse(cookies.get('userInfo'));
    }
    return state.userInfo;
  },
}

const actions = {
  login({
    commit
  }, value) {
    commit(LOGIN, value);
  },
  outLogin({
    commit
  }) {
    commit(OUT_LOGIN);
  },
  update({
    commit
  }, value) {
    commit(USER_INFO_UPDATA, value);
  }
}

const mutations = {
  [LOGIN](state, value) {
    cookies.set('userInfo', {
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
  [USER_INFO_UPDATA](state, value) {
    state.userInfo = Object.assign(state.userInfo, value);
    cookies.set('userInfo', state.userInfo);
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
