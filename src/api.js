export const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      success: true,
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};
