import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { usePagination } from "@/hooks/usePagination";

interface IForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const FormSearch = ({ handleSubmit, isLoading }: IForm) => {
  const { resetPage } = usePagination();
  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    resetPage();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitClick}
      >
        <TextField
          sx={{
            backgroundColor: "#fff",
            mb: 1,
          }}
          hiddenLabel
          fullWidth
          variant="outlined"
          placeholder="Enter username"
          name="inputQuery"
        />
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "#660000",
            },
          }}
        >
          SEARCH
        </Button>

      </Box>
    </>
  );
};

export default FormSearch;
