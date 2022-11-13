import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry"

const WGRGeom = new RoundedBoxGeometry(1, 1, 1)
const WGRcolors = []

// WGR CUBE ----------------------------------------------------------------------------------------------------------------------------

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    WGRcolors.push(1, 1, 1)
}

// GREEN SIDE
for (let j = 0; j < 72; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WGRcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WGRcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    WGRcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WGRGeom.setAttribute("color", new THREE.Float32BufferAttribute(WGRcolors, 3))
// WGR CUBE END ------------------------------------------------------------------------------------------------------------------------

// WR CUBE ----------------------------------------------------------------------------------------------------------------------------
const WRGeom = new RoundedBoxGeometry(1, 1, 1)
const WRcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WRcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    WRcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WRGeom.setAttribute("color", new THREE.Float32BufferAttribute(WRcolors, 3))
// WR CUBE END -------------------------------------------------------------------------------------------------------------------------

// WRB CUBE ----------------------------------------------------------------------------------------------------------------------------
const WRBGeom = new RoundedBoxGeometry(1, 1, 1)
const WRBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WRBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WRBcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    WRBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WRBGeom.setAttribute("color", new THREE.Float32BufferAttribute(WRBcolors, 3))
// WRB CUBE END ------------------------------------------------------------------------------------------------------------------------

// GR CUBE ----------------------------------------------------------------------------------------------------------------------------
const GRGeom = new RoundedBoxGeometry(1, 1, 1)
const GRcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE

for (let j = 0; j < 72; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    GRcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    GRcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    GRcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
GRGeom.setAttribute("color", new THREE.Float32BufferAttribute(GRcolors, 3))
// GR CUBE END ------------------------------------------------------------------------------------------------------------------------

// R CUBE ----------------------------------------------------------------------------------------------------------------------------
const RGeom = new RoundedBoxGeometry(1, 1, 1)
const Rcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    Rcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    Rcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
RGeom.setAttribute("color", new THREE.Float32BufferAttribute(Rcolors, 3))
// R CUBE END ------------------------------------------------------------------------------------------------------------------------

// RB CUBE ----------------------------------------------------------------------------------------------------------------------------
const RBGeom = new RoundedBoxGeometry(1, 1, 1)
const RBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    RBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    RBcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    RBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
RBGeom.setAttribute("color", new THREE.Float32BufferAttribute(RBcolors, 3))
// RB CUBE END ------------------------------------------------------------------------------------------------------------------------

// YGR CUBE ----------------------------------------------------------------------------------------------------------------------------
const YGRGeom = new RoundedBoxGeometry(1, 1, 1)
const YGRcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YGRcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YGRcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YGRcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    YGRcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YGRGeom.setAttribute("color", new THREE.Float32BufferAttribute(YGRcolors, 3))
// YGR CUBE END ------------------------------------------------------------------------------------------------------------------------

// YR CUBE ----------------------------------------------------------------------------------------------------------------------------
const YRGeom = new RoundedBoxGeometry(1, 1, 1)
const YRcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YRcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YRcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    YRcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YRGeom.setAttribute("color", new THREE.Float32BufferAttribute(YRcolors, 3))
// YR CUBE END ------------------------------------------------------------------------------------------------------------------------

// YRB CUBE ----------------------------------------------------------------------------------------------------------------------------
const YRBGeom = new RoundedBoxGeometry(1, 1, 1)
const YRBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YRBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YRBcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// RED SIDE
for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YRBcolors.push(0.5, 0, 0)
}

for (let j = 0; j < 72; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    YRBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YRBGeom.setAttribute("color", new THREE.Float32BufferAttribute(YRBcolors, 3))
// YRB CUBE END ------------------------------------------------------------------------------------------------------------------------

// WG CUBE ----------------------------------------------------------------------------------------------------------------------------
const WGGeom = new RoundedBoxGeometry(1, 1, 1)
const WGcolors = []

// BLUE SIDE
for (let j = 0; j < 150; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE

for (let j = 0; j < 72; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WGcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    WGcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WGGeom.setAttribute("color", new THREE.Float32BufferAttribute(WGcolors, 3))
// WG CUBE END ------------------------------------------------------------------------------------------------------------------------

// W CUBE ----------------------------------------------------------------------------------------------------------------------------
const WGeom = new RoundedBoxGeometry(1, 1, 1)
const Wcolors = []

// BLUE SIDE
for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE

for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    Wcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WGeom.setAttribute("color", new THREE.Float32BufferAttribute(Wcolors, 3))
// W CUBE END ------------------------------------------------------------------------------------------------------------------------

// WB CUBE ----------------------------------------------------------------------------------------------------------------------------
const WBGeom = new RoundedBoxGeometry(1, 1, 1)
const WBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    WBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WBGeom.setAttribute("color", new THREE.Float32BufferAttribute(WBcolors, 3))
// WB CUBE END ------------------------------------------------------------------------------------------------------------------------

// WOG CUBE ----------------------------------------------------------------------------------------------------------------------------
const WOGGeom = new RoundedBoxGeometry(1, 1, 1)
const WOGcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE

for (let j = 0; j < 72; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WOGcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WOGcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    WOGcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WOGGeom.setAttribute("color", new THREE.Float32BufferAttribute(WOGcolors, 3))
// WOG CUBE END ------------------------------------------------------------------------------------------------------------------------

// WO CUBE ----------------------------------------------------------------------------------------------------------------------------
const WOGeom = new RoundedBoxGeometry(1, 1, 1)
const WOcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WOcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    WOcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WOGeom.setAttribute("color", new THREE.Float32BufferAttribute(WOcolors, 3))
// WO CUBE END ------------------------------------------------------------------------------------------------------------------------

// WBO CUBE ----------------------------------------------------------------------------------------------------------------------------
const WBOGeom = new RoundedBoxGeometry(1, 1, 1)
const WBOcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 72; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WBOcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// FILL REEN SIDE

for (let j = 0; j < 150; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    WBOcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    WBOcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
WBOGeom.setAttribute("color", new THREE.Float32BufferAttribute(WBOcolors, 3))
// WBO CUBE END ------------------------------------------------------------------------------------------------------------------------

// OG CUBE ----------------------------------------------------------------------------------------------------------------------------
const OGGeom = new RoundedBoxGeometry(1, 1, 1)
const OGcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE

for (let j = 0; j < 72; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    OGcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    OGcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    OGcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
OGGeom.setAttribute("color", new THREE.Float32BufferAttribute(OGcolors, 3))
// OG CUBE END ------------------------------------------------------------------------------------------------------------------------

// O CUBE ----------------------------------------------------------------------------------------------------------------------------
const OGeom = new RoundedBoxGeometry(1, 1, 1)
const Ocolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE

for (let j = 0; j < 150; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    Ocolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    Ocolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
OGeom.setAttribute("color", new THREE.Float32BufferAttribute(Ocolors, 3))
// O CUBE END ------------------------------------------------------------------------------------------------------------------------

// OB CUBE ----------------------------------------------------------------------------------------------------------------------------
const OBGeom = new RoundedBoxGeometry(1, 1, 1)
const OBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    OBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    OBcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    OBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
OBGeom.setAttribute("color", new THREE.Float32BufferAttribute(OBcolors, 3))
// OB CUBE END ------------------------------------------------------------------------------------------------------------------------

// YOG CUBE ----------------------------------------------------------------------------------------------------------------------------
const YOGGeom = new RoundedBoxGeometry(1, 1, 1)
const YOGcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE
for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YOGcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YOGcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YOGcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    YOGcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YOGGeom.setAttribute("color", new THREE.Float32BufferAttribute(YOGcolors, 3))
// YOG CUBE END ------------------------------------------------------------------------------------------------------------------------

// YO CUBE ----------------------------------------------------------------------------------------------------------------------------
const YOGeom = new RoundedBoxGeometry(1, 1, 1)
const YOcolors = []

// FILL BLUE SIDE
for (let j = 0; j < 150; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YOcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YOcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    YOcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YOGeom.setAttribute("color", new THREE.Float32BufferAttribute(YOcolors, 3))
// YO CUBE END ------------------------------------------------------------------------------------------------------------------------

// YBO CUBE ----------------------------------------------------------------------------------------------------------------------------
const YBOGeom = new RoundedBoxGeometry(1, 1, 1)
const YBOcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YBOcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YBOcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YBOcolors.push(1, 0.25, 0)
}

for (let j = 0; j < 72; j++) {
    YBOcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YBOGeom.setAttribute("color", new THREE.Float32BufferAttribute(YBOcolors, 3))
// YBO CUBE END ------------------------------------------------------------------------------------------------------------------------

// YG CUBE ----------------------------------------------------------------------------------------------------------------------------
const YGGeom = new RoundedBoxGeometry(1, 1, 1)
const YGcolors = []

// BLUE SIDE
for (let j = 0; j < 150; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 72; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YGcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YGcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    YGcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YGGeom.setAttribute("color", new THREE.Float32BufferAttribute(YGcolors, 3))
// YG CUBE END ------------------------------------------------------------------------------------------------------------------------

// Y CUBE ----------------------------------------------------------------------------------------------------------------------------
const YGeom = new RoundedBoxGeometry(1, 1, 1)
const Ycolors = []

// BLUE SIDE
for (let j = 0; j < 150; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// FILL GREEN SIDE
for (let j = 0; j < 150; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    Ycolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    Ycolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YGeom.setAttribute("color", new THREE.Float32BufferAttribute(Ycolors, 3))
// Y CUBE END ------------------------------------------------------------------------------------------------------------------------

// YB CUBE ----------------------------------------------------------------------------------------------------------------------------
const YBGeom = new RoundedBoxGeometry(1, 1, 1)
const YBcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YBcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE
for (let j = 0; j < 150; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// YELLOW SIDE
for (let j = 0; j < 72; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    YBcolors.push(0.5, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    YBcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
YBGeom.setAttribute("color", new THREE.Float32BufferAttribute(YBcolors, 3))
// YB CUBE END ------------------------------------------------------------------------------------------------------------------------

// G CUBE ----------------------------------------------------------------------------------------------------------------------------
const GGeom = new RoundedBoxGeometry(1, 1, 1)
const Gcolors = []

// BLUE SIDE
for (let j = 0; j < 150; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE
for (let j = 0; j < 72; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    Gcolors.push(0, 0.5, 0)
}

for (let j = 0; j < 72; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    Gcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
GGeom.setAttribute("color", new THREE.Float32BufferAttribute(Gcolors, 3))
// G CUBE END ------------------------------------------------------------------------------------------------------------------------

// B CUBE ----------------------------------------------------------------------------------------------------------------------------
const BGeom = new RoundedBoxGeometry(1, 1, 1)
const Bcolors = []

// BLUE SIDE
for (let j = 0; j < 72; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

for (let j = 0; j < 6; j++) {
    Bcolors.push(0, 0, 0.5)
}

for (let j = 0; j < 72; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// GREEN SIDE
for (let j = 0; j < 150; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// WHITE
for (let j = 0; j < 150; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// FILL YELLOW SIDE
for (let j = 0; j < 150; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// FILL RED SIDE
for (let j = 0; j < 150; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// FILL ORANGE SIDE
for (let j = 0; j < 150; j++) {
    Bcolors.push(0.6, 0.6, 0.6)
}

// define the new attribute
BGeom.setAttribute("color", new THREE.Float32BufferAttribute(Bcolors, 3))
// B CUBE END ------------------------------------------------------------------------------------------------------------------------

export {
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
}
