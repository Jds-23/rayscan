export type NetworkConfig = {
  imageUrl: string;
  networkName: string;
  chainId: string;
  httpsUrl: string | null;
  slug: string | null;
};

export type NetworkConfigMap = {
  [chainId: string]: NetworkConfig;
};

export const network_configs: NetworkConfigMap = {
  "1": {
    imageUrl: "https://docs.tenderly.co/images/networks/mainnet.png",
    networkName: "Ethereum Mainnet",
    chainId: "1",
    httpsUrl: "https://mainnet.gateway.tenderly.co",
    slug: "mainnet",
  },
  "10": {
    imageUrl: "https://docs.tenderly.co/assets/image (87) (1) (1) (1) (1).webp",
    networkName: "Optimistic Ethereum",
    chainId: "10",
    httpsUrl: "https://optimism.gateway.tenderly.co",
    slug: "optimism",
  },
  "30": {
    imageUrl: "https://docs.tenderly.co/assets/image (83) (1) (1) (1).webp",
    networkName: "RSK",
    chainId: "30",
    httpsUrl: null,
    slug: null,
  },
  "31": {
    imageUrl: "https://docs.tenderly.co/assets/image (71).webp",
    networkName: "RSK Testnet",
    chainId: "31",
    httpsUrl: null,
    slug: null,
  },
  "56": {
    imageUrl: "https://docs.tenderly.co/assets/image (82) (1) (1) (1).webp",
    networkName: "BNB",
    chainId: "56",
    httpsUrl: null,
    slug: null,
  },
  "97": {
    imageUrl: "https://docs.tenderly.co/assets/image (76) (1) (1) (1).webp",
    networkName: "BNB Testnet",
    chainId: "97",
    httpsUrl: null,
    slug: null,
  },
  "100": {
    imageUrl: "https://docs.tenderly.co/images/networks/gnosis.webp",
    networkName: "Gnosis Chain",
    chainId: "100",
    httpsUrl: null,
    slug: null,
  },
  "137": {
    imageUrl: "https://docs.tenderly.co/images/networks/polygon.webp",
    networkName: "Polygon",
    chainId: "137",
    httpsUrl: "https://polygon.gateway.tenderly.co",
    slug: "polygon",
  },
  "250": {
    imageUrl: "https://docs.tenderly.co/assets/image (77) (1) (1).webp",
    networkName: "Fantom",
    chainId: "250",
    httpsUrl: null,
    slug: null,
  },
  "252": {
    imageUrl: "https://docs.tenderly.co/images/networks/fraxtal.webp",
    networkName: "Fraxtal",
    chainId: "252",
    httpsUrl: "https://fraxtal.gateway.tenderly.co",
    slug: "fraxtal",
  },
  "288": {
    imageUrl: "https://docs.tenderly.co/images/networks/boba-ethereum.webp",
    networkName: "Boba Ethereum",
    chainId: "288",
    httpsUrl: "https://boba-ethereum.gateway.tenderly.co",
    slug: "boba-ethereum",
  },
  "919": {
    imageUrl: "https://docs.tenderly.co/images/networks/mode-sepolia.webp",
    networkName: "Mode Sepolia",
    chainId: "919",
    httpsUrl: "https://mode-sepolia.gateway.tenderly.co",
    slug: "mode-sepolia",
  },
  "1135": {
    imageUrl: "https://docs.tenderly.co/images/networks/lisk.png",
    networkName: "Lisk",
    chainId: "1135",
    httpsUrl: "https://lisk.gateway.tenderly.co",
    slug: "lisk",
  },
  "1284": {
    imageUrl: "https://docs.tenderly.co/images/networks/moonbeam.webp",
    networkName: "Moonbeam",
    chainId: "1284",
    httpsUrl: null,
    slug: null,
  },
  "1285": {
    imageUrl: "https://docs.tenderly.co/images/networks/moonriver.webp",
    networkName: "Moonriver",
    chainId: "1285",
    httpsUrl: null,
    slug: null,
  },
  "1287": {
    imageUrl: "https://docs.tenderly.co/images/networks/moonbase_alpha.webp",
    networkName: "Moonbase Alpha",
    chainId: "1287",
    httpsUrl: null,
    slug: null,
  },
  "2522": {
    imageUrl: "https://docs.tenderly.co/images/networks/fraxtal-holesky.webp",
    networkName: "Fraxtal Holesky",
    chainId: "2522",
    httpsUrl: "https://fraxtal-holesky.gateway.tenderly.co",
    slug: "fraxtal-holesky",
  },
  "2810": {
    imageUrl: "https://docs.tenderly.co/images/networks/morph-holesky.png",
    networkName: "Morph Holesky",
    chainId: "2810",
    httpsUrl: "https://morph-holesky.gateway.tenderly.co",
    slug: "morph-holesky",
  },
  "4002": {
    imageUrl: "https://docs.tenderly.co/assets/image (78) (1) (1).webp",
    networkName: "Fantom Testnet",
    chainId: "4002",
    httpsUrl: null,
    slug: null,
  },
  "4202": {
    imageUrl: "https://docs.tenderly.co/images/networks/lisk-sepolia.png",
    networkName: "Lisk Sepolia",
    chainId: "4202",
    httpsUrl: "https://lisk-sepolia.gateway.tenderly.co",
    slug: "lisk-sepolia",
  },
  "4653": {
    imageUrl: "https://docs.tenderly.co/images/networks/gold.png",
    networkName: "Gold",
    chainId: "4653",
    httpsUrl: "https://gold.gateway.tenderly.co",
    slug: "gold",
  },
  "5000": {
    imageUrl: "https://docs.tenderly.co/images/networks/mantle.webp",
    networkName: "Mantle",
    chainId: "5000",
    httpsUrl: null,
    slug: null,
  },
  "5003": {
    imageUrl: "https://docs.tenderly.co/images/networks/mantle-sepolia.webp",
    networkName: "Mantle Sepolia",
    chainId: "5003",
    httpsUrl: null,
    slug: null,
  },
  "7000": {
    imageUrl: "https://docs.tenderly.co/images/networks/zetachain.png",
    networkName: "ZetaChain",
    chainId: "7000",
    httpsUrl: null,
    slug: null,
  },
  "7001": {
    imageUrl: "https://docs.tenderly.co/images/networks/zetachain-testnet.png",
    networkName: "ZetaChain Testnet",
    chainId: "7001",
    httpsUrl: null,
    slug: null,
  },
  "8453": {
    imageUrl: "https://docs.tenderly.co/assets/base mainnet.webp",
    networkName: "Base Mainnet",
    chainId: "8453",
    httpsUrl: "https://base.gateway.tenderly.co",
    slug: "base",
  },
  "9728": {
    imageUrl: "https://docs.tenderly.co/images/networks/boba-bnb-testnet.webp",
    networkName: "Boba BNB Testnet",
    chainId: "9728",
    httpsUrl: "https://boba-bnb-testnet.gateway.tenderly.co",
    slug: "boba-bnb-testnet",
  },
  "13371": {
    imageUrl: "https://docs.tenderly.co/images/networks/immutable.webp",
    networkName: "Immutable",
    chainId: "13371",
    httpsUrl: "https://immutable.gateway.tenderly.co",
    slug: "immutable",
  },
  "13473": {
    imageUrl: "https://docs.tenderly.co/images/networks/immutable-testnet.webp",
    networkName: "Immutable Testnet",
    chainId: "13473",
    httpsUrl: "https://immutable-testnet.gateway.tenderly.co",
    slug: "immutable-testnet",
  },
  "17000": {
    imageUrl: "https://docs.tenderly.co/assets/holesky.webp",
    networkName: "Ethereum Holesky",
    chainId: "17000",
    httpsUrl: "https://holesky.gateway.tenderly.co",
    slug: "holesky",
  },
  "18233": {
    imageUrl: "https://docs.tenderly.co/images/networks/unreal.svg",
    networkName: "Unreal",
    chainId: "18233",
    httpsUrl: "https://tangible-unreal.gateway.tenderly.co/",
    slug: "tangible-unreal",
  },
  "18291": {
    imageUrl: "https://docs.tenderly.co/images/networks/concrete-testnet.png",
    networkName: "Concrete Testnet",
    chainId: "18291",
    httpsUrl: "https://concrete-testnet.gateway.tenderly.co/",
    slug: "concrete-testnet",
  },
  "28882": {
    imageUrl: "https://docs.tenderly.co/images/networks/boba-sepolia.webp",
    networkName: "Boba Sepolia",
    chainId: "28882",
    httpsUrl: "https://boba-sepolia.gateway.tenderly.co/",
    slug: "boba-sepolia",
  },
  "34443": {
    imageUrl: "https://docs.tenderly.co/images/networks/mode.webp",
    networkName: "Mode",
    chainId: "34443",
    httpsUrl: "https://mode.gateway.tenderly.co",
    slug: "mode",
  },
  "42161": {
    imageUrl: "https://docs.tenderly.co/assets/image (93) (1) (1).webp",
    networkName: "Arbitrum One",
    chainId: "42161",
    httpsUrl: "https://arbitrum.gateway.tenderly.co",
    slug: "arbitrum",
  },
  "42170": {
    imageUrl: "https://docs.tenderly.co/assets/image (118).webp",
    networkName: "Arbitrum Nova",
    chainId: "42170",
    httpsUrl: "https://arbitrum-nova.gateway.tenderly.co",
    slug: "arbitrum-nova",
  },
  "43113": {
    imageUrl: "https://docs.tenderly.co/assets/image (79) (1) (1).webp",
    networkName: "Avalanche C-Chain Fuji",
    chainId: "43113",
    httpsUrl: null,
    slug: null,
  },
  "43114": {
    imageUrl: "https://docs.tenderly.co/assets/image (81) (1) (1).webp",
    networkName: "Avalanche C-Chain",
    chainId: "43114",
    httpsUrl: null,
    slug: null,
  },
  "56288": {
    imageUrl: "https://docs.tenderly.co/images/networks/boba-bnb.webp",
    networkName: "Boba BNB",
    chainId: "56288",
    httpsUrl: "https://boba-bnb.gateway.tenderly.co",
    slug: "boba-bnb",
  },
  "59141": {
    imageUrl: "https://docs.tenderly.co/images/networks/linea-sepolia.png",
    networkName: "Linea Sepolia",
    chainId: "59141",
    httpsUrl: null,
    slug: null,
  },
  "59144": {
    imageUrl: "https://docs.tenderly.co/images/networks/linea.png",
    networkName: "Linea",
    chainId: "59144",
    httpsUrl: null,
    slug: null,
  },
  "60808": {
    imageUrl: "https://docs.tenderly.co/images/networks/bob.png",
    networkName: "Bob",
    chainId: "60808",
    httpsUrl: "https://bob-sepolia.gateway.tenderly.co/",
    slug: "bob-sepolia",
  },
  "80002": {
    imageUrl: "https://docs.tenderly.co/images/networks/polygon.webp",
    networkName: "Polygon Amoy",
    chainId: "80002",
    httpsUrl: "https://polygon-amoy.gateway.tenderly.co",
    slug: "polygon-amoy",
  },
  "81457": {
    imageUrl: "https://docs.tenderly.co/images/networks/blast.svg",
    networkName: "Blast",
    chainId: "81457",
    httpsUrl: "https://blast.gateway.tenderly.co/",
    slug: "blast",
  },
  "84532": {
    imageUrl: "https://docs.tenderly.co/images/networks/base-sepolia.webp",
    networkName: "Base Sepolia",
    chainId: "84532",
    httpsUrl: "https://base-sepolia.gateway.tenderly.co",
    slug: "base-sepolia",
  },
  "111188": {
    imageUrl: "https://docs.tenderly.co/images/networks/real.webp",
    networkName: "Real",
    chainId: "111188",
    httpsUrl: "https://tangible-real.gateway.tenderly.co/",
    slug: "tangible-real",
  },
  "421614": {
    imageUrl: "https://docs.tenderly.co/images/networks/arbitrum-sepolia.webp",
    networkName: "Arbitrum Sepolia",
    chainId: "421614",
    httpsUrl: "https://arbitrum-sepolia.gateway.tenderly.co",
    slug: "arbitrum-sepolia",
  },
  "7777777": {
    imageUrl: "https://docs.tenderly.co/assets/zora.webp",
    networkName: "Zora",
    chainId: "7777777",
    httpsUrl: null,
    slug: null,
  },
  "11155111": {
    imageUrl: "https://docs.tenderly.co/images/networks/sepolia.png",
    networkName: "Ethereum Sepolia",
    chainId: "11155111",
    httpsUrl: "https://sepolia.gateway.tenderly.co",
    slug: "sepolia",
  },
  "11155420": {
    imageUrl: "https://docs.tenderly.co/images/networks/optimistic-sepolia.webp",
    networkName: "Optimistic Sepolia",
    chainId: "11155420",
    httpsUrl: "https://optimism-sepolia.gateway.tenderly.co",
    slug: "optimism-sepolia",
  },
  "999999999": {
    imageUrl: "https://docs.tenderly.co/images/networks/zora-sepolia.webp",
    networkName: "Zora Sepolia",
    chainId: "999999999",
    httpsUrl: null,
    slug: null,
  },
};
