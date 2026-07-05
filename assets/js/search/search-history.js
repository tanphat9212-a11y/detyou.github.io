/*======================================================

    DETYOU SHOP
    SEARCH HISTORY
    Version : 2.0

======================================================*/

class SearchHistory {

    constructor(limit = 10) {

        this.storageKey = "detyou_search_history";

        this.limit = limit;

    }

    /*==========================================

        GET HISTORY

    ==========================================*/

    get() {

        return JSON.parse(

            localStorage.getItem(this.storageKey)

        ) || [];

    }

    /*==========================================

        SAVE HISTORY

    ==========================================*/

    save(list) {

        localStorage.setItem(

            this.storageKey,

            JSON.stringify(list)

        );

    }

    /*==========================================

        ADD KEYWORD

    ==========================================*/

    add(keyword) {

        keyword = keyword.trim();

        if (!keyword) return;

        let list = this.get();

        list = list.filter(item =>

            item.toLowerCase() !== keyword.toLowerCase()

        );

        list.unshift(keyword);

        if (list.length > this.limit) {

            list = list.slice(0, this.limit);

        }

        this.save(list);

    }

    /*==========================================

        REMOVE

    ==========================================*/

    remove(keyword) {

        let list = this.get();

        list = list.filter(item =>

            item !== keyword

        );

        this.save(list);

    }

    /*==========================================

        CLEAR

    ==========================================*/

    clear() {

        localStorage.removeItem(this.storageKey);

    }

    /*==========================================

        RENDER

    ==========================================*/

    render(container) {

        const list = this.get();

        if (!list.length) {

            container.innerHTML = `

<div class="history-empty">

    Chưa có lịch sử tìm kiếm

</div>

`;

            return;

        }

        let html = `

<div class="history-header">

    <span>

        Tìm kiếm gần đây

    </span>

    <button

        id="clearHistory">

        Xóa tất cả

    </button>

</div>

`;

        list.forEach(keyword => {

            html += `

<div

class="history-item"

data-keyword="${keyword}">

    <div class="history-left">

        <i class="fa-solid fa-clock-rotate-left"></i>

        <span>${keyword}</span>

    </div>

    <button

    class="remove-history"

    data-keyword="${keyword}">

        <i class="fa-solid fa-xmark"></i>

    </button>

</div>

`;

        });

        container.innerHTML = html;

        this.bind(container);

    }

    /*==========================================

        EVENTS

    ==========================================*/

    bind(container) {

        container

        .querySelectorAll(".history-item")

        .forEach(item => {

            item.addEventListener("click", () => {

                const keyword = item.dataset.keyword;

                location.href =

                `../pages/products.html?search=${encodeURIComponent(keyword)}`;

            });

        });

        container

        .querySelectorAll(".remove-history")

        .forEach(button => {

            button.addEventListener("click", (event) => {

                event.stopPropagation();

                this.remove(button.dataset.keyword);

                this.render(container);

            });

        });

        const clearButton =

        container.querySelector("#clearHistory");

        if (clearButton) {

            clearButton.onclick = () => {

                this.clear();

                this.render(container);

            };

        }

    }

}