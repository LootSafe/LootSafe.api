const { getInstance } = require('../../modules')

const {
  ethereum,
  addresses
} = require('../../../config')

/**
 * Add a new crafting recepie
 * @constructor
 * @param {string} item - Resulting item
 * @param {array} rewards - Materials required to craft
 * @param {array} counts - Count of each item to craft
 */
module.exports = (item = '0x0', rewards = [], counts = []) => {
  return getInstance('LootSafe').then(instance => {
    return instance.newDeconstructionRecipie(
      item,
      rewards,
      counts,
      {gas: 3000000, from: ethereum.account}
    )
  })
}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XX                                                                          XX
//XX   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMMMMMMMMssssssssssssssssssssssssssMMMMMMMMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMMMss'''                          '''ssMMMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMyy''                                    ''yyMMMMMMMMMMMM   XX
//XX   MMMMMMMMyy''                                            ''yyMMMMMMMM   XX
//XX   MMMMMy''                                                    ''yMMMMM   XX
//XX   MMMy'                                                          'yMMM   XX
//XX   Mh'                                                              'hM   XX
//XX   -                                                                  -   XX
//XX                                                                          XX
//XX   ::                                                                ::   XX
//XX   MMhh.        ..hhhhhh..                      ..hhhhhh..        .hhMM   XX
//XX   MMMMMh   ..hhMMMMMMMMMMhh.                .hhMMMMMMMMMMhh..   hMMMMM   XX
//XX   ---MMM .hMMMMdd:::dMMMMMMMhh..        ..hhMMMMMMMd:::ddMMMMh. MMM---   XX
//XX   MMMMMM MMmm''      'mmMMMMMMMMyy.  .yyMMMMMMMMmm'      ''mmMM MMMMMM   XX
//XX   ---mMM ''             'mmMMMMMMMM  MMMMMMMMmm'             '' MMm---   XX
//XX   yyyym'    .              'mMMMMm'  'mMMMMm'              .    'myyyy   XX
//XX   mm''    .y'     ..yyyyy..  ''''      ''''  ..yyyyy..     'y.    ''mm   XX
//XX           MN    .sMMMMMMMMMss.   .    .   .ssMMMMMMMMMs.    NM           XX
//XX           N`    MMMMMMMMMMMMMN   M    M   NMMMMMMMMMMMMM    `N           XX
//XX            +  .sMNNNNNMMMMMN+   `N    N`   +NMMMMMNNNNNMs.  +            XX
//XX              o+++     ++++Mo    M      M    oM++++     +++o              XX
//XX                                oo      oo                                XX
//XX           oM                 oo          oo                 Mo           XX
//XX         oMMo                M              M                oMMo         XX
//XX       +MMMM                 s              s                 MMMM+       XX
//XX      +MMMMM+            +++NNNN+        +NNNN+++            +MMMMM+      XX
//XX     +MMMMMMM+       ++NNMMMMMMMMN+    +NMMMMMMMMNN++       +MMMMMMM+     XX
//XX     MMMMMMMMMNN+++NNMMMMMMMMMMMMMMNNNNMMMMMMMMMMMMMMNN+++NNMMMMMMMMM     XX
//XX     yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy     XX
//XX   m  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy  m   XX
//XX   MMm yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy mMM   XX
//XX   MMMm .yyMMMMMMMMMMMMMMMM     MMMMMMMMMM     MMMMMMMMMMMMMMMMyy. mMMM   XX
//XX   MMMMd   ''''hhhhh       odddo          obbbo        hhhh''''   dMMMM   XX
//XX   MMMMMd             'hMMMMMMMMMMddddddMMMMMMMMMMh'             dMMMMM   XX
//XX   MMMMMMd              'hMMMMMMMMMMMMMMMMMMMMMMh'              dMMMMMM   XX
//XX   MMMMMMM-               ''ddMMMMMMMMMMMMMMdd''               -MMMMMMM   XX
//XX   MMMMMMMM                   '::dddddddd::'                   MMMMMMMM   XX
//XX   MMMMMMMM-                                                  -MMMMMMMM   XX
//XX   MMMMMMMMM                                                  MMMMMMMMM   XX
//XX   MMMMMMMMMy                                                yMMMMMMMMM   XX
//XX   MMMMMMMMMMy.                                            .yMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMy.                                        .yMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMy.                                    .yMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMMMs.                                .sMMMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMMMMMss.           ....           .ssMMMMMMMMMMMMMMMMMM   XX
//XX   MMMMMMMMMMMMMMMMMMMMNo         oNNNNo         oNMMMMMMMMMMMMMMMMMMMM   XX
//XX                                                                          XX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX