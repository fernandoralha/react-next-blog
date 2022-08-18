import { Movie } from "../@types/Movie";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";

class MovieService extends Service {
  static getAllPosts (search: Movie.Query) {
    const queryString = generateQueryString(search)
    return this.Http
      .get<Movie.Paginated>('/posts'.concat(queryString))
      .then(this.getData)
  }

  static getExistingPost (id: number) {
    return this.Http
      .get<Movie.Detailed>(`/posts/${id}`)
      .then(this.getData)
  }

  static insertNewPost (post: Movie.Input) {
    return this.Http
      .post<Movie.Detailed>('/posts', post)
      .then(this.getData)
  }

  static publishExistingPost (postId: number) {
    return this.Http
      .put<{}>(`/posts/${postId}/publishing`)
      .then(this.getData)
  }

  static updateExistingPost (postId: number, post: Movie.Input) {
    return this.Http
      .put<Movie.Detailed>(`/posts/${postId}`, post)
      .then(this.getData)
  }
}

export default MovieService