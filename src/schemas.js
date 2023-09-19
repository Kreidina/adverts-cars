import * as yup from "yup";
import { brands } from "./assets/brands";
import { priceSelect } from "./helpers/func";

const select = priceSelect();

export const schema = yup.object().shape({
  chooseMake: yup.string().oneOf([...brands]),
  selectPrice: yup.string().oneOf([...select]),
  mileage: yup.object().shape({ from: yup.string(), to: yup.string() }),
});
