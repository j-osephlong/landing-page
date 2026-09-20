<script setup lang="ts">
import openLink from '../openLink.js';
import CenteredCard from './CenteredCard.vue';
import LinkCard from './LinkCard.vue';
</script>

<template>
    <div id="bio-section">
        <CenteredCard style="background-color: var(--color-bio-title-card-background)">

            <div id="title">About Me</div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                I'm both a hobbyist and full-time professional software developer with a love for
                the frontend and the backend.
            </div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                Currently developing web-based GIS and project management software for DMSE.
            </div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                I studied Computer Science at Universiy of New Brunswick (UNB).
            </div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                I also
                <span style="font-size: 0.6rem; font-style: oblique">barely</span> play
                the piano.<br>
                <small>2026 Update:</small> And the guitar!
            </div>
        </CenteredCard>

        <LinkCard icon-class="fa-github" @click="openLink('https://github.com/j-osephlong/')">
            Check out my <span style="font-weight: 500">GitHub</span>
        </LinkCard>
    </div>
</template>

<style scoped>
#bio-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

#title {
    width: 100%;
    text-align: center;

    font-size: 1.75rem;
    font-weight: 500;

    color: black;
}

#bio {
    width: 100%;
    text-align: center;

    font-size: 1.1rem;

    color: black;
    /* font-weight: 500; */
}
</style>