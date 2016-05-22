import Sequelize from 'sequelize';
//import casual from 'casual';
/* ORM level: Sequelize is a promise-based ORM for Node.js and io.js.
connect to db
define models; one model/table
define model relationships
*/
export const db = new Sequelize('blog', 'root', 'LLdc_GC', {
  host: 'localhost',
  dialect: 'mysql'
});

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
});

const PostModel = db.define('post', {
  title: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING }
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

export const lldc_list = new Sequelize('lldc_list', 'root', 'LLdc_GC', {
  host: 'localhost',
  dialect: 'mysql'
});

const EntityModel = lldc_list.define('entity', {
  name: { type: Sequelize.STRING },
  compact: { type: Sequelize.STRING }
},{freezeTableName:true,timestamps:false});

export const lldc_bjc = new Sequelize('lldc_bjc', 'root', 'LLdc_GC', {
  host: 'localhost',
  dialect: 'mysql'
});

const BioModel = lldc_bjc.define('bio', {
  id:{type:Sequelize.STRING,primaryKey: true},
  stamp_utc: { type: Sequelize.STRING },
  descrip: { type: Sequelize.STRING },
  doc: { type: Sequelize.STRING }
},{freezeTableName:true,timestamps:false});

const SQLAuthor = db.models.author;
const SQLPosts = db.models.post;
const Entities = lldc_list.models.entity;
const Bios = lldc_bjc.models.bio;

export { SQLAuthor, SQLPosts, Entities, Bios };
