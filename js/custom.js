const imgLength = [];
for (let i = 1; i <= 12; i++) {
  imgLength.push(i);
}
console.log(imgLength);

const AddImg = (props) => {
  return (
    <li>
      <figure>
        <img
          src={'../src/img/' + props.name + '/' + props.number + '.jpg'}
          alt="img"
        />
      </figure>
    </li>
  );
};

const ImgUl = (props) => {
  return (
    <ul className={props.name}>
      {imgLength.map((number, index) => (
        <AddImg
          key={index.toString()}
          number={number}
          index={index.toString()}
          name={props.name}
        />
      ))}
    </ul>
  );
};

const FrontPage = () => {
  return (
    <section className="front">
      <ImgUl name="g" />
      <div className="title">
        <h1>NOS</h1>
        <p>WANDERING</p>
      </div>
      <ImgUl name="j" />
    </section>
  );
};

ReactDOM.render(<FrontPage />, document.getElementById('front'));

document.addEventListener('DOMContentLoaded', () => {});
