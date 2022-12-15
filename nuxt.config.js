import nuxtConfig from '@wiopriph/eslint-config/src/nuxt-config';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Triângulo',
    title: 'default title',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  styleResources: {
    scss: ['~/assets/scss/index.scss'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global.scss'],

  // Google fonts https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 500, 700, 900],
      },
    },
    display: 'swap',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'public',

    splitChunks: {
      pages: true,
      layouts: true,
      commons: true,
    },

    optimizeCSS: true,
    cssSourceMap: false,

    postcss: {
      plugins: {
        'postcss-preset-env': {},
        'postcss-import': {},
        'postcss-url': {},
        'postcss-nested': {},
        'postcss-sorting': {},
        'postcss-merge-rules': {},
        cssnano: {
          preset: ['advanced', { zindex: false }],
        },
      },
      order: 'presetEnvAndCssnanoLast',
      preset: {
        autoprefixer: {
          overrideBrowserslist: ['last 3 versions', '> 1%'],
        },
      },
    },

    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },

    loaders: {
      cssModules: {
        modules: {
          localIdentName:
            process.env.NODE_ENV === 'production'
              ? '[hash:base64:8]'
              : '[name]__[local]--[hash:base64:5]',
        },
      },
    },
  },

  extend(config, { isClient, isDev }) {
    config.resolve.alias.vue = 'vue/dist/vue.common';

    nuxtConfig({ isClient, config, isDev });
  },
};
