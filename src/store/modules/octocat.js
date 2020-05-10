/**
 * 章鱼模块
 * 引入一些模块需要的包 或者接口
 * 比如axios等
 */

//定义类型
const CAT = 'CAT'

//定义state对象
const catState = {
  name: '章鱼猫',
  age: 10,
  friend: 'github'
}

//定义mutation对象
const mutations = {
  /**
   *
   * @param {*} state 状态管理对象
   * @param {*} newCat 章鱼猫对象
   */
  [CAT](state, newCat) {
    console.log(state)
    state.name = newCat
  }
}

//章鱼猫行为
const actions = {
  /**
   * 请求数据更新章鱼猫对象
   * @param {*} context 上下文对象
   * @param {*} catHttp return 一个Promise实例
   */
  updateCat(context, catHttp = { name: 'actionName cat' }) {
    setTimeout(() => {
      context.commit('CAT', catHttp)
      return Promise.resolve(catHttp)
    }, 2000)
  }
}

const getters = {
  //定义一个过滤,返回true或false
  filterCat: (catState) => {
    return catState.name != '猫'
  }
}

//导出
export default {
  state: { ...catState },
  mutations,
  actions,
  getters
}
