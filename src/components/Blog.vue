<!--<template>
<div class="blog-posts">
    <div class="blog-posts-row">
        <Preview class="blog-posts-col" :preview="this.blog" v-on:click="openLink(this.blog.url)" />
    </div>
</div>
</template>!-->

<template>

<div class="row-blog"> 
  <div class="column-blog">
    <img src="../assets/drawings/se3.jpg" style="width:100%">
    <img src="../assets/drawings/strange0.png" style="width:100%">
    <img src="../assets/drawing/girl2.png" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
  </div>
  <div class="column-blog">
    <img src="../assets/drawings/se3.jpg" style="width:100%">
    <img src="../assets/drawings/strange0.png" style="width:100%">
    <img src="../assets/drawing/girl2.png" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
  </div>  
  <div class="column-blog">
    <img src="../assets/drawings/se3.jpg" style="width:100%">
    <img src="../assets/drawings/strange0.png" style="width:100%">
    <img src="../assets/drawing/girl2.png" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
  </div>
  <div class="column-blog">
    <img src="../assets/drawings/se3.jpg" style="width:100%">
    <img src="../assets/drawings/strange0.png" style="width:100%">
    <img src="../assets/drawing/girl2.png" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
    <img src="../assets/drawings/layinf-anim.gif" style="width:100%">
    <img src="../assets/drawings/women.jpg" style="width:100%">
  </div>
</div>
</template>


<script>
/*import Preview from './Preview.vue'
export default {
    name: 'Blog',
    components: {
        Preview
    },
    data() {
        return {
            blog: {
                name: 'Blog',
                img: 'https://lukaszadam.com/assets/downloads/old-computer-illustration.png',
                description: 'Read my blog...',
                url: 'https://matween.wordpress.com/'
            }
        }
    },
    methods: {
        openLink(url) {
            window.open(url, "_blank");
        }
    }
}*/
</script>

<style>


.row-blog {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column-blog {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column-blog img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}


/*@media (max-width: 1200px) {
    .blog-posts-col {
        width: 90% !important;
    }
}

.blog-posts {
    margin: 3em;
}

.title {
    width: 100% !important;
    margin: auto;
}

.blog-posts-row {
    width: 100%;
    margin: auto;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: wrap row;
    flex-flow: wrap row;
    align-items: center;
    justify-content: center;
}

.blog-posts-col {
    width: 350px !important;
}

.blog-posts-col:hover {
    cursor: pointer;
}

h2 {
    text-align: center;
}*/
</style>
