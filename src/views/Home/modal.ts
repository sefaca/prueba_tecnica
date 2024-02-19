type Category = {
  id: string;
  title: string;
};

export type Lesson = {
  id: string;
  title: string;
  image: string;
  author: string;
  category: Category;
  content: string;
};
