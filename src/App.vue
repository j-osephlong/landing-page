<script setup lang="ts">
import { onMounted, ref } from 'vue';
import JLongHeader from './components/JLongHeader.vue';
import ScrollHint from './components/ScrollHint.vue';
import BioSection from './components/BioSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import { Tags } from './Tag';
import { Projects } from './Project';

let headerCollapsed = ref(false)

function setHeaderCollapsed(state: boolean) {
    headerCollapsed.value = state;
    console.log("Setting header state " + state);
}

function handleScroll() {
    var threshold = (window.innerHeight / 100) * 10;
    if (window.scrollY > threshold && headerCollapsed.value != true)
        setHeaderCollapsed(true);
    if (window.scrollY < threshold && headerCollapsed.value != false)
        setHeaderCollapsed(false);
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
</script>

<template>
    <JLongHeader :isCollapsed="headerCollapsed" />
    <main>
        <ScrollHint :isHidden="headerCollapsed" />
        <BioSection />
        <ProjectSection :tags="Object.values(Tags)" :projects="Projects" />
        <footer>Joseph Long, 2023</footer>
    </main>
</template>

<style scoped>
main {
    height: 100%;
    width: 100%;

    top: 65%;
}

header {
    z-index: 2;
}

footer {
    text-align: center;
    padding: 3vmax;
    padding-bottom: 4vmax;

    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
}
</style>
