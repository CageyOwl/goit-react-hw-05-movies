const TMDB_API_V3_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_V3_KEY = '66b82de9da5bf29292195e4434639692';
const TMDB_IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const TMDB_POPULAR_MOVIES_QUERY_URL_SUFFIX = `/trending/all/day?api_key=${TMDB_API_V3_KEY}`;

const STATUS = {
  IDLE: 0,
  PENDING: 1,
  REJECTED: 2,
  RESOLVED: 3
};
Object.freeze(STATUS);

const DEFAULT_POSTER_URL = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';


export {
  TMDB_API_V3_BASE_URL,
  TMDB_API_V3_KEY,
  TMDB_IMAGES_BASE_URL,
  TMDB_POPULAR_MOVIES_QUERY_URL_SUFFIX,
  STATUS,
  DEFAULT_POSTER_URL,
};
