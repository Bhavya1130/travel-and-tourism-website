const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let cities = ['Adoni','Amaravati','Anantapur','Chandragiri','Chittoor','Dowlaiswaram','Eluru','Guntur','Kadapa','Kakinada','Kurnool','Machilipatnam','Nagarjunakoṇḍa','Rajahmundry','Srikakulam','Tirupati','Vijayawada','Visakhapatnam','Vizianagaram','Yemmiganur','Itanagar','Dhuburi','Dibrugarh','Dispur','Guwahati','Jorhat','Nagaon','Sivasagar','Silchar','Tezpur','Tinsukia','Ara','Barauni','Begusarai','Bettiah','Bhagalpur','Bihar Sharif','Bodh Gaya','Buxar','Chapra','Darbhanga','Dehri','Dinapur Nizamat','Gaya','Hajipur','Jamalpur','Katihar','Madhubani','Motihari','Munger','Muzaffarpur','Patna','Purnia','Pusa','Saharsa','Samastipur','Sasaram','Sitamarhi','Siwan','Chandigarh','Ambikapur','Bhilai','Bilaspur','Dhamtari','Durg','Jagdalpur','Raipur','Rajnandgaon','Daman','Diu','Silvassa','Delhi','New Delhi','Madgaon','Panaji','Ahmadabad','Amreli','Bharuch','Bhavnagar','Bhuj','Dwarka','Gandhinagar','Godhra','Jamnagar','Junagadh','Kandla','Khambhat','Kheda','Mahesana','Morbi','Nadiad','Navsari','Okha','Palanpur','Patan','Porbandar','Rajkot','Surat','Surendranagar','Valsad','Veraval','Ambala','Bhiwani', 'Faridabad','Firozpur Jhirka','Gurugram','Hansi','Hisar','Jind','Kaithal','Karnal','Kurukshetra','Panipat','Pehowa','Rewari','Rohtak','Sirsa','Sonipat','Bilaspur','Chamba','Dalhousie','Dharmshala','Hamirpur','Kangra','Kullu','Mandi','Nahan','Shimla','Una','Anantnag','Baramula','Doda','Gulmarg','Jammu','Kathua','Punch','Rajouri','Srinagar','Udhampur','Bokaro','Chaibasa','Deoghar','Dhanbad','Dumka','Giridih','Hazaribag','Jamshedpur','Jharia','Rajmahal','Ranchi','Saraikela','Badami','Ballari','Bengaluru','Belagavi','Bhadravati','Bidar','Chikkamagaluru','Chitradurga','Davangere','Halebid','Hassan','Hubballi-Dharwad','Kalaburagi','Kolar','Madikeri','Mandya','Mangaluru','Mysuru','Raichur','Shivamogga','Shravanabelagola','Shrirangapattana','Tumakuru','Vijayapura','Alappuzha','Vatakara','Idukki','Kannur','Kochi','Kollam','Kottayam','Kozhikode','Mattancheri','Palakkad','Thalassery','Thiruvananthapuram','Thrissur','Kargil','Leh','Balaghat','Barwani','Betul','Bharhut','Bhind','Bhojpur','Bhopal','Burhanpur','Chhatarpur','Chhindwara','Damoh','Datia','Dewas','Dhar','Dr. Ambedkar Nagar (Mhow)','Guna','Gwalior','Hoshangabad','Indore','Itarsi','Jabalpur','Jhabua','Khajuraho','Khandwa','Khargone','Maheshwar','Mandla','Mandsaur','Morena','Murwara','Narsimhapur','Narsinghgarh','Narwar','Neemuch','Nowgong','Orchha','Panna','Raisen','Rajgarh','Ratlam','Rewa','Sagar','Sarangpur','Satna','Sehore','Seoni','Shahdol','Shajapur','Sheopur','Shivpuri','Ujjain','Vidisha','Ahmadnagar','Akola','Amravati','Aurangabad','Bhandara','Bhusawal','Bid','Buldhana','Chandrapur','Daulatabad','Dhule','Jalgaon','Kalyan','Karli','Kolhapur','Mahabaleshwar','Malegaon','Matheran','Mumbai','Nagpur','Nanded','Nashik','Osmanabad','Pandharpur','Parbhani','Pune','Ratnagiri','Sangli','Satara','Sevagram','Solapur','Thane','Ulhasnagar','Vasai-Virar','Wardha','Yavatmal','Imphal','Cherrapunji','Shillong','Aizawl','Lunglei','Kohima','Mon','Phek','Wokha','Zunheboto','Balangir','Baleshwar','Baripada','Bhubaneshwar','Brahmapur','Cuttack','Dhenkanal','Kendujhar','Konark','Koraput','Paradip','Phulabani','Puri','Sambalpur','Udayagiri','Karaikal','Mahe','Puducherry','Yanam','Amritsar','Batala','Faridkot','Firozpur','Gurdaspur','Hoshiarpur','Jalandhar','Kapurthala','Ludhiana','Nabha','Patiala','Rupnagar','Sangrur','Abu','Ajmer','Alwar','Amer','Barmer','Beawar','Bharatpur','Bhilwara','Bikaner','Bundi','Chittaurgarh','Churu','Dhaulpur','Dungarpur','Ganganagar','Hanumangarh','Jaipur','Jaisalmer','Jalor','Jhalawar','Jhunjhunu','Jodhpur','Kishangarh','Kota','Merta','Nagaur','Nathdwara','Pali','Phalodi','Pushkar','Sawai Madhopurv','Shahpura','Sikar','Sirohi','Tonk','Udaipur','Gangtok','Gyalshing','Lachung','Mangan','Arcot','Chengalpattu','Chennai','Chidambaram','Coimbatore','Cuddalore','Dharmapuri','Dindigul','Erode','Kanchipuram','Kanniyakumari','Kodaikanal','Kumbakonam','Madurai','Mamallapuram','Nagappattinam','Nagercoil','Palayamkottai','Pudukkottai','Rajapalayam','Ramanathapuram','Salem','Thanjavur','Tiruchchirappalli','Tirunelveli','Tiruppur','Thoothukudi','Udhagamandalam','Vellore','Hyderabad','Karimnagar','Khammam','Mahbubnagar','Nizamabad','Sangareddi','Warangal','Agartala','Agra','Aligarh','Amroha','Ayodhya','Azamgarh','Bahraich','Ballia','Banda','Bara Banki','Bareilly','Basti','Bijnor','Bithur','Budaun','Bulandshahr','Deoria','Etah','Etawah','Faizabad','Farrukhabad-cum-Fatehgarh','Fatehpur','Fatehpur Sikri','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj','Kanpur','Lakhimpur','Lalitpur','Lucknow','Mainpuri','Mathura','Meerut','Mirzapur-Vindhyachal','Moradabad','Muzaffarnagar','Partapgarh','Pilibhit','Prayagraj','Rae Bareli','Rampur','Saharanpur','Sambhal','Shahjahanpur','Sitapur','Sultanpur','Tehri','Varanasi','Almora','Dehra Dun','Haridwar','Mussoorie','Nainital','Pithoragarh','Alipore','Alipur Duar','Asansol','Baharampur','Bally','Balurghat','Bankura','Baranagar','Barasat','Barrackpore','Basirhat','Bhatpara','Bishnupur','Budge Budge','Burdwan','Chandernagore','Darjeeling','Diamond Harbour','Dum Dum','Durgapur','Halisahar','Haora','Hugli','Ingraj Bazar','Jalpaiguri','Kalimpong','Kamarhati','Kanchrapara','Kharagpur','Cooch Behar','Kolkata','Krishnanagar','Malda','Midnapore','Murshidabad','Nabadwip','Palashi','Panihati','Purulia','Raiganj','Santipur','Shantiniketan','Shrirampur','Siliguri','Siuri','Tamluk','Titagarh'];

function addcity(selectedcity) {
    options.innerHTML = "";
    cities.forEach(city => {
        let isSelected = city == selectedcity ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${city}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addcity();

function updateName(selectedLi) {
    searchInp.value = "";
    addcity(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = cities.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! city not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));