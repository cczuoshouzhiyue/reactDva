import React, { Component } from 'react';
import './mainListView.scss';
import { Avatar } from 'antd';


export function MainListView(props) {
  const { list } = props;
  return (
    <div className='mainListView'>
      <ul>
        {
          list.map(item => (
            <li key={item.id}>
              <Avatar  shape="square" src={item.author?item.author.avatar_url:''}/>
              <span className='ml mr'>{item.reply_count+'/'+item.visit_count}</span>
              <span className='mr'>
                {item.top?<span className='topic-up'>置顶</span>:(item.tab==='share'?<span className='topic-up blue'>分享</span>:<span className='topic-up blue'>问答</span>)}
              </span>
              <span className='title'>{item.title}</span>
            </li>
          ))
        }</ul>
    </div>
  );
}

// class MainListView extends Component {
//
//   render() {
//     const { list } = this.props;
//     return (
//       <div className='mainListView'>
//         <ul>
//           {
//             list.map(item => (
//               <li key={item.id}>
//                 <Avatar  shape="square" src={item.author?item.author.avatar_url:''}/>
//                 <span className='ml mr'>{item.reply_count+'/'+item.visit_count}</span>
//                 <span className='mr'>
//                   {item.top?<span className='topic-up'>置顶</span>:(item.tab==='share'?<span className='topic-up blue'>分享</span>:<span className='topic-up blue'>问答</span>)}
//                 </span>
//                 <span className='title'>{item.title}</span>
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }
// export default MainListView;
