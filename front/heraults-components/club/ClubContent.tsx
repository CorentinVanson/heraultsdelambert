import { Button, ButtonText, Link } from "@/components/ui";
import React from "react";

const ClubContent = () => {
  return (
    <>
      <section className="py-10 gap-16">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="">
              <h1 className="grenze text-7xl mb-4 text-[#273840]">Le Club des Héraults</h1>
              <p className="text-xl font-light max-w-2xl">L'association a été fondée en 2018 par un groupe de passionnés de jeux de rôle souhaitant créer un espace convivial pour partager leur hobby. Depuis, l'association a grandi pour devenir un lieu de rencontre incontournable pour les joueurs de Lambersart.</p>
            </div>
            <div className="bg-primary-700 p-12 rounded-xl shadow-lg self-end flex-grow max-w-4xl">
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
                        <h4 className="font-bold text-xl text-[#FFA400]">2018</h4>
                        <p className="mt-2">Fondation de l'association par 10 passionnés de jeu de rôle. Création du local à Lambersart.</p>
                    </div>
                </div>
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">2019</h4>
                        <p className="mt-2">Organisation de notre première convention de jeu de rôle. L'association compte 30 membres.</p>
                    </div>
                </div>
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">2021</h4>
                        <p className="mt-2">Lancement de la ludothèque, avec plus de 50 jeux de société et de rôle disponibles en prêt.</p>
                    </div>
                </div>
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">2023</h4>
                        <p className="mt-2">La convention annuelle attire plus de 300 visiteurs, avec des invités d'honneur et de nombreux exposants.</p>
                    </div>
                </div>
                <div className="relative timeline-item border-primary-700 border-l-2 pl-4 ml-4">
                    <div className="p-6 rounded-xl shadow-lg bg-primary-700 text-[#F1F7ED]">
                        <h4 className="font-bold text-xl text-[#FFA400]">2024</h4>
                        <p className="mt-2">L'association dépasse les 50 membres et continue d'organiser des événements réguliers et des soirées thématiques.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default ClubContent;
