require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth pulse proof gesture globe equal gas'; 
let testAccounts = [
"0x6b9db5887f57be1906681b8520d8b930399ac9c5d4107e5f14148f96206a7039",
"0x8b5cb629e6866b2947176754a1e7891971b867b9cf57a58c00581f9820c718b7",
"0x59586dcf783910fcae05ec8942cf58bbf55fe90fc39d10c3575eccdf675b9052",
"0x702c8d259828a6c6a64b275a45350dd053fcffabdd7483ee0def640dc39ed043",
"0x51e60c00940b59c11ee662d41cc0dfaf2b5e0c861442ef27a96735b2fbc55bcd",
"0xbf6d338986db58d7c7e98ee1eb7931cb6163126ad329664f63a09c4a24376580",
"0x336d5270e8eb1f6fe588413b7b855d16ef055d243df0ab3a7ef0332c7a20ac6b",
"0x1f4328b3ec1b179748d26801f4a43154ae403f35c776662f90a124e07701abc2",
"0x1bffafdfbc3e6237371493774bc3410d74d0b4b47bd28dc86f42877bef3731f8",
"0x4af2d4a155c1f9c2b7c41562cbb6b2dde7101801bd4c4c6c832e96eee77142f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

