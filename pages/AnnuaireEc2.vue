<template>
	<section class="section has-background-primary">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="has-text-centered title is-1">
						Total: {{ accountingFirms.length }}
					</div>
					<div class="columns is-multiline">
						<div 
							v-for="(firm, i) in accountingFirms.slice((current - 1) * perPage, current * perPage)" 
							:key="`${firm.ec_name}-${i}`"
							class="column is-2">
							<b-button
								type="is-primary"
								tag="router-link"
								:to="`/ec2/${firm.path}`"
								expanded
								size="is-large"
								class="my-3">
								<!-- {{ firm.ec_name }} -  -->
								<strong>{{ firm.path }}</strong>
							</b-button>
						</div>
					</div>
					<b-pagination
						v-model="current"
            :total="accountingFirms.length"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
        </b-pagination>
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
			accountingFirms,
      current: 1,
      perPage: 100,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
		}
	},
	computed: {
		filteredAccountingFirms() {
			return this.accountingFirms.slice((this.current - 1) * this.perPage, this.current * this.perPage)
		}
	},
	mounted() {
		console.log('mounted', JSON.stringify(this.accountingFirms.slice(0,5000)))
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