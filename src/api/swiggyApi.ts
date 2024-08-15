export const getRestaurantData = async () => {
  try {
    const res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("err", err);
    return [];
  }
};
