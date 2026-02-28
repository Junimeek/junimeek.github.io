let sayaCollapsibleList = GetDropdowns();

/*
    Sayaka initialization list:
    [
        Sayaka Dropdowns
    ]
*/
function InitializeSayakaFunctions(functionList)
{
    if (functionList[0])
    {
        for (let i = 0; i < sayaCollapsibleList.length; i++)
        {
            sayaCollapsibleList[i].classList.add("sayaDropdownID_" + i);
            console.log(sayaCollapsibleList[i].className);
        }
    }
}

function SayaCollapsibleToggle(collapsibleElement)
{
    let sayaCollapsibleContainer = collapsibleElement;

    if (sayaCollapsibleContainer.classList.contains("sayastate-activated"))
    {
        sayaCollapsibleContainer.firstElementChild.className = "fa fa-toggle-right";
        sayaCollapsibleContainer.classList.remove("sayastate-activated");
    }
    else
    {
        sayaCollapsibleContainer.firstElementChild.className = "fa fa-toggle-down";
        sayaCollapsibleContainer.classList.add("sayastate-activated");
    }
}

function GetDropdowns()
{
    let theList = document.getElementsByName("sayaDropdownContainer");
    return theList;
}