import "./News.css";

import news from "../../assets/data/news";

import NewsCard from "./NewsCard";


export default function NewsSection(){

    return(

        <section className="news-section">


            <div className="container">


                <div className="news-header">


                    <h2>
                        Tin công nghệ
                    </h2>


                    <button>
                        Xem tất cả →
                    </button>


                </div>



                <div className="news-grid">


                    {
                        news.map(item=>(

                            <NewsCard
                                key={item.id}
                                item={item}
                            />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}