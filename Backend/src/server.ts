import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { z } from 'zod';
import { poolRoutes } from "./routes/pool";
import ShortUniqueId from "short-unique-id";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";


async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })


  // Em produção isso precisa ser uma variável de ambiente
  await fastify.register(jwt, {
    secret: 'copanlw',
  })

   await fastify.register(poolRoutes)
   await fastify.register(authRoutes)
   await fastify.register(gameRoutes)
   await fastify.register(guessRoutes)
   await fastify.register(userRoutes)

  await fastify.listen({ port: 3333, host: '0.0.0.0'})
}

bootstrap()