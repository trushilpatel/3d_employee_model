<template>
	<div id="get-details" class="container-fluid mb-3 ml-auto border">
		<h2 class="display-4 border-bottom text-dark border-dark mt- mb-4">
			Enter Details
		</h2>

		<form v-on:submit.prevent="submit()" class="  p-2 my-3 rounded  ml-auto">
			<!-- Gender -->
			<div class="form-group mb-3">
				<select
					class="custom-select "
					v-on:blur="$v.user.gender.$touch"
					v-model="user.gender"
				>
					<option disabled value="">Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
				<span
					v-if="$v.user.gender.$invalid && $v.user.gender.$dirty"
					class="invalid-data ml-3"
					>* Please Select Gender</span
				>
			</div>

			<!-- Height -->
			<div class="form-group mb-3">
				<div class="input-group ">
					<div class="input-group-prepend">
						<span class="input-group-text px-3">Height</span>
					</div>
					<input
						v-model="user.height"
						type="number"
						class="form-control"
						aria-label="Amount (to the nearest dollar)"
						v-on:blur="$v.user.height.$touch"
					/>
					<div class="input-group-append">
						<span class="input-group-text">cm</span>
					</div>
				</div>

				<span
					v-if="$v.user.height.$invalid && $v.user.height.$dirty"
					class="invalid-data ml-3"
					>* Please Enter Valide height Batween 100-200</span
				>
			</div>

			<!-- Weight -->
			<div class="form-group mb-3">
				<div class="input-group ">
					<div class="input-group-prepend">
						<span class="input-group-text px-3">Weight</span>
					</div>
					<input
						v-model="user.weight"
						type="number"
						class="form-control"
						v-on:blur="$v.user.weight.$touch"
					/>
					<div class="input-group-append">
						<span class="input-group-text">kg</span>
					</div>
				</div>
				<span
					v-if="$v.user.weight.$invalid && $v.user.weight.$dirty"
					class="invalid-data ml-3"
				>
					* Please Enter Valid weight between 40-150
				</span>
			</div>

			<!-- Character  -->
			<div v-if="user.gender !== ''" class="form-group mb-3">
				<div  class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text px-3">Character</span>
					</div>

					<!-- Male -->
					<select
						v-if="user.gender === 'male'"
						class=" custom-select input-group-lg"
						v-model="user.character"
						v-on:blur="$v.user.character.$touch"
					>
						<option disabled value="">select Character</option>
						<option value="boy">Boy</option>
						<option value="man">Man</option>
					</select>

					<!-- Female  -->
					<select
						v-if="user.gender === 'female'"
						class="custom-select "
						v-model="user.character"
						v-on:click="$v.user.character.$touch"
					>
						<option disabled value="">Character</option>
						<option value="girl">Girl</option>
						<option value="woman">Woman</option>
					</select>
				</div>
				<span
					v-if="$v.user.character.$invalid && $v.user.character.$dirty"
					class="invalid-data ml-3"
					>* Please Select Character</span
				>
			</div>

			<!-- Hair Style  -->
			<div class="form-group mb-3">
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text px-3">Hair Style</span>
					</div>
					<select
						class="custom-select input-group-lg"
						v-model="user.hairStyle"
						v-on:blur="$v.user.hairStyle.$touch"
					>
						<option disabled value="">selcet Hair Style </option>
						<option value="short">short</option>
						<option value="long">Long</option>
						<option v-if="user.gender === 'male'" value="bald">Bald</option>
					</select>
				</div>
				<span
					v-if="$v.user.hairStyle.$invalid && $v.user.hairStyle.$dirty"
					class="invalid-data ml-3"
					>* Please Select Hair Style</span
				>
			</div>

			<!-- Submit -->

				<!--	v-bind:disabled="!$v.$dirty && $v.$invalid" -->
			<div class="form-group">
				<button

					class="btn btn-primary btn-block form-group"
				>
					Show Character
				</button>
			</div>
		</form>
	</div>
</template>

<script src="./getDetails.js"></script>

<style src="./getDetails.css" scoped></style>
