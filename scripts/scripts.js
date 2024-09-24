function changeScrollableElements(window){
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var navHeader = document.getElementById("av-nav-header");
    const triggerPosition = 60;
    const accuracy = 30;
    const transparentClassName = "av-transparent-nav-header";

    if (! navHeader.classList.contains(transparentClassName) && scrollPosition > triggerPosition + accuracy) {
        // DO WHEN SCROLLED DOWN
        navHeader.classList.toggle(transparentClassName);
    }
    else if (navHeader.classList.contains(transparentClassName) && scrollPosition < triggerPosition - accuracy) {
        // DO WHEN SCROLLED UP
        navHeader.classList.toggle(transparentClassName);
    }
}

function loadJsRequiredElements(object) {
    var objectToLoad = object.dataset.objectToLoad;
    document.getElementById(objectToLoad).classList.remove("d-none")
    object.remove();
}

function copyDataWithPopover(popoverId){

    var object = document.getElementById(popoverId);
    var copyValue = object.dataset.avCopyData;
    var idMarker = "#" + popoverId
    navigator.clipboard.writeText(copyValue).then(() => {
        const popover = new bootstrap.Popover(idMarker);
        popover.show();
        setTimeout(() => {
            popover.dispose();
        }, 800);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });

}
