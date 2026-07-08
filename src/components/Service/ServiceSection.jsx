import "./Service.css";

import services from "../../assets/data/services";

import ServiceCard from "./ServiceCard";


export default function ServiceSection(){


    return(

        <section className="service-section">


            <div className="container">


                <div className="service-wrapper">


                    {
                        services.map(item=>(

                            <ServiceCard

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
