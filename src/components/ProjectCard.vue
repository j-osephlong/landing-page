<script setup lang="ts">
import { ref } from 'vue';
import openLink from '../openLink';
import { Project } from '../Project';
import CardButton from './CardButton.vue';

defineProps<{ project: Project }>()

let isExpanded = ref(false)
</script>

<template>
    <div class="project-bg" :style="{ 'background-color': project.bgColorHex, 'color': project.fgColorHex }">
        <div class="tags">
            {{ project.tags.map((tag) => tag.name).join(", ") }}
        </div>
        <div class="title">
            {{ project.name }}
        </div>
        <div class="description">
            {{ project.description }}
        </div>
        <div :class="['skills-container', { show: isExpanded }]" v-if="project.skills.length > 0">
            <!-- <hr class="skills-divider"/> -->
            <div style="margin-bottom: 3%; margin-top: 3%; font-weight: 500">
                Skills Used:
            </div>
            <div class="skill" v-for="skill in project.skills" v-bind:key="skill.name"
                @click="() => { if (skill.link) openLink(skill.link) }">
                <div class="name">
                    {{ skill.name }}
                    <span v-if="skill.link != undefined" class="material-symbols-rounded"
                        style="font-size: 0.8rem; transform: rotate(-45deg)">link</span>
                </div>
                <div class="description">{{ skill.description }}</div>
            </div>
        </div>
        <div class="buttons-container">
            <CardButton @click="() => { isExpanded = !isExpanded }" v-if="project.skills.length > 0">
                {{ !isExpanded ? "Show Skills Used" : "Show Less" }}
            </CardButton>
            <CardButton @click="() => { if (project.link) openLink(project.link) }">
                Check it Out
            </CardButton>
            <CardButton v-if="project.secondaryLinkName != undefined"
                @click="() => { if (project.secondaryLinkHref) openLink(project.secondaryLinkHref) }">
                {{ project.secondaryLinkName }}
            </CardButton>
        </div>
    </div>
</template>

<style scoped>
.project-bg {
    font-family: "Fira Sans", sans-serif;

    width: 100%;
    max-width: 75vh;
    height: fit-content;

    border-radius: 24px;
    padding: 3vmax;
    margin: 1vh;

    break-inside: avoid;
}

.project-bg .tags {
    font-size: 0.8rem;
    opacity: 0.6;
}

.project-bg .title {
    font-size: 1.2rem;
    font-weight: 500;
}

.project-bg .description {
    font-size: 0.9rem;
}

.project-bg .skills-container {
    width: 100%;
}

.skills-container {
    max-height: 0;
    opacity: 0;
    transition: opacity 0.5s, max-height 0.8s;
    transition-delay: opacity 1s, max-height 0s;
}

.skills-container.show {
    opacity: 1;
    max-height: 1000px;
    transition-delay: opacity 0s, max-height 0.5s;
}

.skills-container hr {
    border: 0;
    border-top: 4px solid;
    border-radius: 2px;
    margin-top: 3%;
    margin-bottom: 3%;
}

.skills-container .skill {
    padding: 5%;
    background-color: #0000001f;
    margin-bottom: 2.5%;
    border-radius: 24px;

    transition: background-color 0.5s;
}

.skills-container .skill:hover {
    background-color: #0000005a;
}

.skills-container .skill:last-child {
    margin-bottom: 0;
}

.skill .name {
    font-size: 0.9rem;
    font-weight: 500;
}

.skill .description {
    font-size: 0.7rem;
}

.project-bg .buttons-container {
    display: flex;
    margin-top: 2vh;
}
</style>