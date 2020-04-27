
import axios from "~/plugins/axios-auth";

export const state = () => {
    idToken: null
}

export const getters = {
    idToken: state => state.idToken
}

export const mutations = {
    updateIdToken(state, idToken) {
        state.idToken = idToken;
    }
}

export const actions = {
    login({ commit }, authData) {
        axios
            .post(
                "/accounts:signInWithPassword?key=AIzaSyBpZCnaSuEyRNcURzgoktnyZDQv4uxAnmE",
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }
            )
            .then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response);
            });
    },
    register({ commit }, authData) {
        axios
            .post(
                "/accounts:signUp?key=AIzaSyBpZCnaSuEyRNcURzgoktnyZDQv4uxAnmE",
                {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }
            )
            .then(response => {
                commit('updateIdToken', response.data.idToken)
                console.log(response);
            });
    }
}