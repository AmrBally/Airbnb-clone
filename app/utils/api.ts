export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (err) {
    console.log(err);
  }
};
export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (err) {
    console.log(err);
  }
};
export const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();
    return searchResultData;
  } catch (err) {
    console.log(err);
  }
};
