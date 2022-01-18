import React, { Component } from 'react';
 
import Stories from 'react-insta-stories';

const StoryTest = () => {

  const stories = [
    {
      content: (props) => (
        <div style={{ background: 'lightblue'}}>
          <h1 style={{ color:'white', marginTop: 250, marginBottom: 250, marginLeft: 80, marginRight: 80 }}> Hier volgen enkele katten.</h1>
        </div>
      ),
    },
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
];

  return (
      <Stories
                  stories={stories}
                  defaultInterval={8000}
                  width={425}
                  height={526}
              />
  )
}

export default StoryTest