app = null
var repos = null

Vue.component('gh-project', {
    props : ['project'],
    template : `
        <div class='gh'>
            <b>/</b><p>{{ project.name }}</p><b>/</b>
            <div style='float:right;'>
            <div class='tag'
                v-for="tag in project.tags">{{ tag }}</div></div>

            <p style="display:block;font-size: .7em;">{{ project.desc }}</p>
            <a v-bind:href='project.link' target='_blank'>
                <p style="display:block;font-size: .7em;">more</p>
            </a>
        </div>
        `
})

Vue.component('sc-song', {
    props : ['link'],
    template : `
        <iframe class = 'sc-player' height="300" scrolling="no" frameborder="no" v-bind:src="link"></iframe>
        `
})

const moveTitle = ()=>{
    if (window.matchMedia("(max-width: 40em)").matches)
        return
    $('#title').css('top', 
        $('#container-box').position().top + 'px'
        )
}

$(()=>{
    app = new Vue({
        el: '#app',
        data: {
            state: 'dir',
            scLinks:    ['https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673107488&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                            ,'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556172268&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                            ,'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/504203490&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                            ,'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319972959&color=%232a5e80&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                        ],
            ghProjects: [
                {
                    name: 'Picto',
                    link: 'https://github.com/j-osephlong/Picto',
                    desc: 'Draw&Chat web app/server inspired by Nintendo\'s Pictochat.',
                    tags: ['Python-SQL-Web', '2020', 'Quarantine']
                },
                {
                    name: 'j-LC3',
                    link: 'https://github.com/j-osephlong/j-LC3',
                    desc: 'Little Computer-3 assembler/simulator written in Python.',
                    tags: ['Python-Asm', '2020', 'Quarantine']
                },
                {
                    name: 'Blume',
                    link: 'https://github.com/j-osephlong/Blume',
                    desc: 'Game rendering engine that render\'s to the windows command prompt.',
                    tags: ['C#', '2019', 'WIP']
                },
                {
                    name: 'Hotel-Server', 
                    link: 'https://github.com/j-osephlong/Hotel-Project',
                    desc: 'A hotel booking/managment website/backend server, written for CS2043.',
                    tags: ['Python-SQL-Web', '2019', 'School']
                },
                {
                    name: 'ScanTron IDE',
                    link: 'https://github.com/scanTronTeam3/scanTronIDE',
                    desc: 'A Java IDE written for CS1083.',
                    tags: ['Java', '2019', 'School', 'Group']
                },
                {
                    name: 'landing-page',
                    link: 'https://github.com/j-osephlong/landing-page',
                    desc: 'This website you\'re on right now! Originally written in 2019 and redesigned in 2020 with Vue.JS.',
                    tags: ['Web Dev', '2020']
                }
            ]

        }
    })

    $('.sc-player').on('onload', ()=>{$('.mobilePrestitial').remove()})
});

(function(window, location) {

    history.replaceState(null, document.title, location.pathname+"#!/dir")
    history.pushState(null, document.title, location.pathname)

    window.addEventListener("popstate", function() {
        if(location.hash === "#!/dir") {
            history.replaceState(null, document.title, location.pathname)
            app.state = 'dir'
            $('#title').css('top', '0px')     
        }
    }, false)

}(window, location))

function pushBackState() {
    history.replaceState(null, document.title, location.pathname+"#!/dir");
    history.pushState(null, document.title, location.pathname);
}