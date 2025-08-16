var linkDebugMode = false;

function ToggleDropdown(id)
{
    let clickerName = "clicker" + id;
    let dropdownName = "collection" + id;
    let bgName = "bg" + id;
    let dropdownState = document.getElementById(clickerName);
    let dropdownContent = document.getElementById(dropdownName);
    let bgColor = document.getElementById(bgName);

    if (dropdownState.className == "fa fa-chevron-down") {
        dropdownState.className = "fa fa-chevron-up";
        dropdownContent.className = "dropdownExpanded";
        bgColor.className = "arrowBGEnabled";
    }
    else {
        dropdownState.className = "fa fa-chevron-down";
        dropdownContent.className = "dropdownCollapsed";
        bgColor.className = "arrowBGDisabled";
    }
}

function GetTimetableArchive(id)
{
    let documentURL = "";
    linkDebugMode = false;

    if (linkDebugMode) {
        documentURL = "../../../documents/";
    }
    else {
        documentURL = "https://junimeek.net/documents/";
    }

    if (id < 2500) {
        documentURL += List24(id);
    }
    else if (id < 2600) {
        documentURL += List25(id);
    }
    else {
        throw("EVIL number detected!");
    }

    window.open(documentURL);
}

function List24(id)
{
    switch(id)
    {
        case 2401:
            return "2025/04/214-Printable.pdf";
        case 2402:
            return "2025/04/276-Printable.pdf";
        case 2403:
            return "2025/04/214-Web.pdf";
        case 2404:
            return "2025/04/202-Web.pdf";
        case 2405:
            return "2025/04/222-Printable.pdf";
        case 2406:
            return "2025/04/222-Web.pdf";
        case 2407:
            return "2025/05/v1_Schedule246Web.pdf";
        case 2408:
            return "2025/05/v1_Schedule246Printable.pdf";
        case 2409:
            return "2025/05/v1_Schedule246Grayscale.pdf";
        case 2410:
            return "2025/05/Schedule232.pdf";
        case 2411:
            return "2025/05/Schedule232Printable.pdf";
        case 2412:
            return "2025/05/Schedule232Grayscale.pdf";
        case 2413:
            return "2025/05/Schedule246.pdf";
        case 2414:
            return "2025/05/Schedule246Printable.pdf";
        case 2415:
            return "2025/05/Schedule246Grayscale.pdf";
        case 2416:
            return "2025/05/Schedule214.pdf";
        case 2417:
            return "2025/05/Schedule214Printable.pdf";
        case 2418:
            return "2025/05/Schedule214Grayscale.pdf";
        case 2419:
            return "2025/05/Schedule202.pdf";
        case 2420:
            return "2025/05/Schedule202Printable.pdf";
        case 2421:
            return "2025/05/Schedule202Grayscale.pdf";
        case 2422:
            return "2025/05/Schedule276.pdf";
        case 2423:
            return "2025/05/Schedule276-Printable.pdf";
        case 2424:
            return "2025/05/Schedule276-Grayscale.pdf";
        case 2425:
            return "2025/05/Schedule222.pdf";
        case 2426:
            return "2025/05/Schedule222Printable.pdf";
        case 2427:
            return "2025/05/Schedule222Grayscale.pdf";
        case 2428:
            return "2025/05/Schedule251.pdf";
        case 2429:
            return "2025/05/Schedule251Printable.pdf";
        case 2430:
            return "2025/05/Schedule251Grayscale.pdf";
        case 2431:
            return "2025/06/Schedule204.pdf";
        case 2432:
            return "2025/06/Schedule204Printable.pdf";
        case 2433:
            return "2025/06/Schedule204Grayscale.pdf";
        case 2434:
            return "2025/06/Schedule209.pdf";
        case 2435:
            return "2025/06/Schedule209-Printable.pdf";
        case 2436:
            return "2025/06/Schedule209-Grayscale.pdf";
        case 2437:
            return "2025/06/Schedule225.pdf";
        case 2438:
            return "2025/06/Schedule225Printable.pdf";
        case 2439:
            return "2025/06/Schedule225Grayscale.pdf";
        case 2440:
            return "2025/06/Schedule230.pdf";
        case 2441:
            return "2025/06/Schedule230Printable.pdf";
        case 2442:
            return "2025/06/Schedule230Grayscale.pdf";
        case 2443:
            return "2025/06/Schedule242.pdf";
        case 2444:
            return "2025/06/Schedule242Printable.pdf";
        case 2445:
            return "2025/06/Schedule242Grayscale.pdf";
        case 2446:
            return "2025/06/Schedule243.pdf";
        case 2447:
            return "2025/06/Schedule243Printable.pdf";
        case 2448:
            return "2025/06/Schedule243Grayscale.pdf";
        case 2449:
            return "2025/06/Schedule268.pdf";
        case 2450:
            return "2025/06/Schedule268Printable.pdf";
        case 2451:
            return "2025/06/Schedule268Grayscale.pdf";
        case 2452:
            return "2025/07/Schedule275.pdf";
        case 2453:
            return "2025/07/Schedule275Printable.pdf";
        case 2454:
            return "2025/07/Schedule275Grayscale.pdf";
        case 2455:
            return "2025/07/Schedule277.pdf";
        case 2456:
            return "2025/07/Schedule277Printable.pdf";
        case 2457:
            return "2025/07/Schedule277Grayscale.pdf";
        case 2458:
            return "2025/07/Schedule288.pdf";
        case 2459:
            return "2025/07/Schedule288Printable.pdf";
        case 2460:
            return "2025/07/Schedule288Grayscale.pdf";
        case 2461:
            return "2025/07/Schedule289.pdf";
        case 2462:
            return "2025/07/Schedule289Printable.pdf";
        case 2463:
            return "2025/07/Schedule289Grayscale.pdf";
        case 2464:
            return "2025/07/Schedule296.pdf";
        case 2465:
            return "2025/07/Schedule296Printable.pdf";
        case 2466:
            return "2025/07/Schedule296Grayscale.pdf";
        case 2467:
            return "2025/07/Schedule282.pdf";
        case 2468:
            return "2025/07/Schedule282Printable.pdf";
        case 2469:
            return "2025/07/Schedule282Grayscale.pdf";
    }
}

function List25(id)
{
    switch(id)
    {
        case 2501:
            return "2025/08/Older/Schedule209.pdf";
        case 2502:
            return "2025/08/Older/Printable209.pdf";
        case 2503:
            return "2025/08/Older/Grayscale209.pdf";
        case 2504:
            return "2025/08/Older/Schedule230.pdf";
        case 2505:
            return "2025/08/Older/Printable230.pdf";
        case 2506:
            return "2025/08/Older/Grayscale230.pdf";
        case 2507:
            return "2025/08/Older/Schedule277.pdf";
        case 2508:
            return "2025/08/Older/Printable277.pdf";
        case 2509:
            return "2025/08/Older/Grayscale277.pdf";
        case 2510:
            return "2025/08/Older/Schedule289.pdf";
        case 2511:
            return "2025/08/Older/Printable289.pdf";
        case 2512:
            return "2025/08/Older/Grayscale289.pdf";
    }
}