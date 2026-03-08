import { AlertCircleIcon, Button, ButtonSpinner, ButtonText, ChevronDownIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, Input, InputField, ScrollView, Select, SelectBackdrop, SelectContent, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui";
import { MenuContext } from "../Menu";
import { useContext, useEffect, useState } from "react";
import { getGames } from "@/api/game";
import { GameDto } from "../Game";
import colors from "tailwindcss/colors";

export const ConventionInscriptionPage2 = () => {
  const { toggleMenuModal } = useContext(MenuContext);
  const [games, setGames] = useState<GameDto[]>([]);
    const [isDayInvalid, setIsDayInvalid] = useState(false)
  const [selectedDay, setSelectedDay] = useState<string>('');
    const [isActivityInvalid, setIsActivityInvalid] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reloadGames, setReloadGames] = useState(0);

    const [isPseudoInvalid, setIsPseudoInvalid] = useState(false)
    const [pseudoInputValue, setPseudoInputValue] = useState<string>()
    const [isMailInvalid, setIsMailInvalid] = useState(false)
    const [mailInputValue, setMailInputValue] = useState<string>()
    const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
    const [phoneInputValue, setPhoneInputValue] = useState<string>()

    useEffect(() => {
        getGames().then(games => setGames(games)).finally(() => setLoading(false));
    }, [reloadGames]);

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
                    <div className="grid md:grid-cols-2 gap-6">
                        
                        <FormControl
                            isInvalid={isPseudoInvalid}
                            size="md"
                            isDisabled={false}
                            isReadOnly={false}
                            isRequired={true}
                        >
                            <FormControlLabel className="[&_div]:text-xs [&_div]:uppercase [&_div]:tracking-widest [&_div]:text-[#5D8598] [&_div]:font-bold">
                                <FormControlLabelText>Pseudo</FormControlLabelText>
                            </FormControlLabel>
                            <Input className="input-field" size="md">
                                <InputField
                                    type="text"
                                    placeholder="Pseudo"
                                    value={pseudoInputValue}
                                    onChangeText={(text) => setPseudoInputValue(text)}
                                />
                            </Input>
                            <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    Le pseudo est obligatoire, et doit être unique pour chaque activité
                                </FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl isRequired isInvalid={isDayInvalid}>
                            <FormControlLabel className="[&_div]:text-xs [&_div]:uppercase [&_div]:tracking-widest [&_div]:text-[#5D8598] [&_div]:font-bold">
                                <FormControlLabelText>Jour de présence</FormControlLabelText>
                            </FormControlLabel>
                            <Select className="select-input-field bg-[#273840]" onValueChange={(value) => setSelectedDay(value)}>
                                <SelectTrigger>
                                    <SelectInput placeholder="Choisissez un jour" className="flex-1" />
                                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                                </SelectTrigger>
                                <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                    <SelectItem label="Samedi 23 Mai" value="23" />
                                    <SelectItem label="Dimanche 24 Mai" value="24" />
                                </SelectContent>
                                </SelectPortal>
                            </Select>
                            <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>Choisissez un jour</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                    </div>
                    <FormControl
                        isInvalid={isMailInvalid}
                        size="md"
                        isDisabled={false}
                        isReadOnly={false}
                        isRequired={true}
                    >
                        <FormControlLabel className="[&_div]:text-xs [&_div]:uppercase [&_div]:tracking-widest [&_div]:text-[#5D8598] [&_div]:font-bold mt-4">
                            <FormControlLabelText>Mail</FormControlLabelText>
                        </FormControlLabel>
                        <Input className="input-field" size="md">
                            <InputField
                                type="text"
                                placeholder="Mail"
                                value={mailInputValue}
                                onChangeText={(text) => setMailInputValue(text)}
                            />
                        </Input>
                        <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Le mail est obligatoire et doit être dans un format valide
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <FormControl
                        isInvalid={isPhoneInvalid}
                        size="md"
                        isDisabled={false}
                        isReadOnly={false}
                        isRequired={false}
                    >
                        <FormControlLabel className="[&_div]:text-xs [&_div]:uppercase [&_div]:tracking-widest [&_div]:text-[#5D8598] [&_div]:font-bold mt-4">
                            <FormControlLabelText>Téléphone</FormControlLabelText>
                        </FormControlLabel>
                        <Input className="input-field" size="md">
                            <InputField
                                type="text"
                                placeholder="Téléphone"
                                value={phoneInputValue}
                                onChangeText={(text) => setPhoneInputValue(text)}
                            />
                        </Input>
                        <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Le téléphone doit être dans un bon format (10 chiffres)
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    
                    <FormControl 
                        isInvalid={isActivityInvalid}
                        isRequired >
                        <FormControlLabel className="[&_div]:text-xs [&_div]:uppercase [&_div]:tracking-widest [&_div]:text-[#5D8598] [&_div]:font-bold mt-4">
                            <FormControlLabelText>Activité</FormControlLabelText>
                        </FormControlLabel>
                        <Select className="select-input-field bg-[#273840]" selectedValue={selectedActivity} onValueChange={(value) => setSelectedActivity(value)}>
                            <SelectTrigger>
                                <SelectInput placeholder="Choisissez une activité" className="flex-1" />
                                <SelectIcon className="mr-3" as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                {
                                    loading ? <SelectItem label="Chargement des activités..." value="" isDisabled /> : 
                                        !selectedDay ? <SelectItem label="Choisissez d'abord un jour" value="" isDisabled /> :
                                            games.length > 0 ? games.filter(game => game.dateStart.startsWith(selectedDay)).map(game => {
                                                return <SelectItem key={game.id} value={String(game.id)} isDisabled={game.players.length >= game.numberOfPlayers} label={`${game.name} (${game.players.length} inscrits) ${game.players.length >= game.numberOfPlayers ? ' - COMPLET' : ''}`}>
                                                    {game.name} ({game.players.length} inscrits) {game.players.length >= game.numberOfPlayers ? ' - COMPLET' : ''}
                                                </SelectItem>
                                            }) : 
                                                <SelectItem label="Aucune activité disponible" value="" isDisabled />
                                }
                            </SelectContent>
                            </SelectPortal>
                        </Select>
                        <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>Choisissez une activité</FormControlErrorText>
                        </FormControlError>
                    </FormControl>

                    <div id="reg-summary-box" className={`bg-white/5 border border-[#5D8598]/20 p-6 mt-4 rounded-xl ${!selectedActivity ? 'hidden' : ''}`}>
                        <h4 id="reg-summary-title" className="text-[#FFA400] font-bold mb-2 text-sm uppercase">{games.find(g => g.id === Number(selectedActivity))?.name} - {games.find(g => g.id === Number(selectedActivity))?.numberOfPlayers} Places - {games.find(g => g.id === Number(selectedActivity))?.timeStart} à {games.find(g => g.id === Number(selectedActivity))?.timeEnd}</h4>
                        <p className="text-sm text-[#F0F4F6]/60 italic mb-6">Joueurs inscrits : {games.find(g => g.id === Number(selectedActivity))?.players?.join(', ')}</p>
                        <p id="reg-summary-text" className="text-sm text-[#F0F4F6]/80 leading-relaxed">{games.find(g => g.id === Number(selectedActivity))?.description}</p>
                    </div>
                    
                    <Button
                        action="secondary"
                        className="btn-primary w-full mt-4 py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl"
                        onPress={async () => {
                        setIsSuccess(false);
                        let invalid = false;
                        if (!pseudoInputValue || games.find(g => g.id === Number(selectedActivity))?.players.includes(pseudoInputValue)) {
                            invalid = true;
                            setIsPseudoInvalid(true)
                        } else {
                            setIsPseudoInvalid(false)
                        }
                        if (!mailInputValue || !mailInputValue?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                            invalid = true;
                            setIsMailInvalid(true)
                        } else {
                            setIsMailInvalid(false)
                        }
                        if (phoneInputValue && !phoneInputValue.match(/^(0|\\+33|0033)[1-9][0-9]{8}$/g)) {
                            invalid = true;
                            setIsPhoneInvalid(true)
                        } else {
                            setIsPhoneInvalid(false)
                        }
                        if (!selectedDay) {
                            invalid = true;
                            setIsDayInvalid(true)
                        } else {
                            setIsDayInvalid(false)
                        }
                        if (!selectedActivity) {
                            invalid = true;
                            setIsActivityInvalid(true)
                        } else {
                            setIsActivityInvalid(false)
                        }
                        if(invalid) {return}
        
                        setLoading(true);
                        await fetch("http://localhost:3000/api/games/player/add", {method: 'POST', body: JSON.stringify({ id: selectedActivity, pseudo: pseudoInputValue, mail: mailInputValue, phone: phoneInputValue }), headers: { "Content-Type": "application/json"}});
                        setLoading(false);
                        setIsSuccess(true);
                        setReloadGames(reloadGames + 1);
                        }}
                        isDisabled={loading}
                    >
                        {loading && <ButtonSpinner color={colors.gray[400]} />}
                        <ButtonText>Confirmer l'inscription</ButtonText>
                    </Button>
                    <div className={`bg-white/5 border border-green-400 p-6 mt-4 rounded-xl ${!isSuccess ? 'hidden' : ''}`}>
                        <p id="reg-summary-text" className="text-sm text-[#F0F4F6]">Inscription confirmée pour {games.find(g => g.id === Number(selectedActivity))?.name}!</p>
                    </div>
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