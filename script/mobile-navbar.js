class MobileNavbar {
    constructor(mobileMenu, siteNavigation, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.siteNavigation = document.querySelector(siteNavigation);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.siteNavigation.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".site-navigation",
    ".site-navigation li",
)