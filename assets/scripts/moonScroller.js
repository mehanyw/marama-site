/**
 * A custom carousel horizontal scroller
 */

// Scroller
let fDown         = false;
let offsetX       = 0;
let scrubber      = undefined;
let scrubberWidth = 5;
let value = 0.00;

function scrollerHandleScroll(e)
{
    if (fDown)
        return;

    scroller = e.target;
    let scrollerWidth = scroller.children.length * 480; // The div is 480px FIXME: This should be dynamic        
    scrubber = scroller.nextElementSibling.children[0];
    

    
    let maxScrubberScrollWidth = document.body.clientWidth - (scrubberWidth*2);
    // scrubber.style.left = `${offset}px`;
    
    // (scroller.scrollLeft/scrollerWidth*2)
    
    // scroller.scroll(((scroller.scrollLeft * 2) / scrollerWidth) * maxScrubberScrollWidth, 0); // 
    scrubber.style.left = `${((scroller.scrollLeft * 2) / scrollerWidth) * maxScrubberScrollWidth}px`;
    


    
    // scroller.scroll((offset / (maxScrollWidth*2)) * scrollerWidth, 0); // 
}

function scrollerMouseDownHandler(e)
{
    e.preventDefault();

    fDown         = true;
    scrubber      = e.target;
    scrubberWidth = e.target.offsetWidth / 2;
    
    document.addEventListener('mousemove', scrollerMouseMoveHandler);
    document.addEventListener('mouseup', scrollerMouseUpHandler);
}

function scrollerMouseOverHandler()
{
    console.log('here');
    
    // if (!fDown)
    //     scroller.style.transform = `scale(1.3)`;
}

function scrollerMouseMoveHandler(e)
{    
    e.preventDefault();
    if (fDown)
    {
        // console.log(scrubber.parentNode);
        let maxScrollWidth = document.body.clientWidth - (scrubberWidth*2);
        
        let offset = e.pageX - scrubberWidth;

        if (offset > document.body.clientWidth)
            offset = maxScrollWidth;
        if (offset <= 0)
            offset = 0;
        
        scrubber.style.left = `${offset}px`;

        let scroller = scrubber.parentElement.previousElementSibling;
        let scrollerWidth = scroller.children.length * 480; // The div is 480px FIXME: This should be dynamic        
        scroller.scroll((offset / (maxScrollWidth*2)) * scrollerWidth, 0); // 
    }
}

function scrollerMouseUpHandler()
{
    fDown    = false;
    scrubber = undefined;
    
    document.removeEventListener('mousemove', scrollerMouseMoveHandler);
    document.removeEventListener('mouseup', scrollerMouseUpHandler)
}