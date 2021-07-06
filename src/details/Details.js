import React from 'react';
import {useLocation} from 'react-router';
import './details.css';

function Details() {
    const  location = useLocation();
    let selectedItem = location.state.data;

    return(
        <div className="grid-container">
            <header className="header">
                <h1>{selectedItem.name}</h1>
                <h3>
                    {selectedItem.tagline}
                </h3>
            </header>
            <section className="grid-section">
                <div className="container split">
                    <div>
                        <h3>{selectedItem.description}</h3>
                        <div className="split">
                            <section className="deatils-section">
                                <h4>Food Combo</h4>
                                {selectedItem.food_pairing && selectedItem.food_pairing.map(item => (
                                    <div>{item}</div>
                                ))}
                            </section>
                            <section className="deatils-section">
                                <h4>Ingridients</h4>
                                {selectedItem.ingredients.hops && selectedItem.ingredients.hops.map((item,i) => (
                                    <div key={i}>{item.name}</div>
                                ))}
                            </section>
                        </div>
                    </div>
                    <div className="item-image"> <img src={selectedItem.image_url}></img></div>
                </div>
            </section>
        </div>
    )
}

export default Details;