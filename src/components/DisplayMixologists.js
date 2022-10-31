import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayMixologists = () => {
    const [mixologists, setMixologists] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/v1/mixologists/')
            .then((res) => {
                const mixologist = res.data
                setMixologists(mixologist)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
    }, [mixologists])

    return (
        <div>
            <div>
                {
                    mixologists.map((item) => {
                        let name = <React.Fragment key={item.id}>
                            <h1>{item.name}</h1>
                        </React.Fragment>
                        let drinksList = item.drinks.map(drink => {
                            let drinksInfo = <React.Fragment key={drink.id}>
                                <h3>{drink.name}</h3>
                                <p>{drink.ingredients}</p>
                            </React.Fragment>
                            return drinksInfo

                        })
                        return [name, drinksList]
                    }
                    )}
            </div>
            <div>
                {
                    mixologists.map((item) => {
                        let drinks = item.drinks
                        return drinks.map((drink) => {
                            let drinksInfo = <React.Fragment key={drink.id}>
                                <h3>{drink.name}</h3>
                                <p>{drink.ingredients}</p>
                            </React.Fragment>
                            return drinksInfo
                        })
                    })
                }
            </div>
        </div>
    )

}

export default DisplayMixologists