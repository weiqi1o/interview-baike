// 统一请求路径前缀在libs/axios.js中修改
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
  getRequestWithNoToken
} from "@/libs/axios";

// 登陆
export const login = params => {
  return postRequest("/users/login", params);
};
// 注册
export const regist = params => {
  return postRequest("/users/register", params);
};

// 查询指定用户
export const userInfo = userId => {
  return getRequest("/v1/users/${userId}");
};

// 更新指定用户信息
export const userInfoEdit = (userId, params) => {
  return patchRequest("/v1/users/${userId}", params);
};

// 问题答案文件上传
export const uploadQusetion = params => {
  return postRequest("/files/questions", params);
};

//查询题目
export const search = params => {
  return getRequest("/v1/questions", params);
};
