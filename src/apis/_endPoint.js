export default {

  backendEndpoint: `https://api.themoviedb.org/3`,
  movieRoute: {
    root: '/movie',
    topRated: '/top_rated',
    new: '/now_playing'
  },
  personRoute: {
    root: '/person',
    popular: '/popular'
  },

  methodType: {
    get: "GET",
    post: "POST",
    put: "PUT",
    patch: "PATCH",
    delete: "DELETE"
  },
  defaultListingParameter: {
    language: 'en-US',
    page: 1
  },
  storageTokenKeyName: "userData",

  contentTypeEnum: {
    applicationJSON: 'application/json',
    multipartFormData: 'multipart/form-data'
  },


}