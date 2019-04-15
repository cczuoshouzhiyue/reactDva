import React from 'react';
import {topicList} from './topicMenu';
import './main.scss';

export  function MainHeader(props) {
  const changeTopic = (currentTopic) => {
    props.onChangeCurrentTopic && props.onChangeCurrentTopic(currentTopic);
  };
  const { currentTopic } = props;
  return (
    <div className='homePage'>
      <header>
        <ul>
          {topicList.map(item=> <li key={item.key} onClick={changeTopic.bind(this, item)}><a className={currentTopic.key === item.key ? 'active': ''}>{item.value}</a></li>)}
        </ul>
      </header>
    </div>
  );
}



// class MainHeader extends Component {
//   changeTopic = (currentTopic) => {
//     this.props.onChangeCurrentTopic && this.props.onChangeCurrentTopic(currentTopic);
//   };
//   render() {
//     const { currentTopic } = this.props;
//     return (
//       <div className='homePage'>
//         <header>
//           <ul>
//             {topicList.map(item=> <li key={item.key} onClick={this.changeTopic.bind(this,item)}><a className={currentTopic.key === item.key ? 'active': ''}>{item.value}</a></li>)}
//           </ul>
//         </header>
//       </div>
//     );
//   }
// }
// export default MainHeader;


