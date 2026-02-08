import React, { useContext } from "react";
import {
  Button,
  ButtonText,
  Link,
} from "../../components/ui";
import { ThemeContext } from "@/ColorMode";
import { useNavigation } from "@react-navigation/native";


const HeraultsEvenementsFold = () => {
  const { colorMode } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <>

      <section className="py-10">
        <h2 className="text-7xl leading-tight text-stroke">Le calendrier</h2>
        <div className="flex justify-center" > 
          <div className="mt-8 shadow-lg w-full lg:w-1/2" > 
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&mode=AGENDA&showTz=0&showCalendars=0&showTabs=0&showDate=0&showNav=0&showTitle=0&src=heraultsdelambert%40gmail.com&color=%23039be5&color=%23009688&color=%237cb342" style={{border: "0px", filter: colorMode === 'dark' ? 'invert(100%) brightness(100%)' : ''}} className="w-full h-[50vh]" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
      </section>
      <section className="py-10 gap-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
              <h2 className="text-7xl leading-tight text-stroke">Le Club</h2>
              <h3 className="text-4xl font-light my-6">Un lieu de rencontre et de passion</h3>
              <p className="text-lg">Les Héraults de Lambersart, c'est une association de jeu de rôle et de jeu de société. Notre objectif est de rassembler les passionnés de tous horizons, qu'ils soient débutants ou expérimentés, pour partager des moments de convivialité et d'aventure.</p>
              <div className="mt-2">                
                <Button className="bg-primary-700 p-3 rounded-lg font-bold text-lg self-start" onPress={() => navigation.navigate('Club')}>
                  <ButtonText className="text-primary-50">Découvrir le Club</ButtonText>
                </Button> 
              </div>
          </div>
          <div className="bg-primary-700 p-12 rounded-xl shadow-lg self-end flex-1">
              <h4 className="text-3xl mb-4 text-[#F1F7ED]">Informations pratiques</h4>
              <ul className="space-y-4 text-[#F1F7ED]">
                  <li><span className="font-bold">Membres :</span> 50+ passionnés</li>
                  <li><span className="font-bold">Prix :</span> Adhésion annuelle à 20€</li>
                  <li><span className="font-bold">Horaires :</span> Tous les vendredi soir (18h-23h) et samedis après-midi (14h-23h)</li>
              </ul>
              <div className="flex w-full justify-center mt-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80967.67613193349!2d3.025!3d50.641236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32aa068b898c5%3A0x3b180b9752a8153d!2s12%20Rue%20Champ%C3%AAtre%2C%2059130%20Lambersart%2C%20France!5e0!3m2!1sfr!2sus!4v1756664841213!5m2!1sfr!2sus" height="300" style={{border: "0px"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
              </div>
          </div>
        </div>
      </section>

      <section className="py-10 flex justify-center lg:justify-end">
          <div className="bg-primary-700 p-12 rounded-xl shadow-lg max-w-2xl text-[#F1F7ED] relative">
              <h2 className="text-6xl mb-4">La Ludothèque</h2>
              <p className="text-lg">Plus de 200 jeux de rôle et de société sont disponibles en prêt pour les membres de l'association. Des grands classiques aux dernières nouveautés, il y en a pour tous les goûts !</p>
              <div className="mt-6 flex space-x-4">
                  <Link href="https://www.myludo.fr/#!/profil/les-heraults-de-lambert-46753" isExternal>
                    <Button className="bg-primary-50 p-3 rounded-lg font-bold text-lg">
                      <ButtonText>Consulter la liste</ButtonText>
                    </Button> 
                  </Link>
                  <Button className="bg-primary-50 p-3 rounded-lg font-bold text-lg" onPress={() => navigation.navigate('Ludotheque')}>
                    <ButtonText>Règles de prêt</ButtonText>
                  </Button> 
              </div>
          </div>
      </section>
      
      <section className="py-10">
          <div className="bg-tertiary-500 p-12 rounded-xl text-white shadow-lg">
              <h2 className="grenze text-6xl mb-4">La Convention</h2>
              <p className="text-lg">Chaque année, nous organisons une grande convention de jeu de rôle, avec des invités, des exposants et des parties uniques. Un rendez-vous incontournable pour la communauté.</p>
              <div className="mt-6">
                <Button className="bg-herault-bg-light p-3 rounded-lg font-bold text-lg" onPress={() => navigation.navigate('Inscription')}>
                  <ButtonText>Inscriptions Convention</ButtonText>
                </Button>
              </div>
          </div>
      </section>
    </>
  );
};

export default HeraultsEvenementsFold;
