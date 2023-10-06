import {login, nonce} from "./routes";

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === '/api/auth/nonce') {
            return nonce(req)
        }

        if (url.pathname === '/api/auth/login') {
            return login(req)
        }

        return new Response("Welcome to Bun!");
    },
});

console.log(`Listening on localhost:${server.port}`);