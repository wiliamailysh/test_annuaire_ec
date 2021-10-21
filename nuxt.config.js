import { gql } from 'nuxt-graphql-request';

export default {
	publicRuntimeConfig: {},
	// generate: {
	// 	routes() {
	// 		const query = gql`
	// 		query {
	// 			# Change limit to 23000
  // 			firmCollection(limit: 1000) {
	// 				total
  //   			items {
  //     			name
  //     			zipCode
  //     			address
  //     			region
  //     			registrationDate
  //     			phoneNumber
	// 					sys {
  //       			id
  //     			}
  //   			}
  // 			}
	// 		}`
	// 		return $graphql.default.request(query).then((res) => {
	// 			return res.data.map((firm) => {
	// 				return {
	// 					route: `/ec/${firm.sys.id}`,
	// 					payload: firm
	// 				}
	// 			})
	// 		})
	// 	}
	// },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'annuaire-ec',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		'nuxt-graphql-request'
	],
	
	graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`,
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
				options: {
					headers: {
						authorization: `Bearer ${process.env.CDA_TOKEN}`
						// 'content-type': 'application/json'
          },
				},
      },
      secondClient: {
        // ...client config
      },
      // ...your other clients
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {},

    /**
     * Optional
     * default: true (this includes cross-fetch/polyfill before creating the graphql client)
     */
    useFetchPolyfill: true,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
