/*======================================================

    DETYOU SHOP
    SEARCH CORE
    Version : 2.0

======================================================*/

class SearchCore {

    constructor() {

        this.products = [];

        this.filteredProducts = [];

        this.cache = new Map();

    }

    /*==========================================
        LOAD PRODUCTS
    ==========================================*/

    async loadProducts() {

        try {

            const response = await fetch("../data/products.json");

            this.products = await response.json();

            return this.products;

        }

        catch (error) {

            console.error("Load Product Error :", error);

            return [];

        }

    }

    /*==========================================
        NORMALIZE STRING
    ==========================================*/

    normalize(text = "") {

        return text

            .toString()

            .toLowerCase()

            .normalize("NFD")

            .replace(/[\u0300-\u036f]/g, "")

            .trim();

    }

    /*==========================================
        FORMAT MONEY
    ==========================================*/

    formatPrice(price) {

        return Number(price)

            .toLocaleString("vi-VN") + "đ";

    }

    /*==========================================
        DEBOUNCE
    ==========================================*/

    debounce(callback, delay = 300) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        }

    }

    /*==========================================
        SCORE SEARCH
    ==========================================*/

    score(keyword, product) {

        keyword = this.normalize(keyword);

        let score = 0;

        const name = this.normalize(product.name);

        const category = this.normalize(product.category);

        const brand = this.normalize(product.brand);

        const color = this.normalize(product.color);

        const description = this.normalize(product.description || "");

        if (name === keyword)

            score += 100;

        if (name.startsWith(keyword))

            score += 60;

        if (name.includes(keyword))

            score += 40;

        if (category.includes(keyword))

            score += 20;

        if (brand.includes(keyword))

            score += 20;

        if (color.includes(keyword))

            score += 10;

        if (description.includes(keyword))

            score += 10;

        return score;

    }

    /*==========================================
        SEARCH
    ==========================================*/

    search(keyword) {

        keyword = this.normalize(keyword);

        if (keyword === "")

            return [];

        if (this.cache.has(keyword))

            return this.cache.get(keyword);

        const results = this.products

            .map(product => {

                return {

                    ...product,

                    score: this.score(keyword, product)

                };

            })

            .filter(product => product.score > 0)

            .sort((a, b) => b.score - a.score);

        this.cache.set(keyword, results);

        return results;

    }

    /*==========================================
        POPULAR PRODUCT
    ==========================================*/

    getPopular(limit = 8) {

        return [...this.products]

            .sort((a, b) => b.sold - a.sold)

            .slice(0, limit);

    }

    /*==========================================
        NEW PRODUCT
    ==========================================*/

    getNewest(limit = 8) {

        return [...this.products]

            .sort((a, b) => b.id - a.id)

            .slice(0, limit);

    }

    /*==========================================
        CATEGORY
    ==========================================*/

    filterCategory(category) {

        category = this.normalize(category);

        return this.products.filter(product =>

            this.normalize(product.category) === category

        );

    }

    /*==========================================
        BRAND
    ==========================================*/

    filterBrand(brand) {

        brand = this.normalize(brand);

        return this.products.filter(product =>

            this.normalize(product.brand) === brand

        );

    }

    /*==========================================
        COLOR
    ==========================================*/

    filterColor(color) {

        color = this.normalize(color);

        return this.products.filter(product =>

            this.normalize(product.color) === color

        );

    }

    /*==========================================
        PRICE
    ==========================================*/

    filterPrice(min, max) {

        return this.products.filter(product => {

            return product.salePrice >= min

                &&

                product.salePrice <= max;

        });

    }

    /*==========================================
        CLEAR CACHE
    ==========================================*/

    clearCache() {

        this.cache.clear();

    }

}