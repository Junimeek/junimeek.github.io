const bannerList = [
    "north-star-xcelsior.jpg",
    "randolph-tc.jpg",
    "e-gillig.jpg",
    "e-gillig-interior.jpg",
    "naco-pass-gillig.jpg",
    "via-link-car.jpg",
    "utsa-nova.jpg",
    "medical-center.jpg"
];

function RandomizeBanner()
{
    let banner = document.getElementById("page-banner");
    let stylePath = "./banners/";

    let randy = Math.floor((Math.random() * bannerList.length));
    stylePath += bannerList[randy];

    banner.style = "background-image: url('" + stylePath + "');";
}

function CalculateDividers(outbound, inbound)
{
    let outboundNumbers = [0];
    let inboundNumbers = [0];
    let curPosition = 0;
    let positionModifier = 0;

    outboundNumbers.length = outbound;
    curPosition = 48;
    positionModifier = 356 / outbound;

    for (let i = 0; i < outbound - 1; i++) {
        curPosition += positionModifier
        outboundNumbers[i] = curPosition;
    }

    inboundNumbers.length = inbound;
    curPosition = 412;
    positionModifier = 356 / inbound;

    for (let i = 0; i < inbound; i++) {
        curPosition += positionModifier;
        inboundNumbers[i] = curPosition;
    }
}