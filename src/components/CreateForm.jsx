import * as React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = React.useState({});

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const dessert = data.dessert;
    const fat = data.fat;
    const calories = data.calories;
    const protein = data.protein;
    const carbs = data.carbs;
    try {
      const response = await axios.post("http://localhost:3000/posts", {
        dessert,
        calories,
        fat,
        carbs,
        protein,
      });
      Swal.fire("Good Job!", "Berhasil Menambahkan Data!", "success");
      navigate("/");
    } catch (error) {
      console.err;
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold text-center">Add Dessert</h1>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="dessert">Dessert</InputLabel>
        <OutlinedInput
          id="dessert"
          endAdornment={<InputAdornment position="end">100g</InputAdornment>}
          label="Amount"
          {...register("dessert", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="calories" type="number">
          Calories
        </InputLabel>

        <OutlinedInput
          id="calories"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          label="Amount"
          type="number"
          {...register("calories", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="fat">Fat</InputLabel>
        <OutlinedInput
          id="fat"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          label="Amount"
          type="number"
          {...register("fat", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="carbs">Carbs</InputLabel>
        <OutlinedInput
          id="carbs"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          type="number"
          label="Amount"
          {...register("carbs", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="protein">Protein</InputLabel>
        <OutlinedInput
          type="number"
          id="protein"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          label="Amount"
          {...register("protein", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} className="flex flex-col gap-3">
        <Button variant="contained" type="submit">
          Create
        </Button>
        <Button variant="contained" type="reset" color="warning">
          Reset
        </Button>
      </FormControl>
    </Box>
  );
}
