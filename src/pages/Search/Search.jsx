import { useSearchParams } from "react-router-dom";
import products from "../../assets/data/products";
import ProductItem from "../../components/ProductList/ProductItem";
import "./Search.css";

export default function Search() {
    const [params] = useSearchParams();
    
    // ✨ Đổi từ "keyword" thành "query" cho khớp với file Header.jsx của bạn
    const queryTerm = params.get("query") || ""; 

    const result = products.filter(item =>
        item.name
            .toLowerCase()
            .includes(queryTerm.toLowerCase())
    );

    return (
        <section className="search-page">
            <div className="container">
                <h1>
                    Kết quả tìm kiếm: <span>{queryTerm}</span>
                </h1>

                <div className="search-grid">
                    {
                        result.length
                        ?
                        result.map(item => (
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        ))
                        :
                        <p>Không tìm thấy sản phẩm phù hợp với từ khóa.</p>
                    }
                </div>
            </div>
        </section>
    );
} // 

