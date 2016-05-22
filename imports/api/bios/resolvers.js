//import { Authors, Posts } from '/imports/collection';
//import FortuneCookie from '/imports/data/fortune-connector';
import { SQLAuthor, SQLPosts, Entities, Bios } from './sql-connector';
/*
Every field can have a resolve function, which tells the GraphQL server how to return data for that field
resolve functions that tell the server where and how to fetch the data for each data type

Resolvers is a required option if the schema provided to apolloServer is in GraphQL schema language.
If defined, the option resolvers expects an Object that defines a resolve function for each non-scalar field
  of every type defined in the schema.
Fields that take arguments also require a resolve function.
*/
/*
export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}
*/
const resolvers = {
List:{
  entity(){
//TESTING
console.log('List entity');
console.log(arguments);
console.log('');
//TESTING
    return Entities.findAll();
  }
},
Results:{
  rows(root,args){return root.rows;}
},
Bios:{
  bio(root,args){
//TESTING
console.log('Bio bio');
//console.log(arguments);
console.log(root,args);
console.log('');
//TESTING
/*
This way you get an offset id for every button you want to show in the user interface
SELECT id
FROM (
   SELECT id, ((@cnt:= @cnt + 1) + $perpage - 1) % $perpage cnt
   FROM news 
   JOIN (SELECT @cnt:= 0)T
   WHERE id < $last_id
   ORDER BY id DESC
   LIMIT $perpage * $buttons
)C
WHERE cnt = 0;
*/
    return Bios.findAndCountAll({limit:args.limit,offset:args.os});
  }
},
  Query: {
    mongoAuthor(root, args){
      return Authors.findOne({
        $or: [
          {
            firstName: args.firstName
          },
          {
            lastName: args.lastName
          }
        ]
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    mongoPosts(root, args) {
      return Posts.find().fetch();
    },
    sqlAuthor(root, args) {
      return SQLAuthor.find({where: args});
    },
    sqlPosts(root, args) {
      return SQLPosts.findAll({});
    },
    getFortuneCookie(){
      return FortuneCookie.getOne();
    }
  },
  Author: {
    mongoPosts(author){
      return Posts.find({authorId: author._id}, {
        fields: {
          title: 1,
          content: 1
        }
      }).fetch();
    },
    sqlPosts(author) {
      return author.getPosts();
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  },
  Post: {
    mongoAuthor(post){
      return Authors.findOne({
        _id: post.authorId
      }, {
        fields: {
          'firstName': 1,
          'lastName': 1
        }
      });
    },
    sqlAuthor(post) {
      return post.getAuthor();
    },
    fortune() {
      return FortuneCookie.getOne();
    }
  }
};

export default resolvers;
