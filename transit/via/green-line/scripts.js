let linkDebugMode = true;

function GetScreenshot(imageName)
{
    currentLoadLocation = 3;

    let imageLink = "https://junimeek.net/transit/via/green-line/detour-images/";
    if (linkDebugMode) {
        imageLink = "./detour-images/";
    }

    imageLink += imageName;
    embedPath = imageLink;
    EnableMiki();
}