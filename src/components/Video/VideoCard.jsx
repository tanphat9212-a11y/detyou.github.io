import { FaPlay } from "react-icons/fa";


export default function VideoCard({item}){


    return(

        <div className="video-card">


            <div className="video-image">


                <img

                    src={item.image}

                    alt={item.title}

                />



                <div className="play-button">


                    <FaPlay />


                </div>



                <span>

                    {item.time}

                </span>


            </div>



            <h3>

                {item.title}

            </h3>



        </div>

    );

}
