import "./style.css"

import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry"

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
        // object.rotateOnWorldAxis(xAxis, -Math.PI / 16)
        toMove.rotateOnWorldAxis(xAxis, -Math.PI / 16)
    } else if (e.key === "ArrowDown") {
        // object.rotateOnWorldAxis(xAxis, Math.PI / 16)
        toMove.rotateOnWorldAxis(xAxis, Math.PI / 16)
    } else if (e.key === "ArrowLeft") {
        if (zPressed) {
            toMove.rotateOnWorldAxis(zAxis, Math.PI / 16)
        } else {
            // object.rotateOnWorldAxis(yAxis, -Math.PI / 16)
            toMove.rotateOnWorldAxis(yAxis, -Math.PI / 16)
        }
    } else if (e.key === "ArrowRight") {
        if (zPressed) {
            toMove.rotateOnWorldAxis(zAxis, -Math.PI / 16)
        } else {
            // object.rotateOnWorldAxis(yAxis, Math.PI / 16)
            toMove.rotateOnWorldAxis(yAxis, Math.PI / 16)
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
camera.position.setZ(10)
renderer.render(scene, camera)

const geometry = new RoundedBoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x26c7af })

// const colors = []

// // blue
// for (let j = 0; j < 6; j++) {
//     colors.push(0, 0, 1)
// }
// // green
// for (let j = 0; j < 6; j++) {
//     colors.push(0, 1, 0)
// }
// // white
// for (let j = 0; j < 6; j++) {
//     colors.push(1, 1, 1)
// }
// // yellow
// for (let j = 0; j < 6; j++) {
//     colors.push(1, 1, 0)
// }
// // red
// for (let j = 0; j < 6; j++) {
//     colors.push(1, 0, 0)
// }
// // orange
// for (let j = 0; j < 6; j++) {
//     colors.push(1, 0.3725490196, 0)
// }

// // define the new attribute
// geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

let allCubes = []

const WGR = new THREE.Mesh(geometry, material)
allCubes.push(WGR)
const WR = new THREE.Mesh(geometry, material)
allCubes.push(WR)
const WRB = new THREE.Mesh(geometry, material)
allCubes.push(WRB)

const WG = new THREE.Mesh(geometry, material)
allCubes.push(WG)
const W = new THREE.Mesh(geometry, material)
allCubes.push(W)
const WB = new THREE.Mesh(geometry, material)
allCubes.push(WB)

const WOG = new THREE.Mesh(geometry, material)
allCubes.push(WOG)
const WO = new THREE.Mesh(geometry, material)
allCubes.push(WO)
const WBO = new THREE.Mesh(geometry, material)
allCubes.push(WBO)

const GR = new THREE.Mesh(geometry, material)
allCubes.push(GR)
const R = new THREE.Mesh(geometry, material)
allCubes.push(R)
const RB = new THREE.Mesh(geometry, material)
allCubes.push(RB)

const G = new THREE.Mesh(geometry, material)
allCubes.push(G)
const B = new THREE.Mesh(geometry, material)
allCubes.push(B)

const OG = new THREE.Mesh(geometry, material)
allCubes.push(OG)
const O = new THREE.Mesh(geometry, material)
allCubes.push(O)
const OB = new THREE.Mesh(geometry, material)
allCubes.push(OB)

const YGR = new THREE.Mesh(geometry, material)
allCubes.push(YGR)
const YR = new THREE.Mesh(geometry, material)
allCubes.push(YR)
const YRB = new THREE.Mesh(geometry, material)
allCubes.push(YRB)

const YG = new THREE.Mesh(geometry, material)
allCubes.push(YG)
const Y = new THREE.Mesh(geometry, material)
allCubes.push(Y)
const YB = new THREE.Mesh(geometry, material)
allCubes.push(YB)

const YOG = new THREE.Mesh(geometry, material)
allCubes.push(YOG)
const YO = new THREE.Mesh(geometry, material)
allCubes.push(YO)
const YBO = new THREE.Mesh(geometry, material)
allCubes.push(YBO)

WGR.translateOnAxis(xAxis, -1.1)
WGR.translateOnAxis(yAxis, 1.1)
WGR.translateOnAxis(zAxis, 1.1)

WR.translateOnAxis(yAxis, 1.1)
WR.translateOnAxis(zAxis, 1.1)

WRB.translateOnAxis(xAxis, 1.1)
WRB.translateOnAxis(yAxis, 1.1)
WRB.translateOnAxis(zAxis, 1.1)

WG.translateOnAxis(yAxis, 1.1)
WG.translateOnAxis(xAxis, -1.1)

W.translateOnAxis(yAxis, 1.1)

WB.translateOnAxis(yAxis, 1.1)
WB.translateOnAxis(xAxis, 1.1)

WOG.translateOnAxis(yAxis, 1.1)
WOG.translateOnAxis(xAxis, -1.1)
WOG.translateOnAxis(zAxis, -1.1)

WO.translateOnAxis(yAxis, 1.1)
WO.translateOnAxis(zAxis, -1.1)

WBO.translateOnAxis(yAxis, 1.1)
WBO.translateOnAxis(xAxis, 1.1)
WBO.translateOnAxis(zAxis, -1.1)

GR.translateOnAxis(xAxis, -1.1)
GR.translateOnAxis(zAxis, 1.1)

R.translateOnAxis(zAxis, 1.1)

RB.translateOnAxis(xAxis, 1.1)
RB.translateOnAxis(zAxis, 1.1)

G.translateOnAxis(xAxis, -1.1)

B.translateOnAxis(xAxis, 1.1)

OG.translateOnAxis(xAxis, -1.1)
OG.translateOnAxis(zAxis, -1.1)

O.translateOnAxis(zAxis, -1.1)

OB.translateOnAxis(xAxis, 1.1)
OB.translateOnAxis(zAxis, -1.1)

YGR.translateOnAxis(xAxis, -1.1)
YGR.translateOnAxis(yAxis, -1.1)
YGR.translateOnAxis(zAxis, 1.1)

YR.translateOnAxis(yAxis, -1.1)
YR.translateOnAxis(zAxis, 1.1)

YRB.translateOnAxis(xAxis, 1.1)
YRB.translateOnAxis(yAxis, -1.1)
YRB.translateOnAxis(zAxis, 1.1)

YG.translateOnAxis(xAxis, -1.1)
YG.translateOnAxis(yAxis, -1.1)

Y.translateOnAxis(yAxis, -1.1)

YB.translateOnAxis(xAxis, 1.1)
YB.translateOnAxis(yAxis, -1.1)

YOG.translateOnAxis(xAxis, -1.1)
YOG.translateOnAxis(yAxis, -1.1)
YOG.translateOnAxis(zAxis, -1.1)

YO.translateOnAxis(yAxis, -1.1)
YO.translateOnAxis(zAxis, -1.1)

YBO.translateOnAxis(xAxis, 1.1)
YBO.translateOnAxis(yAxis, -1.1)
YBO.translateOnAxis(zAxis, -1.1)

const toMove = new THREE.Group()
toMove.add(
    WGR,
    WR,
    WRB,
    WG,
    W,
    WB,
    WOG,
    WO,
    WBO,
    GR,
    R,
    RB,
    G,
    B,
    OG,
    O,
    OB,
    YGR,
    YR,
    YRB,
    YG,
    Y,
    YB,
    YOG,
    YO,
    YBO
)
scene.add(toMove)

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
    group.rotateOnWorldAxis(xAxis, deltaY / 100)
    group.rotateOnWorldAxis(yAxis, deltaX / 100)
}

addMouseHandler(canvas)
animate()
