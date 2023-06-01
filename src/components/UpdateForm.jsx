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
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateForm() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [data, setData] = React.useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  const getDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/posts/${id}`);
      const { data } = await response;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const setValueInput = () => {
    setValue("dessert", data.dessert);
    setValue("calories", data.calories);
    setValue("fat", data.fat);
    setValue("carbs", data.carbs);
    setValue("protein", data.protein);
  };

  const handleUpdate = async (e) => {
    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, {
        dessert: watch("dessert"),
        calories: watch("calories"),
        fat: watch("fat"),
        carbs: watch("carbs"),
        protein: watch("protein"),
      });
      Swal.fire("Good Job!", "Berhasil Mengupdate Data!", "success");

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getDataById();
  }, []);

  React.useEffect(() => {
    setValueInput();
  }, [data]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleUpdate)}
    >
      <h1 className="text-2xl font-bold text-center">Add Dessert</h1>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="dessert" shrink={true}>
          Dessert
        </InputLabel>
        <OutlinedInput
          id="dessert"
          endAdornment={<InputAdornment position="end">100g</InputAdornment>}
          {...register("dessert", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel shrink={true} htmlFor="calories" type="number">
          Calories
        </InputLabel>

        <OutlinedInput
          id="calories"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          type="number"
          {...register("calories", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel shrink={true} htmlFor="carbs">Fat</InputLabel>
        <OutlinedInput
          id="fat"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          type="number"
          {...register("fat", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel shrink={true} htmlFor="carbs">Carbs</InputLabel>
        <OutlinedInput
          id="carbs"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          type="number"
          {...register("carbs", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel shrink={true} htmlFor="protein">Protein</InputLabel>
        <OutlinedInput
          type="number"
          id="protein"
          endAdornment={<InputAdornment position="end">g</InputAdornment>}
          {...register("protein", { required: true })}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} className="flex flex-col gap-3">
        <Button variant="contained" type="submit">
          Update
        </Button>
        <Button variant="contained" type="reset" color="warning">
          Reset
        </Button>
      </FormControl>
    </Box>
  );
}
