import { useMemo } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";
import Card from "../components/search/card";
import careTakers from "../seeds/caretaker";
import Bage from "../components/filterbadge";
import { isCat } from "../utils/helper";
import sepeicesData from "../data/species";
import moment from "moment";

export default () => {
  const { query } = useRouter();
  const careTakersComponent = useMemo(
    () =>
      careTakers
        .filter(({ location, species, notAvailableDate }) => {
          console.log(query, species, location, "log");
          return (
            query &&
            location === query.searchValue &&
            species.includes(Number(query.currentSelect)) &&
            !notAvailableDate.find(date => {
              console.log(
                moment(date).isAfter(query.startValue, "date"),
                moment(date).isBefore(query.endValue, "date"),
                moment(date).isSame(query.startValue, "date"),
                moment(date).isSame(query.endValue, "date"),
                date,
                query.startValue,
                query.endValue
              );
              return (
                (moment(date).isAfter(query.startValue, "date") &&
                  moment(date).isBefore(query.endValue, "date")) ||
                moment(date).isSame(query.startValue, "date") ||
                moment(date).isSame(query.endValue, "date")
              );
            })
          );
        })
        .map(({ name, description, age, score }) => (
          <Card name={name} description={description} age={age} score={score} />
        )),
    [query, careTakers]
  );

  const currentSpecies =
    query &&
    sepeicesData.find(specie => specie.key === Number(query.currentSelect));
  moment.locale("th");
  const startDate = moment(query.startValue).format("Do MMM");
  const endDate = moment(query.endValue).format("Do MMM");
  const isNotDog = useMemo(() => {
    return query && isCat(query.currentSelect);
  }, [query]);
  return (
    <div>
      <div>{query && query.searchValue}</div>
      <Bage>
        {startDate} - {endDate}
      </Bage>
      <Bage> {isNotDog ? "แมว" : "หมา"}</Bage>
      <Bage> {currentSpecies && currentSpecies.value}</Bage>
      {careTakersComponent}
    </div>
  );
};
