import "./Filter.css";


export default function FilterBox(){


    return(

        <div className="filter-box">


            <h3>

                Bộ lọc

            </h3>



            <div className="filter-group">


                <h4>

                    Hãng sản xuất

                </h4>


                <label>

                    <input type="checkbox"/>

                    Apple

                </label>


                <label>

                    <input type="checkbox"/>

                    Samsung

                </label>


                <label>

                    <input type="checkbox"/>

                    Xiaomi

                </label>


                <label>

                    <input type="checkbox"/>

                    OPPO

                </label>


            </div>




            <div className="filter-group">


                <h4>

                    Khoảng giá

                </h4>


                <label>

                    <input type="checkbox"/>

                    Dưới 5 triệu

                </label>


                <label>

                    <input type="checkbox"/>

                    5 - 10 triệu

                </label>


                <label>

                    <input type="checkbox"/>

                    Trên 10 triệu

                </label>


            </div>


        </div>

    );

}