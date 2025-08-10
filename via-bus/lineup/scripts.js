var linkDebugMode = false;
var scheduleLink = "./pdfViewerPlaceholder.html";

function Initialize()
{
    let printableTableState = document.getElementById("printedTableState"); 

    // Hides the printable schedules list by default on narrower screens
    if (visualViewport.width < 900) {
        printableTableState.innerHTML = "visible";
    }
    else {
        printableTableState.innerHTML = "hidden";
    }

    TogglePrintableTables();
}

function EnableDocumentViewer(route)
{
    if (visualViewport.width < 900) {
        window.open(GetCurrentLineupTimetable(route));
        return;
    }

    let viewerFrame = document.getElementById("pdfViewerFrame");
    viewerFrame.src = GetCurrentLineupTimetable(route);

    let viewer = document.getElementById("pdfViewer");
    viewer.className = "pdfViewerEnabled";
}

function DisableDocumentViewer()
{
    let viewer = document.getElementById("pdfViewer");
    viewer.className = "pdfViewerDisabled"

    document.getElementById("pdfViewerFrame").src = "./pdfViewerPlaceholder.html";
    scheduleLink = "./pdfViewerPlaceholder.html";
}

function OpenLinkedTimetable()
{
    window.open(scheduleLink);
}

function TogglePrintableTables()
{
    let tableState = document.getElementById("printedTableState");
    let button = document.getElementById("tableRevealer");
    let realTable = document.getElementById("theTableOfInvisibility");

    if (tableState.innerHTML == "visible") {
        button.innerHTML = "show";
        tableState.innerHTML = "hidden";
        realTable.className = "disabledTable";
    }
    else if (tableState.innerHTML == "hidden") {
        button.innerHTML = "hide";
        tableState.innerHTML = "visible";
        realTable.className = "printableContainer";
    }
}

function GetCurrentLineupTimetable(route)
{
    scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += "Schedule";

    let suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    scheduleLink += route;
    scheduleLink += suffix;

    return scheduleLink;
}

function GetCurrentPrintableLineupTimetable(route)
{
    scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += "Printable/Printable";

    let suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    scheduleLink += route;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function GetCurrentGrayscaleLineupTimetable(route)
{
    scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += "Grayscale/Grayscale";

    let suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    scheduleLink += route;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function GetTimetablePath(route)
{
    switch(route)
    {
        case 202:
            return "2025/08/";
        case 204:
            return "2025/08/";
        case 209:
            return "2025/08/";
        case 214:
            return "2025/08/";
        case 222:
            return "2025/08/";
        case 225:
            return "2025/08/";
        case 230:
            return "2025/08/";
        case 232:
            return "2025/08/";
        case 242:
            return "2025/08/";
        case 243:
            return "2025/08/";
        case 246:
            return "2025/08/";
        case 251:
            return "2025/08/";
        case 268:
            return "2025/08/";
        case 275:
            return "2025/08/";
        case 276:
            return "2025/08/";
        case 277:
            return "2025/08/";
        case 282:
            return "2025/08/";
        case 288:
            return "2025/08/";
        case 289:
            return "2025/08/";
        case 296:
            return "2025/08/";
        default:
            throw "EVIL number!";
    }
}

function TimetableSuffix(scheduleType)
{
    switch(scheduleType)
    {
        case 0:
            return ".pdf";
        case 1:
            return "Printable.pdf";
        case 2:
            return "Grayscale.pdf";
    }
}