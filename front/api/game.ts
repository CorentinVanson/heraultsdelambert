import { GameDto } from "@/heraults-components/Game";

const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-mbx6.vercel.app';

export const getGames = async () => (await fetch(`${BFFUrl}/api/games`)).json() as unknown as GameDto[]

export const addPlayer = async ({ id, pseudo, mail, phone }: { id?: string, pseudo?: string, mail?: string, phone?: string }) => {
  return await fetch(`${BFFUrl}/api/games/player/add`, {method: 'POST', body: JSON.stringify({ id, pseudo, mail, phone }), headers: { "Content-Type": "application/json"}});
}
