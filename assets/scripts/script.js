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

function openModal(link)
{
	if (!link)
	{
		console.log("Failed to load popup tour from Visiting Media");
		return;
	}

	let mapPopup = document.getElementById('map__popup');
	mapPopup.href = "https://" + link;
	mapPopup.click();
}

function openModal(element) {
    // Get the modal and open it
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }