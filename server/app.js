import koa from "koa";
import forward from "koa-forward-request";
import mount from "koa-mount";
import log from "../util/log";
import Api from "./api";
import Frontend from "./frontend";
import notifier from "node-notifier"

notifier.notify('Message');

// Object
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});


function App() {
  const app = koa();

  forward(app);
  app
    .use(mount("/", Frontend()))
    .use(mount("/api", Api()))
    //you will now make api calls with "/api" as default base
    //for example GET => /api/getNotes, /api/postInfo

  return app;
}
export default App;
