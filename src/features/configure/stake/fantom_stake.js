import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'bifi-ftm',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'FTM',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    earnContractAddress: '0x7fB900C14c9889A559C777D016a885995cE759Ee',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'FTM',
    partnership: false,
    status: 'active',
    hideCountdown: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted multi-chain Yield optimizer. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of FTM that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your FTM whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
  {
    id: 'moo_boo_ftm-tomb',
    name: 'TOMB.Finance',
    logo: 'fantom/BOO-FTM.png',
    token: 'mooBooBoo-FTM',
    tokenDecimals: 18,
    tokenAddress: '0xEe3a7c885Fd3cc5358FF583F2DAB3b8bC473316f',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-boo-ftm',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    earnContractAddress: '0x1643BC20913fA2D62C521E7cE8fFeD9e1Dd87964',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1623849473,
    partners: [
      {
        logo: 'stake/tombfinance/logo.png',
        background: 'stake/tombfinance/background.png',
        text: 'Tomb algorithmic token is the first project and the base foundation of an ecosystem that will bring utility and value for token holders. Designed by the Tomb.finance team as the first algorithmic token pegged to FTM instead of a stablecoin, on OPERA Fantom. It works around a solution that can adjust the token supply to move the price of the token itself up or down, in the direction of a target price to bring programmability and stability to the price. Inspired by Basis original idea, and its predecessors improvements (bDollar and soup), Tomb is a multi-token protocol that consists of the following tokens: Tomb (TOMB), Tomb Shares (TSHARE), and Tomb Bonds (TBOND).\n',
        website: 'https://tomb.finance',
        social: {
          telegram: 'https://t.me/tombfinance',
          twitter: 'https://twitter.com/tombfinance',
        },
      },
    ],
  },
  {
    id: 'boo-bifi-ftm-bifi',
    name: 'Beefy.Finance',
    logo: 'fantom/BIFI-FTM.png',
    token: 'mooBooBIFI-FTM',
    tokenDecimals: 18,
    tokenAddress: '0xe8188B9701E6DB1Fe24c75783474D22e5957BBEF',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-bifi-ftm',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbf07093ccd6adfc3deb259c557b61e94c1f66945',
    earnContractAddress: '0xa8b86b9AF7e844DA90A2e72840Ad01CCBD11EdC3',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1623711392,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted multi-chain Yield optimizer. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of FTM that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your FTM whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
  {
    id: 'moo_usdc-ftm-ester',
    name: 'Ester Finance',
    logo: 'fantom/USDC-FTM.png',
    token: 'mooBooFTM-USDC',
    tokenDecimals: 18,
    tokenAddress: '0x41D44B276904561Ac51855159516FD4cB2c90968',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-ftm-usdc',
    earnedToken: 'EST',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x181F3F22C9a751E2ce673498A03E1FDFC0ebBFB6',
    earnContractAddress: '0xed5010eDF8812003B7d4c9a69E7AfCBceaB62F4f',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'EST',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1622138639,
    partners: [
      {
        logo: 'stake/esterfinance/logo.png',
        background: 'stake/esterfinance/background.png',
        text: 'Ester.Finance is a Decentralized Finance (DeFi) Yield Optimizer project on the Fantom Opera Blockchain. Ester can make you earn more crypto with crypto. Through a set of smart contracts and several investment strategies, Ester.Finance automatically maximizes the user rewards from various liquidity pools (LPs), automated market-making (AMM) projects, and other yield farming opportunities in the DeFi ecosystem. This provides a huge advantage over attempting to do this manually yourself.',
        website: 'https://app.ester.finance/',
        social: {
          telegram: '',
          twitter: 'https://twitter.com/EsterFinance',
        },
      },
    ],
  },
];
