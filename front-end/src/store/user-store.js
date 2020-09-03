export default {
	state: {
		user: "Hello world",
	},
	mutations: {
		updateUser(state, user) {
			console.log("Previous User")
			console.log(state.user)
			console.log("New User ")
			console.log(user)
			state.user = user
		},
	},
}
