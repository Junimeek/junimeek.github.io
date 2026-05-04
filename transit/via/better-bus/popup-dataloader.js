async function GetRouteData(route)
{
    let filePath = "./popups/" + route + ".json";
    let routeFile = await fetch(filePath);
    let routeData = JSON.parse(routeFile);

    let fetchedRouteName = routeData.name;
    let bulletSource = "../../resources/via/future-icons/010.webp";
    let statusSource = "./status-";
    let routeHTML = "";

    switch(routeData.implementation)
    {
        case 1:
            statusSource += "nextchanges-partial.webp";
            break;
        case 2:
            statusSource += "partial.webp";
            break;
        case 3:
            statusSource += "nextchanges-full.webp";
            break;
        case 4:
            statusSource += "noweekend.webp";
            break;
        case 5:
            statusSource += "check.webp";
            break;
        default:
            statusSource += "x.webp";
    }

    for (let i = 0; i < routeData.description.length; i++) {
        if (routeData.type == "terminus-extend") {
            routeHTML = '<li>Extend ';
            routeHTML += routeData.terminal;
            routeHTML += ' terminus to ';
            routeHTML += routeData.location;
            if (routeData.additional-info == false) {
                routeHTML += '</li>';
            }
        }
    }
}

async function LoadRouteDataFromJSON(route)
{
    let filePath = "./busdata/" + route + ".json";
    let routeFile = await fetch(filePath);
    throw (routeFile);
}

function SetRouteIcon()
{

}