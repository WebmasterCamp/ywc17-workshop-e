import { useMemo } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";
import Card from "../components/search/card";
import careTakers from "../seeds/caretaker";
import Bage from "../components/filterbadge";
import { isCat } from "../utils/helper";

export default () => {
  const { query } = useRouter();
  const careTakersComponent = useMemo(
    () =>
      careTakers
        .filter(({ location, species }) => {
          console.log(query, species, location, "log");
          return (
            query &&
            location === query.searchValue &&
            species.includes(query.currentSelect)
          );
        })
        .map(({ name, description, age, score }) => (
          <Card name={name} description={description} age={age} score={score} />
        )),
    [query, careTakers]
  );

  const isNotDog = useMemo(() => {
    return query && isCat(query.currentSelect);
  }, [query]);
  return (
    <div>
      <Bage> {isNotDog ? "แมว" : "หมา"}</Bage>
      <Bage></Bage>
      <Bage></Bage>
      <Bage></Bage>
      {careTakersComponent}
    </div>
  );
};
