const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-mbx6.vercel.app';

export const addFood = async ({ pseudo, mail, food }: { pseudo?: string, mail?: string, food?: any }) => {
  return await fetch(`${BFFUrl}/api/food/add`, {method: 'POST', body: JSON.stringify({ 
      pseudo, 
      mail, 
      food,
  }), headers: { "Content-Type": "application/json"}});
}
