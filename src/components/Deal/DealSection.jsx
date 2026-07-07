import "./Deal.css";

import deals from "../../assets/data/deals";

import DealCard from "./DealCard";


export default function DealSection(){


    return(

        <section className="deal-section">


            <div className="container">


                <div className="deal-wrapper">


                    <h2>

                        Ưu đãi nổi bật

                    </h2>



                    <div className="deal-grid">


                        {
                            deals.map(item=>(

                                <DealCard

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