let curLoadedRoute = "000";
let linkDebugMode = true;

function DisplayRouteGroup(route)
{
    document.getElementById(("proposal-" + curLoadedRoute)).classList.add("jnr-routegroup-disabled");
    
    if (curLoadedRoute == route) {
        curLoadedRoute = "000";
        document.getElementById(("proposal-000")).classList.remove("jnr-routegroup-disabled");
    }
    else {
        curLoadedRoute = route;
        document.getElementById(("proposal-" + route)).classList.remove("jnr-routegroup-disabled");
    }
}

function GetScreenshot(imageName)
{
    currentLoadLocation = 2;

    let imageLink = "https://junimeek.net/transit/via/green-line/detour-images/";
    if (linkDebugMode) {
        imageLink = "./maps/";
    }

    imageLink += imageName;
    embedPath = imageLink;
    EnableMiki();
}