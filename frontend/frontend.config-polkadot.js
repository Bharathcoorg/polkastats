export const config = {
  id: 'edgeware',
  name: 'Edgeware',
  tokenSymbol: 'EDG',
  tokenDecimals: 18,
  ss58Format: 0,
  coinGeckoDenom: 'edgeware',
  nodeWs: 'wss://edgeware.api.onfinality.io/public',
  backendWs: 'wss://edgscan.live/graphql',
  backendHttp: 'https://edgscan.live/graphql',
  backendAPI: 'https://edgscan.live',
  googleAnalytics: 'UA-144344973-1',
  theme: '@/assets/scss/themes/polkastats.scss',
  // ranking
  historySize: 84, // 84 days
  erasPerDay: 1,
  validatorSetSize: 24,
}

export const links = {
  account: [
    {
      name: 'SubID',
      path: 'https://sub.id/',
      icon: 'subid.svg',
    },
    {
      name: 'Subscan',
      path: 'https://edgeware.subscan.io/account/',
      icon: 'subscan.svg',
    },
  ],
  validator: [
    {
      name: 'Polkadot JS Apps',
      path: 'https://polkadot.js.org/apps/?rpc=wss://edgeware.api.onfinality.io/public#/staking/query/',
      icon: 'polkadot-js.png',
    },
    {
      name: 'Subscan',
      path: 'https://edgeware.subscan.io/validator/',
      icon: 'subscan.svg',
    },
  ],
}

export const paginationOptions = [10, 20, 50, 100]
