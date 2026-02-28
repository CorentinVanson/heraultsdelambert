import { ScrollView } from "@/components/ui";
import { MenuContext } from "../Menu";
import { useContext } from "react";

        const activities = [
            { id: 'jdr_long', title: 'JdR : Parties Longues', day: 'samedi', type: 'Longue', price: '5€', text: 'Barbarians of Lemuria, Alien, D&D, Historia... 4 à 6h de jeu.' },
            { id: 'jdr_long_sun', title: 'JdR : Parties Longues', day: 'dimanche', type: 'Longue', price: '5€', text: 'Empire des Cerisiers, Vermine 2047, Jurassic Park... 4 à 6h de jeu.' },
            { id: 'vampire', title: 'Vampire : La Mascarade', day: 'samedi', type: 'Immersif', price: '5€', text: 'Plongez dans les intrigues de la Cour de Lille de 21h à 1h30.' },
            { id: 'clocktower', title: 'Blood on the Clocktower', day: 'samedi', type: 'Immersif', price: '5€', text: 'Un village maudit, du bluff et de la déduction théâtrale.' },
            { id: 'loup_garou', title: 'Les Nuits de Loup-Garou', day: 'samedi', type: 'Ambiance', price: 'Gratuit', text: 'Survivez jusqu\'à l\'aube à Thiercelieux.' },
            { id: 'joan', title: 'Joan of Arc', day: 'dimanche', type: 'Immersif', price: 'Gratuit', text: 'L\'avenir de la France repose entre vos mains.' },
            { id: 'initiation_sun', title: 'Initiations JdR', day: 'dimanche', type: 'Découverte', price: 'Gratuit', text: 'The Mutants of LXX, D&D 5e, Stranger Things. 1 à 2h.' },
            { id: 'atelier_de', title: 'Atelier : Création de dés', day: 'samedi', type: 'Workshop', price: 'Voir Aleades', text: 'Anime par Aleades.' },
            { id: 'peinture', title: 'Peinture de figurines', day: 'dimanche', type: 'Workshop', price: 'Selon figurine', text: 'Initiation et perfectionnement à la peinture.' }
        ];

        function showPage(pageId: string) {
            document.querySelectorAll('main').forEach(m => m.classList.add('hidden-page'));
            document.getElementById('page-' + pageId)?.classList.remove('hidden-page');
            
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active-link'));
            const navId = pageId === 'useful' ? 'nav-infos' : 'nav-' + pageId;
            const navEl = document.getElementById(navId);
            if (navEl) navEl.classList.add('active-link');

            if(pageId === 'activities') filterActivities('all');
            window.scrollTo(0, 0);
        }
        
        function filterActivities(day: string) {
            const container = document.getElementById('activities-container');
            if(!container) return;
            container.innerHTML = '';
            
            // UI Toggle classes
            ['all', 'samedi', 'dimanche'].forEach(d => {
                document.getElementById('btn-' + d)?.classList.remove('active');
            });
            document.getElementById('btn-' + day)?.classList.add('active');

            const filtered = day === 'all' ? activities : activities.filter(a => a.day === day);
            
            filtered.forEach(a => {
                const card = `
                    <div class="card-glass p-6 rounded-2xl flex flex-col h-full border-t-2 ${a.day === 'samedi' ? 'border-amber-500' : 'border-cyan-500'}">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-[10px] uppercase font-bold tracking-widest text-[#5D8598]">${a.day}</span>
                            <span class="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">${a.price}</span>
                        </div>
                        <h3 class="text-lg font-bold text-[#F0F4F6] mb-2">${a.title}</h3>
                        <p class="text-sm text-[#F0F4F6]/60 mb-6 flex-grow italic">${a.text}</p>
                        <button onclick="preSelectRegistration('${a.day}', '${a.id}')" class="w-full btn-primary py-2 rounded-lg text-xs font-bold uppercase tracking-widest">S'inscrire</button>
                    </div>
                `;
                container.innerHTML += card;
            });
        }

        function preSelectRegistration(day: string, activityId: string) {
            showPage('registration');
            (document.getElementById('reg-day-select') as HTMLInputElement).value = day;
            updateRegistrationActivities();
            (document.getElementById('reg-activity-select') as HTMLInputElement).value = activityId;
            updateRegSummary();
        }

        function updateRegistrationActivities() {
            const day = (document.getElementById('reg-day-select') as HTMLInputElement).value;
            const activitySelect = document.getElementById('reg-activity-select') as HTMLSelectElement;
            activitySelect.disabled = false;
            activitySelect.innerHTML = '<option value="" disabled selected>Choisissez une activité</option>';
            
            const filtered = activities.filter(a => a.day === day);
            filtered.forEach(a => {
                activitySelect.innerHTML += `<option value="${a.id}">${a.title} (${a.price})</option>`;
            });
            updateRegSummary();
        }

        function updateRegSummary() {
            const id = (document.getElementById('reg-activity-select') as HTMLSelectElement).value;
            const box = document.getElementById('reg-summary-box');
            const activity = activities.find(a => a.id === id);
            
            if (activity) {
                box?.classList.remove('hidden');
                document.getElementById('reg-summary-title')!.innerText = activity.title;
                document.getElementById('reg-summary-text')!.innerText = activity.text;
            } else {
                box?.classList.add('hidden');
            }
        }

export const ConventionInscriptionPage2 = () => {
  const { toggleMenuModal } = useContext(MenuContext);
    return <ScrollView>
      <main id="page-registration" className="hidden-page">
        <section className="pt-48 pb-16 px-4 bg-[#273840]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFA400]">Inscriptions</h1>
                    <p className="text-[#F0F4F6]/80 italic">"Les inscriptions aux activités dépendent du jour sélectionné."</p>
                </div>

                <div className="card-glass p-8 md:p-12 rounded-[2rem] mb-12">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#FFA400]">
                        <span>✍️</span> Inscription Activité
                    </h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#5D8598] font-bold mb-2">Prénom & Nom</label>
                                <input type="text" className="input-field" placeholder="Votre nom complet" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-[#5D8598] font-bold mb-2">Jour de présence</label>
                                <select id="reg-day-select" className="input-field bg-[#273840]" onChange={updateRegistrationActivities}>
                                    <option value="" disabled selected>Choisissez votre jour</option>
                                    <option value="samedi">Samedi 23 Mai</option>
                                    <option value="dimanche">Dimanche 24 Mai</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-[#5D8598] font-bold mb-2">Activité souhaitée</label>
                            <select id="reg-activity-select" className="input-field bg-[#273840]" disabled onChange={updateRegSummary}>
                                <option value="" disabled selected>Veuillez d'abord choisir un jour</option>
                            </select>
                        </div>

                        <div id="reg-summary-box" className="hidden bg-white/5 border border-[#5D8598]/20 p-6 rounded-xl">
                            <h4 id="reg-summary-title" className="text-[#FFA400] font-bold mb-2 text-sm uppercase"></h4>
                            <p id="reg-summary-text" className="text-sm text-[#F0F4F6]/80 leading-relaxed"></p>
                        </div>

                        <button type="button" className="btn-primary w-full py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl">Confirmer l'inscription</button>
                    </form>
                </div>

                <div className="card-glass p-8 md:p-12 rounded-[2rem] border-l-4 border-[#FFA400]">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#F0F4F6]">
                        <span>🍲</span> Réservation Repas
                    </h2>                        
                    <button onClick={() => toggleMenuModal?.()} className="text-xs font-bold text-[#FFA400] underline hover:text-white transition">Voir le détail des menus</button>
                  </div>
                    <form className="space-y-6">
                        <p className="text-sm text-[#F0F4F6]/60 italic mb-6">Cochez vos repas (paiement sur place).</p>
                        <div className="grid gap-4">
                            <label className="flex items-center gap-4 p-4 bg-white/5 rounded-xl cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-[#FFA400]" />
                                <div><span className="block font-bold text-[#F0F4F6]">Samedi Midi</span><span className="text-xs text-[#5D8598]">Plat du jour & Dessert</span></div>
                            </label>
                            <label className="flex items-center gap-4 p-4 bg-white/5 rounded-xl cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-[#FFA400]" />
                                <div><span className="block font-bold text-[#F0F4F6]">Samedi Soir</span><span className="text-xs text-[#5D8598]">Formule Nocturne</span></div>
                            </label>
                            <label className="flex items-center gap-4 p-4 bg-white/5 rounded-xl cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 accent-[#FFA400]" />
                                <div><span className="block font-bold text-[#F0F4F6]">Dimanche Midi</span><span className="text-xs text-[#5D8598]">Brunch Rôliste</span></div>
                            </label>
                        </div>
                        <button type="button" className="btn-primary w-full py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl">Réserver</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
  </ScrollView>;
};