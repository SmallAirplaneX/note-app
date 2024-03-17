import { request } from "@/utils";

export default {
  // 获取属性列表
  getAttributes: (page) => request.get("/attribute/list"+"/"+page),
  // 创建属性
  createAttribute: (attribute) => request.post("/attribute/create", attribute),
  // 查询指定属性
  quireAttribute: (attribute) => request.post("/attribute/quire", attribute),
  // 更新指定属性
  updateAttribute: (attribute) => request.post("/attribute/update", attribute),
  // 删除指定属性
  deleteAttribute: (id) => request.post("/attribute/delete", id),


  //获取模板列表
  getTemplates: () => request.get("/template/list"),
  // 创建模板
  createTemplate:(template) => request.post('/template/create' ,template),
  // 删除模板
  deleteTemplate:(id) => request.post('/template/delete',id),
  upDataTemplate:(template) => request.post('/template/updata',template),



  // 通过模板id 获取 改模板属性
  getAttributesById:(id)=> request.get("template/getAttributesById"+"/"+id),



  //创建笔记
  createNote:(figurative) =>request.post("figurative/create",figurative),
  //查询笔记
  getNotes:(page) =>request.get("figurative/list/"+page),
  //删除笔记
  deleteNote:(id) =>request.post("figurative/delete",id),
  //更新笔记
  upDataNote:(figurative) =>request.post("figurative/updata",figurative),
};
