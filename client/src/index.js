import "./common.less";
import "./utils/particles";
import "./utils/fireworks";
import page from "page";
import $ from "jquery";
import "./utils/locals";
// login page
import renderLogin from "./routes/login";
// home page
import renderHome from "./routes/home";

const app = $("#app");
page.base("/chatRoom");

page("/", ()=>{
  renderLogin(app);
});

page("/login", ()=>{
  renderLogin(app);
});

page("/home", ()=>{
  renderHome(app);
});

page();
