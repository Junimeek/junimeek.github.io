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
        case "q16":
            return "2026/03/ScheduleQ16_2025-06-29.pdf";
        case "q72":
            return "2026/02/ScheduleQ72_2026-01-04.pdf";
        default:
            throw "EVIL NUMBER DETECTED";
    }
}