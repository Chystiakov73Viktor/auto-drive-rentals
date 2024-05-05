import { Button } from "./SearchButton.styled";

export const SearchButton = ({ handleSubmit }) => {
  return (
    <Button type="submit" onClick={handleSubmit}>
      Search
    </Button>
  );
};


