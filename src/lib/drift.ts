"use client";
import { Connection, Keypair } from "@solana/web3.js";
import { DriftClient, Wallet } from "@drift-labs/sdk";
import { env } from "@/env";
const connection = new Connection(env.NEXT_PUBLIC_RPC_URL, "confirmed");

const keypair = Keypair.generate();

export const wallet = new Wallet(keypair);

export const driftClient = new DriftClient({
  connection,
  wallet,
  env: "mainnet-beta",
});

await driftClient.subscribe();
