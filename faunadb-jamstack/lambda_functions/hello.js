exports.handler = (event, context, callback) => {
    return {
        statusCode:200,
        body: JSON.stringify({ msg: "HELLO SERVERLESS WORLD"}),
    };
};