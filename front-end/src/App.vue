<template>
	<div id="app">
		<div class="row">
			<show-profile />
			<get-details />
		</div>
	</div>
</template>

<script>
import getDetails from "./components/get-details/getDetails.vue"
import showProfile from "./components/show-profile/showProfile.vue"

export default {
	name: "App",
	components: {
		getDetails,
		showProfile,
	},
	data() {
		return {}
	},
	methods: {},
}
</script>

<style></style>
