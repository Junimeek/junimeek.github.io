function ToggleMenu()
{
    let buttons = document.getElementsByTagName("navBarToggleableButton");
    let i = 0;

    if (buttons[0].className == "navBarWideShow") {
        for (i; i < buttons.length; i++) {
            buttons[i].className = "navBarWideHide";
        }
    }
    else {
        for (i; i < buttons.length; i++) {
            buttons[i].className = "navBarWideShow";
        }
    }
    
}