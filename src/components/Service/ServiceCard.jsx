export default function ServiceCard({item}){


    return(

        <div className="service-card">


            <div className="service-icon">


                <img

                    src={item.icon}

                    alt={item.title}

                />


            </div>



            <div className="service-info">


                <h3>

                    {item.title}

                </h3>


                <p>

                    {item.text}

                </p>


            </div>


        </div>

    );


}