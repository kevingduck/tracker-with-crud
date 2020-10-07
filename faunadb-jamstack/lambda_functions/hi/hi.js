// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    let html = `
      <h1>Hello</h1>
      <p>HELLO SERVERLESS!<p>
    `;
    return {
      statusCode: 200,
      body: html
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
