export const getMovies = async () => {
  try {
    const res = await fetch(`${process.env.DISCOVER_MOVIE_URL}?api_key=${process.env.API_KEY}`);
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

export const getMovieDetail = async (id) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${id}?api_key=${process.env.API_KEY}`
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

export const getMovieImages = async (id) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${id}/images?api_key=${process.env.API_KEY}`
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

export const getMovieVideos = async (id) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${id}/videos?api_key=${process.env.API_KEY}`
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

export const getMovieReviews = async (id) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${id}/reviews?api_key=${process.env.API_KEY}`
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

export const getMovieWatch = async (id) => {
  try {
    const res = await fetch(
      `${process.env.MOVIE_DETAIL_URL}/${id}/watch/providers?api_key=${process.env.API_KEY}`
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