export interface IVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISnippet;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface IThumbnails {
  default: IThumbnailDetail;
  medium: IThumbnailDetail;
  high: IThumbnailDetail;
}

export interface IThumbnailDetail {
  url: string;
  width: string | number;
  height: string | number;
}
