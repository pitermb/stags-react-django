import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 20000,
});

const superuser = { username: "admin", password: "admin" };

export const useApi = () => ({
  validateToken: async (validateToken: string, validateUser: string | null) => {
    const { data: token } = await api.post(`/token/`, {
      ...superuser,
    });

    if (validateToken === token.access) {
      const { data: DataPerson } = await api.get(`/api/person/`, {
        headers: { Authorization: "Bearer " + token.access },
      });

      let personLogged;
      DataPerson.filter((person: any) => {
        if (person.id_person === validateUser) {
          personLogged = person;
        }
      });
      return personLogged;
    }
  },
  signin: async (name: string, password: string) => {
    try {
      const { data: token } = await api.post(`/token/`, {
        ...superuser,
      });

      let tokenLogged = token.access;

      const { data: DataPerson } = await api.get(`/api/person/`, {
        headers: { Authorization: "Bearer " + token.access },
      });

      let personLogged;
      DataPerson.filter((person: any) => {
        if (person.name === name && person.password === password) {
          personLogged = person;
        }
      });
      return { personLogged, tokenLogged };
    } catch {
      alert("Deu ruim na requisição...");
    }
  },
  logout: async () => {},
});
