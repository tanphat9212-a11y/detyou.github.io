/*======================================================

    DETYOU SHOP
    SEARCH KEYBOARD
    Version : 2.0

======================================================*/

class SearchKeyboard {

    constructor(input, container) {

        this.input = input;

        this.container = container;

        this.items = [];

        this.index = -1;

    }

    /*==========================================

        REFRESH ITEMS

    ==========================================*/

    refresh() {

        this.items = [

            ...this.container.querySelectorAll(".search-item")

        ];

        this.index = -1;

        this.removeActive();

    }

    /*==========================================

        REMOVE ACTIVE

    ==========================================*/

    removeActive() {

        this.items.forEach(item => {

            item.classList.remove("active");

        });

    }

    /*==========================================

        SET ACTIVE

    ==========================================*/

    setActive(index) {

        this.removeActive();

        if (!this.items.length) return;

        if (index < 0)

            index = this.items.length - 1;

        if (index >= this.items.length)

            index = 0;

        this.index = index;

        const item = this.items[this.index];

        item.classList.add("active");

        item.scrollIntoView({

            block: "nearest",

            behavior: "smooth"

        });

    }

    /*==========================================

        MOVE DOWN

    ==========================================*/

    next() {

        this.setActive(this.index + 1);

    }

    /*==========================================

        MOVE UP

    ==========================================*/

    previous() {

        this.setActive(this.index - 1);

    }

    /*==========================================

        OPEN ACTIVE

    ==========================================*/

    open() {

        if (this.index === -1) return;

        this.items[this.index].click();

    }

    /*==========================================

        CLOSE

    ==========================================*/

    close() {

        this.removeActive();

        this.index = -1;

    }

    /*==========================================

        BIND EVENTS

    ==========================================*/

    bind() {

        this.input.addEventListener("keydown", (event) => {

            switch (event.key) {

                case "ArrowDown":

                    event.preventDefault();

                    this.next();

                    break;

                case "ArrowUp":

                    event.preventDefault();

                    this.previous();

                    break;

                case "Enter":

                    if (this.index > -1) {

                        event.preventDefault();

                        this.open();

                    }

                    break;

                case "Escape":

                    this.container.classList.remove("active");

                    this.close();

                    break;

            }

        });

    }

}