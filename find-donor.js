const bdData = {
  "Dhaka": ["Dhanmondi","Mirpur","Uttara","Mohammadpur","Savar","Keraniganj","Nawabganj","Dohar"],
  "Gazipur": ["Gazipur Sadar","Kaliakair","Kaliganj","Kapasia","Sreepur"],
  "Narayanganj": ["Narayanganj Sadar","Bandar","Araihazar","Rupganj","Sonargaon"],
  "Narsingdi": ["Narsingdi Sadar","Belabo","Monohardi","Palash","Raipura","Shibpur"],
  "Chattogram": ["Pahartali","Kotwali","Sitakunda","Hathazari","Raozan","Boalkhali"],
  "Cox's Bazar": ["Cox's Bazar Sadar","Chakaria","Teknaf","Ukhiya","Maheshkhali","Ramu"],
  "Cumilla": ["Cumilla Sadar","Burichong","Chandina","Daudkandi","Laksam","Muradnagar"],
  "Noakhali": ["Noakhali Sadar","Begumganj","Chatkhil","Hatiya","Senbagh","Sonaimuri"],
  "Rajshahi": ["Rajshahi Sadar","Bagha","Bagmara","Charghat","Godagari","Tanore"],
  "Pabna": ["Pabna Sadar","Atgharia","Bera","Chatmohar","Ishwardi","Santhia"],
  "Khulna": ["Khulna Sadar","Batiaghata","Dumuria","Koyra","Paikgachha","Terokhada"],
  "Jessore": ["Jessore Sadar","Abhaynagar","Jhikargachha","Keshabpur","Manirampur"],
  "Satkhira": ["Satkhira Sadar","Kaliganj","Kalaroa","Shyamnagar","Tala"],
  "Barishal": ["Barishal Sadar","Bakerganj","Babuganj","Gaurnadi","Mehendiganj"],
  "Bhola": ["Bhola Sadar","Borhanuddin","Char Fasson","Daulatkhan","Lalmohan"],
  "Sylhet": ["Sylhet Sadar","Beanibazar","Golapganj","Kanaighat","Zakiganj"],
  "Moulvibazar": ["Moulvibazar Sadar","Barlekha","Kamalganj","Kulaura","Sreemangal"],
  "Rangpur": ["Rangpur Sadar","Gangachara","Kaunia","Mithapukur","Pirgacha"],
  "Dinajpur": ["Dinajpur Sadar","Birganj","Biral","Bochaganj","Chirirbandar"],
  "Mymensingh": ["Mymensingh Sadar","Bhaluka","Fulbaria","Gaffargaon","Trishal"],
  "Jamalpur": ["Jamalpur Sadar","Islampur","Madarganj","Sarishabari"],
  "Netrokona": ["Netrokona Sadar","Atpara","Barhatta","Kendua","Mohanganj"]
};

const districtSelect = document.getElementById("district");
const upazilaSelect = document.getElementById("upazila");

/* Load districts */
Object.keys(bdData).forEach(d => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    districtSelect.appendChild(option);
});

/* Load upazilas */
districtSelect.addEventListener("change", () => {
    upazilaSelect.innerHTML = '<option value="">Select Upazila</option>';
    bdData[districtSelect.value]?.forEach(u => {
        const option = document.createElement("option");
        option.value = u;
        option.textContent = u;
        upazilaSelect.appendChild(option);
    });
});
