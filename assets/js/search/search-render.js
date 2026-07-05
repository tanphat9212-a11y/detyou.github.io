/*======================================================

    DETYOU SHOP
    SEARCH RENDER
    Version : 2.0

======================================================*/

class SearchRender {

    constructor(container) {

        this.container = container;

    }

    /*==========================================

        FORMAT PRICE

    ==========================================*/

    money(price) {

        return Number(price).toLocaleString("vi-VN") + "đ";

    }

    /*==========================================

        HIGHLIGHT

    ==========================================*/

    highlight(text, keyword) {

        if (!keyword) return text;

        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        const regex = new RegExp(`(${escaped})`, "gi");

        return text.replace(regex, "<mark>$1</mark>");

    }

    /*==========================================

        BADGE

    ==========================================*/

    badge(product) {

        if (product.sold >= 1000)

            return `<span class="search-badge hot">Bán chạy</span>`;

        if (product.salePrice < product.price)

            return `<span class="search-badge sale">Flash Sale</span>`;

        return `<span class="search-badge new">Mới</span>`;

    }

    /*==========================================

        PRODUCT ITEM

    ==========================================*/

    item(product, keyword) {

        const percent = Math.round(

            (1 - product.salePrice / product.price) * 100

        );

        return `

<a class="search-item"

href="../pages/product-detail.html?id=${product.id}">

    <div class="search-image">

        <img

        src="${product.image}"

        alt="${product.name}">

    </div>

    <div class="search-content">

        <div class="search-title">

            ${this.highlight(product.name, keyword)}

        </div>

        <div class="search-category">

            ${product.category}

        </div>

        <div class="search-bottom">

            <div class="search-price">

                ${this.money(product.salePrice)}

                <span>

                    ${this.money(product.price)}

                </span>

            </div>

            <div class="search-discount">

                -${percent}%

            </div>

        </div>

    </div>

    ${this.badge(product)}

</a>

`;

    }

    /*==========================================

        HEADER

    ==========================================*/

    header(total) {

        return `

<div class="search-header">

    <span>

        Tìm thấy

        <strong>${total}</strong>

        sản phẩm

    </span>

</div>

`;

    }

    /*==========================================

        EMPTY

    ==========================================*/

    empty(keyword) {

        return `

<div class="search-empty">

    <i class="fa-solid fa-box-open"></i>

    <h3>

        Không tìm thấy sản phẩm

    </h3>

    <p>

        Không có kết quả cho

        <strong>${keyword}</strong>

    </p>

</div>

`;

    }

    /*==========================================

        LOADING

    ==========================================*/

    loading() {

        let html = "";

        for (let i = 0; i < 6; i++) {

            html += `

<div class="search-skeleton">

    <div class="skeleton-image"></div>

    <div class="skeleton-content">

        <div class="skeleton-line"></div>

        <div class="skeleton-line short"></div>

    </div>

</div>

`;

        }

        this.container.innerHTML = html;

        this.container.classList.add("active");

    }

    /*==========================================

        POPULAR

    ==========================================*/

    popular(products) {

        let html = `

<div class="search-header">

    <span>

        Sản phẩm nổi bật

    </span>

</div>

`;

        products.forEach(product => {

            html += this.item(product, "");

        });

        this.container.innerHTML = html;

        this.container.classList.add("active");

    }

    /*==========================================

        RENDER

    ==========================================*/

    render(products, keyword) {

        this.container.classList.add("active");

        if (!products.length) {

            this.container.innerHTML = this.empty(keyword);

            return;

        }

        let html = this.header(products.length);

        products.forEach(product => {

            html += this.item(product, keyword);

        });

        this.container.innerHTML = html;

    }

    /*==========================================

        CLOSE

    ==========================================*/

    close() {

        this.container.classList.remove("active");

    }

    /*==========================================

        CLEAR

    ==========================================*/

    clear() {

        this.container.innerHTML = "";

    }

}