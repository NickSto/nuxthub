<template>
  <p>
    <img :src="imgSrc()" :alt="alt" />
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      console.log("postPath: "+this.postPath);
      for (let [key, value] of Object.entries(this)) {
        let type = typeof value;
        if (type === "string" || key === "src") {
          console.log(`${(key+":").padEnd(20)} ${type}`);
        }
      }
      // for (let [key, value] of Object.entries(this)) {
      //   let type = typeof value;
      //   console.log(`${(key+":").padEnd(20)} ${type}`);
      //   if (type === 'object') {
      //     for (let [key, value2] of Object.entries(value)) {
      //       let type = typeof value2;
      //       console.log(`  ${(key+":").padEnd(20)} ${type}`);
      //     }
      //   }
      // }
      try {
        return require(`~/content${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>
