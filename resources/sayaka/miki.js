let embedPath = "./miki-loadscreen.html";
let currentLoadLocation = 0;
const loadScreenLocation = {
    level0: "./miki-loadscreen.html",
    level1: "../resources/sayaka/miki-loadscreen.html",
    level2: "../../resources/sayaka/miki-loadscreen.html"
}

function EnableMiki()
{
    if (visualViewport.width < 900) {
        OpenEmbedInNewTab();
        return;
    }

    let viewerFrame = document.getElementById("miki-frame");
    viewerFrame.src = embedPath;

    let viewer = document.getElementById("miki-viewer");
    viewer.className = "miki-enabled";
}

function DisableMiki()
{
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
    }
}