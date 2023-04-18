import { serve } from "std/http/server.ts";

const port = parseInt(Deno.env.get("PORT") ?? "8080");

const handler = (request: Request): Response => {
  console.log(`${request.method} ${request.url}`);

  const data = {
    hostname: Deno.hostname(),
    memory: Deno.systemMemoryInfo(),
    os: Deno.osRelease(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

await serve(handler, { port });
