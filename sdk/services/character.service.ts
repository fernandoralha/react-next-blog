import { Character } from "../@types/Character";
import Service from "../Service";
import { generateQuery } from "../utils/generateQuery";

class CharacterService extends Service {
  static getAll (search: Character.Query) {
    // const queryString = generateQueryString(search)
    const path = `/characters?${generateQuery(search.page || 0)}`;
    return this.Http
      .get<Character.Paginated>(path)
      .then(this.getData)
  }

  static getExisting (id: number) {
    return this.Http
      .get<Character.Item>(`/posts/${id}`)
      .then(this.getData)
  }

  // static insertNew (post: Character.Input) {
  //   return this.Http
  //     .post<Character.Item>('/posts', post)
  //     .then(this.getData)
  // }

  // static publishExisting (postId: number) {
  //   return this.Http
  //     .put<{}>(`/posts/${postId}/publishing`)
  //     .then(this.getData)
  // }

  // static updateExisting (postId: number, post: Character.Input) {
  //   return this.Http
  //     .put<Character.Item>(`/posts/${postId}`, post)
  //     .then(this.getData)
  // }
}

export default CharacterService