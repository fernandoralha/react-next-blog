export namespace Movie {
  export type Input = {}
  export type Detailed = {}
  export type Summary = {}
  export type Paginated = {}

  export type Query = {
    editorId?: number
    page?: number
    size?: number
    showAll?: boolean
    sort?: [keyof Summary, 'asc' | 'desc']
  }
}

