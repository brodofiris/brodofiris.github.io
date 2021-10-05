<template>
<div class="preview-col">
    <div class="preview-img" :style="style"></div>
    <div class="preview-name">
        <h3>{{ preview.name }}</h3>
    </div>
    <div class="preview-desc">
        <p>{{ preview.description }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Preview',
    props: {
        preview: Object
    },
    computed: {
        style() {
            return 'background-image:url("' + this.preview.img + '")';
        }
    }
}
</script>

<style scoped>
.preview-col {
    width: 29%;
    margin: 2%;
    text-align: center;
    transition: transform .2s;
    background-color: #eefcff;
    border-radius: 25px;
}

.preview-desc {
    padding: 2%;
}

.preview-col:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.preview-col>.preview-img {
    height: 250px;
    margin: auto;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
