import api from ".";

export const getSongDetails = async (id: string | number) => {
  try {
    const { data } = await api.get("/songs/get-details", {
      params: {
        key: id,
        locale: "en-US",
      },
    });

    return data;
  } catch (error) {
    console.error(error);

    return;
  }
};
