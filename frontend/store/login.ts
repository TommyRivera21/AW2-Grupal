import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  login: false as boolean,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  login: (state) => state.login,
};

export const mutations: MutationTree<RootState> = {
  CHANGE_login: (state, newlogin: boolean) => (state.login = newlogin),
};

export const actions: ActionTree<RootState, RootState> = {
  updatelogin({ commit }, newVal) {
    commit("CHANGE_login", newVal);
  },
};
