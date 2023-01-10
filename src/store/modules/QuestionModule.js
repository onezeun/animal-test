import axios from 'axios'

const state = {
	question: []
};

const getters = {
	questionsList: state => state.question
};

const actions = {
	async getQuestions({commit}){
		const response = await axios.get("http://localhost:3000/question");
		commit("setQuestions", response.data)
	}
};

const mutations = {
	setQuestions: (state, question) => (
		state.question = question
	)
};

export default {
	state,
	getters,
	actions,
	mutations
};