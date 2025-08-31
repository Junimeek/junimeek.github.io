function GetRouteProfile(route)
{
    currentLoadLocation = 2;

    let profileLink = "https://keepsamoving.com/wp-content/uploads/";
    let profilePath = "2025/08/VIA-Route-Profiles-April-2025-"

    if (route == 'green-line') {
        embedPath = (profileLink + profilePath + "Green.pdf");
        EnableMiki();
        return;
    }
    else if (route == 'silver-line') {
        embedPath = (profileLink + profilePath + "Silver.pdf");
        EnableMiki();
        return;
    }

    profileLink += profilePath;
    profileLink += route;
    profileLink += ".pdf";
    embedPath = profileLink;
    EnableMiki();
}

function GetProfilePath(route)
{
    switch(route)
    {
        case 2:
            return "2025/08/VIA-Route-Profiles-April-2025-2.pdf";
        case 7:
            return "2025/08/VIA-Route-Profiles-April-2025-7.pdf";
        case 9:
            return "2025/08/VIA-Route-Profiles-April-2025-9.pdf";
        case 10:
            return "2025/08/VIA-Route-Profiles-April-2025-10.pdf";
        case 17:
            return "2025/08/VIA-Route-Profiles-April-2025-17.pdf";
        case 20:
            return "2025/08/VIA-Route-Profiles-April-2025-20.pdf";
        case 21:
            return "2025/08/VIA-Route-Profiles-April-2025-21.pdf";
        case 24:
            return "2025/08/VIA-Route-Profiles-April-2025-24.pdf";
        case 26:
            return "2025/08/VIA-Route-Profiles-April-2025-26.pdf";
        case 28:
            return "2025/08/VIA-Route-Profiles-April-2025-28.pdf";
        case 'green-line':
            return "2025/08/VIA-Route-Profiles-April-2025-Green.pdf";
        default:
            throw "EVIL number detected!";
    }
}