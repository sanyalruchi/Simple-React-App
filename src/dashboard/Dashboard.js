import React, {useState, useEffect} from 'react';
import './dashboard.css';
import {Redirect} from 'react-router-dom';

function Dashboard(){
    const [beerData,setBeerData] = useState([]);
    const [isRedirect, setIsRedirect] = useState(false);
    const [selectedItem, setSelecteditem] = useState({});

    const getData = async () => {
        let data = await fetch('https://api.punkapi.com/v2/beers');
        let result = await data.json();
        console.log(result, "result");
        setBeerData(result);
    }

    useEffect(() => {
        getData();
    },[])

    const handleClick = (item) => {
        setIsRedirect(true);
        setSelecteditem(item);
    }

    return(
        <div className="dashboard">
            <div className="grid-container">
                <header className="grid-header">
                <div className="grid-header-column">Id</div>
                <div className="grid-header-column">Name</div>
                <div className="grid-header-column">Tagline</div>
                <div className="grid-header-column">first Brewed</div>
            </header>
            {beerData && beerData.length && beerData.map(item => {
                return (
                    <div className="grid-row" key={item.id} onClick={()=> handleClick(item)}>
                        <div className="grid-column">{item.id}</div>
                        <div className="grid-column">{item.name}</div>
                        <div className="grid-column">{item.tagline}</div>
                        <div className="grid-column">{item.first_brewed}</div>
                    </div>
                )
            })}</div>

            {isRedirect && <Redirect to={{
                pathname: '/details',
                state: {data: selectedItem}
            }}
          />}
        </div>
    )
}

export default Dashboard;