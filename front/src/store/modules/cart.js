const state = {
  data:[]
};

const getters = {
  data: state => {
    return state.data;
  }
};

const mutations = {
  ADD_DATA(state, data){
    state.data.push(data);
  },
  POP_DATA(state, data){
    let arrayTemp = [];
    let isAlreadyDelete = false;
    state.data.forEach(element => {
      if(element.id != data.id || isAlreadyDelete == true){
        arrayTemp.push(element);
      }
      else {
        isAlreadyDelete = true;
      }
      state.data = arrayTemp;
    });
  }
};

const actions = {
  ADD_DATA({commit}, data) {
    commit('ADD_DATA', data);
  },
  POP_DATA({commit}, data) {
    commit('POP_DATA', data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
