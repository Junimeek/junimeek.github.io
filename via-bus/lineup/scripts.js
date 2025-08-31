let linkDebugMode = false;

function Initialize()
{
    let printableTableState = document.getElementById("printed-table-state"); 

    // Hides the printable schedules list by default on narrower screens
    if (visualViewport.width < 900) {
        printableTableState.innerHTML = "visible";
    }
    else {
        printableTableState.innerHTML = "hidden";
    }

    TogglePrintableTables();
}

function TogglePrintableTables()
{
    let tableState = document.getElementById("printed-table-state");
    let button = document.getElementById("table-revealer");
    let realTable = document.getElementById("theTableOfInvisibility");

    if (tableState.innerHTML == "visible") {
        button.innerHTML = "show";
        tableState.innerHTML = "hidden";
        realTable.className = "disabled-table";
    }
    else if (tableState.innerHTML == "hidden") {
        button.innerHTML = "hide";
        tableState.innerHTML = "visible";
        realTable.className = "printable-container";
    }
}

function GetCurrentLineupTimetable(route)
{
    currentLoadLocation = 2;

    let scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += "Schedule";

    let suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    scheduleLink += route;
    scheduleLink += suffix;

    embedPath = scheduleLink;
    EnableMiki();
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