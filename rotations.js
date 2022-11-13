export default function animateGroup(group, t, axis) {
    console.log(group)
    let fps = 60 // fps/seconds
    let tau = 2 // 2 seconds
    const step = 1 / (tau * fps) // step per frame
    if (t > Math.PI / 2.025) return // Motion ended
    t += Math.PI / 128 // Increment time
    group.rotateOnWorldAxis(axis, Math.PI / 128) // Increment rotation
    requestAnimationFrame(() => animateGroup(group, t, axis))
}
