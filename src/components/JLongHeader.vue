<script setup lang="ts">
defineProps<{ isCollapsed: boolean }>()
</script>

<template>
    <header :class="{ collapsed: isCollapsed }">
        <div :class="{ title: true, 'force-expanded': isCollapsed }">
            <div id="title-background">
                <div>J</div>
                <div id="expanding-section">oseph</div>
                <div>Long</div>
            </div>
        </div>
    </header>

</template>

<style scoped>
header .title {
    display: flex;
    justify-content: center;
    width: 100%;

    font-family: "Abril Fatface", cursive;
    font-size: 6vmax;

    transition: font-size 0.2s;
}

header .title #expanding-section {
    display: inline-block;
    /* transition:  */
    transition: width 0.5s;
    width: 0ch;
    overflow: hidden;
}

header .title:hover #expanding-section {
    width: 4.5ch;
}

header .title:hover {
    color: linear-gradient(45deg, #d9ac7f 0%, #ff7469 100%);
}

.title.force-expanded #expanding-section {
    width: 4.5ch;
}

.collapsed {
    height: 15%;
}

.collapsed .title {
    font-size: 3vmax;
}

header {
    transition: height 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: fixed;

    line-height: 1.5;
    height: 80%;
    width: 100%;

    /* background-color: var(--color-text); */
}

.title #title-background {
    background-color: var(--color-background);
    color: var(--color-expanded-header-text);

    transition: color 0.25s 0s, background-color 0.25s 0s;

    display: flex;

    padding: 1vmax 2vmax;
    border-radius: 1.5vh;
}

.collapsed .title #title-background {
    background-color: var(--vt-c-indigo);
    color: var(--vt-c-white);
    transition: color 0.25s 0.5s, background-color 0.25s 0.5s;
}
</style>