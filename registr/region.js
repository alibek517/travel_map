const districts = {
    Andijon: ["Andijon shahri", "Andijon tumani", "Asaka tumani","Baliqchi tumani","Bo'z tumani","Buloqboshi tumani","Izboskan tumani","Jalolquduq tumani","Marhamat tumani","Oltinko'l tumani","Paxtaobod tumani","Qo'rg'ontepa tumani","Shahrixon tumani","Ulug'nor tumani","Xo'jaobod tumani","Xonobod shahri"],
    Buxoro: ["Buxoro shahri","Buxoro tuman", "G'ijduvon tumani", "Jondor tumani","Kogon shahri","Kogon tumani","Olot tumani","Peshku tumani","Qorako'l tumani","Qorovulbozor tumani","Romitan tumani","Shofirkon tumani","Vobkent tumani"],
    Fargʻona: ["Beshariq tumani", "Bog'dod tumani", "Buvayda tumani","Dang'ara tumani","Farg'ona shahri","Farg'ona tumani","Furqat tumani"," Marg'ilon shahri","O'zbekiston tumani","Oltiariq tumani","Qo'qon shahri","Qo'shtepa tumani","Quva tumani","Quvasoy shahri","Rishton tumani","So'x tumani","Toshloq tumani","Uchko'prik tumani","Yozyovon tumani"],
    Jizzax: ["Arnasoy tumani", "Baxmal tumani", "Do'stlik tumani","Forish tumani","G'allaorol tumani","Jizzax shahri","Jizzax tumani","Mirzacho'l tumani","Paxtakor tumani","Yangiobod tumani","Zafarobod tumanic","Zarband tumani","Zomin tumani"],
    Xorazm: ["Bog'ot tumani", "Gurlan tumani", "Qo'shko'pir tumani","Shovot tumani","Urganch shahri","Urganch tumani","Xazorasp tumani","Xiva tumani","Xonqa tumani","Yangiariq tumani","Yangibozor tumani"],
    Namangan: ["Chortoq tumani", "Chust tumani", "Kosonsoy tumani","Mingbuloq tumani","Namangan shahri","Namangan tumani","Norin tumani","Pop tumani","To'raqo'rg'on tumani","Uchqo'rg'on tumani","Uychi tumani","Yangiqo'rgon tumani"],
    Navoiy: ["Karmana tumani", "Konimex tumani", "Navbahor tumani","Navoiy shahri","Nurota tumani","Qiziltepa tumani","Tomdi tumani","Uchquduq tumani","Xatirchi tumani","Zarafshon shahri"],
    Qashqadaryo: ["Chiroqchi tumani", "Dehqonobod tumani", "G'uzor tumani","Kasbi tumani","Kitob tumani","Koson tumani","Mirishkor tumani","Muborak tumani","Nishon tumani","Qamashi tumani","Qarshi shahri","Qarshi tumani","Shahrisabz shahri","Yakkabog' tumani"],
    Qoraqalpogʻiston: ["Amudaryo tumani", "Beruniy tumani", "Chimboy tumani","Ellikqala tumani","Kegeyli tumani","Mo'ynoq tumani","Nukus shahri","Nukus tumani","Qonliko'l tumani","Qorauzaq tumani","Qung'irot tumani","Shumanay tumani","Taxiatosh shahri","Taxtako'pir tumani","To'rtko'l tumani","Xo'jayli tumani"],
    Samarqand: ["Bulung'ur tumani", "Ishtixon tumani", "Jomboy tumani","Kattaqo'rg'on shahri","Kattaqo'rg'on tumani","Narpay tumani","Nurobod tumani","Oqdaryo tumani","Past darg'om tumani","Paxtachi tumani","Poyariq tumani","Qo'shrabot tumani","Samarqand shahri","Samarqand tumani","Toyloq tumani","Urgut tumani"],
    Sirdaryo: ["Boyovut tumani", "Guliston shahri", "Guliston tumani","Oqoltin tumani","Sardoba tumani","Sayxunobod tumani","Shirin shahri","Sirdaryo tumani","Xovos tumani","Yangiyer shahri"],
    Surxondaryo: ["Angor tumani", "Bandixon tumani", "Boysun tumani","Denov tumani","Jarqo'rg'on tumani","Muzrobot tumani","Oltinsoy tumani","Qiziriq tumani","Qumqo'rg'on tumani","Sariosiyo tumani","Sherobod tumani","Sho'rchi tumani","Termiz shahri","Termiz tumani","Uzun tumani"],
    Toshkentsh: ["Bektemir tumani", "Chilonzor tumani", "Mirobod tumani","Mirzo Ulug'bek tumani","Olmazor tumani","Sergeli tumani","Shayhontohur tumani","Uchtepa tumani","Yakkasaroy tumani","Yashnaobod tumani","Yunusobod tumani"],
    Toshkent: ["Angren shahri", "Bekobod shahri", "Bekobod tumani", "Bo'ka tumani", "Bo'stonliq tumani", "Chinoz tumani", "Chirchiq shahri", "O'rta chirchiq tumani", "Ohangaron tumani", "Olmaliq shahri", "Oqqo'rg'on tumani", "Parkent tumani", "Piskent tumani", "Qibray tumani", "Quyi chirchiq tumani","Yangiyo'l tumani", "Yuqori chirchiq tumani", "Zangiota tumani"]
};

function changeDistricts() {
    const regionSelect = document.getElementById("region");
    const districtSelect = document.getElementById("district");
    const selectedRegion = regionSelect.value;

    districtSelect.innerHTML = "<option value=''>Tumanlar</option>";

    if (selectedRegion) {
        const selectedDistricts = districts[selectedRegion];

        selectedDistricts.forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

