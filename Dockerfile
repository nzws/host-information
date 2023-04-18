FROM denoland/deno:1.32.4

WORKDIR /app
USER deno

COPY . .
RUN deno cache main.ts

CMD ["task", "start"]
