export type UserRegister = {
  user: string;
  name: string;
  password: string;
  age: string;
  peso: string;
  altura: string;
  image: null | { filecontent: string; filename: string };
};
