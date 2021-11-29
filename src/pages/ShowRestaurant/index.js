import React, { useEffect, useState } from 'react';
import './index.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import BackIcon from "../../assets/icons/white/chevron_left.png";

function ShowRestaurant() {

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
    
        axios.get(`https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${id}`)
        .then(res => {
            setRestaurant(res.data.data);
        })
    }, []);

    return (
        <>
            <div className="header-show-restaurant">
                <div className="content">
                    <div className="container-restaurant">
                        <Link className="button-to-return white" to="/">
                            <img src={BackIcon}></img>
                            <span>Voltar</span>
                        </Link>
                        <div className="content-header">
                            <div className="image-cropper">
                                <img src="https://loremflickr.com/640/480/cuisine"></img>
                            </div>
                            <div className="info-restaurant white">
                                <h1 >{restaurant.name}</h1>
                                <div className="info-details">
                                    <p>{restaurant.telephone}</p>
                                    <p>{restaurant.website}</p>
                                </div>
                            </div>
                            <div className="below-image-cropper"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-show-restaurant">
                <div className="content">
                    <div className="container-restaurant">
                        <div className="info-details-mobile">
                            <h1 className="dark-down">{restaurant.name}</h1>
                        </div>
                        <div className="restaurant-details">
                            <div className="description item">
                                <h4 className="dark-down">Descrição</h4>
                                <p className="dark-up">{restaurant.description}</p>
                            </div>
                            <div className="contact item">
                                <h4 className="dark-down">Contato</h4>
                                <p className="dark-up">{restaurant.telephone}</p>
                                <p className="dark-up">{restaurant.website}</p>
                            </div>
                            <div className="price item">
                                <h4 className="dark-down">Faixa de Preço</h4>
                                <p className="dark-up">{restaurant.price_range}</p>
                            </div>
                            <hr className="item"></hr>
                            <div className="open-hour item">
                                <h4 className="dark-down">Horário de Funcionamento</h4>
                                <p className="dark-up">{restaurant.opening_hours}</p>
                            </div>
                            <div className="payment-methods item">
                                <h4 className="dark-down">Formas de Pagamento</h4>
                                <p className="dark-up">{restaurant.payment_methods}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
  }
  
  export default ShowRestaurant;