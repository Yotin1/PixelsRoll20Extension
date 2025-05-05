import { createServer } from "node:http";
import { WebSocketServer } from "ws";

const hostname = "0.0.0.0";
const port = 8000;

const server = createServer((request, response) => {
    const { headers, method, url } = request;
    console.log(headers, method, url);
    let body = [];
    request
        .on("error", (err) => {
            // This prints the error message and stack trace to `stderr`.
            console.error(err);
        })
        .on("data", (chunk) => {
            body.push(chunk);
        })
        .on("end", () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
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
            // Note: the 2 lines above could be replaced with this next one:
            // response.end(JSON.stringify(responseBody))

            // END OF NEW STUFF
            try {
                console.log(JSON.parse(body));
            } catch (error) {
                console.error(error);
            }
        });
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
    ws.on("error", console.error);

    ws.on("message", function message(data) {
        console.log("received: %s", data);
    });

    ws.send("something");
});

// const io = new Server(server);
// io.on("connection", (client) => {
//     console.log("A client has connected");
//     client
//         .on("event", (data) => {
//             console.log(data);
//         })
//         .on("disconnect", () => {
//             console.log("Client disconnected");
//         });
// });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
