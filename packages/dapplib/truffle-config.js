require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note shift pupil hockey argue front slice'; 
let testAccounts = [
"0x9a0808890ec259c5746da825d4b3d7e8f1d3d8612be10596d67cd3b3d5658ec1",
"0xac06eef86715efa693f2e87cae911d1c2a4e9fe7e5a5aefcd49a4949c71f63a2",
"0x452de023f0c70eb352433dcfc0e8d530c8432ab3feee2cac430a9d4b3a3f6c44",
"0x493d280230ee1a08a2647bb124f8e3b529f232d682e164483d228672b93bbcae",
"0x77181c00cffa175d7e5e606d18f788851bd0994b770c590b0f406c4d617cb54d",
"0xf6d8b05fe1b70f2769b2d27083eca1c001d49e29c6d1b7916fd14cdb78e8beb2",
"0x719a075cf61d104e7436e09b49c7b8047254a29ffa578e77d68b4ca819120f2b",
"0xb792edee391a384ba2c4419dd1c8bb882a8e022471f2dcdec93a5ba6e3f7f534",
"0x8dca147c61e5631d614444ab9c013ff6c83332592592f0450ee5f954171c1816",
"0x8489d5196a23232bde07b8d75792a5d5845776e3da604c80a033ee412fe02ab4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

