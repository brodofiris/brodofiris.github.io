<template>
<div class="content">
    <Sidebar />
    <Content />
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
export default {
    name: 'App',
    components: {
        Sidebar,
        Content
    }
}
</script>

<style lang="scss">
.content {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html,
body {
    background-image: url('https://i.etsystatic.com/5267511/r/il/060128/2886510705/il_fullxfull.2886510705_t2ka.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
}
</style>
