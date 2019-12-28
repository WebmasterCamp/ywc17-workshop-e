import { Select } from "antd";

const { Option } = Select;
import styled from "@emotion/styled";

export default ({ options, placeholder, onChange }) => {
  const SelectOption = styled(Option)`
    border-radius: 8px 0px 0px 8px;
    font-size: 15px;
    color: #383838;
  `;

  const selectOptions = options.map(({ key, value }) => (
    <SelectOption key={key}>{value}</SelectOption>
  ));

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {selectOptions}
    </Select>
  );
};
