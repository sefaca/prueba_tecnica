type Category = {
  id: string;
  title: string;
};

export type Lesson = {
  id: string;
  title: string;
  image: any;
  author: string;
  category: Category;
  content: string;
};
