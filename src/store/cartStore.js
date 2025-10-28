const key = "hotel_cart";

export function setCart(cart){
    localStorage.setItem(key, JSON.stringify(cart));

}

export function getCart(){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { status: "draft", item: [] };
    }catch(erro){
        return { status: "draft", items: [] };
    }
}

export function addItemToCart(item){
    const hotel_cart = getCart();
    hotel_cart.item.push(item);
    setCart(hotel_cart);
    return hotel_cart;

}

export function removeItemFromHotel_Cart(i){
    const hotel_cart = getCart();
    hotel_cart.items.splice(i, 1);
    setCart(hotel_cart);
    return hotel_cart;
}

export function clearHotel_cart(){
    setCart(
        {
            status: "draft",
            item: []
        }
    );
}

export function getTotalItems(){
    const { items } = getCart();
    const total = items.reduce((acc, it) =>
        acc + Number(it.subtotal || 0), 0
    );
    return {
        total,
        qtde_items: items.length
    };
}