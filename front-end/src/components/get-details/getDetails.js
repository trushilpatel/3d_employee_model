import { required, between } from "vuelidate/lib/validators"

export default {
	name: "get-details",

	data() {
		return {
			user: {
				gender: "",
				height: 0,
				weight: 0,
				age: 20,
				character: "",
				hairStyle: "",
			},
		}
	},
	methods: {
		submit() {
			this.$store.commit("updateUser", this.user)
		},
	},

	validations: {
		user: {
			gender: {
				required,
				isValid(value) {
					return value !== ""
				},
			},
			height: {
				required,
				between: between(100, 200),
			},
			weight: {
				required,
				between: between(40, 150),
			},
			age: {
				required,
				between: between(1, 100),
			},
			character: {
				required,
				isValid(value) {
					return value !== ""
				},
			},
			hairStyle: {
				required,
				isValid(value) {
					return value !== "hairStyle"
				},
			},
		},
	},
}
