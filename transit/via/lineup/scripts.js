let linkDebugMode = true;

function GetCurrentLineupTimetable(route)
{
    currentLoadLocation = 3;

    let scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../../documents/";
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
        scheduleLink = "../../../documents/";
    }

    let timetablePath = GetTimetablePath(route);
    timetablePath += PrintableRevisionCheck(route);

    let suffix = TimetableSuffix(0);

    scheduleLink += timetablePath;
    if (route == 97)
        scheduleLink += "097-Night";
    else
        scheduleLink += route;
    scheduleLink += suffix;

    window.open(scheduleLink);
}

function GetTimetablePath(route)
{
    switch(route)
    {
        case 68:
            return "2026/04/";
        case 97:
            return "2026/04/";
        case 204:
            return "2026/04/";
        case 214:
            return "2026/04/";
        case 222:
            return "2026/04/";
        case 225:
            return "2026/04/";
        case 230:
            return "2026/04/";
        case 232:
            return "2026/04/";
        case 242:
            return "2026/04/";
        case 251:
            return "2026/04/";
        case 268:
            return "2026/04/";
        case 275:
            return "2026/04/";
        case 276:
            return "2026/04/";
        case 282:
            return "2026/04/";
        case 288:
            return "2026/04/";
        case 289:
            return "2026/04/";
        default:
            throw "EVIL number!";
    }
}

function PrintableRevisionCheck(route)
{
    switch(route)
    {
        case 97:
            return "Printable";
        case 202:
            return "Printable";
        case 225:
            return "Printable";
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