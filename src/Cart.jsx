export default function Cart({ cart, decrease, addProd }) {
  console.log(cart);
  const total = cart.reduce((acc, item) => {
    return acc + item.qty * item.price;
  }, 0);
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <>
          <div className="emptycart">
            <h2>Cart</h2>
            <h3>Your Cart is empty. There's nothing to show.</h3>
            <img src="buy.png" alt="empty" width="280px" height="220px" />
            <h3>Total: $0</h3>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>Cart</h2>
            {cart.map((item) => {
              return (
                <div className="row" key={item.id}>
                  <img src={item.img} width="20%" height="50%" />
                  <h5 style={{ display: "inline" }}>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button className="qty" onClick={() => decrease(item)}>
                      <h3>-</h3>
                    </button>
                    {item.qty}
                    <button className="qty" onClick={() => addProd(item)}>
                      <h3>+</h3>
                    </button>
                  </div>
                </div>
              );
            })}
            <h3>Total: ${total}</h3>
          </div>
        </>
      )}
    </div>
  );
}
