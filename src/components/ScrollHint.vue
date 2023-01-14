<script setup lang="ts">
import { onMounted, ref } from 'vue';
import anime from 'animejs'

defineProps<{ isHidden: boolean }>()

const scrollHint = ref<HTMLDivElement>()

onMounted(() => {
    anime({
        targets: scrollHint.value,
        translateY: 10,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
    });
})
</script>

<template>
    <div :class="['scroll-hint', { hidden: isHidden }]" ref="scrollHint">
        <span class="material-symbols-rounded scroll-hint-icon">
            keyboard_double_arrow_down
        </span>
        <div class="scroll-hint-text">Scroll Down</div>
    </div>
</template>

<style scoped>
.scroll-hint {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3vh;
    box-sizing: border-box;

    transition: opacity 0.5s;
}

.scroll-hint.hidden {
    opacity: 0;
}

.scroll-hint .scroll-hint-icon {
    font-size: 1rem !important;
    top: 0.25rem;
    opacity: 0.8;

    margin-right: 0.75vw;

    font-weight: 900;
}

.scroll-hint .scroll-hint-text {
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    /* font-style: italic; */
    opacity: 0.8;
}
</style>