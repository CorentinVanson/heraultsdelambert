import { Link, ScrollView } from "@/components/ui";
import { useNavigation } from "@react-navigation/native";

export const ConventionActivities = () => {
      const navigation = useNavigation();
    return <ScrollView className="font-serif">
    <main id="page-activities" className="hidden-page">
        <section className="pt-48 pb-16 px-4 bg-[#273840]">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFA400]">Activités & Inscriptions</h1>
                <p className="text-[#F0F4F6]/80 max-w-2xl mx-auto italic mb-12">"De l'initiation aux campagnes épiques, découvrez le programme de cette édition intimiste."</p>
                
                <div className="text-left mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5D8598] border-b border-[#5D8598]/30 pb-4">Jeux de Rôle</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400]">Parties Longues</h3>
                                <span className="price-badge">5€</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/60 mb-6 italic">Format standard de 4 à 6 heures de jeux.</p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Barbarians of Lemuria</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">L'empire des Cerisiers</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Vermine 2047</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Alien</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Jurassic Park</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Donjons & Dragons</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Les Lames du Cardinal</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Tales we don't tell</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Maléfice</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Historia</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Mutant & Mastermind</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Anime was a mistake</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Cthulhu chez les Ch'tis</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Chill</span>
                                <span className="text-[#F0F4F6] bg-[#273840] px-3 py-1 rounded-full border border-[#5D8598]/40">Rêve de Dragon</span>
                            </div>
                        </Link>
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400]">Initiations</h3>
                                <span className="price-badge">GRATUIT</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/60 mb-6 italic">Format découverte de 1 à 2 heures.</p>
                            <div className="space-y-4">
                                <div className="p-3 bg-[#273840]/50 rounded-lg border border-[#5D8598]/20">
                                    <span className="font-bold text-[#F0F4F6]">The Mutants of LXX</span>
                                </div>
                                <div className="p-3 bg-[#273840]/50 rounded-lg border border-[#5D8598]/20">
                                    <span className="font-bold text-[#F0F4F6]">D&D 5e</span>
                                </div>
                                <div className="p-3 bg-[#273840]/50 rounded-lg border border-[#5D8598]/20">
                                    <span className="font-bold text-[#F0F4F6]">D&D Stranger Things</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="text-left mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5D8598] border-b border-[#5D8598]/30 pb-4">Expériences Immersives</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400] mb-4">Times of Legends : Joan of Arc</h3>
                                <span className="price-badge">GRATUIT</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/80 leading-relaxed">
                                Incarnez Jeanne d’Arc dans un monde médiéval magnifiquement rendu. Forgez votre propre légende dans un jeu narratif où la foi et la stratégie sont vos armes. L'avenir de la France repose entre vos mains.
                            </p>
                        </Link>
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400]">Blood on the Clocktower</h3>
                                <span className="price-badge">5€</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/80 leading-relaxed mb-4">
                                Un village maudit, un mal qui frappe chaque nuit... Entre manipulations, révélations et retournements de situation, plongez dans une expérience sociale théâtrale intense.
                            </p>
                        </Link>
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400]">Les Nuits du Loup-Garou</h3>
                                <span className="price-badge">GRATUIT</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/80 leading-relaxed">
                                La nuit tombe sur Thiercelieux... Serez-vous un villageois, un loup-garou rusé ou une voyante ? Décelez les mensonges et tentez de survivre jusqu'à l'aube.
                            </p>
                        </Link>
                        <Link className="card-glass p-8 rounded-2xl" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-[#FFA400]">Vampire : La Mascarade</h3>
                                <span className="price-badge">5€</span>
                            </div>
                            <p className="text-sm text-[#F0F4F6]/80 leading-relaxed mb-4">
                                Plongez dans les intrigues de la Cour de Lille avec l'association "La Mascarade". Alliances, complots et manipulations au cœur d'un univers gothique-punk.
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="text-left mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5D8598] border-b border-[#5D8598]/30 pb-4">Ateliers & Brocante</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link className="p-8 rounded-2xl border-l-4 border-[#FFA400] card-glass" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <h3 className="text-xl font-bold text-[#F0F4F6] mb-4">Ateliers Hobby</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#FFA400]">✨</span>
                                    <span className="text-[#F0F4F6]">Création de dés personnalisés avec <strong>Aleades</strong></span>
                                </li>
                                <li className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#FFA400]">🎨</span>
                                        <span className="text-[#F0F4F6]/80">Initiation à la peinture de figurines</span>
                                    </div>
                                    <span className="price-badge">4€</span>
                                </li>
                            </ul>
                        </Link>
                        <Link className="card-glass p-8 rounded-2xl border-l-4 border-[#5D8598]" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })}>
                            <h3 className="text-xl font-bold text-[#F0F4F6] mb-4">La Brocante Ludique</h3>
                            <p className="text-sm text-[#F0F4F6]/80 leading-relaxed italic">
                                Envie de faire de la place sur vos étagères ? Déposez vos jeux, nous nous occupons de la vente pour vous pendant que vous profitez du week-end !
                            </p>
                        </Link>
                    </div>
                </div>

                <div id="inscriptions" className="bg-white p-12 rounded-[2rem] text-[#273840] shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
                    <p className="mb-8 text-gray-600">Toutes les activités se font exclusivement sur préinscription via nos formulaires en ligne.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link className="btn-primary px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm" onPress={() => navigation.navigate('Inscription')}>Inscrivez-vous !</Link>
                        <Link className="btn-secondary border-2 border-[#273840] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm" onPress={() => navigation.navigate('Inscription')}>Formulaire Repas</Link>
                    </div>
                    <p className="mt-8 text-xs text-gray-400 font-light">Le paiement des activités payantes s'effectuera directement sur place.</p>
                </div>
            </div>
        </section>
    </main>
  </ScrollView>;
};