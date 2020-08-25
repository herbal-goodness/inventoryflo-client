export function getTotalPrice(list) {
  const total = list.reduce((a, b) => {
    return {
      total_price: (+a.total_price || 0) + +b.total_price,
    };
  });
  return total.total_price;
}
