function Initialize()
{
    let printableTableState = document.getElementById("printedTableState"); 

    // Hides the printable schedules list by default on narrower screens
    if (visualViewport.width < 800) {
        printableTableState.innerHTML = "visible";
    }
    else {
        printableTableState.innerHTML = "hidden";
    }

    TogglePrintableTables();
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
    if (route == 282) {
        window.open("https://www.viainfo.net/wp-content/uploads/2024/08/Schedule082.pdf");
        return;
    }

    let scheduleLink = "https://junimeek.github.io/documents/";
    let timetablePath = new String();
    timetablePath = TimetablePath(route);

    let suffix = new String();
    suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function GetCurrentPrintableLineupTimetable(route)
{
    let scheduleLink = "https://junimeek.github.io/documents/";
    let timetablePath = new String();
    timetablePath = TimetablePath(route);

    let suffix = new String();

    switch(route)
    {
        case 209:
            suffix = TimetableSuffix(2091);
            break;
        case 276:
            suffix = TimetableSuffix(2761);
            break;
        default:
            suffix = TimetableSuffix(1);
            break;
    }

    scheduleLink += timetablePath;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function GetCurrentGrayscaleLineupTimetable(route)
{
    let scheduleLink = "https://junimeek.github.io/documents/";
    let timetablePath = new String();
    timetablePath = TimetablePath(route);

    let suffix = new String();

    switch(route)
    {
        case 209:
            suffix = TimetableSuffix(2092);
            break;
        case 276:
            suffix = TimetableSuffix(2762);
            break;
        default:
            suffix = TimetableSuffix(2);
            break;
    }

    scheduleLink += timetablePath;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function TimetablePath(route)
{
    switch(route)
    {
        case 202:
            return "2025/05/Schedule202";
        case 204:
            return "2025/06/Schedule204";
        case 209:
            return "2025/06/Schedule209";
        case 214:
            return "2025/05/Schedule214";
        case 222:
            return "2025/05/Schedule222";
        case 225:
            return "2025/06/Schedule225";
        case 230:
            return "2025/06/Schedule230";
        case 232:
            return "2025/05/Schedule232";
        case 242:
            return "2025/06/Schedule242";
        case 243:
            return "2025/06/Schedule243";
        case 246:
            return "2025/05/Schedule246";
        case 251:
            return "2025/05/Schedule251";
        case 268:
            return "2025/06/Schedule268";
        case 275:
            return "2025/07/Schedule275";
        case 276:
            return "2025/05/Schedule276";
        case 277:
            return "2025/07/Schedule277";
        case 288:
            return "2025/07/Schedule288";
        case 289:
            return "2025/07/Schedule289";
        case 296:
            return "2025/07/Schedule296";
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
        case 2091:
            return "-Printable.pdf";
        case 2092:
            return "-Grayscale.pdf";
        case 2761:
            return "-Printable.pdf";
        case 2762:
            return "-Grayscale.pdf";
    }
}