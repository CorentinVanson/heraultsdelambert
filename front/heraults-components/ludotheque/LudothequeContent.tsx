import { Button, ButtonText, Link } from "@/components/ui";
import { DicesIcon } from "lucide-react-native";
import React from "react";

const LudothequeContent = () => {
  return (
    <>
      
        <section className="py-0 md:py-10 gap-16">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h2 className="text-7xl leading-tight text-stroke">Règles</h2>
                    <div className="mt-6 p-12 mb-4 bg-primary-700 text-[#F1F7ED] rounded-xl shadow-lg">
                        <h3 className="mb-4 text-4xl font-light">Règles d'utilisation</h3>
                        <ul className="space-y-4 text-lg">
                            <li><span className="underline">Emprunt :</span> 2 jeux maximum à la fois.</li>
                            <li><span className="underline">Durée de prêt :</span> 1 mois pour les jeux de plateau, 2 mois pour les livres de JDR.</li>
                            <li><span className="underline">Conditions :</span> L'emprunt est réservé aux membres de l'association. Mais il n’est pas possible de s’inscrire à l’association uniquement pour profiter de sa ludothèque, le prêt de jeu reste un plus dont nous faisons profiter les membres, pas une activité à part entière</li>
                            <li><span className="underline">Renouvellement :</span> Le stock est mis en vente pour renouveler la collection.</li>
                            <li><span className="underline">Dons :</span> Nous acceptons les dons de jeux complets.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-7xl leading-tight text-stroke">Catalogue</h2>
                    <div className="mt-6 p-12 bg-tertiary-500 text-[#F1F7ED] rounded-xl shadow-lg">
                        <h3 className="mb-4 text-4xl font-light">Consulter le catalogue</h3>
                        <ul className="mb-4 space-y-4 text-lg">
                            <li>Découvrez tous les jeux de notre collection et trouvez votre prochaine aventure. Des jeux pour tous les âges et tous les goûts !</li>
                        </ul>
                        <div className="flex justify-center">
                            <div className="flex flex-row gap-2">
                                <DicesIcon 
                                    size={40}
                                    className="stroke-background-50" />
                                <Link href="https://www.myludo.fr/#!/profil/les-heraults-de-lambert-46753" isExternal>
                                    <Button className="bg-secondary-500 p-3 rounded-lg font-bold text-lg">
                                        <ButtonText>Voir la liste des jeux</ButtonText>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default LudothequeContent;
