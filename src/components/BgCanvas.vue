<script lang="ts">
import { def } from '@vue/shared';
import * as thr from 'three'
import TrackballControls from 'three-trackballcontrols-ts'
import { onMounted, ref } from 'vue';

let renderer = new thr.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(window.devicePixelRatio);
let scene = new thr.Scene()
let camera = new thr.PerspectiveCamera(
    101,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
let light =
    new thr.DirectionalLight('hsl(0, 100%, 100%)')

let geometry = new thr.BoxGeometry(1, 1, 1)
let material = new thr.MeshStandardMaterial({
    side: thr.FrontSide,
    color: 'hsl(0, 100%, 50%)',
    wireframe: false
})
let cube = new thr.Mesh(geometry, material)
let axes = new thr.AxesHelper(5)
const speed = 0.01

// let canvas = ref<HTMLDivElement>()
// let renderer = ref(new thr.WebGLRenderer({ antialias: true }))
// let scene = ref(new thr.Scene())
// let camera = ref(new thr.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// ))
// let light = ref(
//     new thr.DirectionalLight('hsl(0, 100%, 100%)')
// )
// let geometry = ref(new thr.BoxGeometry(1, 1, 1))
// let material = ref(new thr.MeshStandardMaterial({
//     side: thr.FrontSide,
//     color: 'hsl(0, 100%, 50%)',
//     wireframe: false
// }))
// let cube = ref(new thr.Mesh(geometry.value, material.value))
// let axes = ref(new thr.AxesHelper(5))
// const speed = 0.01

// onMounted(() => {

//     let animate = () => {
//         requestAnimationFrame(animate)
//         renderer.value.render(scene.value, camera.value)
//         cube.value.rotation.y += speed
//         // controls.value.update()
//     }

//     canvas.value?.appendChild(renderer.value.domElement)
//     // controls = new TrackballControls(camera, renderer.value.domElement)
//     // controls.rotateSpeed = 1.0
//     // controls.zoomSpeed = 5
//     // controls.panSpeed = 0.8
//     // controls.noZoom = false
//     // controls.noPan = false
//     // controls.staticMoving = true
//     // controls.dynamicDampingFactor = 0.3

//     animate()
// })

export default {
    created() {
        scene.add(camera)
        scene.add(light)
        scene.add(cube)
        scene.add(axes)
        renderer.setSize(window.innerWidth, window.innerHeight)
        light.position.set(0, 0, 10)
        camera.position.z = 5
        cube.position.setX(5)
        scene.background = null

    },
    mounted() {
        (this.$refs.canvas as HTMLDivElement)?.appendChild(renderer.domElement)
        this.animate()
    },
    methods: {
        animate: function () {
            requestAnimationFrame(this.animate)
            renderer.render(scene, camera)
            cube.rotation.y += speed
            // controls.value.update()
        }
    }

}

</script>

<template>
    <div ref="canvas"></div>
</template>

<style>
canvas {
    width: 100vw;
    height: 100vh;
    position: absolute;
}
</style>