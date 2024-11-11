import { Input, FormControl, FormLabel } from "@mui/material";

interface Props {
  lable: string;
  name: string;
  placeholder: string;
  type: string;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  id?: string;
  inputchangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<Props> = ({
  lable,
  name,
  placeholder,
  type,
  color,
  inputchangeHandler,
  id,
}) => {
  return (
    <FormControl sx={{ marginY: "10px" }}>
      <FormLabel htmlFor={id} sx={{ fontSize: "10px" }}>
        {lable}
      </FormLabel>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        color={color}
        onChange={inputchangeHandler}
      />
    </FormControl>
  );
};

export default AuthInput;
