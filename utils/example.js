const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");
const verifyProof = require("./verifyProof");

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

// find the proof that norman block is in the list
const name = "Norman Block";
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);

console.log(`tree root: ${root}`);

// verify proof against the Merkle Root
console.log(verifyProof(proof, name, root)); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
const fakeName = "Amin Block";
console.log(verifyProof(proof, fakeName, root));

proof[2].left = !proof[2].left;
console.log(verifyProof(proof, name, root));
