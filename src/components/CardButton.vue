<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<style scoped>
.button {
    width: fit-content;
    border-radius: 8px;
    background-color: #0000001a;
    padding: 4px 8px;
    font-size: .8rem;
    transition: background-color .25s;

    margin-right: 3%;
}

.button:hover {
    background-color: #0000003d;
}
</style>