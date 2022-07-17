import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  id: "" as string,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  id: (state) => state.id,
};

export const mutations: MutationTree<RootState> = {
  CHANGE_id: (state, newid: string) => (state.id = newid),
};

export const actions: ActionTree<RootState, RootState> = {
  updateid({ commit }, newVal) {
    commit("CHANGE_id", newVal);
  },
};
