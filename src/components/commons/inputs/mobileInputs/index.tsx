import styled from "@emotion/styled";
//types

const Input = styled.input`
  width: 100%;
  height: 45px;
  text-align: center;
  border: 1px solid rgba(198, 211, 230, 1);
  border-radius: 5px;
  padding: 10px;
  font-size: 0.875rem;
  margin-bottom: 7px;
  :focus {
    outline: none;
    border: 2px solid #ffd24c;
  }
`;

export default function CommonMobileInput(props) {
  return (
    <Input
      type={props?.type}
      maxLength={4}
      {...props?.register}
      defaultValue={props?.defaultValue}
      readOnly={props?.readOnly}
      // disabled={props?.disabled}
      // onChange={props?.onChange}
    />
  );
}
