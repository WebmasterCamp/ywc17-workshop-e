import Switch from "../components/switch";
import Select from "../components/select";
import Button from "../components/button";
import DatePicker from "../components/datepicker";
import { Input } from "antd";
import styled from "@emotion/styled";
import { useMemo, useState, useCallback, useContext } from "react";
import { rootContext } from "./_app";
import { useRouter } from "next/router";

const locations = ["bangkok", "samutprakarn"];

export default () => {
  const [searchValue, setSearchValue] = useState("");
  const [current, setCurrent] = useState("dogs");
  const [currentSelect, setCurrentSelect] = useState("dogs");
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const rootData = useContext(rootContext);
  const router = useRouter();

  const { setSearchData } = rootData;

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
    console.log(searchValue, current, currentSelect, startValue, endValue);
    router.push("/search", {
      query: {
        searchValue,
        current,
        currentSelect,
        startValue: startValue.toString(),
        endValue: endValue.toString()
      }
    });
  }, [searchValue, current, currentSelect, startValue, endValue]);

  return (
    <div>
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
            options={[{ value: "test", key: "test" }]}
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
          <Button full onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
