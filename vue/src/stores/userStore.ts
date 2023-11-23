import { defineStore } from "pinia";

interface UserState {
  accesToken: IToken | undefined;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    accesToken: undefined
  }),
  getters: {
    getAccesToken: (state: UserState) => {
      return state.accesToken;
    }
  },
  actions: {
    setUser(this: UserState, accesToken: IToken) {
      this.accesToken = accesToken;
    }
  }
});
