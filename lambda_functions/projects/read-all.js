/* Import faunaDB sdk */
const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async (event, context) => {
  console.log('Function `read-all` invoked')
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_projects'))))
    .then(response => {
      const projectRefs = response.data
      // create new query out of project refs. http://bit.ly/2LG3MLg
      const getAllprojectsDataQuery = projectRefs.map(ref => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllprojectsDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    })
    .catch(error => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
