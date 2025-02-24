import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WETH9, WXTZ } from '@pancakeswap/sdk'
import { IGN, USDC, USDT } from './common'

export const etherlinkTokens = {
  wxtz: WXTZ[ChainId.ETHERLINK],
  ign: IGN[ChainId.ETHERLINK],
  usdt: USDT[ChainId.ETHERLINK],
  usdc: USDC[ChainId.ETHERLINK],
  weth: WETH9[ChainId.ETHERLINK],
  wbtc: new ERC20Token(
    ChainId.ETHERLINK,
    '0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F',
    8,
    'WBTC',
    'Wrapped BTC',
    'https://www.wbtc.network/',
  ),
  wbnb: new ERC20Token(
    ChainId.ETHERLINK,
    '0xaA40A1cc1561c584B675cbD12F1423A32E2a0d8C',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org/',
  ),
  wavax: new ERC20Token(ChainId.ETHERLINK, '0xe820995cD39B6E09EAa7e4e16337184b4A61B644', 18, 'WAVAX', 'Wrapped AVAX'),
  shib: new ERC20Token(ChainId.ETHERLINK, '0xBBD1F50A212357067318a84179892684e1Ac5181', 18, 'SHIB', 'SHIBA INU'),
  mood: new ERC20Token(
    ChainId.ETHERLINK,
    '0xd08B30c1EdA1284cD70E73F29ba27B5315aCc3F9',
    18,
    'MOOD',
    'MOOD',
    'https://www.degeneratives.art/',
  ),
  tzpepe: new ERC20Token(ChainId.ETHERLINK, '0x9121B153bbCF8C23F20eE43b494F08760B91aD64', 2, 'tzPEPE', 'TEZOS PEPE'),
  mtbill: new ERC20Token(
    ChainId.ETHERLINK,
    '0xDD629E5241CbC5919847783e6C96B2De4754e438',
    18,
    'mTBILL',
    'Midas US Treasury Bill Token',
    'https://midas.app/',
  ),
  mbasis: new ERC20Token(
    ChainId.ETHERLINK,
    '0x2247B5A46BB79421a314aB0f0b67fFd11dd37Ee4',
    18,
    'mBASIS',
    'Midas Basis Trading Token',
    'https://midas.app/',
  ),
}
