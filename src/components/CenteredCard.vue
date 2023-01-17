<script lang="ts">
export default {

}
</script>

<template>
    <div class="centered-card">
        <slot></slot>
    </div>
</template>

<style scoped>
.centered-card {
    position: relative;
    width: 75vh;
    max-width: 100%;
    margin: 1vh;
    margin-left: 2.5%;
    margin-right: 2.5%;
    background-color: var(--color-bio-card-background);

    border-radius: 24px;

    padding: 1.5vmax;

    font-family: "Fira Sans", sans-serif;
}
</style>