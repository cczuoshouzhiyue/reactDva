import { homePageApi as api } from '../api/index';
export default {
  namespace: 'global',
  state: {
    list: [],
    currentTopic: {key:'all',value:'全部'}
  },
  effects: {
    *getList ({payload: query},{call,put}) {
      const response = yield call(api.getProduct, query);
      yield put({
        type: 'getListSuccess',
        payload: { response }
      });
    },
    *setCurrentTopic ({payload: params}, {cass, put}) {
      yield put({
        type: 'setCurrentTopicSuccess',
        payload: { params }
      });
    }
  },
  reducers: {
    getListSuccess (state, action) {
      const {payload: {response}} = action;
      return {
        ...state,
        list: response
      };
    },
    setCurrentTopicSuccess (state, action) {
      const {payload: { params }} = action;
      return {
        ...state,
        currentTopic: params
      };
    }
  }
};