export const bookDataFetch = async () => {
  try {
    const response = await fetch("bookData.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
