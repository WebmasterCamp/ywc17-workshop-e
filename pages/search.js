import { useMemo, useCallback } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";
import Card from "../components/search/card";
import careTakers from "../seeds/caretaker";
import Bage from "../components/filterbadge";
import { isCat } from "../utils/helper";
import sepeicesData from "../data/species";
import moment from "moment";
import useRegistration from "../hooks/register";
import Newnarbar from "../components/newnarbar";

export default () => {
  const router = useRouter();
  const { query } = router;
  const [_, setRegisterData] = useRegistration();
  const careTakersComponent = useMemo(
    () =>
      careTakers
        .filter(({ location, species, notAvailableDate }) => {
          return (
            query &&
            location === query.searchValue &&
            species.includes(Number(query.currentSelect)) &&
            !notAvailableDate.find(date => {
              return (
                (moment(date).isAfter(query.startValue, "date") &&
                  moment(date).isBefore(query.endValue, "date")) ||
                moment(date).isSame(query.startValue, "date") ||
                moment(date).isSame(query.endValue, "date")
              );
            })
          );
        })
        .map((careTaker, i) => {
          const { name, description, age, score } = careTaker;
          return (
            <Card
              key={i}
              name={name}
              onClick={() => onCardClick(careTaker)}
              description={description}
              age={age}
              score={score}
              margin="24px 10px"
            />
          );
        }),
    [query, careTakers]
  );

  const onCardClick = useCallback(careTaker => {
    setRegisterData({
      careTaker,
      location: query.searchValue,
      startDate: query.startValue,
      endDate: query.endValue,
      species: query.currentSelect
    });
    router.push("/partner-profile");
  });

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
      <Newnarbar></Newnarbar>
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
