const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'coo5duoq',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
