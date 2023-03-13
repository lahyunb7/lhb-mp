export const fetchData = async () => {

  try{
    const response = await fetch('mock.json');
    const data = await response.json();
    return data;
  }catch (error){
    return console.error(error);
  }


}


