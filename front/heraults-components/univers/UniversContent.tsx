import { Badge, BadgeText } from "@/components/ui";
import React from "react";

const univers = [
    {
        name: 'Dungeons & Dragons',
        desc: 'Le plus célèbre des jeux de rôle. Plongez dans des donjons, affrontez des dragons et forgez votre légende dans un monde fantastique.',
        img: 'https://assetsio.gnwcdn.com/dnd-2024-players-handbook-artwork-closeup.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
        warnings: ['Violence', 'Mort']
    },
    {
        name: 'Dragon Age',
        desc: 'Le plus célèbre des jeux de rôle. Plongez dans des donjons, affrontez des dragons et forgez votre légende dans un monde fantastique.',
        img: 'https://global-img.gamergen.com/dragon-age-inquisition-10-04-2019_0900922076.jpg',
        warnings: ['Guere', 'Trahison', 'Magie noire']
    },
    {
        name: 'Dragon',
        desc: 'Un jeu de rôle français mythique, idéal pour des aventures épiques et des combats épiques. Entrez dans un univers riche et dangereux.',
        img: 'https://www.dragons-rpg.com/build/dragons/DragonsRouge_banner.jpg',
        warnings: ['Violence', 'Magie']
    },
    {
        name: 'La Légende des Cinq Anneaux',
        desc: 'Incarnez des samouraïs dans l\'Empire d\'Émeraude de Rokugan, un monde inspiré du Japon féodal, mêlant honneur, intrigues et magie.',
        img: 'https://www.voixrokugan.org/wp-content/uploads/2020/02/l5r00fr_st.jpg',
        warnings: ['Intrigues politiques', 'Conflits']
    },
    {
        name: 'Le Seigneur des Anneaux',
        desc: 'Parcourez la Terre du Milieu, un monde de fantasy classique créé par J.R.R. Tolkien. Vivez des aventures épiques au cœur d\'une quête légendaire.',
        img: 'https://www.lataniere.fr/wp-content/uploads/2020/03/L-Anneau-Unique-Gandalf-lumiere-jdr-Edge-jeux-Toulon-L-Ataniere.jpg',
        warnings: ['Magie', 'Guere']
    },
    {
        name: 'Symbaroum',
        desc: 'Plongez dans les ténèbres de la forêt de Davokar. Un jeu de rôle scandinave sombre et envoûtant, où chaque choix a un prix.',
        img: 'https://doublejeux.fr/wp-content/uploads/2024/02/Symbaroum-Davokar-Awakens-3-1024x576-1.jpg',
        warnings: ['Horreur', 'Mystères']
    },
    {
        name: 'The Witcher',
        desc: 'Incarnez un sorceleur dans un monde de fantasy sombre et impitoyable, où vous devez traquer des monstres pour survivre.',
        img: 'https://www.arkhane-asylum.fr/medias/1/WIT-01-illustration1-2445.jpg',
        warnings: ['Monstres', 'Violence', 'Thèmes adultes']
    },
    {
        name: 'Vermines',
        desc: 'Un jeu de rôle post-apocalyptique où l\'humanité a été remplacée par des insectes anthropomorphes. Un univers original et décalé.',
        img: 'https://www.scifi-universe.com/upload/critiques/contenu/img-20231210163402.jpg',
        warnings: ['Post-apocalyptique', 'Insectes']
    },
    {
        name: 'Kult : Divinity Lost',
        desc: 'Un jeu d\'horreur contemporain qui explore le côté sombre de la réalité. Un monde dissimulé, où les anges sont des démons et les démons, des anges.',
        img: 'https://www.geek-powa.fr/wp-content/uploads/2022/04/Kult-les-illustrations-du-jeu-de-roles-1024x592.jpg',
        warnings: ['Horreur psychologique', 'Gore', 'Désespoir']
    },
    {
        name: 'Les Ombres d\'Esteren',
        desc: 'Un univers de dark fantasy à la française, où les héros tentent de survivre à une maladie mystérieuse qui transforme les habitants en monstres.',
        img: 'https://img-cache.ulule.com/display/96c59ee62b0de5a6702ca82d43422e1671ae2962/thumbnail/640x360/presales/1/2/0/8021/dearg.ChQ1VYRqEx9n.jpg',
        warnings: ['Maladie', 'Monstres', 'Dark Fantasy']
    },
]

const UniversContent = () => {
  return (
    <>
        <section className="container-fluid py-12">
            <h1 className="grenze text-7xl mb-4 text-[#273840]">Nos Univers de Jeu de Rôle</h1>
            <p className="text-xl font-light max-w-2xl">Découvrez les mondes que nous explorons et les jeux que nous maîtrisons au sein du club.</p>
        </section>

        <section className="container-fluid py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    univers.map(univer => 
                        <div className="relative h-96 flex items-end rounded-xl overflow-hidden shadow-gray-700 cursor-pointer">
                            <img src={univer.img} alt="Image de l'univers Donjons et Dragons" className="object-cover min-h-full min-w-full absolute -z-10" />
                            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-herault-bg-dark-transparent to-transparent"></div>
                            <div className="relative z-10 p-8 text-primary-50 h-full w-full flex flex-col justify-end">
                                <div className="self-end mb-auto flex">
                                    {
                                    univer.warnings.map(warning => 
                                        <Badge size="lg" variant="solid" action="muted" className="mx-2 bg-indicator-secondary">
                                            <BadgeText>{warning}</BadgeText>
                                        </Badge>)
                                    }
                                </div>
                                <h2 className="grenze text-5xl mb-2 text-[#FFA400]">{univer.name}</h2>
                                <p className="text-lg">{univer.desc}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    </>
  );
};
export default UniversContent;
