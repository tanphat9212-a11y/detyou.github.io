import "./Category.css";

import categories from "../../assets/data/categories";

import CategoryItem from "./CategoryItem";


export default function CategorySection(){


    return(

        <section className="category-section">


            <div className="container">


                <div className="category-box">


                    <h2>

                        Danh mục sản phẩm

                    </h2>



                    <div className="category-grid">


                        {
                            categories.map(item=>(

                                <CategoryItem

                                    key={item.id}

                                    item={item}

                                />

                            ))
                        }


                    </div>


                </div>


            </div>


        </section>

    );


}