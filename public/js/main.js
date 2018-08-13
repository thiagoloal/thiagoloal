
window.onload = function () {
    const grid = document.querySelector('.svg-container svg');
    console.log(grid);
    let inner = '<defs><filter id="glow"><feGaussianBlur in="thicken" stdDeviation="1.1" result="blurred" /><feMerge><femergenode in="coloredBlur"></femergenode><femergenode in="SourceGraphic"></femergenode></feMerge></defs >';
    const lines = 20;
    for (i = 0; i <= lines; i += 1) {

        inner += `<path class="exampleGlow" d="M${i * (100/lines)},0 C${i * (100/lines)},0 ${(i * (100/lines)) + 2},600 ${i * (100/lines)},600" style="fill-opacity: 0;"/></path>
        <path class="exampleGlow" d="M0,${i * (100/lines)} C0,${i * (100/lines)} 600,${(i * (100/lines)) + 2} 600,${i * (100/lines)}" style="fill-opacity: 0;"/></path>
        `;
    }
    grid.innerHTML=inner;
}
