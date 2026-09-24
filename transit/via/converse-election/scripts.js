let linkDebugMode = true;

function GetScreenshot(imageName)
{
    currentLoadLocation = 3;

    let imageLink = "https://junimeek.net/transit/via/converse-election/specmaps/";
    if (linkDebugMode) {
        imageLink = "./specmaps/";
    }

    imageLink += imageName;
    embedPath = imageLink;
    EnableMiki();
}