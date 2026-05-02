const fs = require('fs');

const af = {
  _name: "Afrikaans", _code: "za",
  sprint: "4-DAE SPRINT", title: "A+ Studiekaart",
  subtitle1: "Core 1 (220-1101): 675/900 · 90 vrae · 90 min",
  subtitle2: "Core 2 (220-1102): 700/900 · 90 vrae · 90 min",
  topicsCovered: "onderwerpe gedek",
  studyMap: "Studiekaart", ports: "Poorte", acronyms: "Akronieme",
  tapToReveal: "Tik kaart om te onthul", whatService: "Watter diens / poort?",
  whatStandFor: "Waarvoor staan dit?", prev: "← Vorige", next: "Volgende →",
  quickRef: "Vinnige Verwysing", secPlus: "Security+ Studie-instrument", resetAll: "Stel Alle Vorderings Terug",
  resetConfirm: "Stel alle vordering terug? Dit kan nie ongedaan gemaak word nie.",
  confidence: "Selfvertroue:",
  conf1: "🔴 Nog nie", conf2: "🟡 Onvas", conf3: "🟢 Solid", conf4: "💎 Gesluit",
  openLab: "Maak oop in TestOut",
  core1: "CORE 1", core2: "CORE 2",
  day1: "HARDWARE & KRAG", day1sub: "Core 1 — PSU's, Berging, Geheue, CPU's, Selflaai & Foute",
  day2: "NETWERKE & WOLK", day2sub: "Core 1 — Kabels, IP, Dienste, Wolk, Mobiel, Drukkers",
  day3: "BEDRYFSTELSELS", day3sub: "Core 2 — Windows, Linux, macOS, Gereedskap & Ondersteuning",
  day4: "SEKURITEIT & OPS", day4sub: "Core 2 — Bedreigings, Beskerming, Bedrywighede, KI & Oefeneksamens",
  day1short: "HARDWARE", day2short: "NETWERKE", day3short: "OS", day4short: "SEKURITEIT",
  /* Block titles */
  b1: "Kragtoevoer & Verkoeling", b2: "Bergingstoestelle & RAID", b3: "Geheue & CPU Argitektuur",
  b4: "BIOS/UEFI & Selflaai Foutsporing", b5: "Stelselfoute & Oorverhitting",
  b6: "Netwerkhardeware & Kabels", b7: "IP-adressering & Netwerkdienste",
  b8: "Wolk, Mobiel & Drukwerk",
  b9: "Windows OS Grondbeginsels", b10: "Windows Gereedskap & Instellings",
  b11: "OS Ondersteuning & Herstel", b12: "Linux & macOS",
  b13: "Rekeningsekuriteit & Bedreigings", b14: "Beskerming & Verdediging",
  b15: "Bedrywighede, Scripting & KI", b16: "Oefeneksamens & Eksamenstrategie",
  /* Topics */
  t1: "Kragtoevoereenhede (PSU) — vormfaktore, modulêr vs vas",
  t2: "Watt-gradering — berekening van kragvereistes",
  t3: "Kragtoevoer-verbindings — 24-pen, 8-pen CPU, PCIe, SATA, Molex",
  t4: "Waaierverkoelingstelsels — kaswaaiers, CPU-verkoelers, lugvloeirigting",
  t5: "Vloeistofverkoelingstelsels — AIO vs pasgemaakte lus, verkoelers, pompe",
  t6: "Bergingstoestelle — tipes oorsig, koppelvlakke (SATA, NVMe, M.2)",
  t7: "Solid State Drives (SSD's) — NAND-tipes, vormfaktore, slytasienivellering",
  t8: "Hardeskyf-aandrywers (HDD's) — plate, RPM, kas, soektyd",
  t9: "RAID — vlakke 0, 1, 5, 6, 10 — stroop, spieël, pariteit",
  t10: "Optiese aandrywers — CD, DVD, Blu-ray, lees/skryfspoed",
  t11: "Stelsel RAM — DDR4, DDR5, DIMM vs SO-DIMM, spoed & vertraging",
  t12: "ECC RAM — foutkorrigerende kode, bediener vs werkstasie gebruik",
  t13: "CPU Argitektuur — x86 vs ARM, kerne, drade, kasvlakke",
  t14: "CPU-sokke — Intel (LGA) vs AMD (PGA/LGA), versoenbaarheid",
  t15: "BIOS/UEFI — POST, selflaai-volgorde, Secure Boot, firmware-opdaterings",
  t16: "TPM (Trusted Platform Module) — hardeware-sekuriteit, sleutelberging",
  t17: "Foutspoor POST — piepkodes, diagnostiese LED's, geen-vertoon regstellings",
  t18: "Kragprobleme — geen krag, onderbroke afskakeling, PSU-toetsing",
  t19: "RAID-fout — gedegradeerde skikkings, herbouprosedures, warm spaarwiele",
  t20: "Oorverhitting — termiese pasta, heatsink-montering, tekens van smoor",
  t21: "Skakelaars — bestuur vs onbeheerd, VLAN's, PoE",
  t22: "UTP-kabels — Cat 5e/6/6a, T568A/B, krimp, kabeltoetsing",
  t23: "Modems — DSL, Kabel, Vesel ONT, poorttoestelle",
  t24: "IPv4-adressering — klasse, subnetting, CIDR, privaat reekse",
  t25: "IPv6-adressering — notasie, skakel-plaaslik, globale unikis, SLAAC",
  t26: "DHCP — hure, omvang, besprekings, aflosagente",
  t27: "DNS — rekords (A, AAAA, MX, CNAME, PTR), resolusieproses",
  t28: "Lêer/Drukbedieners — SMB/CIFS, NFS, gedeelde toestemmings",
  t29: "Instaanbedieners — vorentoe vs omgekeerde instaanbediener, inhoudfiltrering",
  t30: "IoT-toestelle — slim toestelle, Zigbee, Z-Wave, sekuriteitsbekommernisse",
  t31: "Hipervisors — Tipe 1 vs Tipe 2, VM-kiekies, hulpbron-toekenning",
  t32: "Wolk-eienskappe — IaaS, PaaS, SaaS, publiek/privaat/hibried",
  t33: "Mobiele Hotspots — verbinding, datalimiete, sekuriteit",
  t34: "Batteryvervanging — Li-ion veiligheid, kalibrasie, swellingrisiko's",
  t35: "Laser-drukproses — 7 stappe: Verwerking tot Skoonmaak",
  t36: "Drukkwaliteit-kwessies — spoke, strepe, smeer, papieropeenhopings",
  t37: "Windows / macOS — uitgawevergelyking, kenmerkverskille",
  t38: "Windows Lêerstelsels — NTFS, FAT32, exFAT, toestemmingsmodel",
  t39: "Beheerpaneel — applets, stelselinstellings, erfenis vs Instellings-app",
  t40: "Administratiewe Gereedskap — MMC-invoegtoepassings, Rekenaarbestuur, Dienste",
  t41: "Skyfbestuur — partisies (MBR vs GPT), volumes, formaattipes",
  t42: "Opdragprompt — dir, cd, ipconfig, sfc, chkdsk, DISM, net-opdragte",
  t43: "Gebeurteniskyker — log-tipes (Stelsel, Toepassing, Sekuriteit), filtrering",
  t44: "Taakbestuurder — prosesse, prestasie, selflaai, dienste-oortjies",
  t45: "Stelselherstel — herstelpunte, kiekie-gedrag, beperkings",
  t46: "Linux-navigasie — ls, cd, pwd, grep, chmod, sudo, pakketbestuurders",
  t47: "Time Machine (macOS) — rugsteun-konfigurasie, herstelprosedures, APFS-kiekies",
  t48: "Logiese Sekuriteit — gebruikersrekeninge, groepe, NTFS vs gedeelde toestemmings",
  t49: "Wagwoord Beste Praktyke — kompleksiteit, lengte, MFA, wagwoordbestuurders",
  t50: "Sosiale Ingenieurswese — uitvissing, vishing, tailgating, pretexting",
  t51: "Malware-vektore — e-pos, USB, ry-by-aflaai, voorsieningsketting",
  t52: "Defender Antivirus — intydse beskerming, skanderings, uitsluitings",
  t53: "BitLocker — volle-skyf-enkripsie, TPM-vereiste, herstelsleutels",
  t54: "Rugsteun — volledig, inkrementeel, differensieel, 3-2-1 reël",
  t55: "Veranderingsversoeke — dokumentasie, terugrolplanne, goedkeuringsproses",
  t56: "Shell Scripts — bondellêers, PowerShell, bash-basiese beginsels, outomatisering",
  t57: "KI-toepassingsintegrasie — medevlieëniers, prompt-ingenieurswese basiese beginsels",
  t58: "Privaat vs Publieke KI — dataprivaatheid, modelgasheer, ondernemingsbekommernisse",
  t59: "Core 1 Eksamengegewens — domeingewigte, vraagtipes, PBQ-strategie",
  t60: "Core 2 Eksamengegewens — domeingewigte, slaagsyferverskille",
  t61: "Eksamenwenke — tydsbestuur, PBQ-oorslaanstrategie, eliminasie-metode",
  t62: "Volledige tyd-oefeneksamen — simuleer toetsdagtoestande",
  /* Tips */
  tip1: "Die 7 laser-drukkerstappe word GEWAARBORG op die eksamen. Memoriseer die volgorde.",
  tip2: "Ken RAID-vlakke goed: 0 = spoed geen redundansie, 1 = spieël, 5 = pariteit (min 3), 10 = spieël + stroop.",
  tip3: "DDR-generasies meng nie — DDR4 sal nie in DDR5-gleuwe pas nie. Ken kerfposisies en spanningsverskille.",
  tip4: "1 kort piep = POST sukses, aanhoudende/herhaalde piep beteken gewoonlik geheueprobleme.",
  tip5: "Foutspoor-volgorde: muuraansluiting → kragkabel → PSU-skakelaar → PSU-toets → moederbord.",
  tip6: "T568B is die standaard vir reguit-deur. Ken beide A en B pen-uitset.",
  tip7: "Privaat IP's: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. APIPA: 169.254.x.x = DHCP-fout.",
  tip8: "Wolk-eienskappe: IaaS, PaaS, SaaS, publiek/privaat/hibried.",
  tip9: "NTFS ondersteun toestemmings, EFS-enkripsie, kompressie, groot lêers. FAT32 het 4GB lêerbeperking.",
  tip10: "sfc /scannow maak stelsellêers reg, DISM herstel die beeld, chkdsk maak skyffoute reg. Volgorde maak saak.",
  tip11: "Gebeurteniskyker vlakke: Inligting → Waarskuwing → Fout → Kritiek. Sekuriteitslogs benodig ouditering geaktiveer.",
  tip12: "Linux-toestemmings: rwx=7, rw-=6, r-x=5, r--=4. chmod 755 = eienaar vol, groep/ander lees+uitvoer.",
  tip13: "MFA-faktore: iets wat jy weet/het/is. Twee van dieselfde tipe is NIE MFA nie.",
  tip14: "BitLocker benodig TPM 1.2+. Sonder TPM het jy 'n USB-selflaaisleutel nodig.",
  tip15: "3-2-1 rugsteun: 3 kopieë, 2 media-tipes, 1 van die terrein af. Ken inkrementeel vs differensieel.",
  tip16: "Core 1 = 675/900 (≈75%). Core 2 = 700/900 (≈78%). Slaan PBQ's oor met die eerste rondte.",
  /* Guides */
  g1: "Module 3.1", g2: "Module 3.2", g3: "Module 3.3-3.4", g4: "Module 4.1", g5: "Module 4.2-4.3",
  g6: "Module 5.2-6.1", g7: "Module 6.2-6.4", g8: "Module 7.1-10.3", g9: "Module 11.3", g10: "Module 12.1-13.2",
  g11: "Module 14.3-14.4", g12: "Module 17.1-17.3", g13: "Module 15.1-19.4", g14: "Module 19.2", g15: "Module 21.1-21.3", g16: "Bylaag B-C",
  /* Time slots */
  morning: "OGEND", midday: "MIDDAG", afternoon: "NAMIDDAG", evening: "AAND", lateEvening: "LAATAAND",
  time1: "9:00 VM – 11:00 VM", time2: "11:30 VM – 1:30 NM", time3: "2:30 NM – 4:30 NM", time4: "5:00 NM – 7:00 NM", time5: "7:30 NM – 9:00 NM",
  attribution: "Studie-inhoud gestruktureer vanaf TestOut LabSim A+-kursusmateriaalmodules. CompTIA A+ is 'n handelsmerk van CompTIA.",
};

const content = fs.readFileSync('lang.js', 'utf8');
const lines = content.split('\n');

// Find the position after Arabic (ar)
let lastBraceIndex = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('ar:')) {
    // Find the closing brace of Arabic
    for (let j = i; j < lines.length; j++) {
      if (lines[j].trim() === '},') {
        lastBraceIndex = j;
        break;
      }
    }
    break;
  }
}

if (lastBraceIndex !== -1) {
  const afContent = `af:{\n` + 
    Object.entries(af).map(([k, v]) => `  ${k}:"${v.replace(/"/g, '\\"')}",`).join('\n') +
    `\n},`;
  
  lines.splice(lastBraceIndex + 1, 0, afContent);
  fs.writeFileSync('lang.js', lines.join('\n'));
  console.log('Afrikaans added successfully');
} else {
  console.error('Could not find position to insert Afrikaans');
}
