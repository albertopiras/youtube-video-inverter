/**
 * @description Adds an invert video toggle button into the default settings menu of a Youtube
 */
(function () {

    var invertVideoNode = document.createElement("div");
    invertVideoNode.className = "ytp-menuitem";
    invertVideoNode.setAttribute("role", "menuitemcheckbox");
    invertVideoNode.setAttribute("aria-checked", "false");
    invertVideoNode.setAttribute("tabindex", "0");
    invertVideoNode.id = "invertVideo";

    var invertVideoLabel = document.createElement("div");
    invertVideoLabel.className = "ytp-menuitem-label";
    var invertVideoText = document.createTextNode("Invert");
    invertVideoLabel.appendChild(invertVideoText);
    invertVideoNode.appendChild(invertVideoLabel);

    var invertVideoCheckContainer = document.createElement("div");
    invertVideoCheckContainer.className = "ytp-menuitem-content";
    var invertVideoCheckbox = document.createElement("div");
    invertVideoCheckbox.className = "ytp-menuitem-toggle-checkbox";
    invertVideoCheckContainer.appendChild(invertVideoCheckbox)
    invertVideoNode.appendChild(invertVideoCheckContainer);
 
    var menu = document.querySelector('.ytp-panel-menu');
    if(!menu){
        console.error('Error adding invert button');
        return;
    }

    menu.appendChild(invertVideoNode);

    var invertvideo = document.getElementById("invertVideo");
    var status = false;

    invertvideo.addEventListener('click', () => {
        var video = document.querySelector("video");// "video.video-stream.html5-main-video";
        status = !status;
        video.style.transform = status? `rotateY(180deg)`:``;
        invertVideoNode.setAttribute("aria-checked", status);
    })

})()

