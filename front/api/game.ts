import { GameDto } from "@/heraults-components/Game";

const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-1037528676095.europe-west1.run.app';
console.log(process.env.NODE_ENV);

export const getGames = async () => (await fetch(`${BFFUrl}/api/games`)).json() as unknown as GameDto[]