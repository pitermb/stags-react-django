import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 20000,
});

const superuser = { username: "admin", password: "admin" };

export const useApi = () => ({
  validateToken: async (token: string) => {},
  signin: async (name: string, password: string) => {
    try {
      const { data: token } = await api.post(`/token/`, {
        ...superuser,
      });

      const { data: DataPerson } = await api.get(`/api/person/`, {
        headers: { Authorization: "Bearer " + token.access },
      });

      let personLogged;
      DataPerson.filter((person: any) => {
        if (person.name === name && person.password === password) {
          personLogged = person;
        }
      });
      return personLogged;
    } catch {
      alert("Deu ruim na requisição...");
    }
  },
  logout: async () => {},
});
