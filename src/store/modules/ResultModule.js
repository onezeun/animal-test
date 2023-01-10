import axios from 'axios'

const state = {
	result: []
};

const getters = {
	resultList: state => state.result
};

const actions = {
	async getResult({commit}){
		const response = await axios.get("http://localhost:3000/result");
		commit("setResult", response.data)
	}
};

const mutations = {
	setResult: (state, result) => (
		state.result = result
	)
};

export default {
	state,
	getters,
	actions,
	mutations
};