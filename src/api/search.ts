import api from ".";

export const search = async (query: string) => {
  try {
    const { data } = await api.get(`/search`, {
      params: {
        term: query,
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);

    return;
  }
};
