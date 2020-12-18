export type Article = {
  slug: string;
  title: string;
  description: string;
  favoritesCount: number;
  createdAt: string;
  author: {
    image: string;
    username: string;
  };
};

export const PAGE_SIZE = 20;