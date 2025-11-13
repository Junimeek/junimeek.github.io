let curRoutePage = 0;
let routePages = new Array();
let routeSelectors = new Array();
let citationCount = 6;
let timelineCitations = new Array();

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

function InitializePage()
{
    routePages[0] = document.getElementById("routesection-radial");
    routePages[1] = document.getElementById("routesection-primo");
    routePages[2] = document.getElementById("routesection-crosstown");
    routePages[3] = document.getElementById("routesection-circulator");
    routePages[4] = document.getElementById("routesection-brt");

    let elementID = "routeselector";

    for (let i = 0; i < routePages.length; i++) {
        elementID = "routeselector-" + (i + 1);
        routeSelectors[i] = document.getElementById(elementID);
    }

    const citationList = document.getElementsByClassName("in-text-citation");
    citationCount = citationList.length;

    // console.info(citationCount + " citations found");

    for (let i = 0; i < citationCount; i++) {
        elementID = "citation" + (i + 1);
        timelineCitations[i] = document.getElementById(elementID);
    }

    CreateInTextCitations(citationList);
}

function CreateInTextCitations(citationsList)
{
    for (let i = 0; i < citationCount; i++) {
        // console.warn("started loop " + i);
        citationsList[i].setAttributeNode(CreateCitationClicker(i));
        citationsList[i].setAttributeNode(CreateCitationName(i));
        citationsList[i].setAttributeNode(CreateCitationHref(-1));
        citationsList[i].innerHTML = "<sup>[" + (i + 1) + "]</sup>";
        // console.warn("loop " + i + " done");
    }
}

function CreateCitationClicker(citeNumber)
{
    const attrClicker = document.createAttribute("onclick");
    attrClicker.value = "HighlightCitation(" + (citeNumber + 1) + ")";
    // console.info(attrClicker);
    return attrClicker;
}

function CreateCitationName(citeNumber)
{
    const attrName = document.createAttribute("name");
    attrName.value = "tl-cite" + (citeNumber + 1);
    // console.info(attrName);
    return attrName;
}

function CreateCitationHref(referenceID)
{
    const attrHref = document.createAttribute("href");

    switch(referenceID)
    {
        case -1:
            attrHref.value = "#citations";
            break;
        default:
            attrHref.value = "#tl-cite" + referenceID;
            break;
    }
    // console.info(attrHref);
    return attrHref;
}

function HighlightCitation(citation)
{
    for (let i = 0; i < citationCount; i++) {
        timelineCitations[i].className = "";
    }
    timelineCitations[citation - 1].className = "citation-highlight";
}

function SwitchRoutePage(newPage)
{
    for (let i = 0; i < routePages.length; i++) {
        routePages[i].className = "routegroup-disabled";
        routeSelectors[i].className = "";
    }

    switch(newPage)
    {
        case -2:
            if (curRoutePage > 1) {
                curRoutePage--;
            }
            else {
                curRoutePage = 1;
            }
            break;
        case -1:
            if (curRoutePage == 0) {
                curRoutePage = 1;
            }
            else if (curRoutePage < routePages.length) {
                curRoutePage++;
            }
            else {
                curRoutePage = routePages.length;
            }
            break;
        default:
            curRoutePage = newPage;
            break;
    }

    routePages[curRoutePage - 1].className = "routegroup-enabled";
    routeSelectors[curRoutePage - 1].className = "active";
}