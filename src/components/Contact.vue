<template>
<div class="form-container">
    <form action="">
        <div class="form-title">
            <h3>Say hello :)</h3>
        </div>
        <div class="form-group">
            <div class="inputs">
                <label :for="name">Your name:</label>
                <input :id="name" v-model="name" type="text">
            </div>
        </div>
        <div class="form-group">
            <div class="inputs">
                <label :for="email">Your email:</label>
                <input :id="email" v-model="email" type="email">
            </div>
        </div>
        <div class="form-group">
            <div class="inputs">
                <label :for="message">Message:</label>
                <textarea :id="message" v-model="message"></textarea>
            </div>
        </div>
        <div class="form-group">
            <button>Send</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },
}
</script>

<style scoped>
.form-container {
    width: 75%;
    margin: auto;
    padding-left: 4%;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #c4d6ebc2;
}

.form-title {
    text-align: center;
}

.form-group {
    width: 100%;
    padding: 0 2%;
}

.form-group label {
    width: 90%;
    display: block;
    margin-top: 25px;
}

.form-group input {
    width: 90%;
    margin: auto;
    height: 40px;
}

.form-group textarea {
    min-width: 90%;
    max-width: 90%;
    min-height: 250px;
    margin: auto;
}

.form-group textarea,
.form-group input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    padding: 2%;
}

.form-group button {
    width: 150px;
    height: 50px;
    border-radius: 20px;
    border: none;
    color: #eef9ff;
    background-color: #607999;
    margin: 2em auto;
    font-weight: bold;
}

.form-group button:hover {
    background-color: #7391b8;
}
</style>
