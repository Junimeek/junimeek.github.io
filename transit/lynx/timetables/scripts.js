let linkDebugMode = false;

function HeartieRoll()
{
    let banner = document.getElementById("lovBanner");

    let curMonth = new Date().getMonth() + 1;
    if (curMonth == 4) {
        let curDay = new Date().getDate();
        if (curDay == 7) {
            console.log("Today is April 7, which is a very special day for me.\n\nOn this day in 2026, I asked my bestie if he wanted to be my lov, and he, against all odds, said yes. We have been boyfriends ever since, and I could not imagine a world where I live without him.\n\nI love you potato, with all my heart <3");
            SetHeartieBanner(banner);
            return;
        }
    }

    let rollBaseOdds = (53 / (8431 - 5903) * 100);
    let randRoll = (Math.floor(Math.random() * 2529));

    if (randRoll <= rollBaseOdds) {
        SetHeartieBanner(banner);
    }
    else {
        banner.style.backgroundImage = "url('./potatobanner.jpg')";
    }
}

function SetHeartieBanner(theBanner)
{
    theBanner.style.backgroundImage = "url('./heartie.jpg')";
    document.getElementById("lovTitle").className = "saya-h1 heartie";
}

function GetOnedriveTimetable(route)
{
    currentLoadLocation = 3;

    let scheduleLink = GetOnedriveLink(route);
    embedPath = scheduleLink;
    EnableMiki();
}

function GetOnedriveLink(route)
{
    switch(route)
    {
        case 311:
            return "https://1drv.ms/b/c/f35e7ec862f0553c/IQRz8u7b5CCxRK2e1lb5gV42AY2YTY-U42XxWMcXD1IOWNg";
    }
}

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
        case 311:
            return "2026/06/Link311_2026-04-26.pdf";
        case 426:
            return "2026/06/Link426-NL801_2026-06-17.pdf";
        case 801:
            return "2026/06/Link426-NL801_2026-06-17.pdf";
        default:
            throw "EVIL NUMBER DETECTED";
    }
}

function GetUpcomingTimetable(route)
{
    currentLoadLocation = 3;

    let scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../../documents/";
    }

    let timetablePath = GetUpcomingTimetablePath(route);

    scheduleLink += timetablePath;
    embedPath = scheduleLink;
    EnableMiki();
}

function GetUpcomingTimetablePath(route)
{
    switch(route)
    {
        case 426:
            return "2026/04/Link426-NL801_2026-05-26.pdf";
        default:
            throw "EVIL NUMBER DETECTED";
    }
}

function GetArchivedTimetable(archivedID)
{
    currentLoadLocation = 3;

    let scheduleLink = "https://junimeek.net/documents/";
    if (linkDebugMode) {
        scheduleLink = "../../../documents/";
    }

    let timetablePath = GetArchivedTimetablePath(archivedID);

    scheduleLink += timetablePath;
    embedPath = scheduleLink;
    EnableMiki();
}

function GetArchivedTimetablePath(archivedID)
{
    switch(archivedID)
    {
        case 1:
            return "2026/02/Link426-NL801_2026-01-11.pdf";
        case 2:
            return "2026/04/Link426-NL801_2026-05-26.pdf";
        default:
            throw "EVIL NUMBER DETECTED";
    }
}