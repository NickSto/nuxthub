<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.relPath } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    async asyncData({ $content }) {
      const articles = await $content('articles', { deep: true })
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()
      articles.forEach(article => {
        article.relPath = article.path.split("/").slice(2).join("/")
      })
      return {
        articles
      }
    }
  }
</script>

