import { AlertCircleIcon, Button, ButtonSpinner, ButtonText, Checkbox, CheckboxIcon, CheckboxIndicator, CheckIcon, ChevronDownIcon, CircleIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlLabel, FormControlLabelText, Input, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, ScrollView, Select, SelectBackdrop, SelectContent, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui";
import { MenuContext } from "../Menu";
import { useContext, useEffect, useState } from "react";
import { addPlayer, getGames } from "@/api/game";
import { GameDto } from "../Game";
import colors from "tailwindcss/colors";
import { addFood } from "@/api/food";

export const ConventionInscriptionPage2 = () => {
  const { toggleMenuModal } = useContext(MenuContext);
  const [games, setGames] = useState<GameDto[]>([]);
    const [isDayInvalid, setIsDayInvalid] = useState(false)
  const [selectedDay, setSelectedDay] = useState<string>('');
    const [isActivityInvalid, setIsActivityInvalid] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [confirmedSelectedActivity, setConfirmedSelectedActivity] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFoodSuccess, setIsFoodSuccess] = useState(false);
  const [reloadGames, setReloadGames] = useState(0);

    const [isPseudoInvalid, setIsPseudoInvalid] = useState(false)
    const [isPseudoInvalid2, setIsPseudoInvalid2] = useState(false)
    const [pseudoInputValue, setPseudoInputValue] = useState<string>()
    const [isMailInvalid, setIsMailInvalid] = useState(false)
    const [mailInputValue, setMailInputValue] = useState<string>()
    const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
    const [phoneInputValue, setPhoneInputValue] = useState<string>()

    const [includeSaturdayMidday, setIncludeSaturdayMidday] = useState(false);
    const [includeSaturdayEvening, setIncludeSaturdayEvening] = useState(false);
    const [includeSunday, setIncludeSunday] = useState(false);
    const [saturdayBagnat, setSaturdayBagnat] = useState<string>("");
    const [saturdaySaucisse, setSaturdaySaucisse] = useState({ choice1: false, choice2: false, choice3: false });
    const [saturdayMerguez, setSaturdayMerguez] = useState({ choice1: false, choice2: false, choice3: false });
    const [saturdayVege, setSaturdayVege] = useState({ choice1: false, choice2: false, choice3: false });
    const [sundayMain, setSundayMain] = useState<string>("");
    const [sundayCamembert, setSundayCamembert] = useState(false);

    const initForms = () => {
        setSelectedDay('');
        setSelectedActivity('');
        setMailInputValue('');
        setPhoneInputValue('');
        setIncludeSaturdayMidday(false);
        setIncludeSaturdayEvening(false);
        setIncludeSunday(false);
        setSaturdayBagnat("");
        setSaturdaySaucisse({ choice1: false, choice2: false, choice3: false });
        setSaturdayMerguez({ choice1: false, choice2: false, choice3: false });
        setSaturdayVege({ choice1: false, choice2: false, choice3: false });
        setSundayMain("");
        setSundayCamembert(false);
    }

    const initActivityForm = () => {
        setConfirmedSelectedActivity(selectedActivity);
        setSelectedDay('');
        setSelectedActivity('');
    }

    const isFormCorrect = () => {
        return (
            !loading &&
            (includeSaturdayMidday || includeSaturdayEvening || includeSunday) &&
            (!includeSaturdayMidday || saturdayBagnat) &&
            (!includeSaturdayEvening || ((saturdaySaucisse.choice1 || saturdayMerguez.choice1 || saturdayVege.choice1) && (saturdaySaucisse.choice2 || saturdayMerguez.choice2 || saturdayVege.choice2))) &&
            (!includeSunday || sundayMain)
        ) as boolean;
    }

    useEffect(() => {
        getGames().then(games => setGames(games)).finally(() => setLoading(false));
    }, [reloadGames]);

    return <ScrollView className="font-serif">
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
                                    onChangeText={(text) => { setPseudoInputValue(text); setIsPseudoInvalid(false); }}
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
                            <Select className="select-input-field bg-[#273840]" selectedValue={selectedDay || null} onValueChange={(value) => { setSelectedDay(value); setIsDayInvalid(false); setSelectedActivity(''); }}>
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
                                onChangeText={(text) => { setMailInputValue(text); setIsMailInvalid(false); }}
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
                                onChangeText={(text) => { setPhoneInputValue(text); setIsPhoneInvalid(false); }}
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
                        <Select className="select-input-field bg-[#273840]" selectedValue={selectedActivity || null} onValueChange={(value) => { setSelectedActivity(value); setIsActivityInvalid(false); }}>
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
                                            games.length > 0 ? games.filter(game => game.dateStart?.startsWith(selectedDay)).map(game => {
                                                return <SelectItem key={game.id} value={String(game.id)} isDisabled={game.players.length >= game.numberOfPlayers} label={`${game.name}  ${game.timeStart}-${game.timeEnd} (${game.players.length} inscrits) ${game.players.length >= game.numberOfPlayers ? ' - COMPLET' : ''}`}>
                                                    {game.name} {game.timeStart}-{game.timeEnd} ({game.players.length} inscrits) {game.players.length >= game.numberOfPlayers ? ' - COMPLET' : ''}
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
                        <div className="flex justify-between items-start mb-4">
                            <h4 id="reg-summary-title" className="text-[#FFA400] font-bold mb-2 text-sm uppercase">{games.find(g => g.id === Number(selectedActivity))?.name} - {games.find(g => g.id === Number(selectedActivity))?.numberOfPlayers} Places - {games.find(g => g.id === Number(selectedActivity))?.timeStart} à {games.find(g => g.id === Number(selectedActivity))?.timeEnd} {(games.find(g => g.id === Number(selectedActivity))?.minNumberOfPlayers ?? 0) > 1 ? ` - minimum ${games.find(g => g.id === Number(selectedActivity))?.minNumberOfPlayers} joueurs` : ''}</h4>
                            <span className="price-badge">{(games.find(g => g.id === Number(selectedActivity))?.price ?? 0) > 0 ? games.find(g => g.id === Number(selectedActivity))?.price + '€' : 'GRATUIT'}</span>
                        </div>
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
                        await addPlayer({ id: selectedActivity, pseudo: pseudoInputValue, mail: mailInputValue, phone: phoneInputValue });
                        setLoading(false);
                        setIsSuccess(true);
                        setReloadGames(reloadGames + 1);
                        initActivityForm();
                        }}
                        isDisabled={loading}
                    >
                        {loading && <ButtonSpinner color={colors.gray[400]} />}
                        <ButtonText>Confirmer l'inscription</ButtonText>
                    </Button>
                    <div className={`bg-white/5 border border-green-400 p-6 mt-4 rounded-xl ${!isSuccess ? 'hidden' : ''}`}>
                        <p id="reg-summary-text" className="text-xl text-[#F0F4F6]">Inscription confirmée pour {games.find(g => g.id === Number(confirmedSelectedActivity))?.name} !</p>
                    </div>
                </div>

                <div className="card-glass p-8 md:p-12 rounded-[2rem] border-l-4 border-[#FFA400] mb-12 ">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-[#FFA400]">
                        <span>🍲</span> Réservation Repas
                    </h2>                        
                    <button onClick={() => toggleMenuModal?.()} className="text-xs font-bold text-[#FFA400] underline hover:text-white transition">Voir le détail des menus</button>
                  </div>
                    <form>
                        <FormControl
                            isInvalid={isPseudoInvalid2}
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
                                    onChangeText={(text) => { setPseudoInputValue(text); setIsPseudoInvalid(false); }}
                                />
                            </Input>
                            <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    Le pseudo est obligatoire
                                </FormControlErrorText>
                            </FormControlError>
                        </FormControl>
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
                                    onChangeText={(text) => { setMailInputValue(text); setIsMailInvalid(false); }}
                                />
                            </Input>
                            <FormControlError className="[&_div]:text-red-400 [&_svg]:text-red-400">
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    Le mail est obligatoire et doit être dans un format valide
                                </FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <div className="space-y-6 mt-6">
                            <p className="text-sm text-[#F0F4F6]/60 italic mb-6">Cochez vos repas (paiement sur place).</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <Checkbox value="samedi" isChecked={includeSaturdayMidday} onChange={() => setIncludeSaturdayMidday((v) => !v)} className="text-white">
                                <CheckboxIndicator>
                                    <CheckboxIcon as={CheckIcon} />
                                </CheckboxIndicator>
                                <span className="ml-2">Samedi midi</span>
                            </Checkbox>
                            <Checkbox value="samedi" isChecked={includeSaturdayEvening} onChange={() => setIncludeSaturdayEvening((v) => !v)} className="text-white">
                                <CheckboxIndicator>
                                    <CheckboxIcon as={CheckIcon} />
                                </CheckboxIndicator>
                                <span className="ml-2">Samedi soir</span>
                            </Checkbox>
                            <Checkbox value="dimanche" isChecked={includeSunday} onChange={() => setIncludeSunday((v) => !v)} className="text-white">
                                <CheckboxIndicator>
                                    <CheckboxIcon as={CheckIcon} />
                                </CheckboxIndicator>
                                <span className="ml-2">Dimanche</span>
                            </Checkbox>
                            </div>

                            {!includeSaturdayMidday && !includeSaturdayEvening && !includeSunday && (
                            <div className="bg-white/5 p-4 rounded-xl text-sm text-[#F0F4F6]/80">
                                Cochez au moins un jour pour afficher les options de repas.
                            </div>
                            )}

                            {includeSaturdayMidday && (
                                <div className="bg-white/5 p-4 rounded-xl">
                                <label className="block mb-2 text-sm font-bold text-[#FFA400]">Samedi Midi - 9€ - Choix du bagnat</label>
                                <Select className="select-input-field bg-[#273840]" selectedValue={saturdayBagnat} onValueChange={setSaturdayBagnat}>
                                    <SelectTrigger>
                                    <SelectInput placeholder="Choisissez un bagnat" className="flex-1" />
                                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                                    </SelectTrigger>
                                    <SelectPortal>
                                    <SelectBackdrop />
                                    <SelectContent>
                                        <SelectItem label="Bagnat classique" value="classique" />
                                        <SelectItem label="Bagnat poulet" value="poulet" />
                                        <SelectItem label="Bagnat végé" value="vege" />
                                    </SelectContent>
                                    </SelectPortal>
                                </Select>
                                </div>
                            )}

                            {includeSaturdayEvening && (
                                <div className="bg-white/5 p-4 rounded-xl">
                                <div className="mb-2 text-sm font-bold text-[#FFA400]">Samedi Soir - 8€ - 2 viandes gratuites, 3ème (+2€)</div>
                                {['saucisse','merguez','saucisse végé'].map((type) => {
                                    const state = type === 'saucisse' ? saturdaySaucisse : type === 'merguez' ? saturdayMerguez : saturdayVege;
                                    const setState = type === 'saucisse' ? setSaturdaySaucisse : type === 'merguez' ? setSaturdayMerguez : setSaturdayVege;

                                    const usedChoices = {
                                    choice1: saturdaySaucisse.choice1 || saturdayMerguez.choice1 || saturdayVege.choice1,
                                    choice2: saturdaySaucisse.choice2 || saturdayMerguez.choice2 || saturdayVege.choice2,
                                    choice3: saturdaySaucisse.choice3 || saturdayMerguez.choice3 || saturdayVege.choice3,
                                    };

                                    return (
                                    <div key={type} className="mb-4">
                                        <div className="text-sm font-semibold text-[#F0F4F6] mb-2">{type.replace('vegé','végé')}</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        {['choice1','choice2','choice3'].map((choice, idx) => {
                                            const isCurrentlySelected = (state as any)[choice];
                                            const isDisabled = !isCurrentlySelected && usedChoices[choice as 'choice1' | 'choice2' | 'choice3'];
                                            return (
                                            <label key={choice} className="flex items-center gap-2 p-2 bg-[#1D2B34]/70 rounded-lg cursor-pointer">
                                                <Checkbox
                                                value={`${type}-${choice}`}
                                                isChecked={isCurrentlySelected}
                                                onChange={() => setState({ ...(state as any), [choice]: !isCurrentlySelected })}
                                                className="h-4"
                                                isDisabled={isDisabled}
                                                >
                                                <CheckboxIndicator>
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <span className={`text-white ${isDisabled ? 'opacity-50' : ''}`}>{`${type.replace('vegé','végé')} ${idx + 1}${idx === 2 ? ' (+2€)' : ''}`}</span>
                                                </Checkbox>
                                            </label>
                                            );
                                        })}
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            )}

                            {includeSunday && (
                            <div className="bg-white/5 p-4 rounded-xl">
                                <div className="mb-2 text-sm font-bold text-[#FFA400]">Dimanche Midi - 9€</div>
                                <RadioGroup
                                className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3"
                                value={sundayMain}
                                onChange={setSundayMain}
                                >
                                <Radio value="tenders" className="p-2 bg-[#1D2B34]/70 rounded-lg radio-button">
                                    <RadioIndicator>
                                        <RadioIcon as={CircleIcon} />
                                    </RadioIndicator>
                                    <RadioLabel>Tenders</RadioLabel>
                                </Radio>
                                <Radio value="nuggets-vg" className="p-2 bg-[#1D2B34]/70 rounded-lg radio-button">
                                    <RadioIndicator>
                                        <RadioIcon as={CircleIcon} />
                                    </RadioIndicator>
                                    <RadioLabel>Nuggets VG</RadioLabel>
                                </Radio>
                                </RadioGroup>
                                <label className="flex items-center gap-2 p-2 bg-[#1D2B34]/70 rounded-lg cursor-pointer">
                                <Checkbox
                                    value="camembert"
                                    isChecked={sundayCamembert}
                                    onChange={() => setSundayCamembert((v) => !v)}
                                    className="h-4"
                                >
                                    <CheckboxIndicator>
                                    <CheckboxIcon as={CheckIcon} />
                                    </CheckboxIndicator>
                                    <span className="text-white">(Option) Camembert BBQ (+3,5€)</span>
                                </Checkbox>
                                </label>
                            </div>
                            )}
                            <Button isDisabled={!isFormCorrect()} action="secondary" className="w-full py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl" onPress={async () => {
                                setIsFoodSuccess(false);
                                let invalid = false;
                                if (!pseudoInputValue) {
                                    invalid = true;
                                    setIsPseudoInvalid2(true)
                                } else {
                                    setIsPseudoInvalid2(false)
                                }
                                if (!mailInputValue || !mailInputValue?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                                    invalid = true;
                                    setIsMailInvalid(true)
                                } else {
                                    setIsMailInvalid(false)
                                }
                                if(invalid) {return}
                
                                setLoading(true);
                                const saturdayChoices = {mergez: saturdayMerguez, saucisse: saturdaySaucisse, vege: saturdayVege};
                                await addFood({ 
                                    pseudo: pseudoInputValue, 
                                    mail: mailInputValue, 
                                    food: { 
                                        saturdayMidday: saturdayBagnat, 
                                        saturdayEvening: [Object.keys(saturdayChoices).filter(key => saturdayChoices[key as 'mergez' | 'saucisse' | 'vege'].choice1).map(key => key), Object.keys(saturdayChoices).filter(key => saturdayChoices[key as 'mergez' | 'saucisse' | 'vege'].choice2).map(key => key), Object.keys(saturdayChoices).filter(key => saturdayChoices[key as 'mergez' | 'saucisse' | 'vege'].choice3).map(key => key)].flat(),
                                        sundayMidday: sundayMain ? [sundayMain, sundayCamembert ? 'camembert' : null].filter(Boolean) : undefined
                                    } 
                                });
                                setLoading(false);
                                initForms();
                                setIsFoodSuccess(true);
                            }}>Réserver</Button>
                            
                            <div className={`bg-white/5 border border-green-400 p-6 mt-4 rounded-xl ${!isFoodSuccess ? 'hidden' : ''}`}>
                                <p id="reg-summary-text" className="text-xl text-[#F0F4F6]">Inscription confirmée pour {pseudoInputValue}!</p>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div className="card-glass p-8 md:p-12 rounded-[2rem] border-l-4 border-[#FFA400] mb-12">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-[#FFA400]">
                        <span>🛍️</span> Inscription Brocante (Bientôt disponible)
                    </h2>   
                  </div>     
                    <p className="text-sm text-[#F0F4F6]/80 mb-4">Pour t'inscrire à la brocante, clique sur le bouton ci-dessous.</p>
                    <a
                        className="btn-primary inline-flex items-center justify-center w-full py-3 rounded-xl font-bold uppercase tracking-widest opacity-50 cursor-not-allowed pointer-events-none"
                    >
                        Ouvrir l'inscription brocante
                    </a>
                    <a
                        className="btn-secondary inline-flex items-center justify-center w-full py-3 mt-2 rounded-xl font-bold uppercase tracking-widest border border-[#FFA400] text-[#FFA400] hover:bg-[#FFA400]/10 opacity-50 cursor-not-allowed pointer-events-none"
                    >
                        Contrat de la brocante
                    </a>
                </div>
                
                <div className="card-glass p-8 md:p-12 rounded-[2rem] border-l-4 border-[#FFA400]">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-[#FFA400]">
                        <span>🎲</span> Inscription Aleades (Bientôt disponible)
                    </h2>   
                  </div>     
                    <p className="text-sm text-[#F0F4F6]/80 mb-4">Pour t'inscrire à une activité organisée par Aleades, c'est ici!.</p>
                    <Button
                        isDisabled={true}
                        action="secondary"
                        className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold uppercase tracking-widest"
                    >
                        Ouvrir l'inscription Aleades
                    </Button>
                </div>
            </div>
        </section>
    </main>
  </ScrollView>;
};