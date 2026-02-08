import React from "react";

const LudothequeHeader = () => {
  return (
      <section className="relative py-10 gap-16 bg-tertiary-500 min-h-[500px] lg:max-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute top-40 left-2/3 w-[400px] h-[600px] bg-slate-50 border-4 border-primary-700 justify-center items-center rounded-3xl animate-[rotateCard_15s_linear_infinite] hidden lg:flex">
            <span className="text-[#273840] opacity-80 text-9xl" translate="no">A</span>
            <div className="absolute top-4 left-4 text-4xl text-[#FFA400]" translate="no">A</div>
            <div className="absolute bottom-4 right-4 text-4xl text-[#FFA400]" translate="no">A</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between max-w-4xl bg-primary-50 min-[900px]:rounded-e-3xl p-8 lg:p-16 z-10">
            <div className="">
              <h1 className="grenze text-7xl mb-4 text-[#273840]">La Ludothèque du Club</h1>
              <p className="text-xl font-light">
                La ludothèque est un espace dédié au jeu, à la découverte et au partage. Plus de 100 jeux sont disponibles en prêt pour les membres de l'association, du jeu de rôle au jeu de société.<br/>
                L’association dispose d’une armoire à jeux contenant des livres de jeux de rôle et des jeux de société. Tout membre à jour de sa cotisation a la possibilité d’emprunter ces jeux en faisant enregistrer son emprunt auprès du bureau. 
              </p>
            </div>
        </div>
      </section>
  );
};
export default LudothequeHeader;
