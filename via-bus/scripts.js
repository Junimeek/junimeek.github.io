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