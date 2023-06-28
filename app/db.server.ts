import { PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.192.0/dotenv/mod.ts";

const envVars = await load();

/**
 * Initialize.
 */

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const dinosaurs = await prisma.dinosaur.findMany();

console.log(dinosaurs);
