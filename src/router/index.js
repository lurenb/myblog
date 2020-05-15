import Vue from "vue";
import VueRouter from "vue-router";
import CreateBlog from "../components/end/CreateBlog.vue";
import ListBlog from "../components/end/ListBlog.vue";
const ListCategory = () => import("../components/end/ListCategory.vue")
const backstage = () => import("../views/backstage.vue")
const EditBlog = () => import("../components/end/EditBlog.vue")
const Creatediary = () => import('../components/end/Creatediary.vue')
const Listdiary = () => import('../components/end/Listdiary.vue')
const Listcomments = () => import('../components/end/commentlist.vue')
const Article = () => import('../components/front/article.vue')
const ArticleList = () => import('../components/front/articlelist.vue')
const diary = () => import('../components/front/diary.vue')
const Home = () => import('../views/home.vue')
const Login = () => import('../views/login.vue')
const mi = () => import('../components/mi.vue')
const Index = () => import('../views/index.vue')
const Game = () => import('../views/game.vue')
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/blog"
  },
  {
    path: "/blog",
    name: "blog",
    redirect: "/blog/home",
    component: Home,
    children: [
      {
        path: "home",
        name: "ArticleList",
        component: ArticleList
      },
      {
        path: "article/:id",
        name: "article",
        component: Article
      },
      {
        path: "articletype/:title",
        name: 'articleType',
        component: ArticleList
      },
      {
        path: "diary",
        name: 'diary',
        component: diary
      },
      {
        path: "search/:content",
        name: 'search',
        component: ArticleList
      }
    ]
  },
  {
    path: "/blog/login",
    name: "login",
    component: Login
  },
  {
    path: "/blog/backstage",
    name: "backstage",
    redirect: "/blog/backstage/create",
    component: backstage,
    children: [
      {
        path: "create",
        name: "create-article",
        component: CreateBlog
      },
      {
        path: "index",
        name: "list-article",
        component: ListBlog
      },
      {
        path: "category",
        name: "list-category",
        component: ListCategory
      },
      {
        path: "newdiary",
        name: "new-diary",
        component: Creatediary
      },
      {
        path: "diary",
        name: "list-diary",
        component: Listdiary
      },
      {
        path: ":id/edit",
        name: "edit-article",
        component: EditBlog
      },
      {
        path: "comment",
        name: "list-comment",
        component: Listcomments,
      },
    ]
  },
  {
    path: '/mi',
    component: mi,
    redirect: '/mi/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      }
    ]
  },
  {
    path: '/game',
    component: Game
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
