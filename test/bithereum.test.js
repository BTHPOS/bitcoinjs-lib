/* global describe, it */

// var assert = require('assert')
// var NETWORKS = require('../src/networks')
// var TransactionBuilder = require('../src/transaction_builder')
// var Transaction = require('../src/transaction')

// var ECPair = require('../src/ecpair')
// var bcrypto = require('../src/crypto')
// var bscript = require('../src/script')

// describe('TransactionBuilder', function () {
  // var network = NETWORKS['bithereum']

//   it('bethtestcase_1_to_1', function () {
//     var keyPair = ECPair.fromWIF('cRpeFjBsnfemov5H2dUL4h6KrEFDASSAcDhXdKfr4J5DHNsHF2d5', NETWORKS['bithereumtestnet'])
//     var address = keyPair.getAddress()
//     var pk = bcrypto.hash160(keyPair.getPublicKeyBuffer())
//     var spk = bscript.pubKeyHash.output.encode(pk)
//     var value = 10 * 1e8;
//
//     var txb = new bithereum.TransactionBuilder(network)
//     txb.addInput('3a2a2ebb0a7d92e04f92bf7382dc746f3a2e69c6ebbea732a101e465bd257393', 1, bithereum.Transaction.DEFAULT_SEQUENCE, spk);
//     txb.addOutput('TBgHSyLc3Lo8781F63EiEkHYis2NP6Sn1Y', value - 1000);
//     txb.setVersion(2);
//
//     var hashType = bithereum.Transaction.SIGHASH_ALL | bithereum.Transaction.SIGHASH_FORKID
//     txb.sign(0, keyPair, null, hashType, value);
//     // var build = txb.build();
//     // var hex = build.toHex();
//   })


  // it('bethtestcase_multisig_1', function () {
  //   var value = 50 * 1e8
  //
  //   var txHex = '020000000113aaf49280ba92bddfcbdc30d6c7501c2575e4a80f539236df233f9218a2c840000000009200483045022100b3b4211b8e8babc667dcca0b6f1c1284f191170a38a59bc3b9d7541d68c3c7a002200196267b87a7b80f3f556b3372e5ee6ed19b4b9e802c34916f45bc2b11d2de1a414752210201ad6a9a15457b162a71f1d5db8fe27ff001abc4ae3a888214f9407cb0da863c2103e6533849994cf76a9009447f2ad6dbf84c78e6f5f48fe77cf83cd9a3fe2e30ec52aeffffffff0100f2052a010000001976a914ea95bd5087d3b5f2df279304a46ad827225c4e8688ac00000000'
  //   var tx = Transaction.fromHex(txHex)
  //   tx.ins[0].value = value
  //
  //   var txb = TransactionBuilder.fromTransaction(tx, network, Transaction.FORKID_BTH)
  //
  //   assert.equal(undefined, txb.inputs[0].signatures[0])
  //   assert.equal(
  //     '3045022100b3b4211b8e8babc667dcca0b6f1c1284f191170a38a59bc3b9d7541d68c3c7a002200196267b87a7b80f3f556b3372e5ee6ed19b4b9e802c34916f45bc2b11d2de1a41',
  //     txb.inputs[0].signatures[1].toString('hex')
  //   )
  //
  //   var hex = txb.build().toHex()
  //   assert.equal(txHex, hex)
  // })

  // it('bethtestcase_multisig_0', function () {
  //   var value = 50 * 1e8
  //
  //   var txHex = '020000000113aaf49280ba92bddfcbdc30d6c7501c2575e4a80f539236df233f9218a2c840000000009100473044022025cb6ee7a63c7403645be2ed4ffcf9cd41d773ee3ba57a05dc335c4427f647660220323a038daac698efdc700ffa8d90e6641ed9eb4ab82808df0506a9da08863d29414752210201ad6a9a15457b162a71f1d5db8fe27ff001abc4ae3a888214f9407cb0da863c2103e6533849994cf76a9009447f2ad6dbf84c78e6f5f48fe77cf83cd9a3fe2e30ec52aeffffffff0100f2052a010000001976a914ea95bd5087d3b5f2df279304a46ad827225c4e8688ac00000000'
  //   var tx = Transaction.fromHex(txHex)
  //   tx.ins[0].value = value
  //
  //   var txb = TransactionBuilder.fromTransaction(tx, network, Transaction.FORKID_BTH)
  //
  //   assert.equal(
  //     '3044022025cb6ee7a63c7403645be2ed4ffcf9cd41d773ee3ba57a05dc335c4427f647660220323a038daac698efdc700ffa8d90e6641ed9eb4ab82808df0506a9da08863d2941',
  //     txb.inputs[0].signatures[0].toString('hex')
  //   )
  //   assert.equal(undefined, txb.inputs[0].signatures[1])
  //
  //   var hex = txb.build().toHex()
  //   assert.equal(txHex, hex)
  // })

// })
