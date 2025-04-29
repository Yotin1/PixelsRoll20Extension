const http = require("http");
const host = "0.0.0.0";
const port = 8000;

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
        .on("error", (err) => {
            console.error(err);
        })
        .on("data", (chunk) => {
            body.push(chunk);
        })
        .on("end", () => {
            body = Buffer.concat(body).toString();
            // BEGINNING OF NEW STUFF

            response.on("error", (err) => {
                console.error(err);
            });

            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            // Note: the 2 lines above could be replaced with this next one:
            // response.writeHead(200, {'Content-Type': 'application/json'})

            const responseBody = { headers, method, url, body };

            response.write(JSON.stringify(responseBody));
            response.end();
            console.log(JSON.parse(body));
            // Note: the 2 lines above could be replaced with this next one:
            // response.end(JSON.stringify(responseBody))

            // END OF NEW STUFF
        });
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
