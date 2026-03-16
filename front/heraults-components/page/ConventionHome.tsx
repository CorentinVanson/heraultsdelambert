import { ScrollView, ImageBackground, Link } from "@/components/ui";
import { useNavigation } from "@react-navigation/native";

export const ConventionHome = () => {
      const navigation = useNavigation();
    return <ScrollView className="font-serif">
    <ImageBackground source={require("../../assets/affiche2.jpg")} style={{ width: '100%', height: '100vh', position: 'relative' }} className="hero-gradient min-h-screen flex items-center justify-center text-center" resizeMode="cover">
        <div className="relative z-10 bg-primary-900/70 md:bg-primary-700/90 p-14 max-w-4xl md:rounded-3xl min-h-screen md:min-h-0 flex flex-col items-center justify-center md:mt-16">
            <h2 className="text-[#FFA400] text-lg md:text-xl font-semibold tracking-[0.3em] uppercase mb-4 font-sans">Évènement 2026</h2>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-[#F0F4F6] leading-tight grenze">Le Week-end <br className="hidden md:block" /> des Héraults</h1>
            <div className="w-24 h-1 bg-[#FFA400] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#F0F4F6]/80 italic mb-10 max-w-2xl mx-auto font-light">
                "Retrouvez l’ambiance chaleureuse des conventions de l’époque. Ici, nous misons sur la qualité et l’authentique."
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="bg-primary-700/80 p-5 rounded-xl border border-[#5D8598]/50 w-full md:w-auto backdrop-blur-sm">
                    <span className="block text-[#FFA400] font-bold text-lg tracking-wide">23 & 24 Mai 2026</span>
                    <span className="text-sm text-[#F0F4F6]/60 uppercase tracking-widest">Lambersart (59)</span>
                </div>
                <a href="#concept" className="text-[#F0F4F6] border-2 border-[#5D8598] px-8 py-3 rounded-full hover:bg-[#5D8598] hover:border-[#5D8598] transition font-bold uppercase tracking-widest text-sm font-sans">Explorer le programme</a>
            </div>
        </div>
    </ImageBackground>

    <section id="concept" className="py-24 px-4 bg-primary-700">
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFA400]">Un week-end <br/>"Comme à la Maison"</h2>
                    <div className="space-y-6 text-[#F0F4F6]/90 text-lg leading-relaxed font-light">
                        <p>
                            Cette année, nous avons choisi de ne pas annuler, mais de vous proposer un format plus <strong>intimiste</strong>.
                        </p>
                        <p>
                            C'est un rassemblement de passionnés qui se réunissent pour partager l'amour des jeux de rôle. Sans être « l’Appel des Héraults » habituel, nous vous proposons de nous retrouver le temps d'un week-end convivial, propice aux rencontres et aux découvertes.
                        </p>
                    </div>
                    
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-[#FFA400]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#F0F4F6]">L'Authentique</h4>
                                <p className="text-sm text-[#F0F4F6]/60">Le plaisir du jeu avant le quantitatif des festivals.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-[#FFA400]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#F0F4F6]">Inscriptions</h4>
                                <p className="text-sm text-[#F0F4F6]/60">Toutes les activités se font sur préinscription en ligne.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 font-sans">
                    <div className="card-glass p-8 rounded-2xl text-center">
                        <span className="block text-4xl mb-4">🎲</span>
                        <h3 className="font-bold text-[#F0F4F6] mb-2 uppercase tracking-tighter">Parties JdR</h3>
                        <p className="text-xs text-[#5D8598] font-semibold">SESSIONS COURTES OU LONGUES</p>
                    </div>
                    <div className="card-glass p-8 rounded-2xl text-center">
                        <span className="block text-4xl mb-4">🧛</span>
                        <h3 className="font-bold text-[#F0F4F6] mb-2 uppercase tracking-tighter">Grandeur nature et impro</h3>
                        <p className="text-xs text-[#5D8598] font-semibold"> VAMPIRE, LOUP GAROU, BLOOD</p>
                    </div>
                    <div className="card-glass p-8 rounded-2xl text-center">
                        <span className="block text-4xl mb-4">♟️</span>
                        <h3 className="font-bold text-[#F0F4F6] mb-2 uppercase tracking-tighter">Jeux</h3>
                        <p className="text-xs text-[#5D8598] font-semibold">FIGURINES & PLATEAU</p>
                    </div>
                    <div className="card-glass p-8 rounded-2xl text-center">
                        <span className="block text-4xl mb-4">🎨</span>
                        <h3 className="font-bold text-[#F0F4F6] mb-2 uppercase tracking-tighter">Ateliers</h3>
                        <p className="text-xs text-[#5D8598] font-semibold">DÉS & FIGURINES</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="infos" className="bg-[#F0F4F6] py-24 px-4 text-primary-700">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Nous Rejoindre</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-primary-700/5 border-t-4 border-[#FFA400]">
                    <div className="w-12 h-12 bg-[#FFA400]/10 rounded-full flex items-center justify-center mb-6 text-[#FFA400]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-6 uppercase tracking-widest font-sans">Horaire</h3>
                    <ul className="space-y-6">
                        <li>
                            <span className="block font-bold text-[#5D8598] text-sm uppercase">Samedi 23 mai</span>
                            <span className="text-lg">10h00 — Jusqu'au bout</span>
                        </li>
                        <li>
                            <span className="block font-bold text-[#5D8598] text-sm uppercase">Dimanche 24 mai</span>
                            <span className="text-lg">11h00 — 18h00</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-primary-700/5 border-t-4 border-[#5D8598]">
                    <div className="w-12 h-12 bg-[#5D8598]/10 rounded-full flex items-center justify-center mb-6 text-[#5D8598]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-6 uppercase tracking-widest font-sans">Accès</h3>
                    <div className="space-y-4 text-gray-600">
                        <p><strong>🚗 Voiture :</strong> Sortie 7A/7B rocade Nord-Ouest. Parking gratuit sur place.</p>
                        <p><strong>🚌 Bus :</strong> Lignes 51, 10 ou Co3 (Arrêts Cimetière Nord / Lambersart Bourg).</p>
                        <p><strong>🚇 Métro :</strong> Ligne 2, station Lambersart Bourg (puis bus 10).</p>
                    </div>
                </div>

                <div className="bg-primary-700 p-10 rounded-3xl shadow-xl text-[#F0F4F6] border-t-4 border-[#FFA400]">
                    <div className="w-12 h-12 bg-[#FFA400]/20 rounded-full flex items-center justify-center mb-6 text-[#FFA400]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-[#FFA400] font-sans">Restauration</h3>
                    <p className="text-[#F0F4F6]/80 mb-6 font-light">Pour une organisation optimale, les repas se font uniquement sur réservation.</p>
                    <Link className="inline-block text-[#FFA400] font-bold hover:text-white transition group" onPress={() => navigation.navigate('InfosPratiques')}>Découvrir les menus <span className="inline-block transition-transform group-hover:translate-x-2">→</span></Link>
                </div>
            </div>

            <div className="mt-16 w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center bg-primary-700/40 z-10 backdrop-grayscale hover:backdrop-grayscale-0 transition-all duration-700">
                    <div className="text-center p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-[#5D8598]/20">
                        <p className="text-primary-700 font-bold mb-4">Lambersart, Terre de Légendes</p>
                        <a  href="https://maps.app.goo.gl/wArCTPEyrWKCWiR96" target="_blank" className="btn-primary px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-[0.2em] inline-block">Tracer l'itinéraire</a>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Carte de Lambersart" />
            </div>
        </div>
    </section>
  </ScrollView>;
};