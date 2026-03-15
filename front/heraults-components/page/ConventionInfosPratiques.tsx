import { ScrollView } from "@/components/ui";
import { MenuContext } from "../Menu";
import { useContext } from "react";

export const ConventionInfosPratiques = () => {
    const { toggleMenuModal } = useContext(MenuContext);
    return <ScrollView className="font-serif">
    <main id="page-useful" className="hidden-page">
        <section className="pt-48 pb-16 px-4 bg-[#273840]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFA400]">Infos & Restauration</h1>
                    <p className="text-[#F0F4F6]/80 italic">"Tout ce qu'il faut savoir pour préparer votre venue dans les meilleures conditions."</p>
                </div>

                <div className="mb-20 bg-white rounded-[2rem] p-8 md:p-12 text-[#273840] shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA400]/10 rounded-full -mr-16 -mt-16"></div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-3xl">🍲</span> Restauration sur place
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        Pour nous permettre de gérer les stocks au plus juste et d'éviter le gaspillage, nous vous demandons de **réserver vos repas à l'avance**.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
                            <h4 className="font-bold text-[#5D8598] mb-2 uppercase text-xs tracking-widest">Samedi Midi</h4>
                            <p className="text-sm font-semibold">Plat du jour & dessert</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
                            <h4 className="font-bold text-[#5D8598] mb-2 uppercase text-xs tracking-widest">Samedi Soir</h4>
                            <p className="text-sm font-semibold">Formule nocturne</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50">
                            <h4 className="font-bold text-[#5D8598] mb-2 uppercase text-xs tracking-widest">Dimanche Midi</h4>
                            <p className="text-sm font-semibold">Brunch rôliste</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-center bg-[#273840]/5 p-6 rounded-2xl">
                        <div className="text-sm flex-1">
                            <p className="font-bold mb-1 italic text-[#273840]">Consultez les menus détaillés, les tarifs et la liste des allergènes via le bouton ci-contre.</p>
                        </div>
                        <a href="#" className="btn-primary px-8 py-3 rounded-xl font-bold text-sm whitespace-nowrap" onClick={toggleMenuModal}>Voir les Menus & Tarifs</a>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#FFA400]">Questions Fréquentes (FAQ)</h2>
                    <div className="grid gap-4">
                        <div className="card-glass p-6 rounded-2xl">
                            <h4 className="font-bold text-[#F0F4F6] mb-3 flex items-start gap-3">
                                <span className="text-[#FFA400]">→</span> Quels sont les horaires exacts ?
                            </h4>
                            <div className="pl-8 text-sm text-[#F0F4F6]/70">
                                <p><strong>Samedi :</strong> De 10h00 jusqu'à la fin des activités nocturnes.</p>
                                <p><strong>Dimanche :</strong> De 11h00 à 18h00.</p>
                            </div>
                        </div>
                        <div className="card-glass p-6 rounded-2xl">
                            <h4 className="font-bold text-[#F0F4F6] mb-3 flex items-start gap-3">
                                <span className="text-[#FFA400]">→</span> Comment s'inscrire aux activités ?
                            </h4>
                            <div className="pl-8 text-sm text-[#F0F4F6]/70">
                                <p>En cliquant sur les liens de pré-inscription disponibles sur ce site. Les places sont limitées pour garantir le confort des tables.</p>
                            </div>
                        </div>
                        <div className="card-glass p-6 rounded-2xl">
                            <h4 className="font-bold text-[#F0F4F6] mb-3 flex items-start gap-3">
                                <span className="text-[#FFA400]">→</span> Quels sont les jeux de rôle proposés ?
                            </h4>
                            <div className="pl-8 text-sm text-[#F0F4F6]/70">
                                <p>Nous proposons des parties longues (Alien, D&D, Historia, etc.) et des initiations (Stranger Things, D&D 5e). Retrouvez la liste complète sur la page <strong>Activités</strong>.</p>
                            </div>
                        </div>
                        <div className="card-glass p-6 rounded-2xl">
                            <h4 className="font-bold text-[#F0F4F6] mb-3 flex items-start gap-3">
                                <span className="text-[#FFA400]">→</span> Est-ce la convention "l'Appel des Héraults" ?
                            </h4>
                            <div className="pl-8 text-sm text-[#F0F4F6]/70">
                                <p>Non, cet évènement est un format spécial "entre passionnés". Il n'y a donc pas d'exposants ni d'invités officiels (guests) cette année.</p>
                            </div>
                        </div>
                        <div className="card-glass p-6 rounded-2xl">
                            <h4 className="font-bold text-[#F0F4F6] mb-3 flex items-start gap-3">
                                <span className="text-[#FFA400]">→</span> Peut-on se garer à proximité ?
                            </h4>
                            <div className="pl-8 text-sm text-[#F0F4F6]/70">
                                <p>Oui, un parking est accessible juste à côté du lieu de rassemblement. Référez-vous au plan d'accès sur la page d'accueil.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#5D8598]">Comment venir ?</h2>
                        <div className="space-y-6 text-[#F0F4F6]/80 text-sm">
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#5D8598] p-2 rounded-lg text-white font-bold">CAR</span>
                                <p>Accès par rocade Nord-ouest Sortie 7A ou 7B. Stationnement gratuit sur place.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#FFA400] p-2 rounded-lg text-dark font-bold">BUS</span>
                                <div className="space-y-2">
                                    <p><strong>Ligne 51 :</strong> arrêt Cimetière Nord, à 2 pas.</p>
                                    <p><strong>Ligne 10 :</strong> arrêt Lambersart Bourg, remonter la rue de Verlinghem.</p>
                                    <p><strong>Ligne Co 3 :</strong> arrêt Foucault à 700m.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#5D8598] p-2 rounded-lg text-white font-bold">SUB</span>
                                <p>Métro ligne 2 puis bus 10, arrêt Lambersart Bourg.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5D8598]/20">
                        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Accès Plan" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  </ScrollView>;
};