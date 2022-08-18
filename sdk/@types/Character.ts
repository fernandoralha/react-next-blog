export namespace Character {
  
  export type Image = {
    path: string
    extension: string
  }

  export type Item = {
    id: number
    name: string
    description: string
    modified: string
    resourceURI: string
    urls: string[]
    thumbnail: Image
    comics: any[]
    stories: any[]
    events: any[]
    series: any[]
  }
  export type Paginated = {
    offset: number
    limit: number
    total: number
    count: number
    results: Item[]
  }

  export type Query = {
    page?: number
    size?: number
    showAll?: boolean
    sort?: [keyof Item, 'asc' | 'desc']
  }
}

