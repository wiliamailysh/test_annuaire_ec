<template>
	<section class="section has-background-primary">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="has-text-centered title is-1">
							Pays:<br> 
							<span class="has-text-primary">
								{{ data.countryCollection.items[0].name }}
							</span>
					</div>
					<div 
						v-for="country in data.countryCollection.items" 
						:key="country.name">
						<p class="has-text-centered">
							<strong> Célébrités:</strong>
							<span 	v-for="(celebrity, i) in country.celebrities" :key="`celebrity-${i}`" >
								{{ celebrity }}<span v-if="i !== country.celebrities.length - 1">,</span>
							</span>
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
  			countryCollection (where: {sys: {id: $id}}) {
    			items {
      			name
      			celebrities
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