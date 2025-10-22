function GetTimetableLink(route)
{
    let scheduleLink = "https://www.viainfo.net/wp-content/uploads/";

    switch(route)
    {
        case 4:
            scheduleLink += "2024/07/Schedule004.pdf";
            break;
        case 8:
            scheduleLink += "2024/07/Schedule008.pdf";
            break;
        case 10:
            scheduleLink += "2025/07/Schedule010Rev.pdf";
            break;
        case 17:
            scheduleLink += "2025/01/Schedule017.pdf";
            break;
        case 20:
            scheduleLink += "2025/04/Schedule020.pdf";
            break;
        case 22:
            scheduleLink += "2025/01/Schedule022.pdf";
            break;
        case 24:
            scheduleLink += "2024/07/Schedule024.pdf";
            break;
        case 26:
            scheduleLink += "2025/04/Schedule026.pdf";
            break;
        case 28:
            scheduleLink += "2025/04/Schedule028.pdf";
            break;
        case 30:
            scheduleLink += "2025/07/Schedule030.pdf";
            break;
        case 32:
            scheduleLink += "2025/01/Schedule032.pdf";
            break;
        case 36:
            scheduleLink += "2024/07/Schedule036.pdf";
            break;
        case 43:
            scheduleLink += "2025/07/Schedule043.pdf";
            break;
        case 44:
            scheduleLink += "2025/04/Schedule044.pdf";
            break;
        case 62:
            scheduleLink += "2024/07/Schedule062.pdf";
            break;
        case 66:
            scheduleLink += "2025/04/Schedule066.pdf";
            break;
        case 67:
            scheduleLink += "2024/07/Schedule067.pdf";
            break;
        case 68:
            scheduleLink += "2025/04/Schedule068.pdf";
            break;
        case 75:
            scheduleLink += "2025/01/Schedule075.pdf";
            break;
        case 76:
            scheduleLink += "2025/04/Schedule076.pdf";
            break;
        case 77:
            scheduleLink += "2025/07/Schedule077.pdf";
            break;
        case 79:
            scheduleLink += "2024/08/Schedule079.pdf";
            break;
        case 82:
            scheduleLink += "2024/08/Schedule082.pdf";
            break;
        case 88:
            scheduleLink += "2024/07/Schedule088.pdf";
            break;
        case 89:
            scheduleLink += "2024/08/Schedule089.pdf";
            break;
        case 93:
            scheduleLink += "2025/01/Schedule093.pdf";
            break;
        case 96:
            scheduleLink += "2025/01/Schedule096.pdf";
            break;
        case 202:
            scheduleLink += "2024/10/LineUp-0924_Rt202.pdf";
            break;
        case 204:
            scheduleLink += "2024/10/LineUp-0924_Rt204.pdf";
            break;
        case 209:
            scheduleLink += "2024/10/LineUp-0924_Rt209.pdf";
            break;
        case 222:
            scheduleLink += "2024/10/LineUp-0924_Rt222.pdf";
            break;
        case 225:
            scheduleLink += "2024/10/LineUp-0924_Rt225.pdf";
            break;
        case 230:
            scheduleLink += "2024/10/LineUp-0924_Rt230.pdf";
            break;
        case 232:
            scheduleLink += "2024/10/LineUp-0924_Rt232.pdf";
            break;
        case 243:
            scheduleLink += "2024/10/LineUp-0924_Rt243.pdf";
            break;
        case 246:
            scheduleLink += "2024/10/LineUp-0924_Rt246.pdf";
            break;
        case 251:
            scheduleLink += "2024/10/LineUp-0924_Rt251.pdf";
            break;
        case 268:
            scheduleLink += "2024/10/LineUp-0924_Rt268.pdf";
            break;
        case 276:
            scheduleLink += "2024/10/LineUp-0924_Rt276.pdf";
            break;
        case 282:
            scheduleLink += "2024/10/LineUp-0924_Rt282.pdf";
            break;
        case 288:
            scheduleLink += "2024/10/LineUp-0924_Rt288.pdf";
            break;
        case 289:
            scheduleLink += "2024/10/LineUp-0924_Rt289.pdf";
            break;
        case 296:
            scheduleLink += "2024/10/LineUp-0924_Rt296.pdf";
            break;
        case 502:
            scheduleLink += "2025/07/Schedule502.pdf";
            break;
        case 505:
            scheduleLink += "2024/08/Schedule505.pdf";
            break;
        case 515:
            scheduleLink += "2025/01/Schedule515.pdf";
            break;
        case 522:
            scheduleLink += "2025/01/Schedule522.pdf";
            break;
        case 524:
            scheduleLink += "2024/07/Schedule524.pdf";
            break;
        case 602:
            scheduleLink += "2025/07/Schedule602.pdf";
            break;
        case 603:
            scheduleLink += "2025/07/Schedule603.pdf";
            break;
        case 609:
            scheduleLink += "2025/07/Schedule609.pdf";
            break;
        case 610:
            scheduleLink += "2025/07/Schedule610.pdf";
            break;
        case 611:
            scheduleLink += "2025/01/Schedule611.pdf";
            break;
        case 612:
            scheduleLink += "2024/08/Schedule612.pdf";
            break;
        case 614:
            scheduleLink += "2024/08/Schedule614.pdf";
            break;
        case 615:
            scheduleLink += "2025/01/Schedule615.pdf";
            break;
        case 616:
            scheduleLink += "2024/08/Schedule616.pdf";
            break;
        case 617:
            scheduleLink += "2024/08/Schedule617.pdf";
            break;
        case 618:
            scheduleLink += "2025/07/Schedule618.pdf";
            break;
        case 619:
            scheduleLink += "2025/07/Schedule619.pdf";
            break;
        case 620:
            scheduleLink += "2024/07/Schedule620.pdf";
            break;
        case 632:
            scheduleLink += "2024/08/Schedule632.pdf";
            break;
        case 647:
            scheduleLink += "2024/08/Schedule647.pdf";
            break;
        case 648:
            scheduleLink += "2025/07/Schedule648.pdf";
            break;
        default:
            scheduleLink = "";
            break;
    }

    if (scheduleLink == "") {
        throw("EVIL number detected!");
    }

    window.open(scheduleLink);
}

function GetOldTimetableLink(timetableID)
{
    let scheduleLink = "https://";

    if (IsDeadLink(timetableID)) {
        scheduleLink += "junimeek.net/documents/via-timetable-archive/"
    }
    else {
        scheduleLink += "www.viainfo.net/wp-content/uploads/";
    }

    switch(timetableID)
    {
        case 1:
            scheduleLink += "2025/01/Schedule022.pdf";
            break;
        case 2:
            scheduleLink += "2025/08/Schedule010.pdf";
            break;
        default:
            scheduleLink = "";
            break;
    }

    if (scheduleLink == "") {
        throw("EVIL number detected!");
    }

    window.open(scheduleLink);
}

let deadIDs = [
    2
];

function IsDeadLink(timetableID)
{
    for (let i = 0; i < deadIDs.length; i++) {
        if (deadIDs[i] == timetableID) {
            return true;
        }
    }
    return false;
}