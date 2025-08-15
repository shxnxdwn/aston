type ThemeType = typeof Theme[keyof typeof Theme];

type Post = {
  id: number;
  title: string;
  body: string
};


const Theme = {
  Dark: 'theme-dark',
  Light: 'theme-light'
} as const;


const DEFAULT_THEME = Theme.Dark;

const MOCK_POSTS: Post[] = [
  { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
  { id: 2, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla' },
  { id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut' },
  { id: 4, title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit' },
];


export type {ThemeType, Post};
export {DEFAULT_THEME, MOCK_POSTS, Theme};
