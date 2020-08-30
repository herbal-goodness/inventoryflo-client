export function getTotalPrice(list) {
  if(list.length < 1) {
    return 0;
  }
  const total = list.reduce((a, b) => {
    return {
      total_price: (+a.total_price || 0) + +b.total_price,
    };
  });
  return total.total_price;
}
