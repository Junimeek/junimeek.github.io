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
    scheduleLink += GetRouteAsString(route);
    scheduleLink += suffix;

    embedPath = scheduleLink;
    EnableMiki();
}

function GetRouteAsString(route)
{
    let stringRoute = "";
    
    if (route < 10)
        stringRoute = "00";
    else if (route < 100)
        stringRoute = "0";

    stringRoute += route;

    if (!(route > 199 && route < 300))
        stringRoute += "-Night";

    return stringRoute;
}

function GetCurrentPrintableLineupTimetable(route)
{
    scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += PrintableRevisionCheck(route);

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
        case 68:
            return "2026/01/";
        case 202:
            return "2025/12/";
        case 204:
            return "2025/12/";
        case 209:
            return "2025/12/";
        case 214:
            return "2025/12/";
        case 222:
            return "2025/12/";
        case 225:
            return "2025/12/";
        case 230:
            return "2025/12/";
        case 232:
            return "2025/12/";
        case 242:
            return "2025/12/";
        case 243:
            return "2025/12/";
        case 246:
            return "2025/12/";
        case 251:
            return "2025/12/";
        case 268:
            return "2025/12/";
        case 275:
            return "2025/12/";
        case 276:
            return "2026/01/";
        case 277:
            return "2025/12/";
        case 282:
            return "2026/01/";
        case 288:
            return "2026/01/";
        case 289:
            return "2025/12/";
        case 296:
            return "2025/12/";
        default:
            throw "EVIL number!";
    }
}

function PrintableRevisionCheck(route)
{
    switch(route)
    {
        case 276:
            return "Printable";
        case 282:
            return "Printable";
        case 288:
            return "Printable";
        default:
            return "Printable/Printable";
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