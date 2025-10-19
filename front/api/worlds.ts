import { WorldDto } from "@/heraults-components/univers/UniversContent";

const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-mbx6.vercel.app';

export const getWorlds = async () => (await fetch(`${BFFUrl}/api/worlds`)).json() as unknown as WorldDto[]
export const getWorld = async (name: string) => (await getWorlds()).find(world => world.name === name);