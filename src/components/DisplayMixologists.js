import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayMixologists = () => {
    const [mixologists, setMixologists] = useState([]);
    //const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/v1/mixologists/')
            .then((res) => {
                //console.log(res.data)

                const mixologist = res.data
                setMixologists(mixologist)

                // const drinks = mixologist.drinks
                // setDrinks(drinks)

                // res.data.map(mix => { mix["drinks"].map(drink => drink["name"]) })

            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
    }, [mixologists])

    // useEffect(() => {

    // }, [drinks])

    return (
        <div>
            <div>
                {
                    mixologists.map((item) => {
                        let name = <React.Fragment key={item.id}>
                            <h1>{item.name}</h1>
                        </React.Fragment>
                        return name
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