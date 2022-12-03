export const getTvs = async () => {
  try {
    const res = await fetch(`${process.env.DISCOVER_TV_URL}?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};

export const getTvDetail = async (id) => {
  try {
    const res = await fetch(
      `${process.env.TV_DETAIL_URL}/${id}?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};

export const getTvImages = async (id) => {
  try {
    const res = await fetch(
      `${process.env.TV_DETAIL_URL}/${id}/images?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};

export const getTvVideos = async (id) => {
  try {
    const res = await fetch(
      `${process.env.TV_DETAIL_URL}/${id}/videos?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};

export const getTvReviews = async (id) => {
  try {
    const res = await fetch(
      `${process.env.TV_DETAIL_URL}/${id}/reviews?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};

export const getTvWatch = async (id) => {
  try {
    const res = await fetch(
      `${process.env.TV_DETAIL_URL}/${id}/watch/providers?api_key=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err?.message ?? 'Somthing went wrong :('
    };
  }
};