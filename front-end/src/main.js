import Vue from "vue"
import Vuelidate from "vuelidate"
import App from "./App.vue"

import Vuex from "vuex"
import userStore from './store/user-store'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Vuex)

new Vue({
	store: new Vuex.Store(userStore),
	render: (h) => h(App),
}).$mount("#app")
