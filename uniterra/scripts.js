var linkDebugMode = true;
var documentLink = "../resources/pdfViewerPlaceholder.html";

function EnableDocumentViewer(imageName)
{
    /*
    if (visualViewport.width < 900) {
        window.open(GetImage(imageName));
        return;
    }
    */

    let viewerFrame = document.getElementById("pdfViewerFrame");
    viewerFrame.src = GetImage(imageName);

    let viewer = document.getElementById("pdfViewer");
    viewer.className = "pdfViewerEnabled";
}

function DisableDocumentViewer()
{
    let viewer = document.getElementById("pdfViewer");
    viewer.className = "pdfViewerDisabled"

    document.getElementById("pdfViewerFrame").src = "../resources/pdfViewerPlaceholder.html";
    documentLink = "../resources/pdfViewerPlaceholder.html";
}

function OpenNewTab()
{
    window.open(documentLink);
}

function GetImage(imageName)
{
    documentLink = "https://junimeek.net/uniterra/screenshots/";
    if (linkDebugMode) {
        documentLink = "./screenshots/";
    }

    documentLink += imageName;

    return documentLink;
}