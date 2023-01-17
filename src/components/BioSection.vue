<script setup lang="ts">
import openLink from '../openLink';
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
                I'm a newly graduated Computer Science student who studied at University
                of New Brunswick Saint John
            </div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                I'm both a hobbyist and professional software developer with a love for
                the frontend and the backend.
            </div>
        </CenteredCard>

        <CenteredCard>
            <div id="bio">
                I also
                <span style="font-size: 0.6rem; font-style: oblique">barely</span> play
                the piano.
            </div>
        </CenteredCard>

        <LinkCard icon-class="fa-github" @click="openLink('https://github.com/j-osephlong/')">
            Check out my <span style="font-weight: 500">GitHub</span>
        </LinkCard>

        <LinkCard icon-class="fa-google-play"
            @click="openLink('https://play.google.com/store/apps/details?id=com.jlong.miccheck')">
            Get <span style="font-weight: 500">micCheck</span> on Google Play
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