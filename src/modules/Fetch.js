const bookDataFetch = async () => {
  try {
    const response = await fetch("bookData.json");
    return await response.json();
  } catch (error) {
    return console.error("데이터를 받을 수 없습니다.");
  }
};

const eventDataFetch = async () => {
  try {
    const response = await fetch("eventData.json");
    return await response.json();
  } catch (error) {
    return console.error("데이터를 받을 수 없습니다.");
  }
};

export { bookDataFetch, eventDataFetch };
