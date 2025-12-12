export interface Post {
  title: string,
  media: Media | null,
  upvote_ratio: number
}

export interface Media {
  type: string
  url: string
  width: number
  height: number
}

export interface SubReddit {
  subCount: number
  image: string
}