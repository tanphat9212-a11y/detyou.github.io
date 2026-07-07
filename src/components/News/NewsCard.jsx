export default function NewsCard({item}){

    return(

        <article className="news-card">


            <div className="news-image">

                <img
                    src={item.image}
                    alt={item.title}
                />

            </div>


            <div className="news-info">


                <h3>
                    {item.title}
                </h3>


                <span>
                    {item.date}
                </span>


            </div>


        </article>

    );

}