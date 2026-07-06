/*====================================================

    DETYOU SHOP

    SEARCH MODULE

====================================================*/

class SearchEngine {

    constructor() {

        this.products = [];

        this.history = [];

        this.input = document.querySelector("#searchInput");

        this.result = document.querySelector("#searchResult");

        this.button = document.querySelector("#searchBtn");

        this.init();

    }

    /*============================================*/

    async init(){

        await this.loadProducts();

        this.loadHistory();

        this.bindEvents();

    }

    /*============================================*/

    async loadProducts(){

        try{

            const response = await fetch("data/products.json");

            this.products = await response.json();

        }

        catch(error){

            console.error(error);

        }

    }

    /*============================================*/

    bindEvents(){

        if(!this.input) return;

        this.input.addEventListener("input",(e)=>{

            this.search(e.target.value);

        });

        this.input.addEventListener("focus",()=>{

            if(this.input.value===""){

                this.renderHistory();

            }

        });

        document.addEventListener("click",(e)=>{

            if(!e.target.closest(".search-box")){

                this.result.classList.remove("active");

            }

        });

        this.button.addEventListener("click",()=>{

            this.submit();

        });

        this.input.addEventListener("keydown",(e)=>{

            if(e.key==="Enter"){

                this.submit();

            }

        });

    }

    /*============================================*/

    normalize(text){

        return text

        .toLowerCase()

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g,"");

    }

    /*============================================*/

    search(keyword){

        keyword = this.normalize(keyword);

        if(keyword===""){

            this.renderHistory();

            return;

        }

        const results = this.products.filter(product=>{

            return (

                this.normalize(product.name).includes(keyword)

                ||

                this.normalize(product.category).includes(keyword)

                ||

                this.normalize(product.brand).includes(keyword)

                ||

                this.normalize(product.color).includes(keyword)

            );

        });

        this.renderResults(results);

    }

    /*============================================*/

    renderResults(list){

        this.result.innerHTML="";

        this.result.classList.add("active");

        if(list.length===0){

            this.result.innerHTML=`

                <div class="search-item">

                    Không tìm thấy sản phẩm

                </div>

            `;

            return;

        }

        list.slice(0,8).forEach(product=>{

            this.result.innerHTML+=`

            <div class="search-item"

                 onclick="location.href='pages/product-detail.html?id=${product.id}'">

                <img

                src="${product.image}"

                alt="${product.name}">

                <div class="search-info">

                    <div class="search-name">

                        ${product.name}

                    </div>

                    <div class="search-price">

                        ${this.money(product.salePrice)}

                    </div>

                </div>

            </div>

            `;

        });

    }

    /*============================================*/

    submit(){

        const keyword=this.input.value.trim();

        if(keyword==="") return;

        this.saveHistory(keyword);

        location.href=

        `pages/products.html?search=${encodeURIComponent(keyword)}`;

    }

    /*============================================*/

    money(number){

        return number.toLocaleString("vi-VN")+"đ";

    }

    /*============================================*/

    saveHistory(keyword){

        keyword=keyword.trim();

        if(keyword==="") return;

        this.history=this.history.filter(item=>item!==keyword);

        this.history.unshift(keyword);

        this.history=this.history.slice(0,8);

        localStorage.setItem(

            "searchHistory",

            JSON.stringify(this.history)

        );

    }

    /*============================================*/

    loadHistory(){

        this.history=

        JSON.parse(

            localStorage.getItem("searchHistory")

        )||[];

    }

    /*============================================*/

    renderHistory(){

        this.result.classList.add("active");

        this.result.innerHTML="";

        if(this.history.length===0){

            this.result.innerHTML=`

            <div class="search-item">

            Chưa có lịch sử tìm kiếm

            </div>

            `;

            return;

        }

        this.history.forEach(item=>{

            this.result.innerHTML+=`

            <div

            class="search-item history-item"

            >

                <i class="fa-solid fa-clock-rotate-left"></i>

                <span>${item}</span>

            </div>

            `;

        });

    }

}

/*====================================================*/

window.addEventListener("DOMContentLoaded",()=>{

    new SearchEngine();

}); 




/*======================================================

    DETYOU SHOP
    SEARCH
    Version : 2.0

======================================================*/

document.addEventListener("DOMContentLoaded", async () => {

    const input = document.querySelector("#searchInput");

    const button = document.querySelector("#searchBtn");

    const result = document.querySelector("#searchResult");

    if (!input || !result) return;

    const core = new SearchCore();

    const render = new SearchRender(result);

    const keyboard = new SearchKeyboard(input, result);

    const history = new SearchHistory();

    render.loading();

    await core.loadProducts();

    render.popular(core.getPopular());

    keyboard.refresh();

    keyboard.bind();

    const search = core.debounce((keyword) => {

        if (keyword.trim() === "") {

            history.render(result);

            keyboard.refresh();

            return;

        }

        const products = core.search(keyword);

        render.render(products, keyword);

        keyboard.refresh();

    }, 250);

    input.addEventListener("input", e => {

        search(e.target.value);

    });

    input.addEventListener("focus", () => {

        if (input.value === "") {

            history.render(result);

            result.classList.add("active");

            keyboard.refresh();

        }

    });

    document.addEventListener("click", e => {

        if (!e.target.closest(".search-box")) {

            result.classList.remove("active");

        }

    });

    function submitSearch() {

        const keyword = input.value.trim();

        if (!keyword) return;

        history.add(keyword);

        location.href =

        `../pages/products.html?search=${encodeURIComponent(keyword)}`;

    }

    button.onclick = submitSearch;

    input.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            submitSearch();

        }

    });

});
let products = []; // từ data/products.js

const input = document.querySelector("#searchInput");
const box = document.querySelector("#suggestBox");

input.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  if (!keyword) {
    box.innerHTML = "";
    return;
  }

  const suggestions = products
    .filter(p => p.name.toLowerCase().includes(keyword))
    .slice(0, 5);

  renderSuggestions(suggestions);
});

function renderSuggestions(items) {
  box.innerHTML = items
    .map(
      item => `
      <div class="suggest-item" onclick="selectProduct('${item.id}')">
        ${item.name}
      </div>
    `
    )
    .join("");
}

function selectProduct(id) {
  window.location.href = `product-detail.html?id=${id}`;
}
const params = new URLSearchParams(window.location.search);

const keyword = (params.get("q") || "").toLowerCase();

document.getElementById("title").innerHTML =
`Kết quả tìm kiếm cho "${keyword}"`;

const result = products.filter(product =>
product.name.toLowerCase().includes(keyword)
);

const container = document.getElementById("product-list");

container.innerHTML = result.map(product=>`
<div class="product-card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price.toLocaleString()}đ</p>
</div>
`).join("");