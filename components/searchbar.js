import Switch from "../components/switch";
import Select from "../components/select";
import Button from "../components/button";
import DatePicker from "../components/datepicker";
import { Input } from "antd";

export default () => {
  return (
    <>
      {/* <style jsx>
        {`
          .container {
            display: flex;
          }
        `}
      </style> */}
      <div className="container">
        <div className="row">
          <Input />
        </div>
        <div className="row">
          <div className="col-6">
            <Switch />
          </div>
          <div className="col-6">
            <Select options={[{ value: "test", key: "test" }]} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Button>Search</Button>
          </div>
          <div className="col-6">
            <DatePicker></DatePicker>
          </div>
        </div>
      </div>
    </>
  );
};
