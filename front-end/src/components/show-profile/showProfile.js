import { mapState } from "vuex"

export default {
	name: "show-profile",
	data() {
		return {}
	},
	computed: mapState(["user"]),
	methods: {
		hello() {
			console.log("hello  hello")
		},
  },
  created(){
    console.log(this.user)
  }

}
