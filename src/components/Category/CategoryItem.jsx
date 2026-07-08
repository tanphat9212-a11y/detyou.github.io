export default function CategoryItem({item}){

    return(

        <div className="category-item">


            <div className="category-image">

                <img
                    src={item.image}
                    alt={item.name}
                />

            </div>


            <p>

                {item.name}

            </p>


        </div>

    );

}
