import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
  };

  static validateStructure = (aBlock: Block): boolean => {
    return (
      typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.prevHash === "string" &&
      typeof aBlock.timestamp === "number" &&
      typeof aBlock.data === "string"
    );
  };

  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "first", "", "hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): void => {
  const prevBlock: Block = getLatestBlock();
  const newIndex: number = prevBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    prevBlock.hash,
    newTimestamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    prevBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
};

const getHashForBlock = (aBlock: Block): string => {
  return Block.calculateBlockHash(
    aBlock.index,
    aBlock.prevHash,
    aBlock.timestamp,
    aBlock.data
  );
};

const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean => {
  if (
    !Block.validateStructure(candidateBlock) ||
    prevBlock.index + 1 !== candidateBlock.index ||
    prevBlock.hash !== candidateBlock.prevHash ||
    getHashForBlock(candidateBlock) !== candidateBlock.hash
  ) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

for (let i = 0; i < 3; i++) {
  createNewBlock(`hello${i}`);
}

console.log(getBlockchain());

export {};
