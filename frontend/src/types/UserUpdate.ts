export type UserUpdate = {
  id_person: string | undefined;
  user: string | undefined;
  name: string | undefined;
  password: string | undefined;
  age: number | undefined;
  peso: string | undefined;
  altura: string | undefined;
  imc: number | undefined;
  image: string | { filecontent: string; filename: string };
};

export type UserUpdateRequest = {
  id_person: string;
  user: string;
  name: string;
  password: string;
  age: number;
  peso: string;
  altura: string;
  imc: number;
  image: string | { filecontent: string; filename: string };
};
