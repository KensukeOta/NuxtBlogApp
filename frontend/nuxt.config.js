const environment = process.env.NODE_ENV || 'development';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtBlogApp',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/bootstrap.min.css',
    '~/assets/scss/app.scss',
  ],

  script: [
    {
      src: "~/assets/bootstrap/bootstrap.bundle.min.js",
      type: "text/javascript"
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
  ],

  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
  },

  // proxy: {
  //   '/api': (environment === 'development') ? 'http://localhost:8080' : 'https://api.example.com'
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    baseURL: "http://localhost:8080",
    credentials: true,
  },

  auth: {
    redirect: {
      login: '/login',  //  ログインが必要な場合、ユーザーはこのパスにリダイレクトされる
      logout: '/login', //  ログアウト後に現在のルートが保護されている場合、ユーザーはこのパスにリダイレクトされる
      callback: false,  //  ログイン後、ユーザーはIDプロバイダーによってこのパスにリダイレクトされる
      home: '/'         //  ログイン後、ユーザーはこのパスにリダイレクトされる
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: false },
          user: { url: '/api/user', method: 'get', propertyName: false },
          logout: { url: '/api/logout', method: 'post', propertyName: false },
        },
        tokenRequired: false,
        tokenType: false,
      }
    },
    localStorage: false,
  },
  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
