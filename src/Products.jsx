import data from "./data.json";
export default function Products({ addProd }) {
  return (
    <>
      <div className="products">
        {data.products.map((item) => {
          return (
            <div className="prodItem" key={item.id}>
              <img src={item.img} alt="Product img" width="100%" height="70%" />
              <h3>{item.name}</h3>
              <h3>${item.price}</h3>
              <button onClick={() => addProd(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
