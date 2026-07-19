let curLoadedRoute = "000";

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