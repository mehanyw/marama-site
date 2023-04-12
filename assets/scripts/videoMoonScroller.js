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

	let trackPath;
	if (window.innerWidth > 768)
		trackPath = `M0,${heroVideo.clientHeight * 0.75} C${heroVideo.clientWidth * 0.25},-0 ${heroVideo.clientWidth * 0.75},-0 ${heroVideo.clientWidth},${heroVideo.clientHeight * 0.75}`;
	else
		trackPath = `M-${heroVideo.clientWidth * 0.25},${heroVideo.clientHeight * 0.9} C${heroVideo.clientWidth * 0.0},-0 ${heroVideo.clientWidth * 1},-0 ${heroVideo.clientWidth * 1.25},${heroVideo.clientHeight * 0.9}`;

	moonVideoScrollbarTrack.setAttribute('d', trackPath);
}

heroVideo.onwaiting = () => moonVideoScrollbar.pauseAnimations();
heroVideo.ontimeupdate = () => moonVideoScrollbar.unpauseAnimations();