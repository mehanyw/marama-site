

let heroVideo = document.getElementById('hero__video');
// heroVideo.currentTime = 5;

// Playing event
heroVideo.addEventListener("playing", updateScroller());
function updateScroller()
{
	console.log(heroVideo.currentTime);	
}
heroVideo.onplay = () => {
	console.log(heroVideo.currentTime);	
};