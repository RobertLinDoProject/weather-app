import { hashPassword } from "./modules/encryPassWord.mjs";
import {
  NewTaipeiData,
  NewNewYorkData,
  NewTokyoData,
  NewSydneyData,
  NewParisData,
} from "./modules/filteredData.mjs";

hashPassword().then((value) => {
  console.log(value);
});
