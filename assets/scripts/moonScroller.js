/**
 * A custom carousel horizontal scroller
 */

// Scroller
let fDown         = false;
let offsetX       = 0;
let scrubber      = undefined;
let scrubberWidth = 5;
let value         = 0.00;


/** Handles our scrolling */
function scrollerHandleScroll(e)
{
    if (fDown)
        return;

    // Get the scroller grid and the scrubber
    scroller = e.target;
    scrubber = scroller.nextElementSibling.children[0];

    // The max we can scroll the scrubber is the body width - the scrubber itself - 30px horizontal padding
    let maxScrubberScrollWidth = document.body.clientWidth - (scrubberWidth * 2) - 60;    

    /**
     * To calculate the percent we scrolled for the scroller grid:
     *  Use how many pixels we scrolled (.scrollLeft) / (the max scroll width for the grid (.scrollWidth) - the total body width)
     */
    let offsetPercent = (Math.round(scroller.scrollLeft)) / (scroller.scrollWidth - document.body.clientWidth); 
    
    // Multiply our percent with the scrubber max scroll to get exact positioning of scrubber (then add 30px for padding)
    scrubber.style.left = `${Math.round(offsetPercent * maxScrubberScrollWidth) + 30}px`;    
}

/** Handles our scrubber */
function scrollerMouseDownHandler(e)
{
    e.preventDefault();

    fDown         = true;
    scrubber      = e.target;
    scrubberWidth = e.target.offsetWidth / 2;
    
    document.addEventListener('mousemove', scrollerMouseMoveHandler);
    document.addEventListener('mouseup', scrollerMouseUpHandler);    
}
function scrollerMouseMoveHandler(e)
{    
    e.preventDefault();
    if (fDown)
    {
        let maxScrubberScrollWidth = document.body.clientWidth - (scrubberWidth * 2) - 60;

        // Limit our scrubber scroll to the page
        let offset = e.clientX - scrubberWidth;
        if (offset > maxScrubberScrollWidth + 30)
            offset = maxScrubberScrollWidth + 30;
        if (offset <= 30)
            offset = 30;
        scrubber.style.left = `${offset}px`;        

        // Scrolls our slider
        let scroller = scrubber.parentElement.previousElementSibling;

        /**
         * To calculate the offset, we realize that we don't scroll the width of the grid.
         *  We only scroll the part that not on the screen. So, we subtract the visible document width from the whole grid width
         */
        let offsetPercent  = offset / maxScrubberScrollWidth;
        let scrollerOffset = Math.round(offsetPercent * (scroller.scrollWidth - document.body.clientWidth));        
        scroller.scroll(scrollerOffset, 0);
    }
}
function scrollerMouseUpHandler()
{
    fDown    = false;
    scrubber = undefined;
    
    document.removeEventListener('mousemove', scrollerMouseMoveHandler);
    document.removeEventListener('mouseup', scrollerMouseUpHandler)
}