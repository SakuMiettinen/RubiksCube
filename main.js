import "./style.css"

import * as THREE from "three"

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

let zPressed = false

document.onkeyup = e => {
    e = e || window.event
    if (e.key === "z") zPressed = false
}

document.onkeydown = e => {
    e = e || window.event
    if (e.key === "z") {
        zPressed = true
    }
    if (e.key === "ArrowUp") {
        object.rotateOnWorldAxis(xAxis, -Math.PI / 16)
    } else if (e.key === "ArrowDown") {
        object.rotateOnWorldAxis(xAxis, Math.PI / 16)
    } else if (e.key === "ArrowLeft") {
        if (zPressed) {
            object.rotateOnWorldAxis(zAxis, Math.PI / 16)
        } else {
            object.rotateOnWorldAxis(yAxis, -Math.PI / 16)
        }
    } else if (e.key === "ArrowRight") {
        if (zPressed) {
            object.rotateOnWorldAxis(zAxis, -Math.PI / 16)
        } else {
            object.rotateOnWorldAxis(yAxis, Math.PI / 16)
        }
    }
}

const xAxis = new THREE.Vector3(1, 0, 0)
const yAxis = new THREE.Vector3(0, 1, 0)
const zAxis = new THREE.Vector3(0, 0, 1)

const canvas = document.getElementById("bg")

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(WIDTH, HEIGHT)
camera.position.setZ(30)
renderer.render(scene, camera)

const geometry = new THREE.BoxGeometry(10, 10, 10).toNonIndexed()

const material = new THREE.MeshBasicMaterial({ vertexColors: true })

const colors = []

// blue
for (let j = 0; j < 6; j++) {
    colors.push(0, 0, 1)
    console.log(colors)
}
// green
for (let j = 0; j < 6; j++) {
    colors.push(0, 1, 0)
    console.log(colors)
}
// white
for (let j = 0; j < 6; j++) {
    colors.push(1, 1, 1)
    console.log(colors)
}
// yellow
for (let j = 0; j < 6; j++) {
    colors.push(1, 1, 0)
    console.log(colors)
}
// red
for (let j = 0; j < 6; j++) {
    colors.push(1, 0, 0)
    console.log(colors)
}
// orange
for (let j = 0; j < 6; j++) {
    colors.push(1, 0.3725490196, 0)
    console.log(colors)
}

// define the new attribute
geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

const object = new THREE.Mesh(geometry, material)

scene.add(object)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

function animate() {
    requestAnimationFrame(animate)

    renderer.render(scene, camera)
}

var mouseDown = false,
    mouseX = 0,
    mouseY = 0

function onMouseMove(evt) {
    if (!mouseDown) {
        return
    }

    evt.preventDefault()

    var deltaX = evt.clientX - mouseX,
        deltaY = evt.clientY - mouseY
    mouseX = evt.clientX
    mouseY = evt.clientY
    rotateScene(deltaX, deltaY)
}

function onMouseDown(evt) {
    evt.preventDefault()

    mouseDown = true
    mouseX = evt.clientX
    mouseY = evt.clientY
}

function onMouseUp(evt) {
    evt.preventDefault()

    mouseDown = false
}

function addMouseHandler(canvas) {
    canvas.addEventListener(
        "mousemove",
        function (e) {
            onMouseMove(e)
        },
        false
    )
    canvas.addEventListener(
        "mousedown",
        function (e) {
            onMouseDown(e)
        },
        false
    )
    canvas.addEventListener(
        "mouseup",
        function (e) {
            onMouseUp(e)
        },
        false
    )
}

function rotateScene(deltaX, deltaY) {
    object.rotateOnWorldAxis(xAxis, deltaY / 100)
    object.rotateOnWorldAxis(yAxis, deltaX / 100)
}

addMouseHandler(canvas)
animate()
