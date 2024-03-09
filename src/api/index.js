import { request } from "@/utils";

export default {
  // 获取属性列表
  getAttributes: () => request.get("/attribute/list"),
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
  deleteTemplate:(id) => request.post('/template/delete',id)
};
