const postes = [
	{
		id: 1,
		output: "21",
		text: "21 - Giratoire D966 x D30 - BRIMONT",
	},
	{
		id: 2,
		output: "22",
		text: "22 - Nord croisement D74/D31 - BOULT-SUR-SUIPPE",
	},
	{
		id: 3,
		output: "23",
		text: "23 - Entrée Est de Bétheniville - BETHENIVILLE",
	},
	{
		id: 4,
		output: "24",
		text: "24 - Sortie Nord-Ouest de Saint-Hilaire-le-Grand - SAINT-HILAIRE-LE-GRAND",
	},
	{
		id: 5,
		output: "25",
		text: "25 - Giratoire D944 x D19 - LIVRY-LOUVERCY",
	},
	{
		id: 6,
		output: "26",
		text: "26 - Giratoire D951 x D71 - ST IMOGES",
	},
	{
		id: 7,
		output: "27",
		text: "23 - Au Sud de la D2 - ANTHENAY",
	},
];

const frequence = [
	{ id: 1, output: "1", text: "tous les jours ou presque" },
	{ id: 2, output: "2", text: "1 ou plusieurs fois par semaine" },
	{ id: 3, output: "3", text: "3 a 4 fois par mois" },
	{ id: 4, output: "4", text: "Plus rarement" },
];

const port = [
	{ id: 1, output: "1", text: "Oui" },
	{ id: 2, output: "2", text: "Non" },
];

const pl_type = [
	{ id: 1, output: "1", text: "conteneur" },
	{ id: 2, output: "2", text: "messagerie" },
	{ id: 3, output: "3", text: "citerne" },
	{ id: 4, output: "4", text: "frigorifique" },
	{ id: 5, output: "5", text: "benne basculante" },
	{ id: 6, output: "6", text: "plateau" },
	{ id: 7, output: "7", text: "bâché (ou savoyarde)" },
	{ id: 9, output: "99", text: "autres" },
];

const types = [
	{ id: 1, output: 1, text: "VL" },
	{ id: 2, output: 2, text: "VL + caravane ou remorque" },
	{ id: 3, output: 3, text: "Camping-Car" },
	{
		id: 4,
		output: 4,
		text: "Fourgonnettes et utilitaires transportant du matériel (artisan…)",
	},
	{
		id: 5,
		output: 5,
		text: "Fourgonnettes et utilitaires transportant de la marchandise",
	},
	{ id: 6, output: 6, text: "PL porteur" },
	{ id: 7, output: 7, text: "PL articulé, semi-remorque" },
	{ id: 8, output: 8, text: "PL train routier (porteur + remorque)" },
];

const occupants = [
	{ id: 1, output: "1", text: "1" },
	{ id: 2, output: "2", text: "2" },
	{ id: 3, output: "3", text: "3" },
	{ id: 4, output: "4", text: "4" },
	{ id: 5, output: "5", text: "5" },
	{ id: 6, output: "6", text: "6" },
	{ id: 7, output: "7", text: "7" },
	{ id: 8, output: "8", text: "8" },
	{ id: 9, output: "9", text: "9" },
];

const motif = [
	{ id: 1, output: "0", text: "domicile" },
	{ id: 2, output: "1", text: "travail" },
	{ id: 3, output: "2", text: "affaires professionnelles" },
	{ id: 4, output: "3", text: "études" },
	{ id: 5, output: "4", text: "achats" },
	{ id: 6, output: "5", text: "soins, démarches admin" },
	{ id: 7, output: "6", text: "loisirs" },
	{ id: 8, output: "7", text: "visites" },
	{ id: 9, output: "8", text: "vacances, week-end, tourisme" },
	{ id: 10, output: "9", text: "rabattement sur transport en commun" },
	{ id: 11, output: "10", text: "accompagnement + domicile" },
	{ id: 12, output: "11", text: "accompagnement + travail" },
	{ id: 13, output: "12", text: "accompagnement + affaires professionnelles" },
	{ id: 14, output: "13", text: "accompagnement + études" },
	{ id: 15, output: "14", text: "accompagnement + achats" },
	{ id: 16, output: "15", text: "accompagnement + soins, démarches admin" },
	{ id: 17, output: "16", text: "accompagnement + loisirs" },
	{ id: 18, output: "17", text: "accompagnement + visites" },
	{
		id: 19,
		output: "18",
		text: "accompagnement + vacances, week-end, tourisme",
	},
	{
		id: 20,
		output: "19",
		text: "accompagnement + rabattement sur transport en commun",
	},
	{ id: 21, output: "99", text: "autre" },
];

const motif_pl = [
	{ id: 1, output: "0", text: "domicile" },
	{ id: 2, output: "1", text: "chargement" },
	{ id: 3, output: "2", text: "déchargement" },
	{ id: 4, output: "3", text: "mixte chargement et déchargement" },
	{ id: 5, output: "4", text: "prise / retour véhicule" },
	{ id: 6, output: "5", text: "dédouanement" },
	{ id: 7, output: "99", text: "autre" },
];

export { postes, types, occupants, motif, frequence, pl_type, port, motif_pl };
