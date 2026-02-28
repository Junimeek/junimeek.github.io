let linkDebugMode = false;

function GetCurrentTimetable(route)
{
    currentLoadLocation = 3;

    let scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../../documents/";
    }

    let timetablePath = GetTimetablePath(route);

    scheduleLink += timetablePath;
    embedPath = scheduleLink;
    EnableMiki();
}

function GetTimetablePath(route)
{
    switch(route)
    {
        case 26:
            return "2026/02/Link026_2026-01-11.pdf";
        case 426:
            return "2026/02/Link426-NL801_2026-01-11.pdf";
        case 801:
            return "2026/02/Link426-NL801_2026-01-11.pdf";
        default:
            throw "EVIL NUMBER DETECTED";
    }
}