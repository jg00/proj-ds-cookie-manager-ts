(function (window, document) {
  "use strict";

  let CookieManager = {
    // Name and value required
    set: function (name, value, expires, domain, path, secure) {
      let cookieStr = name + "=" + value;

      if (expires) {
        const now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ";" + "expires=" + now.toUTCString();
      }

      if (domain) {
        cookieStr += ";" + "domain=" + domain;
      }

      if (path) {
        cookieStr += ";" + "path=" + path;
      }

      if (secure) {
        cookieStr += ";" + "secure";
      }

      document.cookie = cookieStr;
    },

    get: function (name) {
      const cookies = document.cookie.split(";").map(function (cookie) {
        return cookie.trim();
      });
      console.log(cookies);

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];
        const value = cookie[1];

        if (key === name) {
          return value;
        }
      }

      return undefined;
    },

    update: function (name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },

    remove: function (name) {
      this.set(name, "", -1);
    },

    // Return [{key:value}, ..]
    getAll: function () {
      const cookies = document.cookie.split(";").map(function (cookie) {
        return cookie.trim();
      });

      const cookiesList = [];

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];
        const value = cookie[1];

        cookiesList.push({ key, value });
      }

      return cookiesList;
    },

    // Remove all cookies
    clear: function () {
      const cookies = document.cookie.split(";").map(function (cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];

        this.remove(key);
      }
    },
  };

  // Export your module using AMD, CommonJS, Node.js or just as global.
  // https://gist.github.com/CrocoDillon/9990078
  // Asynchronous Module Definition support
  if (typeof define === "function" && define.amd) {
    define(function () {
      return CookieManager;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== "undefined") {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = CookieManager;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.CookieManager = CookieManager;
  } else {
    window.CookieManager = CookieManager;
  }
})(window, document);

/*
  Create a local scope for our library which is independent from the
  environment in which it is created.

  We are sending our window and document objects to our 'local scope' inside of our IIF
  and we are assigning CookieManger to window global scope.

  Idea is we will create our functions inside of the CookieManager object.
*/
