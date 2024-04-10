export interface Post {
  id: string;
  content: string;
  created_at: string;
  account: {
    username: string;
    display_name: string;
    avatar: string;
  };
  media_attachments: {
    id: string;
    preview_url: string;
    type: string;
  }[];
}
