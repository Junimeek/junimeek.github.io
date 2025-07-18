function GetTimetableLink(route)
{
    let scheduleLink = "";

    switch(route)
    {
        case 4:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule004.pdf";
            break;
        case 17:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/01/Schedule017.pdf";
            break;
        case 22:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/01/Schedule022.pdf";
            break;
        case 24:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule024.pdf";
            break;
        case 26:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule026.pdf";
            break;
        case 28:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule028.pdf";
            break;
        case 32:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/01/Schedule032.pdf";
            break;
        case 36:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule036.pdf";
            break;
        case 43:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule043.pdf";
            break;
        case 44:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule044.pdf";
            break;
        case 62:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule062.pdf";
            break;
        case 66:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule066.pdf";
            break;
        case 67:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule067.pdf";
            break;
        case 68:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule068.pdf";
            break;
        case 75:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/01/Schedule075.pdf";
            break;
        case 76:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/04/Schedule076.pdf";
            break;
        case 79:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/08/Schedule079.pdf";
            break;
        case 88:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/07/Schedule088.pdf";
            break;
        case 89:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/08/Schedule089.pdf";
            break;
        case 93:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2025/01/Schedule093.pdf";
            break;
        case 202:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt202.pdf";
            break;
        case 204:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt204.pdf";
            break;
        case 209:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt209.pdf";
            break;
        case 222:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt222.pdf";
            break;
        case 225:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt225.pdf";
            break;
        case 232:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt232.pdf";
            break;
        case 243:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt243.pdf";
            break;
        case 246:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt246.pdf";
            break;
        case 251:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt251.pdf";
            break;
        case 276:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt276.pdf";
            break;
        case 282:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt282.pdf";
            break;
        case 288:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt288.pdf";
            break;
        case 289:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/10/LineUp-0924_Rt289.pdf";
            break;
        case 648:
            scheduleLink = "https://www.viainfo.net/wp-content/uploads/2024/08/Schedule648.pdf";
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