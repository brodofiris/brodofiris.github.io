<template>
<div class="projects">
    <div class="title">
        <h2>Projects</h2>
    </div>
    <div class="projects-row">
        <Preview class="projects-col" v-for="project in projects" v-bind:key="project" v-bind:preview="project" v-on:click="openLink(project.url)" />
    </div>
</div>
</template>

<script>
import Preview from './Preview.vue'
export default {
    name: 'Projects',
    components: {
        Preview
    },
    created() {
        this.fetchProjects();
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            fetch('https://api.github.com/users/brodofiris/repos?sort=created', {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    data.forEach(proj => {
                        let project = {
                            name: proj.name,
                            description: proj.description,
                            url: proj.html_url,
                            img: 'https://lukaszadam.com/assets/downloads/desk-illustration-2.svg'
                        };
                        this.projects.push(project)
                    })

                }).catch(error => {
                    console.log(error)
                })
        },
        openLink(url) {
            window.open(url, "_blank");
        }
    }
}
</script>

<style>
@media (max-width: 1200px) {
    .projects-col {
        width: 90% !important;
    }
}

.projects {
    margin: 3em;
}

.projects-col:hover {
    cursor: pointer;
}

.title {
    width: 100% !important;
    margin: auto;
}

.projects-row {
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

h2 {
    text-align: center;
}
</style>
