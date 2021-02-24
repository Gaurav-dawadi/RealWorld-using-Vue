import { api, clearToken, setToken } from "../api";

export default {
  namespaced: true,

  state: {
    user: null,
    profile: null
  },
  getters: {
    username(state) {
      return (state.user && state.user.username) || null;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async getUser(context) {
      const user = await api.get("/user");
      context.commit("setUser", user);
    },
    async loginUser(context, { email, password }) {
      clearToken();
      const response = await api.post("/users/login", {
        user: {
          email,
          password
        }
      });
      if (response.data.user) {
        setToken(response.data.user.token);
        context.commit("setUser", response.data.user);
      }
    }
  }
};
