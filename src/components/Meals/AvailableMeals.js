import classes from "./availableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  // we should also consider loading and error state
  // here we initially put state to true because this comp it's jop to load
  const [isLoading, setIsLoading] = useState(true);
  // handle error state
  const[hasError , setHasError] =useState();


  useEffect(() => {
    // we make this extra  function because useEffect can't return promise
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodorderingapp-f61dc-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error("SomeThing went wrong?!");
      }

      const responseData = await response.json();

      // because response is object and we want array we will transform it

      const loadedData = [];

      for (let key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false)
    };

    fetchMeals();
  }, []);

  // here we will check if it's still loading before we loop on data
  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading.....</p>
    </section>
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      mealItem={meal}
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
