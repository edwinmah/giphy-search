import React from 'react';

export default function MainContent(props) {
  return (
    <main id="content">
      <div className="container">
        <div className="row">
          {props.renderContent()}
        </div>
      </div>
    </main>
  )
} 