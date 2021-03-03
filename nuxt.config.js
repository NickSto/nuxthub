export default {
  modules: [
    '@nuxt/content'
  ],
  components: true,
  build: {
    // Solution from https://github.com/nuxt/content/issues/106#issuecomment-666283547
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'ignore-loader',
      })
    }
  }
}
