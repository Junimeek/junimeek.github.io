let embedPath = "./miki-loadscreen.html";
let currentLoadLocation = 0;
const loadScreenLocation = {
    level0: "./miki-loadscreen.html",
    level1: "../resources/sayaka/miki-loadscreen.html",
    level2: "../../resources/sayaka/miki-loadscreen.html",
    level3: "../../../resources/sayaka/miki-loadscreen.html"
}

function EnableMiki()
{
    if (visualViewport.width < 900) {
        OpenMikiEmbedInNewTab();
        return;
    }

    let mikiDownloadButton = document.getElementById("miki-download-button");
    if (mikiDownloadButton != null) {
        mikiDownloadButton.setAttribute("href", embedPath);
    }

    let viewerFrame = document.getElementById("miki-frame");
    viewerFrame.src = embedPath;

    let viewer = document.getElementById("miki-viewer");
    viewer.className = "miki-enabled";
    
    document.addEventListener("keydown", MikiShortcutCheck);
}

function MikiShortcutCheck(theKey)
{
    switch(theKey.key)
    {
        case "Escape":
            DisableMiki();
            break;
        case "d":
            if (theKey.shiftKey) {
                document.getElementById("miki-download-button").click();
            }
            break;
        case "D":
            if (theKey.shiftKey) {
                document.getElementById("miki-download-button").click();
            }
            break;
        case "n":
            if (theKey.shiftKey) {
                OpenMikiEmbedInNewTab();
            }
            break;
        case "N":
            if (theKey.shiftKey) {
                OpenMikiEmbedInNewTab();
            }
            break;
    }
}

function DisableMiki()
{
    document.removeEventListener("keydown", MikiShortcutCheck);
    
    let viewer = document.getElementById("miki-viewer");
    viewer.className = "miki-disabled"

    document.getElementById("miki-frame").src = GetLoadScreenLocation();
    embedPath = GetLoadScreenLocation();
}

function OpenMikiEmbedInNewTab()
{
    window.open(embedPath);
}

function GetLoadScreenLocation()
{
    switch(currentLoadLocation)
    {
        case 0:
            return loadScreenLocation.level0;
        case 1:
            return loadScreenLocation.level1;
        case 2:
            return loadScreenLocation.level2;
        case 3:
            return loadScreenLocation.level3;
        case 4:
            return loadScreenLocation.level3;
    }
}