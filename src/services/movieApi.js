import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fc796f7b11190ed6492d14312c74fa7c',
    language: 'en-US',
  },
});

export async function getTrendingMovies() {
  const query = `trending/all/day`;
  try {
    const { data } = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieById(id) {
  const query = `/movie/${id}`;
  try {
    const { data } = await instance.get(query);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getMovieByName(queryString) {
  const query = `/search/movie?query=${queryString}`;
  try {
    const { data } = await instance.get(query);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getMovieCredits(movie_id) {
  console.log('hey');
  const query = `/movie/${movie_id}/credits`;
  // https://api.themoviedb.org/3/movie/movie_id/images

  try {
    const { data } = await instance.get(query);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
