import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorIncrement } from "../target/types/anchor_increment";

describe("anchor-increment", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorIncrement as Program<AnchorIncrement>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
