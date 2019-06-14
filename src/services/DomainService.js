export const domainService = {
  getApiDomain,
  getMercureDomain,
};

function getApiDomain() {
  let domain = document.domain;
  let prodApiDomain = 'https://api.tavernofcho.com';
  let devApiDomain = 'https://127.0.0.1:8052';

  switch(domain) {
    case '127.0.0.1':
      return domain = devApiDomain;
    case 'tavernofcho.com':
      return domain = prodApiDomain;
    default:
      return domain = null;
  }
}

function getMercureDomain() {
  let domain = document.domain;
  let prodMercureDomain = 'https://api.tavernofcho.com';
  let devMercureDomain = 'https://127.0.0.1:8052';

  switch(domain) {
    case '127.0.0.1':
      return domain = devMercureDomain;
    case 'tavernofcho.com':
      return domain = prodMercureDomain;
    default:
      return domain = null;
  }
}
