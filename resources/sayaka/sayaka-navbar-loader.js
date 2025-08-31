let navBarPages = [
    "home",
    "via",
    "sakemi",
    "uniterra",
    "about",
    "contact",
];
let storedUnderlineType = 0;

function LoadNavBar(underlineType)
{
    storedUnderlineType = underlineType;
    document.writeln(DrawUnderline(1));
    document.writeln('<a href="https://junimeek.net/"><i class="fa fa-home"></i> Home</a>');
    document.writeln('</div>');
    document.writeln(DrawUnderline(2));
    document.writeln('<div class="saya-navbar-dropdown-container">');
    document.writeln('<div class="saya-navbar-dropdown-button">');
    document.writeln('<a>Site Categories <i class="fa fa-chevron-down"></i></a>');
    document.writeln('</div>');
    document.writeln('<div class="saya-navbar-dropdown-content-large">');
    document.writeln('<a href="https://junimeek.net/via-bus/" target="_parent" class="saya-navbar-highlight-via">VIA Information</a>');
    document.writeln('<a href="https://junimeek.net/sakemitech/" target="_parent" class="saya-navbar-highlight-sakemi">SakemiTech</a>');
    document.writeln('<a href="https://junimeek.net/uniterra/" target="_parent" class="saya-navbar-highlight-uniterra">UniTerra</a>');
    document.writeln('</div>');
    document.writeln('</div>');
    document.writeln('</div>');
    document.writeln(DrawUnderline(3));
    document.writeln('<a href="https://junimeek.net/about"><i class="fa fa-info-circle"></i> About</a>');
    document.writeln('</div>');
    document.writeln(DrawUnderline(4));
    document.writeln('<a href="https://junimeek.net/contact"><i class="fa fa-envelope"></i> Contact</a>');
    document.writeln('</div>');
    document.writeln('<div class="saya-navbar-filler saya-navbar-leftborder"></div>');
    document.writeln('<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-button-menu">');
    document.writeln('<a href="javascript:void(0);" id="button-nav-menu">Menu <i class="fa fa-bars"></i></a>');
    document.writeln('</div>');
}

function DrawUnderline(currentUnderlineCheck)
{
    switch(currentUnderlineCheck)
    {
        case 1:
            switch(storedUnderlineType) {
                case 0:
                    return '<div class="saya-navbar-item saya-navbar-underline-home">';
                default:
                    return '<div class="saya-navbar-item">';
            }
        case 2:
            switch(storedUnderlineType) {
                case 1:
                    return '<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-underline-via">';
                case 2:
                    return '<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-underline-sakemi">';
                case 3:
                    return '<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-underline-uniterra">';
                default:
                    return '<div class="saya-navbar-item saya-navbar-leftborder">';
            }
        case 3:
            switch(storedUnderlineType) {
                case 4:
                    return '<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-underline-about">';
                default:
                    return '<div class="saya-navbar-item saya-navbar-leftborder">';
            }
        case 4:
            switch(storedUnderlineType) {
                case 5:
                    return '<div class="saya-navbar-item saya-navbar-leftborder saya-navbar-underline-contact">';
                default:
                    return '<div class="saya-navbar-item saya-navbar-leftborder">';
            }
    }
}