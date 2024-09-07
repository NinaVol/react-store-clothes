import { useParams, useNavigate } from "react-router";
import { data } from './data';
import "./App.css"
function AboutProduct() {
    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div className="product-card" key={index}>
                        <h3>{elem.name}</h3>
                        <img
                           src={elem.image}
                           alt='product'
                           width='400px'
                        />
                        <div className="goBack">
                        <button className="change btn" onClick={() => navigate(-1)}>
                            Go back
                        </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutProduct;