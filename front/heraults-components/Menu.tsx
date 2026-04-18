import { useNavigation } from "@react-navigation/native";
import { createContext, useContext } from "react";

type MenuModalContextType = {
  menuModalOpen?: boolean;
  toggleMenuModal?: () => void;
};
export const MenuContext = createContext<MenuModalContextType>({
  menuModalOpen: false,
  toggleMenuModal: () => {},
});

export const Menu = () => {
  const { menuModalOpen, toggleMenuModal } = useContext(MenuContext);
  const navigation = useNavigation();
    return <div id="menu-modal" className={`fixed inset-0 z-[100] ${menuModalOpen ? "flex" : "hidden"} items-center justify-center p-4 bg-black/80 backdrop-blur-sm`}>
        <div className="bg-white text-[#273840] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12 relative">
            <button onClick={() => toggleMenuModal?.()} className="absolute top-6 right-6 text-gray-400 hover:text-[#273840] text-2xl">✕</button>
            
            <h2 className="text-3xl font-bold mb-8 text-center border-b border-gray-100 pb-4">Carte de la Taverne</h2>
            
            <div className="space-y-10">
                <div className="relative pl-6 border-l-4 border-[#FFA400]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-xl uppercase tracking-tight">Samedi Midi</h3>
                        <span className="text-xs font-bold text-[#5D8598] bg-gray-50 px-2 py-1 rounded">9 €</span>
                    </div>
                    <p className="font-semibold text-sm mb-1">Menu "Le Brave"</p>
                    <div className="text-gray-600 text-sm italic mb-3 leading-relaxed">
                        <div>
                            <span>Pan bagnat au thon</span>
                            <p className="text-[10px] text-gray-400">Allergènes : gluten, poisson, oeuf, moutarde</p>

                        </div>
                        <div>
                            <span>Pan bagnat au poulet au curry</span>
                            <p className="text-[10px] text-gray-400">Allergènes : gluten, oeuf, moutarde, celeri, lait</p>
                        </div>
                        <div>
                            <span>Pan bagnat végétarien</span>
                            <p className="text-[10px] text-gray-400">Allergènes : gluten, lait</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-6 border-l-4 border-[#5D8598]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-xl uppercase tracking-tight text-[#273840]">Samedi Soir</h3>
                        <span className="text-xs font-bold text-[#5D8598] bg-gray-50 px-2 py-1 rounded">8 €</span>
                    </div>
                    <p className="font-semibold text-sm mb-1">Formule "Nocturne"</p>
                    
                    <div className="text-gray-600 text-sm italic mb-3 leading-relaxed">
                        <div>
                            <span>BBQ classique : Chipolatas, Merguez, Brochette de poulet</span>
                            <p className="text-[10px] text-gray-400">Allergènes (Chipolatas, Merguez): gluten, lait, soja</p>
                            <p className="text-[10px] text-gray-400">Allergènes (Brochette de poulet): curry, moutarde, miel</p>
                        </div>
                        <div>
                            <span>BBQ végétarien : Saucisse végétarienne</span>
                            <p className="text-[10px] text-gray-400">Allergènes : soja, sésame, gluten</p>
                        </div>
                        <div>
                            <span>Assortiment de salades et crudités diverses</span>
                            <p className="text-[10px] text-gray-400">Allergènes : gluten, fruit à coque, lait, arachide, soja</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-6 border-l-4 border-[#FFA400]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-xl uppercase tracking-tight">Dimanche Midi</h3>
                        <span className="text-xs font-bold text-[#5D8598] bg-gray-50 px-2 py-1 rounded">9 €</span>
                    </div>
                    <p className="font-semibold text-sm mb-1">Brunch "Le Repos du Hérault"</p>
                    <div className="text-gray-600 text-sm italic mb-3 leading-relaxed">
                        <div>
                            <span>Tenders de poulet</span>
                            <p className="text-[10px] text-gray-400">Allergènes : gluten, oeuf, lait</p>

                        </div>
                        <div>
                            <span>Nuggets végétariens</span>
                            <p className="text-[10px] text-gray-400">Allergènes : soja, gluten, lait, oeuf</p>
                        </div>
                        <div>
                            <span>Pomme de terre au four et sa crème fraiche</span>
                            <p className="text-[10px] text-gray-400">Allergènes : lait, oeuf, moutarde, oeuf</p>
                        </div>
                        <div>
                            <span>Camembert au BBQ (supplément à 3.50 €)</span>
                            <p className="text-[10px] text-gray-400">Allergènes : lait, miel</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-6 border-l-4 border-[#FFA400]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-xl uppercase tracking-tight">Pendant tout le week-end</h3>
                        <span className="text-xs font-bold text-[#5D8598] bg-gray-50 px-2 py-1 rounded">Variable</span>
                    </div>
                    <div className="text-gray-600 text-sm italic mb-3 leading-relaxed">
                        <div>
                            <span>Cookies maison (chocolat, chocolat noisette praliné)</span>
                            <p className="text-[10px] text-gray-400">Allergènes : fruit à coques, gluten, lait, oeuf, soja, arachides.</p>

                        </div>
                        <div>
                            <span>Bière pression</span>
                        </div>
                        <div>
                            <span>Hypocras (Boisson médiévale à base de vin rouge)</span>
                        </div>
                        <div>
                            <span>Soft (Coca, Coca zéro, Schweppes agrum, Ice tea, ean, thé, café)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-xl text-xs text-amber-800 leading-relaxed border border-amber-100 italic">
                    <strong>Note importante :</strong> Pour garantir la fraîcheur et éviter le gaspillage, les repas sont préparés sur commande.
                </div>
            </div>

            <button onClick={() => { toggleMenuModal?.(); navigation.navigate('Convention', { screen: 'Inscription' }); }} className="mt-10 w-full btn-primary py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Passer à la réservation</button>
        </div>
    </div>;
};