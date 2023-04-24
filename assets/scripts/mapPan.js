const ZOOM_INCR = 0.075;
const ZOOM_MAX = 1.75;
const ZOOM_MIN = 0.25;
let zoomScale = 1;

const map = document.getElementById('map');
const mapContainer = document.getElementById('map__container');
const mapImage = document.getElementById('map__img');
mapImage.onmousedown = onMouseDown;

let isDragging = false;
let dragStart = { x: 0, y: 0 };

function onMouseDown(e)
{
	e.preventDefault();
	e.stopPropagation();

	isDragging = true;
	dragStart.x = e.clientX - mapImage.offsetLeft;
	dragStart.y = e.clientY - mapImage.offsetTop;

	mapImage.onmousemove = onMouseMove;
	mapImage.onmouseup = onMouseUp;
}

function onMouseMove(e)
{
	e.preventDefault();
	e.stopPropagation();

	mapContainer.style.cursor = 'move';	

	// if (Math.abs(e.clientY) <= Math.trunc(mapContainer.getBoundingClientRect().top + 10) || Math.abs(e.clientY) > Math.trunc(mapContainer.getBoundingClientRect().bottom - 10))
	// {
	// 	resetListeners();
	// 	return;
	// }
	
	// if (Math.abs(e.clientX) <= Math.trunc(mapContainer.getBoundingClientRect().left + 10) || Math.abs(e.clientX) > Math.trunc(mapContainer.getBoundingClientRect().right - 40))
	// {
	// 	resetListeners();
	// 	return;
	// }

	if (!isDragging && (e.target != mapContainer || e.target != mapImage))
	{		
		resetListeners();
		return;
	}
	
	let yOffset = e.clientY - dragStart.y;
	let xOffset = e.clientX - dragStart.x;
	console.log(zoomScale);
	
	if (zoomScale === 1)
	{
		if ((yOffset + mapImage.offsetTop + mapImage.offsetHeight) > mapContainer.offsetHeight && (yOffset + mapImage.offsetTop) < mapContainer.offsetTop)
			mapImage.style.top = `${yOffset}px`;
			
		if ((xOffset + mapImage.offsetLeft + mapImage.offsetWidth) > mapContainer.offsetWidth && (xOffset + mapImage.offsetLeft) < mapContainer.offsetLeft)
			mapImage.style.left = `${xOffset}px`;
	}
	else
	{
		mapImage.style.top = `${yOffset}px`;
		mapImage.style.left = `${xOffset}px`;
	}
}

function resetListeners()
{
	mapContainer.style.cursor = 'default';	

	mapImage.onmousemove = null;
	mapImage.onmouseup = null;
}

function onMouseUp(e)
{	
	e.preventDefault();
	e.stopPropagation();
	
	isDragging = false;

	resetListeners();
}

function zoomIn()
{
	if ((zoomScale + ZOOM_INCR) <= ZOOM_MAX)
		zoomScale+= ZOOM_INCR;
	mapImage.style.scale = zoomScale;
}

function zoomOut()
{
	if ((zoomScale - ZOOM_INCR) >= ZOOM_MIN)
		zoomScale-= ZOOM_INCR;
	mapImage.style.scale = zoomScale;
}