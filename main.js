import "./style.css"

import * as THREE from "three"
import animateGroup from "./rotations"
import {
    WGRGeom,
    WRBGeom,
    WRGeom,
    GRGeom,
    RGeom,
    RBGeom,
    YGRGeom,
    YRGeom,
    YRBGeom,
    WGGeom,
    WGeom,
    WBGeom,
    WOGGeom,
    WOGeom,
    WBOGeom,
    OGGeom,
    OGeom,
    OBGeom,
    YOGGeom,
    YOGeom,
    YBOGeom,
    YGGeom,
    YGeom,
    YBGeom,
    GGeom,
    BGeom,
} from "./customCubes"

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

let zPressed = false

const leftGroup = new THREE.Group()
const vMiddleGroup = new THREE.Group()
const rightGroup = new THREE.Group()
const topGroup = new THREE.Group()
const hMiddleGroup = new THREE.Group()
const bottomGroup = new THREE.Group()
const frontGroup = new THREE.Group()
const zMiddleGroup = new THREE.Group()
const backGroup = new THREE.Group()

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
                ) === -1
            ) {
                leftGroup.attach(allCubes[i])
            }
            scene.add(leftGroup)
        }
        // leftGroup.rotateOnWorldAxis(xAxis, Math.PI / 4)
        animateGroup(leftGroup, 0, xAxis)
    } else if (e.key === "2") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).x
                ) === 0
            ) {
                vMiddleGroup.attach(allCubes[i])
            }
            scene.add(vMiddleGroup)
        }
        // vMiddleGroup.rotateOnWorldAxis(xAxis, Math.PI / 4)
        animateGroup(vMiddleGroup, 0, xAxis)
    } else if (e.key === "3") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).x
                ) === 1
            ) {
                rightGroup.attach(allCubes[i])
            }
            scene.add(rightGroup)
        }
        // rightGroup.rotateOnWorldAxis(xAxis, Math.PI / 4)
        animateGroup(rightGroup, 0, xAxis)
    } else if (e.key === "4") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).y
                ) === 1
            ) {
                topGroup.attach(allCubes[i])
            }
            scene.add(topGroup)
        }
        // topGroup.rotateOnWorldAxis(yAxis, Math.PI / 4)
        animateGroup(topGroup, 0, yAxis)
    } else if (e.key === "5") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).y
                ) === 0
            ) {
                hMiddleGroup.attach(allCubes[i])
            }
            scene.add(hMiddleGroup)
        }
        // hMiddleGroup.rotateOnWorldAxis(yAxis, Math.PI / 4)
        animateGroup(hMiddleGroup, 0, yAxis)
    } else if (e.key === "6") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).y
                ) === -1
            ) {
                bottomGroup.attach(allCubes[i])
            }
            scene.add(bottomGroup)
        }
        // bottomGroup.rotateOnWorldAxis(yAxis, Math.PI / 4)
        animateGroup(bottomGroup, 0, yAxis)
    } else if (e.key === "7") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).z
                ) === 1
            ) {
                frontGroup.attach(allCubes[i])
            }
            scene.add(frontGroup)
        }
        // frontGroup.rotateOnWorldAxis(zAxis, Math.PI / 4)
        animateGroup(frontGroup, 0, zAxis)
    } else if (e.key === "8") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).z
                ) === 0
            ) {
                zMiddleGroup.attach(allCubes[i])
            }
            scene.add(zMiddleGroup)
        }
        // zMiddleGroup.rotateOnWorldAxis(zAxis, Math.PI / 4)
        animateGroup(zMiddleGroup, 0, zAxis)
    } else if (e.key === "9") {
        for (let i = 0; i < allCubes.length; i++) {
            if (
                Math.round(
                    allCubes[i].getWorldPosition(new THREE.Vector3()).z
                ) === -1
            ) {
                backGroup.attach(allCubes[i])
            }
            scene.add(backGroup)
        }
        // backGroup.rotateOnWorldAxis(zAxis, Math.PI / 4)
        animateGroup(backGroup, 0, zAxis)
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
console.log(scene)

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true,
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(WIDTH, HEIGHT)
camera.position.setZ(10)
renderer.render(scene, camera)

const material = new THREE.MeshLambertMaterial({ vertexColors: true })

let allCubes = []

const WGR = new THREE.Mesh(WGRGeom, material)
WGR.name = "WGR"
allCubes.push(WGR)
const WR = new THREE.Mesh(WRGeom, material)
WR.name = "WR"
allCubes.push(WR)
const WRB = new THREE.Mesh(WRBGeom, material)
WRB.name = "WRB"
allCubes.push(WRB)

const WG = new THREE.Mesh(WGGeom, material)
WG.name = "WG"
allCubes.push(WG)
const W = new THREE.Mesh(WGeom, material)
W.name = "W"
allCubes.push(W)
const WB = new THREE.Mesh(WBGeom, material)
WB.name = "WB"
allCubes.push(WB)

const WOG = new THREE.Mesh(WOGGeom, material)
WOG.name = "WOG"
allCubes.push(WOG)
const WO = new THREE.Mesh(WOGeom, material)
WO.name = "WO"
allCubes.push(WO)
const WBO = new THREE.Mesh(WBOGeom, material)
WBO.name = "WBO"
allCubes.push(WBO)

const GR = new THREE.Mesh(GRGeom, material)
GR.name = "GR"
allCubes.push(GR)
const R = new THREE.Mesh(RGeom, material)
R.name = "R"
allCubes.push(R)
const RB = new THREE.Mesh(RBGeom, material)
RB.name = "RB"
allCubes.push(RB)

const G = new THREE.Mesh(GGeom, material)
G.name = "G"
allCubes.push(G)
const B = new THREE.Mesh(BGeom, material)
B.name = "B"
allCubes.push(B)

const OG = new THREE.Mesh(OGGeom, material)
OG.name = "OG"
allCubes.push(OG)
const O = new THREE.Mesh(OGeom, material)
O.name = "O"
allCubes.push(O)
const OB = new THREE.Mesh(OBGeom, material)
OB.name = "OB"
allCubes.push(OB)

const YGR = new THREE.Mesh(YGRGeom, material)
YGR.name = "YGR"
allCubes.push(YGR)
const YR = new THREE.Mesh(YRGeom, material)
YR.name = "YR"
allCubes.push(YR)
const YRB = new THREE.Mesh(YRBGeom, material)
YRB.name = "YRB"
allCubes.push(YRB)

const YG = new THREE.Mesh(YGGeom, material)
YG.name = "YG"
allCubes.push(YG)
const Y = new THREE.Mesh(YGeom, material)
Y.name = "Y"
allCubes.push(Y)
const YB = new THREE.Mesh(YBGeom, material)
YB.name = "YB"
allCubes.push(YB)

const YOG = new THREE.Mesh(YOGGeom, material)
YOG.name = "YOG"
allCubes.push(YOG)
const YO = new THREE.Mesh(YOGeom, material)
YO.name = "YO"
allCubes.push(YO)
const YBO = new THREE.Mesh(YBOGeom, material)
YBO.name = "YBO"
allCubes.push(YBO)

WGR.translateOnAxis(xAxis, -1)
WGR.translateOnAxis(yAxis, 1)
WGR.translateOnAxis(zAxis, 1)

WR.translateOnAxis(yAxis, 1)
WR.translateOnAxis(zAxis, 1)

WRB.translateOnAxis(xAxis, 1)
WRB.translateOnAxis(yAxis, 1)
WRB.translateOnAxis(zAxis, 1)

WG.translateOnAxis(yAxis, 1)
WG.translateOnAxis(xAxis, -1)

W.translateOnAxis(yAxis, 1)

WB.translateOnAxis(yAxis, 1)
WB.translateOnAxis(xAxis, 1)

WOG.translateOnAxis(yAxis, 1)
WOG.translateOnAxis(xAxis, -1)
WOG.translateOnAxis(zAxis, -1)

WO.translateOnAxis(yAxis, 1)
WO.translateOnAxis(zAxis, -1)

WBO.translateOnAxis(yAxis, 1)
WBO.translateOnAxis(xAxis, 1)
WBO.translateOnAxis(zAxis, -1)

GR.translateOnAxis(xAxis, -1)
GR.translateOnAxis(zAxis, 1)

R.translateOnAxis(zAxis, 1)

RB.translateOnAxis(xAxis, 1)
RB.translateOnAxis(zAxis, 1)

G.translateOnAxis(xAxis, -1)

B.translateOnAxis(xAxis, 1)

OG.translateOnAxis(xAxis, -1)
OG.translateOnAxis(zAxis, -1)

O.translateOnAxis(zAxis, -1)

OB.translateOnAxis(xAxis, 1)
OB.translateOnAxis(zAxis, -1)

YGR.translateOnAxis(xAxis, -1)
YGR.translateOnAxis(yAxis, -1)
YGR.translateOnAxis(zAxis, 1)

YR.translateOnAxis(yAxis, -1)
YR.translateOnAxis(zAxis, 1)

YRB.translateOnAxis(xAxis, 1)
YRB.translateOnAxis(yAxis, -1)
YRB.translateOnAxis(zAxis, 1)

YG.translateOnAxis(xAxis, -1)
YG.translateOnAxis(yAxis, -1)

Y.translateOnAxis(yAxis, -1)

YB.translateOnAxis(xAxis, 1)
YB.translateOnAxis(yAxis, -1)

YOG.translateOnAxis(xAxis, -1)
YOG.translateOnAxis(yAxis, -1)
YOG.translateOnAxis(zAxis, -1)

YO.translateOnAxis(yAxis, -1)
YO.translateOnAxis(zAxis, -1)

YBO.translateOnAxis(xAxis, 1)
YBO.translateOnAxis(yAxis, -1)
YBO.translateOnAxis(zAxis, -1)

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
