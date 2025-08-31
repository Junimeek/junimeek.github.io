let linkDebugMode = true;

function GetScreenshot(imageName)
{
    currentLoadLocation = 1;

    let imageLink = "https://junimeek.net/uniterra/screenshots/";
    if (linkDebugMode) {
        imageLink = "./screenshots/";
    }

    imageLink += imageName;
    embedPath = imageLink;
    EnableMiki();
}