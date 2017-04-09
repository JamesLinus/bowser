import {
  getFirstMatch
} from './utils';

const commonVersionIdentifier = /version\/(\d+(\.\d+)?)/i;

const browsersList = [
  {
    test: [/opera/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:opera)[\s\/](\d+(\.\d+)?)/i, ua);

      return {
        name: 'Opera',
        version
      };
    }
  },
  {
    test: [/opr|opios/i],
    detect(ua) {
      const version = getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i, ua) || getFirstMatch(commonVersionIdentifier, ua);

      return {
        name: 'Opera',
        version
      };
    }
  },
  {
    test: [/SamsungBrowser/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i, ua);

      return {
        name: 'Samsung Internet for Android',
        version
      };
    }
  },
  {
    test: [/coast/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i, ua);

      return {
        name: 'Opera Coast',
        version
      };
    }
  },
  {
    test: [/yabrowser/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i, ua);

      return {
        name: 'Yandex Browser',
        version
      };
    }
  },
  {
    test: [/ucbrowser/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i, ua);

      return {
        name: 'UC Browser',
        version
      };
    }
  },
  {
    test: [/mxios/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i, ua);

      return {
        name: 'Maxthon',
        version
      };
    }
  },
  {
    test: [/epiphany/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i, ua);

      return {
        name: 'Epiphany',
        version
      };
    }
  },
  {
    test: [/puffin/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i, ua);

      return {
        name: 'Puffin',
        version
      };
    }
  },
  {
    test: [/sleipnir/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i, ua);

      return {
        name: 'Sleipnir',
        version
      };
    }
  },
  {
    test: [/k-meleon/i],
    detect(ua) {
      const version = getFirstMatch(commonVersionIdentifier, ua) || getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i, ua);

      return {
        name: 'K-Meleon',
        version
      };
    }
  },
  {
    test: [/msie|trident/i],
    detect(ua) {
      const version = getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i, ua);

      return {
        name: 'Internet Explorer',
        version
      };
    }
  },
  {
    test: [/chrome.+? edge/i],
    detect(ua) {
      const version = getFirstMatch(/edge\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'Microsoft Edge',
        version
      }
    }
  },
  {
    test: [/vivaldi/i],
    detect(ua) {
      const version = getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'Vivaldi',
        version
      }
    }
  },
  {
    test: [/seamonkey/i],
    detect(ua) {
      const version = getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i, ua);
      return {
        name: 'SeaMonkey',
        version
      }
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    detect(ua) {
      const version = getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i, ua);
      return {
        name: 'Firefox'
      }
    }
  },
  {
    test: [/silk/i],
    detect(ua) {
      const version = getFirstMatch(/silk\/(\d+(\.\d+)?)/i, ua);
      return {
        name: 'Amazon Silk',
        version
      }
    }
  },
  {
    test: [/phantom/i],
    detect(ua) {
      const version = getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'PhantomJS',
        version
      }
    }
  },
  {
    test: [/slimerjs/i],
    detect(ua) {
      const version = getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'SlimerJS',
        version
      }
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    detect(ua) {
      const version = commonVersionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'BlackBerry',
        version
      }
    }
  },
  {
    test: [/(web|hpw)os/i],
    detect(ua) {
      const version = commonVersionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'WebOS Browser',
        version
      }
    }
  },
  {
    test: [/bada/i],
    detect(ua) {
      const version = getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'Bada',
        version
      }
    }
  },
  {
    test: [/tizen/i],
    detect(ua) {
      const version = getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i, ua) || commonVersionIdentifier;

      return {
        name: 'Tizen',
        version
      }
    }
  },
  {
    test: [/qupzilla/i],
    detect(ua) {
      const version = getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i, ua) || commonVersionIdentifier;

      return {
        name: 'QupZilla',
        version
      }
    }
  },
  {
    test: [/chromium/i],
    detect(ua) {
      const version = getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i, ua) || commonVersionIdentifier;

      return {
        name: 'Chromium',
        version
      }
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    detect(ua) {
      const version = getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i, ua);

      return {
        name: 'Chrome',
        version
      }
    }
  },
  {
    test(parser) {
      const UA = parser.getUA();
      return UA.test(/^((?!like android).)*$/i);
    },
    detect(ua) {
      const version = /phantomjs\/(\d+(\.\d+)?)/i;

      return {
        name: 'PhantomJS',
        version
      }
    }
  },
  {
    test: [/phantom/i],
    detect(ua) {
      const version = /phantomjs\/(\d+(\.\d+)?)/i;

      return {
        name: 'PhantomJS',
        version
      }
    }
  },
];

export default browsersList;