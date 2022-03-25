import React from 'react';
const imgLength = [];
for (let i = 1; i <= 12; i++) {
  imgLength.push(i);
}

const FrontPage = () => {
  return (
    <section className="front">
      <div className="title">
        <h1>NOS</h1>
        <p>WANDERING</p>
      </div>
    </section>
  );
};

export default FrontPage;
