import "./style.css"

import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry"

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

let zPressed = false

const leftGroup = new THREE.Group()
const topGroup = new THREE.Group()

document.onkeyup = e => {
    e = e || window.event
    if (e.key === "z") zPressed = false
}

document.onkeydown = e => {
    e = e || window.event
    if (e.key === "z") {
        zPressed = true
    }
    if (e.key === "1") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).x
                ) === -2
            ) {
                leftGroup.add(allCubes[i])
            }
            scene.add(leftGroup)
        }
        leftGroup.rotateOnWorldAxis(xAxis, Math.PI / 4)
        console.log(allCubes[0].getWorldPosition(new THREE.Vector3()))
    } else if (e.key === "4") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).y
                ) === 2
            ) {
                topGroup.add(allCubes[i])
            }
            scene.add(topGroup)
        }
        topGroup.rotateOnWorldAxis(yAxis, Math.PI / 4)
        console.log(allCubes[0].getWorldPosition(new THREE.Vector3()))
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

WGR.translateOnAxis(xAxis, -2)
WGR.translateOnAxis(yAxis, 2)
WGR.translateOnAxis(zAxis, 2)

WR.translateOnAxis(yAxis, 2)
WR.translateOnAxis(zAxis, 2)

WRB.translateOnAxis(xAxis, 2)
WRB.translateOnAxis(yAxis, 2)
WRB.translateOnAxis(zAxis, 2)

WG.translateOnAxis(yAxis, 2)
WG.translateOnAxis(xAxis, -2)

W.translateOnAxis(yAxis, 2)

WB.translateOnAxis(yAxis, 2)
WB.translateOnAxis(xAxis, 2)

WOG.translateOnAxis(yAxis, 2)
WOG.translateOnAxis(xAxis, -2)
WOG.translateOnAxis(zAxis, -2)

WO.translateOnAxis(yAxis, 2)
WO.translateOnAxis(zAxis, -2)

WBO.translateOnAxis(yAxis, 2)
WBO.translateOnAxis(xAxis, 2)
WBO.translateOnAxis(zAxis, -2)

GR.translateOnAxis(xAxis, -2)
GR.translateOnAxis(zAxis, 2)

R.translateOnAxis(zAxis, 2)

RB.translateOnAxis(xAxis, 2)
RB.translateOnAxis(zAxis, 2)

G.translateOnAxis(xAxis, -2)

B.translateOnAxis(xAxis, 2)

OG.translateOnAxis(xAxis, -2)
OG.translateOnAxis(zAxis, -2)

O.translateOnAxis(zAxis, -2)

OB.translateOnAxis(xAxis, 2)
OB.translateOnAxis(zAxis, -2)

YGR.translateOnAxis(xAxis, -2)
YGR.translateOnAxis(yAxis, -2)
YGR.translateOnAxis(zAxis, 2)

YR.translateOnAxis(yAxis, -2)
YR.translateOnAxis(zAxis, 2)

YRB.translateOnAxis(xAxis, 2)
YRB.translateOnAxis(yAxis, -2)
YRB.translateOnAxis(zAxis, 2)

YG.translateOnAxis(xAxis, -2)
YG.translateOnAxis(yAxis, -2)

Y.translateOnAxis(yAxis, -2)

YB.translateOnAxis(xAxis, 2)
YB.translateOnAxis(yAxis, -2)

YOG.translateOnAxis(xAxis, -2)
YOG.translateOnAxis(yAxis, -2)
YOG.translateOnAxis(zAxis, -2)

YO.translateOnAxis(yAxis, -2)
YO.translateOnAxis(zAxis, -2)

YBO.translateOnAxis(xAxis, 2)
YBO.translateOnAxis(yAxis, -2)
YBO.translateOnAxis(zAxis, -2)

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
    toMove.rotateOnWorldAxis(xAxis, deltaY / 100)
    toMove.rotateOnWorldAxis(yAxis, deltaX / 100)
}

addMouseHandler(canvas)
animate()
