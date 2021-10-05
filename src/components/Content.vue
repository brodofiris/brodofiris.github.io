<template>
<section>
    <div class="content-view">
        <router-view />
    </div>
</section>
</template>

<script>
export default {
    name: 'Content',
}
</script>

<style scoped>
@media (max-width: 1200px) {
    section {
        width: 100vw !important;
        margin-top: 100vh;
    }
}

section {
    width: 70%;
    min-height: 100%;
    right: 0;
    top: 0;
    display: inline-block;
    position: absolute;
    color: #415268;
}

.content-view {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2%;
    overflow: auto;
}
</style>
