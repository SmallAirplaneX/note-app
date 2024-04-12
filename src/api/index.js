import { request } from "@/utils";

export default {
  concept : {
    list: (page) => request.get("/concept/list/"+page),
    getCount: () => request.get("/concept/getCount"),
    delete: (id) => request.post("/concept/delete", id),
    create: (concept) => request.post("/concept/create", concept),
    updata: (concept) => request.post("/concept/updata", concept),
  },
  template : {
    list: (page) => request.get("/template/list/"+page),
    getCount: () => request.get("/template/getCount"),
    create:(template) => request.post('/template/create',template),
    delete:(template) => request.post('/template/delete',template),
    updata:(template) => request.post('/template/updata',template),
    concepts:(id) => request.get('/template/getConcepts/'+id),
  },
  object : {
    list: (page) => request.get("/object/list/"+page),
    getCount: () => request.get("/object/getCount"),
    getInfById :(id) =>request.get("/object/getInfById/"+id),
    create:(object) => request.post('/object/create',object),
    delete:(object) => request.post('/object/delete',object),
    updata:(object) => request.post('/object/updata',object),
  },
  user : {
    login:(user) => request.post('/user/login',user),
    register:(user) => request.post('/user/register',user),
  },
  topic : {
    list: (page) => request.get("/topic/list/"+page),
    getCount: () => request.get("/topic/getCount"),
    create:(topic) => request.post('/topic/create',topic),
    delete:(topic) => request.post('/topic/delete',topic),
    updata:(topic) => request.post('/topic/updata',topic),
    getNoteByID:(id) =>request.get("/topic/getNoteByID/"+id)
  },
  note : {
    list: (page) => request.get("/note/list/"+page),
    getCount: () => request.get("/note/getCount"),
    getNoteById:(id) => request.get("/note/getNoteById/"+id),
    create:(note) => request.post('/note/create',note),
    delete:(note) => request.post('/note/delete',note),
    updata:(note) => request.post('/note/updata',note),
  }
};
