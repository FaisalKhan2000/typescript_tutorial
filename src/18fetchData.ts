const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "something went wrong...";
    console.log(errorMessage);

    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
console.log(tours);

tours.map((tour: any) => {
  console.log(tour.name);
});

// return empty array
// throw error in catch block
// we are not setting state values in this function
