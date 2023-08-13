window.onscroll = () => {
    // Change nav color when scrolled
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        document.getElementById('nav-bar').setAttribute('scrolled', true);
    else
        document.getElementById('nav-bar').setAttribute('scrolled', false);
}

function openNav(navButton) {
    let navWrapper = document.getElementById('nav-bar');
    let navLinks = document.getElementById('nav-bar__links');
    if (navLinks) {
        navWrapper.hasAttribute('open') ? navWrapper.toggleAttribute('open') : navWrapper.setAttribute('open', true);  // Whole nav wrapper
        navButton.hasAttribute('open') ? navButton.toggleAttribute('open') : navButton.setAttribute('open', true);   // Toggle button
        navLinks.hasAttribute('open') ? navLinks.toggleAttribute('open') : navLinks.setAttribute('open', true);    // Links wrapper (gray background)
    }
}

// function openModal(link)
// {
// 	if (!link)
// 	{
// 		console.log("Failed to load popup tour from Visiting Media");
// 		return;
// 	}

// 	let mapPopup = document.getElementById('map__popup');
// 	mapPopup.href = "https://" + link;
// 	mapPopup.click();
// }

function openModal(i) {
    // Get the modal and open it
    let modal = document.getElementById(`modal-${i}`);
    modal.style.display = "flex";

    // When the user clicks anywhere outside of the modal, close it
    document.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closeModal(i) {
    let modal = document.getElementById(`modal-${i}`);
    modal.style.display = "none";
}


function submitContactForm() {
    const token = document.querySelector('.g-recaptcha').getAttribute('data-token');
    const url = 'https://www.google.com/recaptcha/api/siteverify';
    const data = {
        secret: '6LfhfaMnAAAAAECoJn2S-kow0qFz2EMppjJ1LqzR',
        token: token
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
        if (xhr.status === 200) {
            // The reCAPTCHA token is valid.
            document.getElementById("marama-contact").submit();
        } else {
            // The reCAPTCHA token is invalid.
            alert("Invalid reCAPTCHA token.");
        }
    };
}