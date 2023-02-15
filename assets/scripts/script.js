window.onscroll = () => {
    // Change nav color when scrolled
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        document.getElementById('nav-bar').setAttribute('scrolled', true);
    else
        document.getElementById('nav-bar').setAttribute('scrolled', false);    
}

function openNav(navButton)
{
    let navLinks = document.getElementById('nav-bar__mobile__links');
    let navWrapper = document.getElementById('nav-bar');
    if (navLinks)
    {
        navWrapper.hasAttribute('open') ? navWrapper.toggleAttribute('open') : navWrapper.setAttribute('open', true);
        navButton.hasAttribute('open') ? navButton.toggleAttribute('open') : navButton.setAttribute('open', true);
        navLinks.hasAttribute('open') ? navLinks.toggleAttribute('open') : navLinks.setAttribute('open', true);
        // document.body.hasAttribute('fixed') ? document.body.toggleAttribute('fixed') : document.body.setAttribute('fixed', true);
    }
}