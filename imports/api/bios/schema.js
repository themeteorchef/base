const typeDefinitions = `
type Query {
 mongoAuthor(firstName: String, lastName: String): Author
 mongoPosts: [Post]
 getFortuneCookie: String
 sqlAuthor(firstName: String, lastName: String): SQLAuthor
 sqlPosts: [SQLPosts]
}

type List {
  entity: [Entity]
}
type Entity {
  name: String
  compact: String
}
type Bios {
  bios(offset: Int, limit: Int): Results
}
type Results {
  count: Int
  rows: [Bio]
}
type Bio {
  id:String
  stamp_utc: String
  descrip: String
  doc: String
}
schema {
  query: Bios
}

type SQLPosts {
  title: String
  content: String
}
type SQLAuthor {
  firstName: String
  lastName: String
}
type Post {
  _id: String
  title: String
  content: String
  mongoAuthor: Author
  sqlAuthor: SQLAuthor
  fortune: String
}
type Author {
  _id: String
  firstName: String
  lastName: String
  mongoPosts: [Post]
  sqlPosts: [SQLPosts]
  fortune: String
}
`;

export default [typeDefinitions];
