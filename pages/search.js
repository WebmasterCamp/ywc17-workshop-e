import { useMemo } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";
import Card from "../components/search/card";
import careTakers from "../seeds/caretaker";
import Bage from "../components/filterbadge";

export default () => {
  const { query } = useRouter();
  const careTakersComponent = useMemo(
    () =>
      careTakers
        .filter(({ location }) => location === query.location)
        .map(({ name, description, age, score }) => (
          <Card name={name} description={description} age={age} score={score} />
        )),
    [query]
  );
  return (
    <div>
      <Bage></Bage>
      <Bage></Bage>
      <Bage></Bage>
      <Bage></Bage>
      {careTakersComponent}
    </div>
  );
};
