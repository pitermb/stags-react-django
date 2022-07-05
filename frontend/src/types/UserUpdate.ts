export type UserUpdate = {
    user: string | undefined;
    name: string | undefined;
    password: string | undefined;
    age: number | undefined;
    peso: string | undefined;
    altura: string | undefined;
    imc: number | undefined;
    image: string | {filecontent: string, filename: string};
    showPassword: boolean
  };