import api from "./index";

export const createProduct = (data) => api.post("products", data);

export const getProductDetail = async (id) => {
  const res = await api.get(`products/${id}`);
  return res.data;
};

export const updateProduct = (id, data) => api.put(`products/${id}`, data);

export const deleteProduct = (id) => api.delete(`products/${id}`);

export const getAllProduct = ({
  keyword,
  priority,
  sortBy,
  order,
  page,
  limit,
}) => {
  let query = [];

  if (keyword) query.push(`q=${keyword}`);
  if (priority) query.push(`priority=${priority}`);
  if (sortBy) query.push(`_sort=${sortBy}`);
  if (order) query.push(`_order=${order}`);
  if (page) query.push(`_page=${page}`);
  if (limit) query.push(`_limit=${limit}`);

  const queryString = query.length ? `?${query.join("&")}` : "";

  return api.get(`products${queryString}`);
};
