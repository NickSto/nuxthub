export default {
  modules: [
    '@nuxt/content'
  ],
  components: true,
  content: {
    markdown: {
      remarkPlugins: [
        'remark-attr'
      ]
    }
  }
}
