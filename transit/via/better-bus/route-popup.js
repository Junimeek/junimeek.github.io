let curRouteLayer = 0;
let routeMemory = new Array();
let routePopupViewer = document.getElementById("popup-viewer");
let routePopupFrame = document.getElementById("popup-frame");
let routeMemoryText = document.getElementById("popup-path");

function InitializeRoutePages()
{
    LoadRouteDataFromJSON(17);
    curRoutePage = 0;
    routePopupViewer = document.getElementById("popup-viewer");
    routePopupFrame = document.getElementById("popup-frame");
    routeMemoryText = document.getElementById("popup-path");
}

function LoadRoutePopup(route)
{
    curRouteLayer++;
    routeMemory[curRouteLayer - 1] = route;
    SetFrameSource(route);
    SetMemoryPath(route);
}

function SetFrameSource(route)
{
    let path = "./popups/" + route + ".html";
    routePopupFrame.src = path;
    routePopupViewer.className = "popup-enabled";
    routePopupFrame.style = GetRoutePopupHeight(route);
}

function SetMemoryPath(route)
{
    routeMemoryText.innerHTML = "";
    if (curRouteLayer <= 1) {
        routeMemoryText.innerHTML = route;
    }
    else {
        for (let i = 0; i < curRouteLayer; i++) {
            routeMemoryText.innerHTML += routeMemory[i];
            if (i < routeMemory.length) {
                routeMemoryText += ' <i class="fa fa-caret-right"></i>';
            }
        }
    }
}

function BacktrackMemory()
{
    curRouteLayer--;
    if (curRouteLayer <= 0) {
        CloseRoutePopup();
    }
    else {
        SetFrameSource(routeMemory[curRouteLayer - 1]);
        SetMemoryPath(routeMemory[curRouteLayer - 1]);
    }
}

function CloseRoutePopup()
{
    curRouteLayer = 0;
    routePopupViewer.className = "miki-disabled";
    routePopupViewer.src = "";
    routeMemory = new Array();
}

function GetRoutePopupHeight(route)
{
    let frameStyle = "height: ";

    switch(route)
    {
        case 30:
            frameStyle += "60vh";
            break;
        case 92:
            frameStyle += "55vh";
            break;
        case 401:
            frameStyle += "50vh";
            break;
        default:
            frameStyle += "45vh";
            break;
    }

    frameStyle += ";";

    return frameStyle;
}