import ItemCart from "../components/ItemCart";

function Cart() {
  return (
    <div className="w-80 min-h-screen shadow-[0_0_20px_#ccc] fixed right-0 top-[60px] z-10 bg-gray-50">
      <h3 className="p-5 pb-2 text-3xl font-medium">Tu carrito</h3>
      <hr />
      <div className="p-5 text-xs max-h-[88vh] overflow-y-auto scrollbar scrollbar-thumb-slate-200  scrollbar-track-gray-100 scrollbar-thumb-rounded-2xl scrollbar-w-1 hover:scrollbar-thumb-slate-600">
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
    </div>
  );
}

export default Cart;
