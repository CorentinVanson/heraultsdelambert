import { Button, ButtonText, Link } from "@/components/ui";
import React from "react";

const ClubContent = () => {
  return (
    <>
      <section className="py-10 gap-16">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="basis-2/3">
              <h1 className="grenze text-7xl mb-4 text-[#273840]">Le Club des Héraults</h1>
              <p className="text-xl font-light">
                Les Héraults de Lambert : votre dose de fun ludique (et sans prise de tête) à Lambersart ! Marre des soirées canapé ? Troquer votre plaid contre un set de dés et venez défier vos amis à coups de stratégies tordues !<br/>
                Les Héraults de Lambert sont là pour vous ! Depuis Juin 1990, on est les pros du jeu de rôle et du jeu de plateau à Lambersart, près de Lille. On n’est pas sectaire : que vous soyez un vieux baroudeur des donjons ou que vous confondiez encore un dé à 20 faces avec une boule de Noël, vous êtes les bienvenus !<br/>
                Chez nous, l’ambiance est simple : on joue, on rigole (souvent de nos défaites épiques) et on partage de bons moments. On se retrouve régulièrement pour nos sessions de jeu les Vendredi et Samedi.<br/>
                Notre QG ? Le Centre Jules Maillot à Lambersart.<br/>
                <br/>
                Une fois par an nous lançons l’Appel des Héraults à la ferme du Mont Garin pour un week-end complet de jeu, de rencontres, d’activités et de convivialité.<br/>
              </p>
            </div>
            <div className="bg-primary-700 p-12 rounded-xl shadow-lg self-end basis-1/3 w-full md:w-auto">
                <h4 className="text-3xl mb-4 text-[#F1F7ED]">Informations pratiques</h4>
                <ul className="space-y-4 text-[#F1F7ED]">
                    <li><span className="font-bold">Membres :</span> 50+ passionnés</li>
                    <li><span className="font-bold">Prix :</span> Adhésion annuelle à 20€</li>
                    <li><span className="font-bold">Horaires :</span> Tous les vendredi soir et samedis après-midi</li>
                </ul>
                <div className="flex w-full justify-center mt-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80967.67613193349!2d3.025!3d50.641236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32aa068b898c5%3A0x3b180b9752a8153d!2s12%20Rue%20Champ%C3%AAtre%2C%2059130%20Lambersart%2C%20France!5e0!3m2!1sfr!2sus!4v1756664841213!5m2!1sfr!2sus" height="300" style={{border: "0px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
                </div>
            </div>
        </div>
      </section>
      

        <section className="container-fluid py-20">
            <h2 className="grenze text-7xl text-[#273840] mb-12 text-center">Notre histoire</h2>
            <div className="space-y-8">
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">1991</h4>
                        <p className="mt-2">
                            1991 est l’année de création du club « Les Héraults de Lambert ». <br/>
                            Vous l’aurez peut-être remarqué mais il y a une faute d’orthographe à Héraut (le héros moyen-âgeux) qui s’écrit normalement sans « l » (sinon c’est le département). C’est une erreur non-voulue lors de la déclaration du nom de l’association en mairie et vu que le nom était assez original, la faute a été assumée par le club. C’est un peu notre marque de fabrique désormais !
                        </p>
                    </div>
                </div>
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">2024</h4>
                        <p className="mt-2">
                            L’année du renouveau de l’association et du retour de la convention.<br/>
                            Nouvelle charte graphique réalisée par Tondy. Un nouveau site réalisé par David.<br/>
                            On peut dire que cette année a été mouvementée. D’ailleurs, la convention a désormais un nom : l’Appel des Héraults !<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default ClubContent;
