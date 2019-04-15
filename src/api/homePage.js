
export default function (api) {
  return {
    getProduct: query => api.get('/topics', query)
  };
}