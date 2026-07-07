import "./Video.css";

import videos from "../../assets/data/videos";

import VideoCard from "./VideoCard";


export default function VideoSection(){


    return(

        <section className="video-section">


            <div className="container">


                <div className="video-wrapper">


                    <div className="video-header">


                        <h2>

                            Video công nghệ

                        </h2>



                        <button>

                            Xem tất cả →

                        </button>


                    </div>



                    <div className="video-grid">


                        {
                            videos.map(item=>(

                                <VideoCard

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