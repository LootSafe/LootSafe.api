module.exports = {
  port: 1337,
  version: 1,
  debug: true,
  cacheInterval: 100000,
  prefix: '',  
  db: 'LootSafe',  
  ethereum: {
    testnet: true,
    chain: 'testrpc',
    provider: 'http://localhost:8545'
  },
  addresses: {
    StandardToken: "0x0000000000000000000000000000000000000000",
    Item: "0x0000000000000000000000000000000000000000",
    Meta: "0x0000000000000000000000000000000000000000",
    Trade: "0x0000000000000000000000000000000000000000",
    LootBox: "0x0000000000000000000000000000000000000000",
    LootSafe: "0x0000000000000000000000000000000000000000",
    CoreToken: "0x0000000000000000000000000000000000000000"
  },
  accessControl: {
    allowedOrigins: ['localhost'],
    key: 'sha1$7f408b79$1$02fdd7ee5f25861e9ed1af83bf06124c52b3aec6'
  },
  yubico: {
    enabled: false,
    clientId: 35374,
    secret: 'jAOPLIZfzZImv106iC1lDscTJxQ='
  }
}
