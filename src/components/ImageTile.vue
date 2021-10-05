<template>
<div class="image-tile">
    <img class="image-round" v-bind:src="image" alt="">
    <div class="image-title">
        <span>{{ fullName }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'ImageTile',
    props: {
        image: String,
        fullName: String
    }
}
</script>

<style lang="css">
@media (max-width: 1200px) {
    .image-round {
        width: 30vw !important;
        height: 30vw !important;
    }
}

.image-round {
    width: 9vw;
    height: 9vw;
    border-radius: 50%;
    border: 1em double #eef9ff;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    -webkit-transition: -webkit-transform .8s ease-in-out;
    transition: transform .8s ease-in-out;
}

.image-round:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}

.image-title {
    margin-top: 1em;
    text-align: center;
    font-weight: bold;
    color: #eef9ff;
    font-size: 2.5vw;
}
</style>
