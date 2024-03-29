import { request } from "@/utils";

export default {
  concept : {
    list: (page) => request.get("/concept/list/"+page),
    delete: (id) => request.post("/concept/delete", id),
    create: (concept) => request.post("/concept/create", concept),
    updata: (concept) => request.post("/concept/updata", concept),
  },
  template : {
    list: (page) => request.get("/template/list/"+page),
    create:(template) => request.post('/template/create',template),
    delete:(template) => request.post('/template/delete',template),
    updata:(template) => request.post('/template/updata',template),
    concepts:(id) => request.get('/template/getConcepts/'+id),
  },
  object : {
    list: (page) => request.get("/object/list/"+page),
    getInfById :(id) =>request.get("/object/getInfById/"+id),
    create:(object) => request.post('/object/create',object),
    delete:(object) => request.post('/object/delete',object),
    updata:(object) => request.post('/object/updata',object),
  },
  user : {
    login:(user) => request.post('/user/login',user),
    register:(user) => request.post('/user/register',user),
  },
};
