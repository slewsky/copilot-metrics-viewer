// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync } from "fs";
const packageJson = readFileSync("package.json", "utf8");
const version = JSON.parse(packageJson).version;

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  ssr: true,

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
    }
  },

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false
  },

  build: {
    transpile: ["vuetify"]
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  },

  css: [],
  modules: [
    "@nuxt/fonts",
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "nuxt-auth-utils"
  ],

  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false
        }
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: "assets/settings.scss"
      }
    }
  },

  auth: {
    github: {
      enabled: true,
      clientId: "",
      clientSecret: ""
    }
  },
  nitro: {
    plugins: ["plugins/http-agent"]
  },
  runtimeConfig: {
    githubToken: process.env.NUXT_GITHUB_TOKEN || "placeholder",
    session: {
      maxAge: 60 * 60 * 6,
      password: process.env.NUXT_SESSION_PASSWORD || "placeholder"
    },
    oauth: {
      github: {
        clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID || "placeholder",
        clientSecret:
          process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET || "placeholder"
      }
    },
    public: {
      isDataMocked: process.env.NUXT_PUBLIC_IS_DATA_MOCKED === "true",
      scope: process.env.NUXT_PUBLIC_SCOPE || "organization",
      githubOrg: process.env.NUXT_PUBLIC_GITHUB_ORG || "",
      githubEnt: process.env.NUXT_PUBLIC_GITHUB_ENT || "",
      githubTeam: process.env.NUXT_PUBLIC_GITHUB_TEAM || "",
      usingGithubAuth: process.env.NUXT_PUBLIC_USING_GITHUB_AUTH === "true",
      version,
      isPublicApp: process.env.NUXT_PUBLIC_IS_PUBLIC_APP === "true"
    }
  }
});
