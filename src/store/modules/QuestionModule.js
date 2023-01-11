import axios from 'axios'

const state = {
	question: []
};

const getters = {
	questionsList: state => state.question
};

const actions = {
	async getQuestions({commit}){
		const response = await axios.get("https://my-json-server.typicode.com/onezeun/animal-test/question");
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