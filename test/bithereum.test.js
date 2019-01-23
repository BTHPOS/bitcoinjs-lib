/* global describe, it */

var assert = require('assert')
var script = require('../src/script')
var crypto = require('../src/crypto')
var ECPair = require('../src/ecpair')
var NETWORKS = require('../src/networks')
var TransactionBuilder = require('../src/transaction_builder')
var Transaction = require('../src/transaction')

describe('TransactionBuilder', function () {
  var networks = NETWORKS
  it('bithereum-1-to-1-test', function () {
    var value = 100 * 1e8
    var txid = '6e702900756b3e847c31e9349f64af40e0622253aa50144cb891ddfffc6bfe75'
    var vout = 1

    var wif = '92Ww4AFEQnQKQXgCd8ituexqLTEdzuTp5Ka9hvfgCjaXpu5QHsu'
    var keyPair = ECPair.fromWIF(wif, networks.bithereumtestnet)

    var pk = crypto.hash160(keyPair.getPublicKeyBuffer())
    var spk = script.pubKeyHash.output.encode(pk)

    var txb = new TransactionBuilder(networks.bithereumtestnet)
    txb.addInput(txid, vout, Transaction.DEFAULT_SEQUENCE, spk)
    txb.addOutput('SMZLwVACDinJoHvjCdSHZeDqwEViR9q9aM', value - 1000)
    txb.enableBithereum(true)
    txb.setVersion(2)

    var hashType = Transaction.SIGHASH_ALL | Transaction.SIGHASH_FORKID
    txb.sign(0, keyPair, null, hashType, value)

    var tx = txb.build()
    var hex = tx.toHex()
    assert.equal('020000000175fe6bfcffdd91b84c1450aa532262e040af649f34e9317c843e6b750029706e010000008b4830450221009b3e2e743a537e5eae65b69f576ac2d91bb4bae949d26e182388fe742d07688802201f1d1353122c02dbd9fe0c2504a29f536b386b0c88d1de9e677b75bb159679751141047bb28ce1f3b3701799cdc27ebba757abc642feacd970a79f4fbe792a5485990085c1ec75c99308c86a0bb16bae3344e9be680936eafef42888612be0bd14daa3ffffffff0118e00b540200000017a91402e6db859bd48db0f22e3e4c28039b719990dc688700000000', hex)
  })
})
