export const getWordByAmmouth = (amm) => {
  console.log(amm)
  if ([11, 12, 13, 14].includes(amm % 100)) { return 'товаров' }
  if (amm % 10 === 1) { return 'товар' }
  if ([2, 3, 4].includes(amm % 10)) { return 'товара' }
  return 'товаров'
}
