const blobsPath = "/blobs";
const currenciesPath = "/currency_logos";
const decorPath = "/decor";
const uiPath = "/ui";
const uiIconsPath = `${uiPath}/icons`;
const uiSocialMediaPath = `${uiPath}/social_media`;

const links = {
  socialMediaLinkX: "https://www.x.com",
  socialMediaLinkDiscord: "https://www.discord.com",
  openseaCollectionPage: "https://www.opensea.io",
  public: {
    blobs: {
      placeholderBlob: `${blobsPath}/placeholder_blob.png`,
      rockerBlob: `${blobsPath}/rocker_blob.svg`,
    },
    currencies: {
      polygon: `${currenciesPath}/polygon.svg`,
    },
    decor: {
      fourPointStarAnim: `${decorPath}/four_point_star.gif`,
      fourPointStarStatic: `${decorPath}/four_point_star.png`,
      notFound: `${decorPath}/not_found.svg`,
    },
    ui: {
      icons: {
        home: `${uiIconsPath}/home.gif`,
        arrow: `${uiIconsPath}/arrow.gif`,
        speechBubble: `${uiIconsPath}/speech_bubble.gif`,
      },
      socialMedia: {
        discordPng: `${uiSocialMediaPath}/discord.png`,
        discordSvg: `${uiSocialMediaPath}/discord.svg`,
        xPng: `${uiSocialMediaPath}/x.png`,
        xSvg: `${uiSocialMediaPath}/x.svg`,
      },
    },
  },
};

export default links;
