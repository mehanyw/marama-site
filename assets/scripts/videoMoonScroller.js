/**
 * A Custom video scrollbar
 */

let heroVideo                = document.getElementById('hero__video');
let moonVideoScrollbar       = document.getElementById('moon__video__scrollbar');
let moonVideoScrollbarTrack  = document.getElementById('moon__video__scrollbar__track');
let moonVideoScrollbarCircle = document.getElementById('moon__video__scrollbar__circle');

window.onload   = () => updateMoonVideoScrollbarPosition();
window.onresize = () => updateMoonVideoScrollbarPosition();

function updateMoonVideoScrollbarPosition()
{
	moonVideoScrollbar.setAttribute('width', `${heroVideo.clientWidth}`);
	moonVideoScrollbar.setAttribute('height', `${heroVideo.clientHeight}`);

	let trackPath = `M0,${heroVideo.clientHeight * 0.75} C${heroVideo.clientWidth * 0.25},-0 ${heroVideo.clientWidth * 0.75},-0 ${heroVideo.clientWidth},${heroVideo.clientHeight * 0.75}`;
	moonVideoScrollbarTrack.setAttribute('d', trackPath);
}

heroVideo.onwaiting = () => moonVideoScrollbar.pauseAnimations();
heroVideo.ontimeupdate = () => moonVideoScrollbar.unpauseAnimations();