// import Switch from "../components/switch";
// import Select from "../components/select";
// import Button from "../components/button";
// import DatePicker from "../components/datepicker";
// import { Input } from "antd";
// import styled from "@emotion/styled";
// import { useMemo, useState } from "react";

// const location = ["bangkok", "samutprakarn"];
// const initialResult = [{ review: "" }];

// export default () => {
//   const [result, setResult] = useState(initialResult);
//   const handleSearchChange = e => {
//     const value = e.target.value;
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <Input onChange={handleSearchChange} placeholder="จังหวัด อำเภอ" />
//         </div>
//         <div className="row justify-content-between">
//           <Switch className="col" />
//           <Select className="col" options={[{ value: "test", key: "test" }]} />
//         </div>
//         <DatePicker className="row"></DatePicker>
//         <div className="row">
//           <Button full>Search</Button>
//         </div>
//       </div>
//     </>
//   );
// };
