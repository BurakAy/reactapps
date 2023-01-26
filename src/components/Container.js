import "../styles/Container.css";

const Container = () => {
  return (
    <div className="container-wrapper">
      <div>
        <h3>Sale</h3>
      </div>
      <div>
        <img
          loading="lazy"
          alt="sale"
          src="https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default Container;
