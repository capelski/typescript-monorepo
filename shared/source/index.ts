import { nanoid } from "nanoid";

export const getId = () => {
  // return nanoid() + "-" + nanoid(); // Uncomment to trigger hot reloading
  return nanoid();
};
