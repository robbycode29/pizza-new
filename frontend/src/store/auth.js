import auth from '@/apis/auth'

const state = {
    user: {
        id: null,
        username: null,
        email: null,
        password: null,
        is_admin: false,
    }
}

const mutations = {
    setUser(state, user) {
        state.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            is_admin: user.is_staff,
        }
    }
}

const actions = {
    async login({ commit }, userData) {
        const response = await auth.getAllUsers()
        const user = response.find(user => user.username === userData.username && user.password === userData.password)
        commit('setUser', user)
    }
}

const getters = {
    getUser(state) {
        return state.user
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}