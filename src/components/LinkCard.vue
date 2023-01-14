<script setup lang="ts">
import CenteredCard from './CenteredCard.vue';

defineProps<{ iconClass: string }>()
</script>

<template>
    <CenteredCard class="container">
        <div class="link-button">
            <i :class="['fab', iconClass]" />
            <div class="text-slot">
                <slot></slot>
            </div>
        </div>
    </CenteredCard>
</template>

<style scoped>
.container {
    background-color: var(--color-text);
    opacity: 0.9;
    padding: 1vmax
}

.link-button {
    width: 100%;
    text-align: center;

    font-size: 0.9rem;

    color: var(--color-background);
    /* font-weight: 500; */
}

.link-button i {
    font-size: 1.15rem;
    margin-right: 0.5rem;
    top: 0.15rem
}

.text-slot {
    display: inline-block;
    top: 0.05rem
}
</style>