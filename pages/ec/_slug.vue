<template>
	<section class="section has-background-primary">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="has-text-centered title is-1">
							Cabinet comptable:<br> 
							<span class="has-text-primary">
								{{ data.firmCollection.items[0].name }}
							</span>
					</div>
					<div 
						v-for="country in data.firmCollection.items" 
						:key="country.name">
						<p class="has-text-centered">
							<strong> Adresse:</strong>
							{{ country.address }}, {{ country.zipCode }} {{ country.city }}
						</p>
							<p class="has-text-centered">
							<strong> Date d'inscription à l'ordre des Expert-Comptable:</strong>
							{{ country.registrationDate }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { gql } from 'nuxt-graphql-request';
export default {
	async asyncData({ $graphql, params }) {
		const query = gql`
			query($id: String) {
  			firmCollection (where: {sys: {id: $id}}) {
    			items {
      			name
      			zipCode
      			address
						city
      			region
      			registrationDate
      			phoneNumber
						sys {
        			id
      			}
    			}
  			}
			}`
		const variables = { id: params.slug }
		const data = await $graphql.default.request(query, variables)
		return { data }
	}
}
</script>