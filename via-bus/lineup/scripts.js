function GetLineupLink(route, scheduleType, year, month, special)
{
    // i have litterally no idea how to make this work
    
    let scheduleLink = "https://junimeek.github.io/documents/";
    let specialPrefix = "";

    // Checks for special cases
    switch(route)
    {
        case 246:
            if (special == "old") {
                specialPrefix = "v1_";
            }
    }

    scheduleLink += year + "/" + month + "/" + specialPrefix + scheduleType + ".pdf/";
    window.open(scheduleLink);
}