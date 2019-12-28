import Switch from "../components/switch";
import Select from "../components/select";
import Button from "../components/button";
import DatePicker from "../components/datepicker";
import { Input } from "antd";
import styled from "@emotion/styled";
import { useMemo, useState, useCallback, useContext } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";
import speciesData from "../data/species";

const locations = ["bangkok", "samutprakarn"];

export default () => {
  const [searchValue, setSearchValue] = useState("");
  const [current, setCurrent] = useState("dogs");
  const [currentSelect, setCurrentSelect] = useState(null);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const router = useRouter();

  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleModeChange = useCallback(e => {
    setCurrent(e.target.value);
  }, []);

  const onSelectChange = useCallback(value => {
    setCurrentSelect(value);
  }, []);

  const handleSearch = useCallback(() => {
    router.push({
      pathname: "/search",
      query: {
        searchValue,
        current,
        currentSelect,
        startValue: startValue.toString(),
        endValue: endValue.toString()
      }
    });
  }, [searchValue, current, currentSelect, startValue, endValue]);

  let filteredSpeciesData = speciesData.filter(data => {
    if (current === "หมา") {
      return data.key < 50;
    } else if (current === "แมว") {
      return data.key > 50;
    } else {
      return false;
    }
  });

  // const LocationResult = styled.dic``;
  const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 24px 25px 24px;
  `;

  return (
    <SearchContainer>
      <style jsx>
        {`
        .container {
          margin
        `}
      </style>
      <div>ดูแลศัตว์วัยเก๋า ใกล้บ้านคุณ</div>
      <div className="container">
        <div className="row">
          <Input
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="จังหวัด อำเภอ"
          />
          {locations
            .filter(location => location.includes(searchValue))
            .map(location => {
              return (
                <div key={location} onClick={() => setSearchValue(location)}>
                  {location}
                </div>
              );
            })}
        </div>
        <div className="row justify-content-between">
          <Switch
            handleModeChange={handleModeChange}
            current={current}
            className="col"
          />
          <Select
            onChange={onSelectChange}
            className="col"
            palceholder="พันธ์สุนัข/แมว"
            options={filteredSpeciesData}
          />
        </div>
        <DatePicker
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
          className="row"
        ></DatePicker>
        <div className="row">
          <Button
            disabled={
              !(
                searchValue &&
                current &&
                currentSelect &&
                startValue &&
                endValue
              )
            }
            full
            onClick={handleSearch}
          >
            ค้นหา
          </Button>
        </div>
      </div>
    </SearchContainer>
  );
};
