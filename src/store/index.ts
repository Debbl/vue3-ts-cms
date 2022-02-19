import { createStore } from 'vuex';

const store = createStore({
  state: () => {
    return {
      name: 'foo',
    };
  },
});

export default store;
