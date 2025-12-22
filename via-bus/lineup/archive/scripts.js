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
        dropdownContent.className = "dropdown-expanded";
        bgColor.className = "arrow-bg-enabled";
    }
    else {
        dropdownState.className = "fa fa-chevron-down";
        dropdownContent.className = "dropdown-collapsed";
        bgColor.className = "arrow-bg-disabled";
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
        case 2513:
            return "2025/08/Schedule202.pdf";
        case 2514:
            return "2025/08/Printable/Printable202.pdf";
        case 2515:
            return "2025/08/Grayscale/Grayscale202.pdf";
        case 2516:
            return "2025/08/Schedule204.pdf";
        case 2517:
            return "2025/08/Printable/Printable204.pdf";
        case 2518:
            return "2025/08/Grayscale/Grayscale204.pdf";
        case 2519:
            return "2025/08/Schedule209.pdf";
        case 2520:
            return "2025/08/Printable/Printable209.pdf";
        case 2521:
            return "2025/08/Grayscale/Grayscale209.pdf";
        case 2522:
            return "2025/08/Schedule214.pdf";
        case 2523:
            return "2025/08/Printable/Printable214.pdf";
        case 2524:
            return "2025/08/Grayscale/Grayscale214.pdf";
        case 2525:
            return "2025/08/Schedule222.pdf";
        case 2526:
            return "2025/08/Printable/Printable222.pdf";
        case 2527:
            return "2025/08/Grayscale/Grayscale222.pdf";
        case 2528:
            return "2025/08/Schedule225.pdf";
        case 2529:
            return "2025/08/Printable/Printable225.pdf";
        case 2530:
            return "2025/08/Grayscale/Grayscale225.pdf";
        case 2531:
            return "2025/08/Schedule230.pdf";
        case 2532:
            return "2025/08/Printable/Printable230.pdf";
        case 2533:
            return "2025/08/Grayscale/Grayscale230.pdf";
        case 2534:
            return "2025/08/Schedule232.pdf";
        case 2535:
            return "2025/08/Printable/Printable232.pdf";
        case 2536:
            return "2025/08/Grayscale/Grayscale232.pdf";
        case 2537:
            return "2025/08/Schedule242.pdf";
        case 2538:
            return "2025/08/Printable/Printable242.pdf";
        case 2539:
            return "2025/08/Grayscale/Grayscale242.pdf";
        case 2540:
            return "2025/08/Schedule243.pdf";
        case 2541:
            return "2025/08/Printable/Printable243.pdf";
        case 2542:
            return "2025/08/Grayscale/Grayscale243.pdf";
        case 2543:
            return "2025/08/Schedule246.pdf";
        case 2544:
            return "2025/08/Printable/Printable246.pdf";
        case 2545:
            return "2025/08/Grayscale/Grayscale246.pdf";
        case 2546:
            return "2025/08/Schedule251.pdf";
        case 2547:
            return "2025/08/Printable/Printable251.pdf";
        case 2548:
            return "2025/08/Grayscale/Grayscale251.pdf";
        case 2549:
            return "2025/08/Schedule268.pdf";
        case 2550:
            return "2025/08/Printable/Printable268.pdf";
        case 2551:
            return "2025/08/Grayscale/Grayscale268.pdf";
        case 2552:
            return "2025/08/Schedule275.pdf";
        case 2553:
            return "2025/08/Printable/Printable275.pdf";
        case 2554:
            return "2025/08/Grayscale/Grayscale275.pdf";
        case 2555:
            return "2025/08/Schedule276.pdf";
        case 2556:
            return "2025/08/Printable/Printable276.pdf";
        case 2557:
            return "2025/08/Grayscale/Grayscale276.pdf";
        case 2558:
            return "2025/08/Schedule277.pdf";
        case 2559:
            return "2025/08/Printable/Printable277.pdf";
        case 2560:
            return "2025/08/Grayscale/Grayscale277.pdf";
        case 2561:
            return "2025/08/Schedule282.pdf";
        case 2562:
            return "2025/08/Printable/Printable282.pdf";
        case 2563:
            return "2025/08/Grayscale/Grayscale282.pdf";
        case 2564:
            return "2025/08/Schedule288.pdf";
        case 2565:
            return "2025/08/Printable/Printable288.pdf";
        case 2566:
            return "2025/08/Grayscale/Grayscale288.pdf";
        case 2567:
            return "2025/08/Schedule289.pdf";
        case 2568:
            return "2025/08/Printable/Printable289.pdf";
        case 2569:
            return "2025/08/Grayscale/Grayscale289.pdf";
        case 2570:
            return "2025/08/Schedule296.pdf";
        case 2571:
            return "2025/08/Printable/Printable296.pdf";
        case 2572:
            return "2025/08/Grayscale/Grayscale296.pdf";
    }
}