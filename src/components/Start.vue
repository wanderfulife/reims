<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="enqueteur" />
			<button v-if="enqueteur" @click="next" class="btn-next">Suivant</button>
		</div>

		<div id="poste" v-if="level === 1" class="form-group">
			<h1>Poste enquêteur</h1>
			<select v-model="POSTE" class="form-control">
				<option v-for="option in postes" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="POSTE" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="level === 2">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>



		<div id="Q7-Type_vehicule" v-if="level === 3">
			<h1>Type de véhicule</h1>
			<select v-model="Type_Vehicule" class="form-control">
				<option v-for="option in types" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Type_Vehicule" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q7bis_VL" v-if="level === 4 && Type_Vehicule <= 4">
			<h1>Code Pays (immatriculation du véhicule plaque à l'avant)</h1>
			<input class="form-control" type="text" v-model="VL_Plaque" placeholder="Precisions">
			<button v-if="VL_Plaque" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<div id="Q8-VL" v-if="level === 5 && Type_Vehicule <= 4">
			<h1>Nombre d'occupants</h1>
			<select v-model="VL_Occupants" class="form-control">
				<option v-for="option in occupants" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="VL_Occupants" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q9-VL" v-if="level === 6 && Type_Vehicule <= 4">
			<h1>D’où venez vous?</h1>
			<div>
				<CommuneSelector v-model="VL_Origine" />
			</div>
			<button v-if="VL_Origine" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q10-VL" v-if="level === 7 && Type_Vehicule <= 4">
			<h1>Quel est le motif de votre déplacement à l’origine ?</h1>
			<select v-model="VL_Motif_Origine" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="VL_Motif_Origine" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q11-VL" v-if="level === 8 && Type_Vehicule <= 4">
			<h1>Quelle est votre destination ?</h1>
			<div>
				<CommuneSelector v-model="VL_Destination" />
			</div>
			<button v-if="VL_Destination" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q12-VL" v-if="level === 9 && Type_Vehicule <= 4">
			<h1>Pour quelle raison vous rendez-vous à votre destination ? (motif) </h1>
			<select v-model="VL_Motif_Destination" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="VL_Motif_Destination" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q13-VL" v-if="level === 10 && Type_Vehicule <= 4">
			<h1>À quelle fréquence effectuez-vous ce déplacement ?</h1>
			<select v-model="VL_Frequence" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="VL_Frequence" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q6_PL" v-if="level === 4 && Type_Vehicule > 4">
			<h1>Code Pays (immatriculation du véhicule plaque à l'avant)</h1>
			<input class=" form-control" type="text" v-model="PL_Plaque" placeholder="Precisions">
			<button v-if="PL_Plaque" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q7bis-PL" v-if="level === 5 && Type_Vehicule > 4">
			<h1>Type de carrosserie</h1>
			<select v-model="PL_Type" class="form-control">
				<option v-for="option in pl_type" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="PL_Type" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q8-PL" v-if="level === 6 && Type_Vehicule > 4">
			<h1>Nombre d'essieux qui touchent le sol</h1>
			<input class="form-control" type="text" v-model="Essieux" placeholder="Precisez">
			<button v-if="Essieux" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q9-PL" v-if="level === 7 && Type_Vehicule > 4">
			<h1>D’où venez vous? <br> Dernier lieu de chargement ou déchargement</h1>
			<div>
				<CommuneSelector v-model="PL_Origine" />
			</div>
			<button v-if="PL_Origine" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q11-PL" v-if="level === 8 && Type_Vehicule > 4">
			<h1>Où allez vous? <br> Prochain lieu de chargement ou déchargement</h1>
			<div>
				<CommuneSelector v-model="PL_Destination" />
			</div>
			<button v-if="PL_Destination" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="(level > 10 && Type_Vehicule <= 4) || (level > 8 && Type_Vehicule > 4)">
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">


		<button class="btn-fin" @click="downloadData">download DATA</button>


	</div>
</template>

<script setup>
import { ref } from "vue";
import { postes, types, occupants, motif, frequence, pl_type, port, motif_pl } from "./reponses";
// import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const surveyCollectionRef = collection(db, "Reims");
const level = ref(0);
const startDate = ref('');
const enqueteur = ref('');
const POSTE = ref('');
const Type_Vehicule = ref('');
const VL_Occupants = ref('');
const VL_Origine = ref('');
const VL_Motif_Origine = ref('');
const VL_Destination = ref('');
const VL_Motif_Destination = ref('');
const VL_Frequence = ref('');
const PL_Type = ref('');
const PL_Origine = ref('');
const PL_Destination = ref('');
const Essieux = ref('');
const VL_Plaque = ref('');
const PL_Plaque = ref('');





const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;

}

const back = () => {
	level.value--;
}



const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: enqueteur.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		POSTE: POSTE.value,
		Type_Vehicule: Type_Vehicule.value,
		VL_Occupants: VL_Occupants.value,
		VL_Origine: VL_Origine.value,
		VL_Motif_Origine: VL_Motif_Origine.value,
		VL_Destination: VL_Destination.value,
		VL_Motif_Destination: VL_Motif_Destination.value,
		VL_Frequence: VL_Frequence.value,
		VL_Plaque: VL_Plaque.value,
		PL_Type: PL_Type.value,
		Essieux: Essieux.value,
		PL_Origine: PL_Origine.value,
		PL_Destination: PL_Destination.value,
		PL_Plaque: PL_Plaque.value,

	});
	level.value = 2;
	startDate.value = "";
	Type_Vehicule.value = "";
	VL_Occupants.value = "";
	VL_Origine.value = "";
	VL_Motif_Origine.value = "";
	VL_Destination.value = "";
	VL_Motif_Destination.value = "";
	VL_Frequence.value = "";
	VL_Plaque.value = "";
	PL_Type.value = "";
	Essieux.value = "";
	PL_Origine.value = "";
	PL_Destination.value = "";
	PL_Plaque.value = "";

	
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			Enqueteur: "Enqueteur",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE: "HEURE",
			HEURE_FIN: "HEURE_FIN",
			POSTE: "POSTE",
			Type_Vehicule: "Type_Vehicule",
			VL_Occupants: "VL_Occupants",
			VL_Origine: "VL_Origine",
			VL_Motif_Origine: "VL_Motif_Origine",
			VL_Destination: "VL_Destination",
			VL_Motif_Destination: "VL_Motif_Destination",
			VL_Frequence: "VL_Frequence",
			VL_Plaque: "VL_Plaque",
			PL_Type: "PL_Type",
			Essieux: "Essieux",
			PL_Origine: "PL_Origine",
			PL_Destination: "PL_Destination",
			PL_Plaque: "PL_Plaque",

		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				Enqueteur: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				POSTE: docData.POSTE || "",
				Type_Vehicule: docData.Type_Vehicule || "",
				VL_Occupants: docData.VL_Occupants || "",
				VL_Origine: docData.VL_Origine || "",
				VL_Motif_Origine: docData.VL_Motif_Origine || "",
				VL_Destination: docData.VL_Destination || "",
				VL_Motif_Destination: docData.VL_Motif_Destination || "",
				VL_Frequence: docData.VL_Frequence || "",
				VL_Plaque: docData.VL_Plaque || "",
				PL_Type: docData.PL_Type || "",
				Essieux: docData.Essieux || "",
				PL_Origine: docData.PL_Origine || "",
				PL_Destination: docData.PL_Destination || "",
				PL_Plaque: docData.PL_Plaque || "",

				

			};
			data.push(mappedData);

			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});

		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});

		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));

		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "Reims.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>
<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
}

h2 {
	color: white;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
<!-- <style>
body {
	background-color: #1e1e1e;
}

.container {
	background-color: #1e1e1e;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.btn-data {
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
}

.btn-data:hover {
	background-color: #45a049;
}

h1 {
	text-align: center;
	color: #4caf50;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style> -->