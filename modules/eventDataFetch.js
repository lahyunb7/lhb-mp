export const eventDataFetch = async () => {
  try {
    const response = await fetch("eventData.json");
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
