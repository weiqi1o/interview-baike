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
export const userInfo = (userId) => {
	return getRequest("/v1/users/" + userId);
};

// 更新指定用户信息
export const userInfoEdit = (userId, params) => {
	return patchRequest("/v1/users/" + userId, params);
};

// 问题答案文件上传
export const uploadQusetion = params => {
	return postRequest("/files/questions", params);
};

// ======================题目==========================

//查询题目
export const search = params => {
	return getRequest("/v1/questions", params);
};

//查询题目详情
export const questionDetail = (questionId) => {
	return getRequest("/v1/questions/" + questionId);
};

// 添加题目
export const addQuestion = (params) => {
	return postRequest("/v1/questions/", params);
};

//查询指定题目
export const getDetails = (questionId,params) => {
    return getRequest("/v1/questions/"+questionId,params);
};
//查询相似题目
export const getQuestionSimilar = (params) => {
    return getRequest("/v1/questions/similar",params);
};

//题目总数
export const countQuestionNum = (params) => {
    return getRequest("/v1/questions/count",params);
};

// ======================标签==========================

// 查询所有标签
export const getLabels = params => {
	return getRequest("/v1/labels", params);
};

// 新增标签
export const addLabels = params => {
	return postRequest("/v1/labels", params);
};

// ======================审核==========================

// 获取待审核列表
export const getCheckRecord = params => {
	return getRequest("/q/records", params);
};

// 审核移交给别人
export const transferOthers = (recordId,params) => {
	return postRequest("/q/records/"+recordId, params);
};

// 审核操作
export const checkOps = (recordId,params) => {
	return patchRequest("/q/records/"+recordId, params);
};

