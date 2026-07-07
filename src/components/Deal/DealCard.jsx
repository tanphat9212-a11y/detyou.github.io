export default function DealCard({item}){


    return(

        <div className="deal-card">


            <img

                src={item.image}

                alt={item.title}

            />



            <div className="deal-content">


                <h3>

                    {item.title}

                </h3>



                <button>

                    {item.button}

                </button>


            </div>


        </div>

    );


}