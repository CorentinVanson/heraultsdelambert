import { GameDto } from "@/heraults-components/Game";

const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-mbx6.vercel.app';

export const getGames = async () => (await fetch(`${BFFUrl}/api/games`)).json() as unknown as GameDto[]