<template>
	<section class="section has-background-primary">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="has-text-centered title is-1">
						Total: {{ accountingFirms.length }}
					</div>
					<div 
						v-for="(firm, i) in accountingFirms" 
						:key="`${firm.ec_name}-${i}`">
						<b-button
							type="is-primary"
							tag="router-link"
							:to="`/ec2/${firm.path}`"
							expanded
							size="is-large"
							class="my-3">
							{{ firm.ec_name }} - 
							<strong>{{ firm.path }}</strong>
						</b-button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
// import { gql } from 'nuxt-graphql-request';
import accountingFirms from '../const/accountingFirms.json'
export default {
	data() {
		return {
			accountingFirms
		}
	},
	mounted() {
		// console.log('mounted', JSON.stringify(accountingFirms))
		// const transformedEntries = accountingFirms.map(af => {
		// 	// console.log('name', af.ec_name)
		// 	return  {
    //   	"sys": {
    //   	  "id": af.path,
    //   	  "publishedVersion": 1,
    //   	  "contentType": {
    //   	    "sys": {
    //   	      "id": "firm"
    //   	    }
    //   	  }
    //   	},
    //   	"fields": {
    //   	  "name": {
    //   	    "en-US": af.ec_name
    //   	  },
    //   	  "zipCode": {
    //   	    "en-US": af.ec_zip_code ? af.ec_zip_code.toString() : ""
    //   	  },
		// 			"city": {
    //   	    "en-US": af.ec_city
    //   	  },
    //   	  "region": {
    //   	    "en-US": af.ec_region
    //   	  },
		// 			"address": {
    //   	    "en-US": af.ec_adress
    //   	  },
    //   	  "phoneNumber": {
    //   	    "en-US": af.ec_phone_number
    //   	  },
		// 			"registrationDate": {
    //   	    "en-US": af.ec_registration_date
    //   	  }
    //   	}
    // 	}
		// });
		// Format: https://benjaminknofe.com/blog/2017/06/19/minimal-json-for-contentful-import/
		// console.log('transformedEntries', JSON.stringify(transformedEntries))
	}
}
</script>