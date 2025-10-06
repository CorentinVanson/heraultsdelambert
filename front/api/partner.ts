import { PartnerDto } from "@/heraults-components/main-content/HeraultsPartenairesFold";

const BFFUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://heraultsdelambert-mbx6.vercel.app';

export const getPartners = async () => (await fetch(`${BFFUrl}/api/partners`)).json() as unknown as PartnerDto[]