<template>
	<section class="section has-background-primary">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="has-text-centered title is-1">
							Cabinet comptable:<br> 
							<span class="has-text-primary">
								{{ firm.ec_name }}
							</span>
					</div>
					<p class="has-text-centered">
						<strong> Adresse:</strong>
						{{ firm.ec_adress }}, {{ firm.ec_zip_code }} {{ firm.ec_city }}
					</p>
					<p class="has-text-centered">
						<strong> Date d'inscription à l'ordre des Expert-Comptable:</strong>
						{{ firm.ec_registration_date }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import accountingFirms from '../../const/accountingFirms.json'
export default {
	asyncData({ params }) {
		const firm = accountingFirms.find(af => af.path === params.slug)
		return { firm }
	}
}
</script>