import {createApi} from '../util/https';
import homePage from './homePage';
const api = createApi();

const homePageApi = homePage(api);

export {
  homePageApi
};