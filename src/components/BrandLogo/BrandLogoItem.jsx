export default function BrandLogoItem({item}){


    return(

        <div className="brand-logo-item">


            <img

                src={item.image}

                alt={item.name}

            />


        </div>

    );

}