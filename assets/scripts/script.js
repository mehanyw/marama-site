window.onscroll = () => {
    // Change nav color when scrolled
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        document.getElementById('nav-bar').setAttribute('scrolled', true);
    else
        document.getElementById('nav-bar').setAttribute('scrolled', false);    
}

function openNav(navButton)
{
    let navWrapper = document.getElementById('nav-bar');
    let navLinks   = document.getElementById('nav-bar__links');
    if (navLinks)
    {        
        navWrapper.hasAttribute('open') ? navWrapper.toggleAttribute('open') : navWrapper.setAttribute('open', true);  // Whole nav wrapper
        navButton.hasAttribute('open')  ? navButton.toggleAttribute('open')  : navButton.setAttribute('open', true);   // Toggle button
        navLinks.hasAttribute('open')   ? navLinks.toggleAttribute('open')   : navLinks.setAttribute('open', true);    // Links wrapper (gray background)
    }
}