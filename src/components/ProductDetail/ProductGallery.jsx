export default function ProductGallery({product}){


    return(

        <div className="product-gallery">


            <div className="main-image">


                <img

                    src={product.image}

                    alt={product.name}

                />


            </div>



            <div className="thumbnail-list">


                {
                    product.images.map((img,index)=>(

                        <img

                            key={index}

                            src={img}

                            alt=""

                        />

                    ))
                }


            </div>


        </div>

    );

}