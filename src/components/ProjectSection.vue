<script setup lang="ts">

import { computed, ref } from 'vue';
import { Project } from '../Project';
import { Tag } from '../Tag';
import ProjectCard from './ProjectCard.vue';
import CenteredCard from './CenteredCard.vue';

let props = defineProps<{
    tags: Tag[],
    projects: Project[]
}>()

const noneTag: Tag = { name: "none" }
let currentFilter = ref<Tag>(noneTag)

let filteredList = computed(() => (currentFilter.value.name != "none" ?
    props.projects.filter(project => project.tags.filter(t => t.name == currentFilter.value.name).length > 0) :
    props.projects
).reduce((result: Project[][], value, index, array) => {
    if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
    return result;
}, [])
)
</script>

<template>
    <div id="project-section-container">
        <CenteredCard style="background-color: transparent; margin-top: 3.5vh; margin-bottom: 2vh">
            <!-- :backgroundColor="'transparent'" -->
            <div id="title">Projects and Products</div>
        </CenteredCard>
        <div id="filter-row">
            <div v-for="tag in tags" v-bind:key="tag.name" v-on:click="() => {
                if (currentFilter.name == tag.name)
                    currentFilter = noneTag
                else
                    currentFilter = tag
            }" :class="['filter-tag', { selected: currentFilter.name === tag.name }]">
                {{ tag.name }}
            </div>
        </div>
        <div id="projects-container">
            <!-- <ProjectCard v-for="project in filteredList" v-bind:key="project.name" v-bind:project="project">
            </ProjectCard> -->
            <div class="project-pair-row" v-for="pair in     filteredList" :key="pair[0].name">
                <ProjectCard :project="pair[0]" />
                <ProjectCard v-if="pair.length == 2" :project="pair[1]" />
            </div>
        </div>
    </div>
</template>
<style scoped>
#project-section-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-pair-row {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
}

#title {
    width: 100%;
    text-align: center;

    font-size: 1.75rem;
    font-weight: 500;
}

#projects-container {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;

    padding-left: 2.5%;
    padding-right: 2.5%;
}

#filter-row {
    overflow-x: auto;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */

    white-space: nowrap;
    padding: 2vmax 3vmax;
    padding-top: 0;

    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    width: fit-content;
}

#filter-row::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}

#filter-row .filter-tag {
    display: inline-block;
    padding: 4px 12px;
    margin-right: 12px;
    border-radius: 12px;

    border: dashed 1.9px;

    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    color: var(--color-text);

    transition: background-color 0.25s, color 0.25s, border 0.25s;
}

#filter-row .filter-tag.selected {
    background-color: var(--color-text);
    color: var(--color-background);
    border-color: var(--color-text);
}
</style>
