import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { MainHeader } from '../../component/HomePage/mainHeader';
import { MainListView } from '../../component/HomePage/mainListView';
import PropTypes from 'prop-types';
import './index.scss';


const mapStateToProps = state => ({
  productList: state.global.list,
  currentTopic: state.global.currentTopic,
});
const mapDispatchToProps = {
  getList:  query => ({
    type: 'global/getList',
    payload: query || {}
  }),
  setCurrentTopic: params => ({
    type: 'global/setCurrentTopic',
    payload: params || {}
  })
};
@connect (mapStateToProps,mapDispatchToProps)
class HomePage extends PureComponent {
  static propTypes  = {
    productList: PropTypes.array.isRequired,
    currentTopic: PropTypes.object.isRequired,
  };
  componentWillMount() {
    this.getTableList();
  }
  getTableList = () => {
    const { currentTopic } = this.props;
    const params = {
      page: 1,
      tab: currentTopic.key,
      limit: 20,
      mdrender: true
    };
    this.props.getList(params);
  };
  changeCurrentTopic = (currentTopic) => {
    this.props.setCurrentTopic(currentTopic).then(()=> {
      this.getTableList();
    });
  };
  render() {
    const { currentTopic, productList } = this.props;
    return (
      <div className="content">
        <div className='main'>
          <section>
            <MainHeader currentTopic={ currentTopic} onChangeCurrentTopic ={this.changeCurrentTopic}/>
            <MainListView list = {productList}/>
          </section>
          <aside>
            侧栏
          </aside>
        </div>
      </div>
    );
  }
}
export default HomePage;


