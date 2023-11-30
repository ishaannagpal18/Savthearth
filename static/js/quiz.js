
  let student_class = document.getElementById("p").innerHTML;
  let test_attempted = document.getElementById("p1").innerHTML;
  let student_score = document.getElementById("p2").innerHTML;


  console.log(student_class);
  var data= (student_class == "First")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Second")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Third")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Fourth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Fifth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Sixth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Seventh")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Eigth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Ninth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Tenth")?alert("You Have Opted For Class "+student_class)
  :(student_class == "Eleventh")?alert("You Have Opted For Class "+student_class)
  :alert("You Have Opted For Class "+student_class)



  const quiz_Data = (student_class=="Fourth") ?
[
      {
          question: "Forests are called as the 'lungs of nature' why?",
          a: "Bring down the carbon dioxide level in the atmosphere",
          b: "Bring down the oxygen level in the atmosphere",
          c: "Maintain the balance of oxygen and carbon dioxide in the atmosphere",
          d: "Increase the level of carbon dioxide in the atmosphere ",
          correct: "c"
      },
      {
          question : "What is Sewage?",
          a: " Mining waste",
          b: "Factory waste",
          c: "Domestic waste",
          d: "All of the above",
          correct: "c"
      },
      {
          question : "Which one of the following is a biotic component of the environment?",
          a: "Water",
          b: "Air",
          c: "Land",
          d: "Plant",
          correct: "d"
      },
      {
          question : "Non-biodegradable waste is one of the major cause of land pollution. Which one of the following is a better option to get rid of non- biodegradable waste?",
          a: "Burning",
          b: "Burying",
          c: "Recycling",
          d: "Dumping",
          correct: "c"
      },
      {
          question : "Under which one of the following groups, pills of vegetable should be kept?",
          a: "Biodegradable",
          b: "Non-biodegradable",
          c: "Hazardous",
          d: "Toxic",
          correct: "a"
      },
      {
          question: "We, human beings, depend on our ____ for all our needs",
          a: "Atmosphere",
          b: "Environment",
          c: "Lithosphere",
          d: "Hydrosphere ",
          correct: "b"
      },
      {
          question : "The process of gradual increase in the earth's temperature is called_______.",
          a: "Pollution",
          b: "Greenhouse effect",
          c: "Global warming",
          d: "Acid rain",
          correct: "c"
      },
      {
          question : "Acid rain causes damage to___________.",
          a: "Animals life",
          b: "Plants life",
          c: "Historical monuments",
          d: " All of these",
          correct: "c"
      },
      {
          question : "Contamination unwanted substances into water is called _____.",
          a: "Air pollution",
          b: "Water pollution",
          c: "Land pollution",
          d: "Soil pollution",
          correct: "b"
      },
      {
          question : "Harmful changes made in the environment due to human activities are called ________.",
          a: "Pollutants",
          b: "Moisture",
          c: "Pollution",
          d: "Diseases",
          correct: "c"
      },
      {
          question: "Which among the following is a type of pollution?",
          a: "Water pollution",
          b: "Air pollution",
          c: "Plant pollution",
          d: "Land pollution",
          correct: "b"
      },
      {
          question : "Gaseous discharge from industries causes:",
          a: "Water pollution",
          b: "Factory waste",
          c: "Domestic waste",
          d: "All of the above",
          correct: "c"
      },
      {
          question : "How many types of pollution are there mainly?",
          a: "Two",
          b: "Three",
          c: "Six",
          d: "Four",
          correct: "d"
      },
      {
          question : "A disease which is caused due to air pollution is:",
          a: "Asthma",
          b: "Lung infection",
          c: "Typhoid",
          d: "Both [a] and [b]",
          correct: "d"
      },
      {
          question : "Which one among the following is a water borne disease?",
          a: "Typhoid",
          b: "Cholera",
          c: "Diarrhoea",
          d: "All the above",
          correct: "d"
      },
      {
          question: "Which statement among the following is not correct?",
          a: "Dumping plastics in the soil causes soil pollution.",
          b: "Loudspeakers, vehicles causes noise pollution.",
          c: "Burning of garbage leads to air pollution.",
          d: "Bathing animals in rivers makes water clean.",
          correct: "d"
      },
      {
          question : "Exposure to loud noise over a long period of time can cause:",
          a: " Dumbness",
          b: "Deafness",
          c: "Humbleness",
          d: "Paleness",
          correct: "b"
      },
      {
          question : "Air pollution can be caused by:",
          a: "Releasing of chemical waste into lakes.",
          b: "Washing clothes in rivers.",
          c: "Releasing of poisnous gases from industries.",
          d: "Agricultural waste.",
          correct: "c"
      },
      {
          question : "Mixing of harmful substances with ____ is called land pollution.",
          a: "Air",
          b: "Water",
          c: "Soil",
          d: "Noise",
          correct: "c"
      },
      {
          question : "Which one of the following is used in agriculture to grow crops?",
          a: "Fertilizers",
          b: "Manures",
          c: "Pesticides",
          d: "All the above",
          correct: "d"
      },
      {
          question: "Which among the following can cause both air pollution and water pollution?",
          a: "Burning of garbage",
          b: "Industrial waste",
          c: "Harmful gases",
          d: "All the above",
          correct: "b"
      },
      {
          question : "In which month of the year Van Mahotsav is celebrated?",
          a: "August",
          b: "September",
          c: "July",
          d: "February",
          correct: "c"
      },
      {
          question : "______day is celebrated on 5 June.",
          a: "Republic",
          b: "Independence",
          c: "Environment",
          d: "Teachers",
          correct: "c"
      },
      {
          question : " ____ is made from wood pulp.",
          a: "Paper",
          b: "Vehicle",
          c: "Glass",
          d: "Plastic",
          correct: "a"
      },
      {
          question : "Planting of trees in large numbers is called:",
          a: "Deforestation",
          b: "Soil erosion",
          c: "Afforestation",
          d: "Timber",
          correct: "c"
      },
      {
          question: "Plants do not help in:",
          a: "Holding the soil.",
          b: "Polluting the environment.",
          c: "Releasing oxygen.",
          d: "Making rain.",
          correct: "b"
      },
      {
          question : "Unscramble the name of a tree which gives us a sour fruit?",
          a: "ETDA",
          b: "ITLICH",
          c: "NLMEO",
          d: "EAKT",
          correct: "c"
      },
      {
          question : "The removal of the fertile topsoil is called:",
          a: "Deforestation",
          b: "Soil erosion",
          c: "Afforestation",
          d: "Soil conservation",
          correct: "b"
      },
      {
          question : "The rise in sea level is the cause of:",
          a: "Global warming",
          b: "Thunderstorm",
          c: "Lightning",
          d: "Acid rain",
          correct: "a"
      },
      {
          question : "The following is a biodegradable waste?",
          a: "Vegetable peel",
          b: "Fruit peel",
          c: "Things made of wood",
          d: "All the above",
          correct: "d"
      },
      {
          question: "Disposal of waste has to be managed well to ____ pollution.",
          a: "Cause",
          b: "Prevent",
          c: "Increase",
          d: "Spread",
          correct: "b"
      },
      {
          question : "Afforestation is done for:",
          a: "Increasing the number of houses.",
          b: "Soil conservation",
          c: "Soil erosion",
          d: "Polluting the environment.",
          correct: "b"
      },
      {
          question : " Which among the following is a non-bio-degradable waste?",
          a: "Plastic",
          b: "Glass",
          c: "Metal",
          d: "All the above",
          correct: "d"
      },
      {
          question : " Which among the following statements is correct?",
          a: "We should use plastic bags more and more.",
          b: "We should allow stagnated water to stand.",
          c: "We should dispose of dry waste and wet waste separately.",
          d: "We should use petrol at the place of CNG.",
          correct: "c"
      },
      {
          question : " Microorganisms growing in polluted water can cause:",
          a: "Flu",
          b: "Typhoid",
          c: "Asthma",
          d: "Bronchitis",
          correct: "b"
      },
      {
          question: " Harmful substances which pollute air, water and land are called ____.",
          a: "Impurity",
          b: "Pollutants",
          c: "Microorganisms",
          d: "Pollution",
          correct: "b"
      },
      {
          question : " Landfill is a ____.",
          a: "Landscape",
          b: "Aquatic habitat",
          c: "Dumping place",
          d: "Tourist place",
          correct: "c"
      },
      {
          question : " We can manage non-biodegradable waste by:",
          a: "Burying",
          b: "Recycling",
          c: "Burning",
          d: "Dumping",
          correct: "b"
      },
      {
          question : " Which among the following is a biotic component of the environment?",
          a: "Air",
          b: "Water",
          c: "Soil",
          d: "None of these",
          correct: "d"
      },
      {
          question : " Which of the following is not a product obtained from plants?",
          a: "Rubber",
          b: "Cotton",
          c: "Petrol",
          d: "Medicine",
          correct: "c"
      },
      {
          question: " Which among the following is not a source of air pollution?",
          a: "Vehicles",
          b: "Industries",
          c: "Loudspeakers",
          d: "Burning of garbage",
          correct: "c"
      },
      {
          question : " Animal dung is a:",
          a: "Toxin",
          b: "Non-biodegradable waste",
          c: "Biodegradable waste",
          d: "Pollution",
          correct: "c"
      },
      {
          question : " Fishes are killed by ____ present in water.",
          a: "Nitrogen",
          b: "Oxygen",
          c: "Chemical",
          d: "Hydrogen",
          correct: "c"
      },
      {
          question : " Ultraviolet rays of sun are absorbed by this layer of atmosphere:",
          a: "Thermosphere",
          b: "Troposphere",
          c: "Ionosphere",
          d: "Dumping",
          correct: "c"
      },
      {
          question : "Using the same thing by cleaning is called",
          a: "Reduce",
          b: "Remove",
          c: "Recycle",
          d: "Reusing",
          correct: "d"
      },
      {
question: " What is the name of the typhoon that recently hit Philippines?",
a: "Frank",
b: "Kammuri",
c: "Angela",
d: "Haiyan",

correct: "b"
},


{
question: " Which of the following is the only ape found in India?",
a: "Gorilla",
b: "Chimpanzee",
c: "Hoolock Gibbon",
d: "Mandrill",

correct: "c"
},

{
question: " Which of the following statements is true about Biochemical Oxygen Demand?",
a: "It shows the amount of oxygen required to oxidize the organic wate into inorganic material",
b: "It shows the amount of oxygen required to remove both degradable and non degradable waste in the water",
c: "It shows the amount of oxygen required to decompose the organic waste in the water",
d: "None of the above is true",

correct: "c"
},

{
question: " In which of the following layers ozone is naturally formed?",
a: "Troposphere",
b: "Stratosphere",
c: "Mesosphere",
d: "Ionosphere",

correct: "c"
},

{
question: " Which of the following coined the term ëecologyí?",
a: "Tansley",
b: "Ernst Haeckel",
c: "Grinnell",
d: "Darwin",

correct: "b"
},

{
question: " Acacias and Euphorbias are very prominent in which of the following type of forests?",
a: "Tropical Thorn forests",
b: "Tropical Dry evergreen forest",
c: "Sub tropical Broad-leaved forests",
d: "Sub tropical Pine forests",

correct: "a"
},

{
question: " National Wetlands Conservation Programme (NWCP) was implemented in which of the following year?",
a: "1980-81",
b: "1975-76",
c: "1985-86",
d: "1989-90",

correct: "c"
},


{
question: " How many categories are there in IUCN Red List?",
a: "7",
b: "8",
c: "9",
d: "10",

correct: "c"
},

{
question:  " Department of Environment was established in India in which of the following years?",
a: "1980",
b: "1982",
c: "1984",
d: "1986",

correct: "a"
},


{
question: " In which of the following years the Air (Prevention and Control of Pollution) Act of 1981 was extended to include noise pollution also?",
a: "1983",
b: "1985",
c: "1987",
d: "None of the above",

correct: "c"
},


{
question: " Central Zoo Authority was established in which of the following years?",
a: "1991",
b: "1992",
c: "1993",
d: "1994",

correct: "b"
},

{
question: " Indian Network on Climate Change Assessment was launched in which of the following years?",
a: "2008",
b: "2009",
c: "2010",
d: "2011",

correct: "b"
},

{
question: " What are Shola forests?",
a: "Evergreen forests",
b: "Moist Deciduous forests",
c: "Dry Deciduous forests",
d: "Hill forests",

correct: "d"
},

{
question: " Which district of Bihar has maximum forest cover?",
a: "Saran",
b: "Gaya",
c: "West Champaran",
d: "Darbhanga",

correct: "c"
},

{
question: " In which year, Sanjay Gandhi Jaivik Udyan was opened?",
a: "1978",
b: "1960",
c: "1985",
d: "1973",

correct: "d"
},

{
question: " Which biological park/sanctuary has ìHouse of snakesî as its main attraction?",
a: "Sanjay Gandhi Biological Park",
b: "Buxar Bird Sanctuary",
c: "Bhim Dam Sanctuary",
d: "Gogabil Bird Sanctuary",

correct: "a"
},

{
question:  " Ozone depletion is caused due to increase in the level of",
a:"Water vapour",
b: "Oxygen",
c: "Chlorofluorocarbon",
d:"Carbon monoxide",
correct: "c"
},

{
question: " What type of chemical weathering is enhanced by acid rain?",
a: "Hydrolysis",
b: "Dissolution",
c: "Oxidation",
d: "None of the above",
correct: "a"
},

{
question:  " What process causes the disintegration of rock at or near the earthís surface?",
a: "Physical weathering",
b: "Chemical weathering",
c: "Erosion",
d: "None of the above",
correct: "a"
},

{
question: " Which of the following gas affects human health by reducing the bloodís ability to carry oxygen to different parts of the body?",
a: "Carbon monoxide",
b: "Carbon dioxide",
c: "Sulphur dioxide",
d: "Nitrous dioxide",
correct: "a"
},

{
question:  " Nitrogen oxide affects human health by__________",
a: "Causing irritation to the eyes and skin",
b: "Aggravating asthma problem",
c: "Decreasing bloodís ability to transport oxygen",
d: "None of the above",
correct: "b"
},

{
question: " The air pollutants are mainly classified as____________",
a:"Point source and non-point source",
b: "Primary and secondary pollutants",
c: "Natural or anthropogenic pollutants",
d:"None of the above",
correct: "b"
},

{
question: " The best way to dispose plant waste is___________",
a:"Burning",
b: "Composting",
c: "Dumping in a hilly area",
d:"Incineration",
correct: "b"
},

{
question:  " Which of the following is not one of the major environment problems resulting from human interference in the nitrogen cycle?",
a:"Global warming due to release of nitrous oxide ",
b: "Acid rain",
c: "Eutrophication",
d:"Ozone depletion",
correct: "d"
},

{
question:  " Which of the following is not a major greenhouse gas_________",
a:"Carbon dioxide",
c: "Methane",
b: "Water vapour",
d:"Calcium carbonate",
correct: "d"
},

{
question:  " Montreal Protocol signed in 1987 was signed to_______",
a:"Phase out the use of CFCís which cause depletion of the ozone layer",
b: "Reduces the greenhouse effect",
c: "Protect endangered species",
d:"Ban nuclear testing in tropical oceans",
correct: "a"
},

{
question:  " Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
a: "Increased skin cancer",
b: "Reduced immune system",
c: "Increased liver cancer",
d: "Damage to eyes",
correct: "a"
},

{
question:  " Unburnt carbon particles causes__________",
a: "Cardiac problem",
b: "Respiratory problems",
c: "Throat problems",
d: "Skin infection",
correct: "b"
},

{
question: " Which of the following units is used to measure the intensity of noise?",
a: "Decibel",
b: "Phon",
c: "Hz",
d: "Watts/m",
correct: "a"
},

{
question: " Human ear is most sensitive to noise in which of the following frequency range?",
a: "1-2 kHz",
c: "10-12 kHz",
b: "100-500 Hz",
d: "13-16 kHz",
correct: "d"
},

{
question: " Which of the following pairs regarding typical composition of hospitals wastes is incorrect answer?",
a: "Plastics: 9-12%",
b: "Metals: 1-2%",
c: "Ceramic: 8-10%",
d: "Biodegradable: 35-40%",
correct: "d"
},

{
question: " Maximum soot is released from_________",
a: "Petrol vehicles",
b: "Diesel Vehicles",
c: "CNG vehicles",
d: "Thermal power plants",
correct: "d"
},

{
question:  " Surface ozone is produced from___________",
a: "Transport sector",
b: "Textile industry",
c: "Carbon monoxide",
d: "None of the above",
correct: "a"
},

{
question:  " In the metro city of Kolkata, the major cause of air pollution is____________",
a: "Cement plants",
b: "Chemical industry",
c: "Hydrocarbons",
d: "Water vapours",
correct: "a"
},

{
question:  " Which of the following is the main discharge from coal based power plants (thermal plants)?",
a: "SPM",
b: "Smog",
c: "Fly ash",
d: "None of the above",
correct: "c"
},

{
question:  " The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
a: "Nitrates",
b: "Fluorides",
c: "Sulphates",
d: "Oxides",
correct: "a"
},

{
question:  " Which of the following metal is responsible for Minamata disease?",
a: "Mercury",
b: "Chromium",
c: "Cadmium",
d: "Iron",
correct: "a"
},

{
question:  " Intake of lead may primarily cause damage of the________",
a: "Brain",
b: "Liver",
c: "Lung",
d: "Kidney",
correct: "a"
},

{
question:  " Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},

{
question:" Industries generating hazardous waste are classified as___________",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red",
correct: "d"
},

{
question: " Which of the following greenhouse gases are entirely anthropogenic in origin?",
a: "Water vapour",
b: "CFCs",
c: "Carbon dioxide",
d: "Methane",
correct: "b"
},

{
question: " Peroxyacyl nitrate (PAN) is a by-product of____________",
a: "Photochemical smog",
b: "Sulphurous smog",
c: "London smog",
d: "None of the above",
correct: "a"
},

{
question: " The balance in oxygen level is maintained by________",
a: "Photosynthesis and cellular respiration",
b: "Industrial emissions of gases",
c: "Release of ozone in upper atmosphere",
d: "None of the above",
correct: "a"
},

{
question: " Which of the following methods can be used to increase the supply of usable, good quality water?",
a: "Chlorination",
b: "Cloud seeding",
c: "Metallurgy",
d: "None of these",
correct: "b"
},

{
question: " According to WHO, the maximum permissible level of chlorides in drinking water is___________",
a: "100 mg/1",
b: "600 mg/1",
c: "200 mg/l",
d: "800 mg/1",
correct: "c"
},

{
question: " The main difference between primary air pollutants and secondary air pollutants is",
a: "Former contains water molecules, while secondary pollutants do not.",
b: "Primary air pollutants have more direct effect on human health.",
c: "Former are released directly into the atmosphere, while the latter are formed by chemical reactions in the atmosphere.",
d: "Primary air pollutants are formed through photochemical reactions in the sunlight, while the secondary air pollutants are not.",
correct: "c"
},
{
question: " Which of the following can be considered as the best example of primary air pollutants?",
a: "Carbon dioxide released from burning of coal.",
b: "Sulphur trioxide.",
c: "Ozone produced in photochemical smog.",
d: "Carbon dioxide released through photosynthesis.",
correct: "d"
},
{
question: " Which of the following best illustrates a secondary air pollutant?",
a: "CO2, released from the burning of coal",
b: "NO2, released from the burning of oil.",
c: "Ozone produced in photochemical smog.",
d: "None of the above",
correct: "c"
},
{
question: " The common features between NO2, SO2, CO2 and SPM is that all of them___________",
a: "Chlorination",
b: "Cloud seeding",
c: "Metallurgy",
d: "None of these",
correct: "b"
},
{
question: " Which of the following methods can be used to increase the supply of usable, good quality water?",
a: "Are classified as primary pollutants.",
b: "Are classified as secondary pollutants",
c: "Have equal role in causing acid rain.",
d: "Are greenhouse gases.",
correct: "a"
},
{
question: " How are nitrogen oxides, sulphur oxides and carbon Oxides related?",
a: "All of them are secondary air pollutants that contribute to global warming.",
b: "All of them are primary air pollutants that contribute to acid deposition.",
c: "All are air pollutants formed by combustion of fossil fuels.",
d: "All of them are air pollutants that result in respiratory diseases in humans.",
correct: "b"
},
{
question: " Atmospheric pollutants are mainly present in _____",
a: "Ionosphere",
b: "Stratosphere",
c: "Mesosphere",
d: "Troposphere and lower stratosphere",
correct: "d"
},
{
question: " Carbon dioxide and methane are similar in terms of __________",
a: "Both being secondary air pollutants.",
b: "Being responsible for respiratory diseases.",
c: "Contribution to global warming.",
d: "None of the above",
correct: "c"
},
{
question: " What is the main source of pollutants of nitrogen Oxides, sulphur oxides and carbon oxides?",
a: "Photochemical reactions in the atmosphere.",
b: "Burning fossil fuels at high temperatures.",
c: "Industrial processes",
d: "All the above",
correct: "b"
},
{
question: " Why is photochemical smog typically worse in the summer?",
a: "There is more solar energy to drive photochemical reactions.",
b: "People tend to travel more in summers.",
c: "Warm temperatures prevent the dissipation of pollutants.",
d: "None of the above",
correct: "a"
},
{
question: " Which of the following methods can be used to increase the supply of usable, good quality water?",
a: "Chlorination",
b: "Cloud seeding",
c: "Metallurgy",
d: "None of these",
correct: "b"
},
{
question: " How does photochemical smog form?",
a: "The release of primary air pollutants.",
b: "Interaction occurs between chemicals such as CFCs and ozone.",
c: "Reactions occur between secondary air pollutants and sunlight.",
d: "The release of formaldehyde and radon inside buildings.",
correct: "c"
},
{
question: " Which of the following can help in reducing air pollution?",
a: "Small-sized cars",
b: "Removal of sulphur from coal",
c: "Lower ignition fuels",
d: "None of the above",
correct: "b"
},
{
question: " Air pollution is an increasing problem in developing Countries due to ________",
a: "Burning of more coal to produce electricity.",
b: "Changing lifestyles.",
c: "Unavailability of environment-friendly technologies.",
d: "All the above",
correct: "d"
},
{
question: " Quality of resource not degraded due to pollution is__________",
a: "Sun",
b: "Water",
c: "Sand",
d: "Air",
correct: "a"
},
{
question: " The main source of water pollution is _______",
a: "Sewage water",
b: "Industrial pollutants",
c: "Acid rain",
d: "None of the above",
correct: "a"
},
{
question: " Which of the following ultimately causes oxygen depletion in water bodies?",
a: "Fish",
b: "Human beings",
c: "Microorganisms",
d: "None of the above",
correct: "c"
},
{
question: " Which of the following is a water-borne disease?",
a: "Blue baby syndrome",
b: "Typhoid",
c: "Meningitis",
d: "Cholera",
correct: "d"
},
{
question: " Which one of the following is NOT a greenhouse gas found naturally in the atmosphere?",
a: "Nitrogen oxide",
b: "Carbon dioxide",
c: "Methane",
d: "Ozone",
correct: "a"
},
{
question: " Baval trees should be planted and used to prevent and control",
a: "Water pollution",
b: "Air pollution",
c: "Soil pollution",
d: "Noise pollution",
correct: "b"
},
{
question: " The protocol which decided to completely phase out CFC is",
a: "Cartagena protocol",
b: "Stockholm Convention",
c: "Montreal protocol",
d: "Kyoto protocol",
correct: "c"
},
{
question: " Which one of the following is not a gaseous biogeochemical cycle",
a: "Nitrogen cycle",
b: "Carbon cycle",
c: "Sulphur cycle",
d: "Phosphorus cycle",
correct: "d"
},
{
question: " Deserts, grasslands, forests and tundra regions are the examples of",
a: "Biomes",
b: "Biogeographically regions",
c: "Ecosystems",
d: "Biospheres",
correct: "c"
},
{
question: " The upright pyramid of numbers is absent in",
a: "Lake",
b: "Pond",
c: "Grasslands",
d: "Forests",
correct: "d"
},
{
question: " The final stable community in ecological succession is",
a: "Climax",
b: "Pioneer",
c: "Sere",
d: "Carnivores",
correct: "a"
},
{
question: " Mass of living matter at a trophic level in an area at any given time is called",
a: "Standing state",
b: "Standing crop",
c: "Humus",
d: "Detritus",
correct: "b"
},
{
question: " Hydrarch succession takes place in",
a: "Dry areas",
b: "Bare area",
c: "Wetter areas",
d: "None of the above",
correct: "c"
},
{
question: " A herbivore is also known as a",
a: "Producer",
b: "First order consumer",
c: "Second order consumer",
d: "Third order consumer",
correct: "d"
},
{
question: " In an ecotone, the species which become abundant are called:",
a: "Edge species",
b: "Keystone species",
c: "Endemic species",
d: "Foster species",
correct: "a"
},
{
question: " The objective of Environment studies is",
a: "Raise consciousness about environment conditions",
b: "To teach environmentally appropriate behaviour",
c: "Create an environmental ethic sensitive society",
d: "All of the above",
correct: "d"
},
{
question: " Which of the following is not influenced by human activities?",
a: "Destruction of mangroves and wetlands",
b: "Depletion of ground water",
c: "Increased extinction rate of species",
d: "None of the above",
correct: "d"
},
{
question: " Atmosphere consists of 79 percent Nitrogen and 21 percent Oxygen by",
a: "Volume",
b: "Weight",
c: "Density",
d: "All of these",
correct: "b"
},
{
question: " The word ‘Environment’ is derived from",
a: "Greek",
b: "French",
c: "Spanish",
d: "English",
correct: "b"
},
{
question: " Which among the following is a climatic factor?",
a: "pressure",
b: "humidity",
c: "temperature",
d:  "all of the above",
correct: "d"
},
{
question: " World environment day is on:",
a: "5th May",
b: "5th June",
c: "18th July",
d: "16th August",
correct: "b"
},
{
question: " Which of the following are major environmental issues involved in mining?",
a: "air pollution",
b: "water pollution",
c: "soil degradation",
d: "all of the above",
correct: "d"
},
{
question: " Sustainable development means",
a: "meeting present needs without compromising on future needs",
b: "progress of human beings",
c: "balance between human needs and the ability of earth to provide the resources",
d: "all of the above",
correct: "c"
},
{
question: " The most important remedy to avoid negative impact due to industrialisation is",
a: "industry should be closed",
b: "don’t allow new industrial units",
c: "industry should treat all the wastes generated by it before disposal",
d: "industries should be shifted far away from human habitats",
correct: "c"
},
{
question: " Sustainable development will not aim at",
a: "Social economic development which optimizes the economic and social benefits available in the present, without spoiling the likely potential for similar benefits in the future",
b: " Reasonable and equally distributed level of economic well being that can be perpetuated continually",
c: " Development that meets the needs of the present without compromising the needs of future generations to meet their own needs",
d: "None of these",
correct: "c"
},
{
question: " Which of the following is management option for air pollution?",
a: "Regulations and standards",
b: "Transport planning",
c: "Using CNG as fuel",
d: "All of these",
correct: "d"
},
{
question: " Development activities on the hydrosphere cause",
a: "Air pollution",
b: "Soil pollution",
c: "Water pollution",
d: "Soil erosion",
correct: "d"
},
{
question: " The species restricted to be present in one region are called",
a: "Edge species",
b: "Endemic species",
c: "Endangered species",
d: "Keystone species",
correct: "b"
},
{
question: " The basic requirements of human beings are provided by",
a: "Industrialisation",
b: "Agriculture",
c: "Nature",
d: "Urbanisation",
correct: "c"
},
{
question: " Environment is the life support system that includes",
a: "Air",
b: "Water",
c: "Land",
d: "All of the above",
correct: "d"
},
{
question: " The term ‘Environment’ has been derived from the French word which means to encircle or surround",
a: "Environ",
b: "Oikos",
c: "Geo",
d: "Aqua",
correct: "a"
},
{
question: " Biosphere is",
a: "The solid shell of inorganic materials on the surface of the earth",
b: "The thin shell of organic matter on the surface of the earth comprising of all the living things",
c: "The sphere which occupies the maximum volume of all the spheres",
d: "All the above",
correct: "b"
}




]: (student_class=="Fifth") ?
[
  {
      question: " Which of the following greenhouse gases are entirely anthropogenic in origin?",
      a: "Water vapour",
      b: "CFCs",
      c: "Carbon dioxide",
      d: "Methane",
      correct: "b"
  },
  {
      question : " Peroxyacyl nitrate (PAN) is a by-product of____________",
      a: "Photochemical smog",
      b: "Sulphurous smog",
      c: "London smog",
      d: "None of the above",
      correct: "a"
  },
  {
      question : " The balance in oxygen level is maintained by________",
      a: "Photosynthesis and cellular respiration",
      b: "Industrial emissions of gases",
      c: "Release of ozone in upper atmosphere",
      d: "None of the above",
      correct: "a"
  },
  {
      question : " Which of the following methods can be used to increase the supply of usable, good quality water?",
      a: "Chlorination",
      b: "Cloud seeding",
      c: "Metallurgy",
      d: "None of these",
      correct: "b"
  },
  {
      question : " According to WHO, the maximum permissible level of chlorides in drinking water is___________",
      a: "100 mg/1",
      b: "600 mg/1",
      c: "200 mg/l",
      d: "800 mg/l",
      correct: "c"
  },
  {
      question: " The main difference between primary air pollutants and secondary air pollutants is",
      a: "Former contains water molecules, while secondary pollutants do not.",
      b: "Primary air pollutants have more direct effect on human health.",
      c: "Former are released directly into the atmosphere, while the latter are formed by chemical reactions in the atmosphere.",
      d: "Primary air pollutants are formed through photochemical reactions in the sunlight, while the secondary air pollutants are not. ",
      correct: "c"
  },
  {
      question : " Which of the following can be considered as the best example of primary air pollutants?",
      a: "Carbon dioxide released from burning of coal.",
      b: "Sulphur trioxide.",
      c: "Ozone produced in photochemical smog.",
      d: "Carbon dioxide released through photosynthesis.",
      correct: "d"
  },
  {
      question : " Which of the following best illustrates a secondary air pollutant?",
      a: "CO2, released from the burning of coal",
      b: "NO2, released from the burning of oil.",
      c: "Ozone produced in photochemical smog.",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " The common features between NO2, SO2, CO2 and SPM is that all of them___________",
      a: "Are classified as primary pollutants.",
      b: "Are classified as secondary pollutants.",
      c: "Have equal role in causing acid rain.",
      d: "Are greenhouse gases.",
      correct: "a"
  },
  {
      question : " How are nitrogen oxides, sulphur oxides and carbon Oxides related?",
      a: "All of them are secondary air pollutants that contribute to global warming.",
      b: "All of them are primary air pollutants that contribute to acid deposition.",
      c: "All are air pollutants formed by combustion of fossil fuels.",
      d: "All of them are air pollutants that result in respiratory diseases in human",
      correct: "b"
  },
  {
      question: " Atmospheric pollutants are mainly present in_____",
      a: "Ionosphere",
      b: "Stratosphere",
      c: "Mesosphere",
      d: "Troposphere and lower stratosphere",
      correct: "d"
  },
  {
      question : " Carbon dioxide and methane are similar in terms of__________",
      a: "Both being secondary air pollutants.",
      b: "Being responsible for respiratory diseases.",
      c: "Contribution to global warming.",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " What is the main source of pollutants of nitrogen Oxides, sulphur oxides and carbon oxides?",
      a: "Photochemical reactions in the atmosphere.",
      b: "Burning fossil fuels at high temperatures.",
      c: "Industrial processes",
      d: "All the above",
      correct: "b"
  },
  {
      question : " Why is photochemical smog typically worse in the summer?",
      a: "There is more solar energy to drive photochemical reactions.",
      b: "People tend to travel more in summers.",
      c: "Warm temperatures prevent the dissipation of pollutants.",
      d: " None of the above",
      correct: "a"
  },
  {
      question : " How does photochemical smog form?",
      a: "The release of primary air pollutants.",
      b: "Interaction occurs between chemicals such as CFCs and ozone.",
      c: "Reactions occur between secondary air pollutants and sunlight.",
      d: "The release of formaldehyde and radon inside buildings.",
      correct: "c"
  },
  {
      question: " Which of the following can help in reducing air pollution?",
      a: "Small-sized cars",
      b: "Removal of sulphur from coal",
      c: "Lower ignition fuels",
      d: "None of the above",
      correct: "b"
  },
  {
      question : " Air pollution is an increasing problem in developing Countries due to________",
      a: " Burning of more coal to produce electricity.",
      b: "Changing lifestyles.",
      c: "Unavailability of environment-friendly technologies.",
      d: "All the above",
      correct: "d"
  },
  {
      question : " The main source of water pollution is_______",
      a: "Sewage water",
      b: "Industrial pollutants",
      c: "Acid rain",
      d: "None of the above",
      correct: "a"
  },
  {
      question : " Which of the following ultimately causes oxygen depletion in water bodies?",
      a: "Fish",
      b: "Human beings",
      c: "Microorganisms",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " Which of the following is a water-borne disease?",
      a: "Blue baby syndrome",
      b: "Typhoid",
      c: "Meningitis",
      d: "Cholera",
      correct: "d"
  },
  {
      question: " Which one of the following is NOT a greenhouse gas found naturally in the atmosphere?",
      a: "Nitrogen oxide",
      b: "Carbon dioxide",
      c: "Methane",
      d: "Ozone",
      correct: "a"
  },
  {
      question : " Baval trees should be planted and used to prevent and control",
      a: "Water pollution",
      b: "Air pollution",
      c: "Soil pollution",
      d: "Noise pollution",
      correct: "b"
  },
  {
      question : " The protocol which decided to completely phase out CFC is",
      a: "Cartagena protocol",
      b: "Stockholm Convention",
      c: "Montreal protocol",
      d: "Kyoto protocol",
      correct: "c"
  },
  {
      question : " Select the correct answer from the following codes",
      a: "Only 3",
      b: "Only 1 and 2",
      c: "Only 2 and 3",
      d: "1, 2 and 3",
      correct: "a"
  },
  {
      question : " Which one of the following is not a gaseous biogeochemical cycle",
      a: "Nitrogen cycle",
      b: "Carbon cycle",
      c: "Sulphur cycle",
      d: "Phosphorus cycle",
      correct: "d"
  },

  {
      question : " Deserts, grasslands, forests and tundra regions are the examples of",
      a: "Biomes",
      b: "Biogeographically regions",
      c: "Ecosystems",
      d: "Biospheres",
      correct: "c"
  },
  {
      question : " The upright pyramid of numbers is absent in",
      a: "Lake",
      b: "Pond",
      c: "Grasslands",
      d: "Forests",
      correct: "d"
  },
  {
      question : " Mass of living matter at a trophic level in an area at any given time is called",
      a: "Standing state",
      b: "Standing crop",
      c: "Humus",
      d: "Detritus",
      correct: "b"
  },
  {
      question : " Hydrarch succession takes place in",
      a: "Dry areas",
      b: "Bare areal",
      c: "Wetter areas",
      d: "None of the above",
      correct: "c"
  },
  {
      question: " A herbivore is also known as a",
      a: "Producer",
      b: "First order consumer",
      c: "Second order consumer.",
      d: "Third order consumer",
      correct: "b"
  },
  {
      question : " In an ecotone, the species which become abundant are called:",
      a: "Edge species",
      b: "Keystone species",
      c: "Endemic species",
      d: "Foster species",
      correct: "a"
  },
  {
      question : " The objective of Environment studies is",
      a: "Raise consciousness about environment conditions",
      b: "To teach environmentally appropriate behaviour",
      c: "Create an environmental ethic sensitive society",
      d: "All the above",
      correct: "d"
  },
  {
      question : " Which of the following is not influenced by human activities?",
      a: "Destruction of mangroves and wetlands",
      b: "Depletion of ground water",
      c: "Increased extinction rate of species",
      d: "None of the above",
      correct: "d"
  },
  {
      question : "Atmosphere consists of 79 percent Nitrogen and 21 percent Oxygen by",
      a: "Volume",
      b: "Weight",
      c: "Density",
      d: "All of these",
      correct: "b"
  },
  {
      question: " The word ‘Environment’ is derived from",
      a: "Greek",
      b: "French",
      c: "Spanish",
      d: "English",
      correct: "b"
  },
  {
      question : " Which among the following is a climatic factor?",
      a: "pressure",
      b: "humidity",
      c: "temperature",
      d: "all of the above",
      correct: "d"
  },
  {
      question : " World environment day is on:",
      a: "5th May",
      b: "5th June",
      c: "18th July",
      d: "16th August",
      correct: "b"
  },
  {
      question : " Which of the following are major environmental issues involved in mining?",
      a: "air pollution",
      b: "water pollution",
      c: "soil degradation",
      d: "All of the above",
      correct: "d"
  },
  {
      question : " Sustainable development means",
      a: "meeting present needs without compromising on future needs",
      b: "progress of human beings",
      c: "balance between human needs and the ability of earth to provide the resources",
      d: "all of the above",
      correct: "c"
  },
  {
      question: " The most important remedy to avoid negative impact due to industrialisation is",
      a: "industry should be closed",
      b: "don’t allow new industrial units",
      c: "industry should treat all the wastes generated by it before disposal",
      d: "industries should be shifted far away from human habitats",
      correct: "c"
  },
  {
      question : " Sustainable development will not aim at",
      a: " Social economic development which optimizes the economic and social benefits available in the present, without spoiling the likely potential for similar benefits in the future",
      b: "Reasonable and equally distributed level of economic well being that can be perpetuated continually",
      c: "Development that meets the needs of the present without compromising the needs of future generations to meet their own needs",
      d: "Maximising the present day benefits through increased resource consumption",
      correct: "c"
  },
  {
      question : " Which of the following is management option for air pollution?",
      a: "Regulations and standards",
      b: "Transport planning",
      c: "Using CNG as fuel",
      d: "All of these",
      correct: "d"
  },
  {
      question : " Development activities on the hydrosphere cause",
      a: "Air pollution",
      b: "Soil pollution",
      c: "Water pollution",
      d: "Soil erosion",
      correct: "d"
  },
  {
      question : " The species restricted to be present in one region are called",
      a: "Edge species",
      b: "Endemic species",
      c: "Endangered species",
      d: "Keystone species",
      correct: "b"
  },
  {
      question : " The basic requirements of human beings are provided by",
      a: "Industrialisation",
      b: "Agriculture",
      c: "Nature",
      d: "Urbanisation",
      correct: "c"
  },
  {
          question : " To reduce plastic waste we should",
          a: " Burn it",
          b: " Minimize its use",
          c: " Bury in the earth",
          d: " Dump it in sea ",
          correct: "b"
      },
{
          question : " A person who separates articles into various categories and sell for recycling",
          a: " Kabadiwala",
          b: " House-cleaner",
          c: " Factory worker",
          d: " Vegetable seller",
          correct: "a"
      },
{
         question : " The network of drainage pipe to carry waste water is called",
          a: " Sewer system ",
          b: " Drainage",
          c: " Water supply system",
          d: " Waste water supply",
          correct: "a"
      },
{
          question : " Solid parts of sewage can be used as",
          a: " Insecticides",
          b: " Fertilizers",
          c: " Pesticides ",
          d: " Manure",
          correct: "d"
      },
{
         question : " Sewer system is useful in",
          a: " Rainy season only ",
          b: " All seasons",
          c: " Winter season only",
          d: " Summer season only",
          correct: "b"
      },
{
          question : " Which one is a good habit",
          a: " Using plastic bag",
          b: " Using scooter for short distance",
          c: " Throwing garbage into drain ",
          d: " Carrying a cloth bag for vegetable",
          correct: "d"
      },
{
          question : " Which one is the most common cause of contamination of water in rural area?",
          a: " Addition of manure in field near water bodies",
          b: " Soil present around the water bodies",
          c: " Defection in or around water bodies",
          d: " Presence of aquatic organisms",
          correct: "c"
      },
{
          question : " River water is unfit for drinking because it has",
          a: " Aquatic organism",
          b: " Suspended impurities and pollutants ",
          c: " More salts than required",
          d: " All of these",
          correct: "b"
      },
{
          question : " The area where garbage is collected and decomposed is called",
          a: " All of these ",
          b: " Landfills",
          c: " Dustbin",
          d: " Compost",
          correct: "b"
      },
{
          question : " Burning of dried leaves and other parts of plant causes",
          a: " Air pollution",
          b: " Soil pollution",
          c: " Water pollution",
          d: " Lots of heat is generated",
          correct: "a"
      },
{
          question : " Garbage must be segregated into ______________ before composting",
          a: " Solid and liquid",
          b: " Biodegradable and non-biodegradable ",
          c: " Natural and artificial",
          d: " Red and green",
          correct: "b"
      },
{
         question : " Drainage system failure in a cities may cause",
          a: " Epidemic",
          b: " Water logging on street",
          c: " Shortage of water",
          d: " Hygienic condition",
          correct: "b"
      },
{
          question : " Every year thousands of rainforests and peat lands are being destroyed to make way for new palm oil plantation in this region which is destroying homes of tigers. To check forest destruction, Greenpeace had started a movement known as 'Protect Paradise'. In which region this movement had been started?",
          a: " Malaysia ",
          b: " Indonesia ",
          c: "India",
          d: "Maldives",
          correct: "b"
      },
{
          question : " This organisation works for animal rights. It is based in Virginia, USA and works to prevent cruelty towards animals, promotes vegetarianism and campaigns against using animal products in clothing. Which organisation is this?",
          a: " People for the Ethical Treatment of Animals ",
          b: " Principles for the Ethical Treatment of Animals ",
          c: " People for Ethical Treatment of Animals Right ",
          d: " None of these ",
          correct: "a"
      },
{
          question : " 'X' is a vent in Earth's surface that periodically ejects a column of hot water and steam. The formation of it is a rare phenomenon because it is due to particular hydrogeological conditions which exists at few places on Earth. Taupo volcanic zone in New Zealand is one of its examples. Identify 'X'",
          a: " Geyser ",
          b: " Aquifer ",
          c: " Uluru ",
          d: " Spring ",
          correct: "a"
      },
{
          question : " Select the option which on reshuffling will give the term used for the planting of trees to convert a barren land into a green area",
          a: " EDAFIORTEOSNT ",
          b: " GEENRDEADN ",
          c: " OCENVIASNRTO ",
          d: " SAAFTIFEOOTRN ",
          correct: "d"
      },
{
          question : " Which of the following statements is incorrect?",
          a: " Photochemical smog always contains ozone ",
          b: " Forests are called green lungs because they maintain the balance of oxygen and carbon dioxide in the atmosphere ",
          c: " Lead is the most hazardous metal pollutant of automobile exhaust ",
          d: " None of these ",
          correct: "d"
      },
{
          question : " Ecosystem refers to",
          a: " A group of plants, animals and other living things that live in the same surroundings together with the environment ",
          b: " The home of an animal or plant along with water, oxygen, soil or sand and rocks ",
          c: " The species of animals living in an environment ",
          d: " The species of plants living in an environment ",
          correct: "a"
      },
{
          question : " Air pollution on the roads can be reduced by_______.",
          a: " Discouraging the use of CNG in vehicles ",
          b: " Planting trees on roadsides ",
          c: " Reducing the number of vehicles on the road ",
          d: " Both B and C ",
          correct: "d"
      },
{
          question : " Blackfriars bridge, a part of Blackfriars Station is the largest solar bridge in the world. It has been fitted with 4,400 photovoltaic panels, which are expected to reduce the station's CO, emission by an estimated 511 tonnes per year. Over which river is this bridge built?",
          a: " Yangtze ",
          b: " Mississippi ",
          c: " Nile ",
          d: " Thames ",
          correct: "d"
      },
{
          question : " A disease which is caused due to air pollution is",
          a: "Asthma",
          b: "Lung infection",
          c: "Typhoid",
          d: "Both [a] and [b]",
          correct: "d"
      },

{
          question : " Which among the following is the biggest single structure made by living organisms?",
          a: " Uluru ",
          b: " Great Barrier Reef ",
          c: " Patagonian Ice fields ",
          d: " Bora bora ",
          correct: "b"
      },
{
          question : " Carbon monoxide is a poisonous gas which when inhaled in too much quantity causes headache, nausea, vomiting and even death. The toxicity of carbon monoxide is due to",
          a: " Its greater affinity for haemoglobin as compared to carbon dioxide ",
          b: " Its lower affinity for haemoglobin as compared to carbon dioxide ",
          c: " Its greater affinity for haemoglobin as compared to oxygen ",
          d: " Its greater affinity for oxygen as compared to haemoglobin ",
          correct: "c"
      },
{
          question : " Which of the following is the latest addition to World Heritage sites list by UNESCO?",
          a: " Khangchendzonga National Park, Sikkim ",
          b: " Capital Complex, Chandigarh ",
          c: " Nalanda Mahavihara, Bihar ",
          d: " All of these ",
          correct: "d"
      },
{
          question : " The increase in Earth's average surface temperature due to the effect of greenhouse gases such as CO2, and emissions from fossil fuel is known as global warming. What could be the effect of global warming?",
          a: " There will be melting of polar ice caps ",
          b: " There will be an increase in crop production ",
          c: " There will be a rise in sea level ",
          d: " Both A and C ",
          correct: "d"
      },
{
          question : " Which of the following movements fights against the taking over of fertile land for testing of missiles in a thickly populated village in Odisha?",
          a: " Chipko Movement ",
          b: " Baliapal Movement ",
          c: " Bishnoi Movement ",
          d: " Appiko Movement ",
          correct: "b"
      },
{
         question : " World Water Day focuses on water conservation and critical water issues. On which date it is celebrated?",
          a: "11 December ",
          b: "22 April ",
          c: "22 March ",
          d: "21 November ",
          correct: "c"
      },

{
          question : " Which of the following might happen if plants stop releasing oxygen into the atmosphere?",
          a: " The plants will be healthier ",
          b: " The number of plants will increase ",
          c: " There will be rich biodiversity ",
          d: " The number of animals will decrease ",
          correct: "d"
      },
{
          question : " Toyota sponsored a campaign which was hosted by NDTV to save environment. The main goal of this campaign was to spread awareness among people in India to sustain the greenery of Mother Nature. Name the campaign",
          a: " Green Nature ",
          b: " Greenathon ",
          c: " Green Nation ",
          d: " Clean India Green India ",
          correct: "b"
      },
{
          question : " Vulture, hyena and eagle are examples of______.",
          a: " Producers ",
          b: " Herbivores ",
          c: " Decomposers ",
          d: " Scavengers ",
          correct: "d"
      },
{
          question : " What percent of the Earth's water is found in the atmosphere?",
          a: "0.001",
          b: "0.001",
          c: "0.02",
          d: "0.2",
          correct: "a"
      },
{
          question : " Navdanya is a movement for Earth Democracy based on the philosophy of 'Vasudhaiva Kutumbakam' which means that the earth is one family. Who is the founder of this movement?",
          a: " Anil Agarwal ",
          b: " Vandana Shiva ",
          c: " Mike Pandey ",
          d: " Shekhar Kapur ",
          correct: "b"
      },
{
          question : " Which of the following is not a feature of the Eutrophic lakes?",
          a: " They are generally occupied by blooms ",
          b: " They have high plant nutrient flux ",
          c: " They have low primary productivity ",
          d: " They are dominated by blue green algae ",
          correct: "c"
      },
{
         question : " The Maenam Wildlife Sanctuary (MWS) is located in which state?",
          a: " Sikkim ",
          b: " Chhattisgarh ",
          c: " Kerala ",
          d: " Nagaland ",
          correct: "a"
      },
{
          question : " The Ratapani Tiger Reserve (RTS) is located in which state?",
          a: " Madhya Pradesh ",
          b: " Sikkim ",
          c: " Rajasthan ",
          d: " Karnataka ",
          correct: "a"
      },
{
         question : " The Madhav National Park (MNP) is located in which district of Madhya Pradesh?",
          a: " Shivpuri district ",
          b: " Hoshangabad district ",
          c: " Sheopur district ",
          d: " Balaghat district ",
          correct: "a"
      },
{
          question : " Red Data Book is published by ___-?",
          a: " United Nations Environment Programme ",
          b: " World Wildlife Fund ",
          c: " World Environment Facility ",
          d: " International Union For The Conservation Of Nature And Natural Resources ",
          correct: "d"
      },
{
          question : " In which year Ecological Task Forces (ETFs) scheme was initiated?",
          a: "1980",
          b: "1982",
          c: "1983",
          d: "1985",
          correct: "b"
      },
{
          question : " “Bengal Desi” is a Hybrid variety of which of the following crops?",
          a: "Jute",
          b: "Cotton",
          c: "Sesame",
          d: "Gram",
          correct: "b"
      },


{
	 question : " Argon is the third most common gas in the Earth’s atmosphere, at 0.93%. This gas is generated due to decay of which among the following isotopes in the Earth’s crust?",
          a: " K-40",
          b: " Ca-40",
          c: " Ca-48",
          d: " K-41",
          correct: "a"
      },
{
	  question : " Which among the following is the major objective of the Compensatory Afforestation Fund?",
          a: " To provide for imposing cess for conversion of forest land to non-forest land ",
          b: " To provide for establishing a fund for forestation on barren land ",
          c: " To utilize the amounts realised in lieu of forest land diverted for non-forest purpose",
          d: " All of the above purposes ",
          correct: "c"
      },
{
	question : " Which of the following pollutants is the major reason behind adverse effect on the white marbles of Taj Mahal?",
          a: " Black carbon ",
          b: " Nitrogen oxides ",
          c: " Brown carbon ",
          d: " Sulphur dioxide",
          correct: "c"
      },



{
         question : " As per recent survey, which of the following pollutants has been highly responsible for the pollution of groundwater in the Indo-Gangetic Basin?",
          a: " Arsenic ",
          b: " DDT ",
          c: " Detergents ",
          d: " Landfills ",
          correct: "a"
      },
{
         question : " In a photochemical smog, which gas causes irritation to mucous membrane and respiratory system?",
          a: " Jammu & Kashmir ",
          b: " Gujarat ",
          c: " Kerala",
          d: " Manipur ",
          correct: "d"
      },
{
          question : " In which of the following states of India you are most likely to come across the endangered Sangai deer in its natural habitat?",
          a: "Asthma",
          b: "Lung infection",
          c: "Typhoid",
          d: "Both [a] and [b]",
          correct: "d"
      },


{
          question : " Which of the following islands has been tagged as the remotest and the most polluted island in the world after researchers recorded the highest density of plastic waste on the island than anywhere else in the world?",
          a: " Henderson Island ",
          b: " Falkland Island ",
          c: " Majuli Island ",
          d: " Sumatra Island ",
          correct: "a"
      },

{
         question : " What is the name of the typhoon that recently hit Philippines?",
          a: " Frank ",
          b: " Kammuri ",
          c: " Angela ",
          d: " Haiyan ",
          correct: "b"
      },
{
          question : " Which of the following is the only ape found in India?",
          a: " Gorilla ",
          b: " Chimpanzee ",
          c: " Hoolock Gibbon ",
          d: " Mandrill ",
          correct: "c"
      },
{
         question : " Which of the following statements is true about Biochemical Oxygen Demand?",
          a: " It shows the amount of oxygen required to oxidize the organic wate into inorganic material ",
          b: " It shows the amount of oxygen required to remove both degradable and non degradable waste in the water ",
          c: " It shows the amount of oxygen required to decompose the organic waste in the water ",
          d: " None of the above is true ",
          correct: "c"
      },
{
          question : " In which of the following layers ozone is naturally formed?",
          a: " Troposphere ",
          b: " Stratosphere ",
          c: " Mesosphere ",
          d: " Ionosphere ",
          correct: "b"
      },

{
         question : " Which of the following coined the term ‘ecology’?",
          a: " Tansley ",
          b: " Ernst Haeckel ",
          c: " Grinnell ",
          d: " Darwin ",
          correct: "b"
      },

{
         question : " Acacias and Euphorbias are very prominent in which of the following type of forests?",
          a: " Tropical Thorn forests ",
          b: " Tropical Dry evergreen forest ",
          c: " Sub tropical Broad-leaved forests ",
          d: " Sub tropical Pine forests ",
          correct: "a"
      },

{
         question : " National Wetlands Conservation Programme (NWCP) was implemented in which of the following year?",
          a: "1980-81",
          b: "1975-76",
          c: "1985-86",
          d: "1989-90",
          correct: "c"
      },


{
         question : " How many categories are there in IUCN Red List?",
          a: "7",
          b: "8",
          c: "9",
          d: "10",
          correct: "c"
      },
{
          question : " Department of Environment was established in India in which of the following years?",
          a: "1880",
          b: "1882",
          c: "1884",
          d: "1886",
          correct: "a"
      },
{
          question : " In which of the following years the Air (Prevention and Control of Pollution) Act of 1981 was extended to include noise pollution also",
          a: "1983",
          b: "1985",
          c: "1987",
          d: "None of the above",
          correct: "c"
      },
{
         question : " Central Zoo Authority was established in which of the following years?",
          a: "1991",
          b: "1992",
          c: "1993",
          d: "1994",
          correct: "b"
      },

{
         question : " Indian Network on Climate Change Assessment was launched in which of the following years?",
          a: "2008",
          b: "2009",
          c: "2010",
          d: "2011",
          correct: "b"
      },

{
         question : " What are Shola forests?",
          a: " Evergreen forests ",
          b: " Moist Deciduous forests ",
          c: " Dry Deciduous forests ",
          d: " Hill forests ",
          correct: "d"
      },
{
          question : " Which district of Bihar has maximum forest cover?",
          a: " Saran ",
          b: " Gaya ",
          c: " West Champaran ",
          d: " Darbhanga ",
          correct: "c"
      },
{
          question : " In which year, Sanjay Gandhi Jaivik Udyan was opened?",
          a: "1978",
          b: "1960",
          c: "1985",
          d: "1973",
          correct: "d"
      },
{
          question : " Which biological park/sanctuary has “House of snakes” as its main attraction?",
          a: " Sanjay Gandhi Biological Park ",
          b: " Buxar Bird Sanctuary ",
          c: " Bhim Dam Sanctuary ",
          d: " Gogabil Bird Sanctuary ",
          correct: "a"
      },
{
         question : " Ozone depletion is caused due to increase in the level of",
          a: " Water vapour ",
          b: " Oxygen ",
          c: " Chlorofluorocarbon ",
          d: " Carbon monoxide ",
          correct: "c"
      },
{
          question : " What type of chemical weathering is enhanced by acid rain?",
          a: " Hydrolysis ",
          b: " Dissolution ",
          c: " Oxidation ",
          d: " None of the above ",
          correct: "a"
      },
{
          question : " What process causes the disintegration of rock at or near the earth’s surface?",
          a: " Physical weathering ",
          b: " Chemical weathering ",
          c: " Erosion ",
          d: " None of the above ",
          correct: "a"
      },
{
         question : " Which of the following gas affects human health by reducing the blood’s ability to carry oxygen to different parts of the body?",
          a: " Carbon monoxide ",
          b: " Carbon dioxide ",
          c: " Sulphur dioxide ",
          d: " Nitrous dioxide ",
          correct: "a"
      },
{
         question : " Nitrogen oxide affects human health by__________",
          a: " Point source and non-point source ",
          b: " Aggravating asthma problem ",
          c: " Decreasing blood’s ability to transport oxygen ",
          d: " None of the above ",
          correct: "b"
      },
{
         question : " The air pollutants are mainly classified as____________",
          a: " Point source and non-point source ",
          b: " Point source and non-point source ",
          c: " Natural or anthropogenic pollutants ",
          d: " None of the above None of the above e ",
          correct: " "
      },
{
         question : " The best way to dispose plant waste is___________",
          a: " Burning ",
          b: " Composting ",
          c: " Dumping in a hilly area ",
          d: " Incineration ",
          correct: "b"
      },
{
          question : " Which of the following is not one of the major environment problems resulting from human interference in the nitrogen cycle?",
          a: " Global warming due to release of nitrous oxide  ",
          b: " Acid rain ",
          c: " Eutrophication ",
          d: " Ozone depletion ",
          correct: "d"
      },
{
         question : " Which of the following is not a major greenhouse gas_________",
          a: " Carbon dioxide ",
          b: " Methane ",
          c: " Water vapour ",
          d: " Calcium carbonate ",
          correct: "d"
      },
{
          question : " Montreal Protocol signed in 1987 was signed to_______",
          a: " Phase out the use of CFC’s which cause depletion of the ozone layer ",
          b: " Reduces the greenhouse effect ",
          c: " Protect endangered species ",
          d: " Ban nuclear testing in tropical oceans ",
          correct: "a"
      },
{
          question : " Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
          a: " Increased skin cancer ",
          b: " Reduced immune system ",
          c: " Increased liver cancer ",
          d: " Damage to eyes ",
          correct: "c"
      },
{
          question : " Unburnt carbon particles causes_________",
          a: " Cardiac problem ",
          b: " Respiratory problems ",
          c: " Throat problems ",
          d: " Skin infection ",
          correct: "b"
      },

{
         question : " Which of the following units is used to measure the intensity of noise?",
          a: " Decibel ",
          b: " Phon ",
          c: "Hz",
          d: " Watts/m",
          correct: "a"
      },
{
         question : " Human ear is most sensitive to noise in which of the following frequency range?",
          a: "1-2 kHz ",
          b: "10-12 kHz ",
          c: "100-500 Hz ",
          d: "13-16 kHz ",
          correct: "d"
      },
{
         question : " Which of the following pairs regarding typical composition of hospitals wastes is incorrect?",
          a: " Plastics: 9-12%",
          b: " Metals: 1-2%",
          c: " Ceramic: 8-10%",
          d: " Biodegradable: 35-40%",
          correct: "d"
      },
{
         question : " Maximum soot is released from_________",
          a: " Petrol vehicles ",
          b: " Diesel Vehicles ",
          c: " CNG vehicles ",
          d: " Thermal power plants ",
          correct: "d"
      },
{
         question : " Surface ozone is produced from___________",
          a: " Transport sector ",
          b: " Textile industry ",
          c: " Carbon monoxide ",
          d: " None of the above ",
          correct: "a"
      },
{
         question : " In the metro city of Kolkata, the major cause of air pollution is____________",
          a: " Cement plants ",
          b: " Chemical industry ",
          c: " Hydrocarbons ",
          d: " Water vapours ",
          correct: "a"
      },
{
         question : " Which of the following is the main discharge from coal based power plants (thermal plants)?",
          a: "SPM",
          b: " Smog ",
          c: " Fly ash ",
          d: " None of the above ",
          correct: "c"
      },
{
         question : " The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
          a: " Nitrates ",
          b: " Fluorides ",
          c: " Sulphates ",
          d: " Oxides ",
          correct: "a"
      },
{
         question : " Which of the following metal is responsible for Minamata disease?",
          a: " Mercury ",
          b: " Chromium ",
          c: " Cadmium ",
          d: " Iron ",
          correct: "a"
      },
{
          question : " Intake of lead may primarily cause damage of the_______",
          a: " Brain ",
          b: " Liver ",
          c: " Lung ",
          d: " Kidney ",
          correct: "a"
      },
{
          question : " Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
          a: " China",
          b: " North America ",
          c: " Russia ",
          d: " European Union ",
          correct: "b"
      },
{
         question : " Industries generating hazardous waste are classified as___________",
          a: " Brown ",
          b: " Yellow ",
          c: " Green ",
          d: " Red ",
          correct: "d"
      },
{
         question : " Which of the following greenhouse gases are entirely anthropogenic in origin?",
          a: " Water vapour ",
          b: " CFCs ",
          c: " Carbon dioxide ",
          d: " Methane ",
          correct: "b"
      },
{
          question : " Peroxyacyl nitrate (PAN) is a by-product of__________",
          a: " Photochemical smog ",
          b: " Sulphurous smog ",
          c: " London smog ",
          d: " None of the above ",
          correct: "a"
      },
{
question:" All forms of water that comes down on Earth, including rain, snow, hail etc: is known as",

a: "Calcification",
b: "Fixation",
c: "Precipitation",
d: "Accumulation",
correct :"c"
},

{
question:" The ocean covers		percentage of Earth’s surface",
a: "51.5%",
b: "61%",
c: "71%",
d: "91%",
correct :"C"
},

{
question:" The portion of the earth and its environment which can support life is known as",

a:"Crust",
b: "Biosphere",
c: "Exosphere",
d:"Atmosphere",
correct :"b"
},

{
question:" What is troposphere?",

a: "Portion of air",
b: "Portion of water",
c: "Lowest layer of atmosphere where we survive	",
d:"Portion of sky",
correct :"c"
},

{
question:" The main energy source for the environment is",

a:"Solar energy",
b: "Chemical energy",
c: "Bioelectric energy",
d:"Electrical energy",
correct :"a"
},

{
question:" What is UNCED?",
a:"United Nations Conference on Education",
b: "United Nations Conference on Environmental Day ",
c: "United Nations Conference on Environment and Development",
d: "None of these",
correct :"c"
},

{
question:" Atmospheric humidity is measured by",

a: "Auxanometer",
b: "Photometer",
c: "Hygrometer",
d: "None",
correct :"c"
},

{
question: " The area to which a species is biologically adapted to live is known",

a: "Niche",
b: "Habitat",
c: "Succession",
d: "Community",
correct :"b"
},

{
question: " Study of inter-relationship between organisms and their environment is called",

a:"Ecology",
b: "Ecosystem",
c: "Phytogeography",
d:"Ethology",
correct :"a"
},

{
question: " The term Ecology was coined by",

a: "a:G.Tansley",
b: "Earnst Haeckel",
c: "Aristotle"	,
d: "Linnaeus",
correct :"b"
},

{
question:" An example of an abiotic component",

a: "Plants",
b: "Soil",
c: "Animals",
d: "Bacteria",
correct :"b"
},

{
question: " The area to which a species is biologically adapted to live is known",

a: "Niche",
b: "Habitat",
c: "Succession",
d: "Community",
correct :"b"
},
{
question: " An indicator species of polluted water is",
a: "Tubifex",
b: "phytoplankton",
c: "zooplankton",
d: "prawn",
correct: "a",
}


]: (student_class=="Sixth") ?
[
  {
      question: " The second trophic level in a lake is",
      a: "Phytoplankton",
      b: "Zooplanktons",
      c: "Fishes",
      d: "Benthos",
      correct: "b"
  },
  {
      question : " Which of the following can act as a pioneer species in a xerach succession",
      a: "Lichens",
      b: "Humans",
      c: "Herbs",
      d: "Animals",
      correct: "a"
  },
  {
      question : " Energy flow in an ecosystem is",
      a: "Bidirectional",
      b: "Unidirectional",
      c: "Multidirectional",
      d: "All rounds",
      correct: "c"
  },
  {
      question : " Which of the following is an example of a man-made ecosystem",
      a: "Tissue culture",
      b: "Herbariumt",
      c: "Aquarium",
      d: "Forest",
      correct: "c"
  },
  {
      question : " Pyramid of energy in a pond ecosystem is always",
      a: "Inverted",
      b: "Upright",
      c: "Linear",
      d: "Irregular",
      correct: "b"
  },
  {
      question: " If in a population, natality is balanced by mortality, then there will be",
      a: "Decrease in population growth",
      b: "Increase in population growth",
      c: "Zero population growth",
      d: "Over population",
      correct: "c"
  },
  {
      question : " In a pyramid of numbers in grassland ecosystems, the largest population is that of",
      a: "Herbivores",
      b: "Primary consumers",
      c: "Secondary consumer",
      d: "Producers",
      correct: "a"
  },
  {
      question : " Which of these belong to the category of primary consumers in grazing food chain",
      a: "snakes and frogs",
      b: "Insects and cattle",
      c: "Eagle and snakes",
      d: "Cow and rabbit",
      correct: "d"
  },
  {
      question : " The pyramid of energy is always upright for any ecosystem, this situation indicates that",
      a: "Herbivores have better energy conversion efficiency than carnivores",
      b: "Producers have the lowest energy conversion efficiency",
      c: "Carnivores have a better energy conversion efficacy than herbivores",
      d: "Energy conversion efficiency is same at all trophic levels",
      correct: "d"
  },
  {
      question : " Which of the ecological pyramid is always upright",
      a: "Pyramid of numbers",
      b: "Pyramid of biomass",
      c: "Pyramid of energy",
      d: "All of the above",
      correct: "c"
  },
  {
      question: " Which one of the following is not a gaseous biogeochemical cycle",
      a: "Nitrogen cycle",
      b: "Carbon cycle",
      c: "Sulphur cycle",
      d: "Phosphorus cycle",
      correct: "d"
  },
  {
      question : " Deserts, grasslands, forests and tundra regions are the examples of",
      a: "Biomes",
      b: "Biogeographically regions",
      c: "Ecosystems",
      d: "Biospheres",
      correct: "c"
  },
  {
      question : " The upright pyramid of numbers is absent in",
      a: "Lake",
      b: "Pond",
      c: "Grasslands",
      d: "Forests",
      correct: "d"
  },
  {
      question : " The final stable community in ecological succession is",
      a: "Climax",
      b: "Pioneer",
      c: "Sere",
      d: "Carnivores",
      correct: "a"
  },
  {
      question : " Mass of living matter at a trophic level in an area at any given time is called",
      a: "Standing state",
      b: "Standing crop",
      c: "Humus",
      d: "Detritus",
      correct: "a"
  },
  {
      question: " Hydrarch succession takes place in",
      a: "Dry areas",
      b: "Bare area",
      c: "Wetter areas",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " Which of the following is a fossil fuel?",
      a: "Oil",
      b: "Coal",
      c: "Natural gas",
      d: "All of the above",
      correct: "b"
  },
  {
      question : " Biogas contains mainly",
      a: "Methane",
      b: "Propane",
      c: "Butane",
      d: "Carbon dioxide",
      correct: "a"
  },
  {
      question : " The burning of fossil fuels releases a large amount of",
      a: "Nitrogen into air",
      b: "Sulphur into air",
      c: "Carbon dioxide into air",
      d: "Oxygen into air",
      correct: "b"
  },
  {
      question : " A poisonous gas given out of a vehicle exhaust is",
      a: "Methane",
      b: "Ethane",
      c: "Carbon dioxide",
      d: "SCarbon monoxide",
      correct: "d"
  },
  {
      question: " The purest form of coal is",
      a: "Anthracite",
      b: "Lignite",
      c: "Peat",
      d: "Bitumen",
      correct: "c"
  },
  {
      question : " Which one of the following is used as a refrigerant?",
      a: "Freon",
      b: "Teflon",
      c: "Ethanol",
      d: "Benzol",
      correct: "a"
  },
  {
      question : " Loss of forest has led to",
      a: "Erosion of fertile soil",
      b: "Global warming",
      c: "Loss of habitat of plants and animals",
      d: "All of the above",
      correct: "d"
  },
  {
      question : " Study of trends in human population growth and prediction of future growth is called",
      a: "Demography",
      b: "Psychology",
      c: "Biography",
      d: "Kalography",
      correct: "a"
  },
  {
      question : " One of the critical mechanism by which the environment controls population of species is",
      a: "Spread of disease",
      b: "Removal of excreta",
      c: "Supply of food",
      d: "Control on death rate",
      correct: "d"
  },

  {
      question : " If the rate of addition of new member’s increases with respect to the individual lost of the same population, then the graph obtained has",
      a: "Decline growth",
      b: "Zero growth",
      c: "Exponential growth",
      d: "None of these",
      correct: "c"
  },
  {
      question : " The number of babies produced per thousand individuals is called",
      a: "Natality",
      b: "Mortality",
      c: "Immigration",
      d: "Emigration",
      correct: "a"
  },
  {
      question : " Smog is",
      a: "smoke",
      b: "other name for dust storm",
      c: "moistened air gases",
      d: "smoke and fog",
      correct: "c"
  },
  {
      question : " The most dangerous metal pollutant of automobile exhaust is",
      a: "cadmium",
      b: "silver",
      c: "lead",
      d: "manganese",
      correct: "c"
  },
  {
      question: " Which one of the following is a greenhouse gas?",
      a: "carbon dioxide",
      b: "carbon monoxide",
      c: "ozone",
      d: "oxygen",
      correct: "a"
  },
  {
      question : " Smog produces",
      a: "O3",
      b: "NO2",
      c: "CH4",
      d: "Aluminium Ion",
      correct: "d"
  },
  {
      question : " Depletion of ozone layer is due to oxide of",
      a: "carbon",
      b: "phosphorus",
      c: "nitrogen",
      d: "none",
      correct: "c"
  },
  {
      question : " Formation of ozone is maximum over",
      a: "Antarctica",
      b: "Africa",
      c: "Europe",
      d: "India",
      correct: "c"
  },
  {
      question : " Oxidation Ponds involve",
      a: "chemical removal of pollutants",
      b: "mechanical screening of pollutants",
      c: "biological reduction of organic matter",
      d: "none of the above",
      correct: "c"
  },
  {
      question: " Natural sink of stratospheric ozone layer is",
      a: "SO2",
      b: "HCF",
      c: "Freons",
      d: "Sulphur flux of oceans",
      correct: "b"
  },
  {
      question : " Water pollution is mainly caused by",
      a: "decay of bodies of aquatic animals",
      b: "industrial effluents",
      c: "excessive rain",
      d: "growth of phytoplankton",
      correct: "d"
  },
  {
      question : " Which of the following is usually not classified as atmospheric pollutant?",
      a: "CO2",
      b: "CO",
      c: "NOx",
      d: "SO2",
      correct: "c"
  },
  {
      question : " The sound above what level is considered as harmful?",
      a: "above 40 db",
      b: "above 60 db",
      c: "above 80 db",
      d: "above 120 db",
      correct: "c"
  },
  {
      question : " Which of the following is a secondary air pollutant?",
      a: "SO2",
      b: "NO2",
      c: "PAN",
      d: "Aerosol",
      correct: "c"
  },
  {
      question: " Peeling of ozone umbrella, which protects us from UV rays, is caused by",
      a: "CFC’s",
      b: "coal burning",
      c: "CO2",
      d: "PAN",
      correct: "a"
  },
  {
      question : " Greenhouse effect is caused by",
      a: "CO2 only",
      b: "CH4, SO2, NO2",
      c: "Those gases which absorb the infra red light reflecting from earth",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " The result of ozone hole is",
      a: "acid rain",
      b: "global warming",
      c: "the UV radiations reach the earth",
      d: "greenhouse effect",
      correct: "b"
  },
  {
      question : " DDT is a",
      a: "Non-pollutant",
      b: "Non-biodegradable pollutant",
      c: "Biodegradable pollutant",
      d: "None",
      correct: "b"
  },
  {
      question : " ‘Ozone hole’ means",
      a: "increase in the concentration of ozone",
      b: "decrease in the concentration of ozone",
      c: "same concentration of ozone",
      d: "hole in the stratosphere",
      correct: "b"
  },
  {
      question : " Which of the following gases contribute to the global warming?",
      a: "carbon monoxide",
      b: "sulphur dioxide",
      c: "carbon dioxide",
      d: "nitrogen dioxide",
      correct: "c"
  },
  {
question: " Maximum air pollution is caused by",
a: "smoke",
b: "insecticide",
c: "industry",
d: "automobile exhaust",
Answer: "d"
},

{
question: " Bhopal gas tragedy of 1984 was caused by the leakage of",
a: "methyl isocyanate",
b: "2-4 dichlorophenoxyacetic acid",
c: "ammonia",
d: "hydrogen cyanide",
correct: "a"
},

{
question:	" Insecticides usually act upon",
a: "muscular system",
b: "digestive system",
c: "nervous system",
d: "circulatory system",
correct: "c",
},

{
question:" Black lung disease is common in",
a: "farmers",
b: "workers of petrochemical industry",
c: "coal miners",
d: "refinery workers",
correct: "c",
},

{
question: " An indicator species of polluted water is",
a: "Tubifex",
b: "phytoplankton",
c: "zooplankton",
d: "prawn",
correct: "a",
},

{
question: " Eutrophication is often seen in",
a: "deserts",
b: "freshwater lakes",
c: "oceans",
d: "mountains",
correct: "b",
},

{
question: " Secondary sewage treatment is mainly a",
a: "physical process",
b: "mechanical process",
c: "chemical process",
d: "biological process",
correct: "d",
},

{
question: " ‘Good Ozone’ is found in",
a: "mesosphere",
b: "troposphere",
c: "stratosphere",
d: "ionosphere",
correcct: "c"
},

{


question:" Chipko movement was first led by",
a: "Sunderlal Bahuguna",
b: "Rajiv Gandhi",
c: "Ramdev Mishra",
d: "Indira Gandhi",
correct: "a",
},

{
question:" Green muffler is used against which type of pollution?",
a: "air",
b: "soil",
c: "water",
d: "noise",
Answer: "d"
},

{
question:" UV radiations cause",
a: "formation of thymine dimers",
b: "deletion of base pairs",
c: "methylation of bases",
d: "addition of base pairs",
correct: "a",
},

{
question:" Which is a non biodegradable pollutant?",
a: "Savage",
b: "Sulphur Dioxide",
c: "Oxides of Nitrogen",
d: "Lead vapour",
correct: "d"
},

{
question:" Carbon dioxide is called as greenhouse gas because",
a: "it is involved in photosynthesis",
b: "it emits light",
c: "it traps infrared radiation",
d: "none",
correct: "c",
},

{
question:" Some effects of SO2 and its transformation products on plants include",
a: "chlorophyll destruction",
b: "plasmolysis",
c: "Golgi body destructions",
d: "none",
correct: "a"
},

{
question: " Lichens are important in the studies on atmospheric pollution because they",
a: "can also grow in greatly polluted atmosphere",
b: "can readily multiply in polluted atmosphere",
c: "efficiently purify the atmosphere",
d: "are sensitive to pollutants",
correct: "d"
},

{
question:" If water pollution continuous at its present rate, it will eventually",
a: "stop water cycle",
b: "prevent precipitation",
c: "make oxygen molecules unavailable to water plants",
d: "make nitrogen molecules unavailable to water plants",
correct: "c",
},

{
question:" All the following contribute to pollution except",
a: "thermal power plant",
b: "automobiles",
c: "nuclear power plant",
d: "hydroelectric power plant",
correct: "d",
},

{
question:" The molecular action of ultraviolet light is mainly reflected through",
a: "destruction of hydrogen bonds in DNA",
b: "photo dynamic action",
c: "formation of pyrimidine",
d: "formation of sticky metaphase",
correct: "a",
},

{
question: " Thermal pollution of water bodies is due to discharge of",
a: "chemicals from industries",
b: "heat from power plants",
c: "agricultural run-off water",
d: "wastes from mining",
correct: "b",
},

{
question:" Biologists celebrate 5th June as",
a: "Darwin’s birthday",
b: "World Hygiene Day",
c: "World Environment Day",
d: "World Population Day",
correct: "c",
},

{
question:" The main gases responsible for the Greenhouse Effect are:",
a: "water and ozone",
b: "oxygen and nitrous oxide",
c: "carbon dioxide and methane",
d: "None of these",
correct: "a",
},

{
question:" According to the United Nations, the main cause of climate change / global warming is the result of:",
a: "water pollution",
b: "factory and car emissions",
c: "sewage",
d: "None of these",
correct: "b",
},

{
question:" It is believed that the thinning of the ozone layer is the result of chlorofluorocarbons. These gases have been used in:",
a: "electric heaters and clothes driers",
b: "spray cans and refrigerators",
c: "cigarette lighters and air-conditioners",
d: "None of these",
correct: "b",
},

{
question:" The main gases that produce acid rain are:",
a: "sulphur dioxide and nitrogen oxides",
b: "ozone and oxygen gas",
c: "chlorofluorocarbons",
d: "None of these",
correct: "a"
},

{
question:" The release of excessive amounts of harmful substances such as car and factory fumes and tyre rubber into the atmosphere is called:",
a: "noise pollution",
b: "mutagenic pollution",
c: "air pollution",
d: "None of these",
correct: "c",
},

{
question:" To reduce pollution from cars, the Australian government has legislated that all new cars must use:",
a: "unleaded petrol",
b: "diesel fuel",
c: "leaded petrol",
d: "None of these",
correct: "c"
},

{
question:" When phosphate-containing wastes from detergents and fertilisers reach our waterways, water plants grow excessively extracting oxygen from the water causing fish to suffocate. This process is called:",
a: "phosphatisation",
b: "sewage recycling",
c: "eutrophication",
d: "None of these",
correct: "c",
},

{
question:" Substances that are easily broken down into harmless substances by decomposers are termed",
a: "environmentally unfriendly",
b: "biodegradable",
c: "non-biodegradable",
d: "None of these",
correct: "b"
},

{
question:" An example of a species that was introduced to Australia with harmful results is the:",
a: "cactoblastis moth",
b: "cane toad",
c: "potato",
d: "None of these",
correct: "b"
},

{
question:" Which of the following is not produced as exhaust of vehicles?",
a: "sulphur dioxide",
b: "carbon dioxide",
c: "carbon monoxide",
d: "fly ash",
correct: "b"
},

{
question:" Spraying of DDT on crops produces pollution of",
a: "soil and water only",
b: "air and soil only",
c: "air, soil and water",
d: "air and water only",
correct: "a",
},

{
question:" Which of the following will not cause any atmospheric pollution?",
a: "Hydrogen",
b: "Sulphur Dioxide",
c: "Carbon dioxide",
d: "Carbon monoxide",
correct: "a"
},

{
question:" Sewage water can be purified for recycling with the action of",
a: "aquatic plants",
b: "penicillin",
c: "microorganisms",
d: "fishes",
correct: "c"
},

{
question:" Today, concentration of greenhouse gases is high because of",
a: "use of refrigerator",
b: "increased combustion of oil and coal",
c: "deforestation",
d: "all of the above",
correct: "d"
},

{
question: " Photochemical smog is related to the pollution of",
a: "soil",
b: "water",
c: "noise",
d: "air",
correct: "d"
},

{
question:" Most important causative pollutant of soil maybe",
a: "plastics",
b: "iron junks",
c: "detergents",
d: "glass junks",
correct:"a"
},

{
question:" Taj Mahal is threatened due to the effect of",
a: "chlorine",
b: "sulphur dioxide",
c: "oxygen",
d: "hydrogen",
correct: "a"
},

{
question:" When huge amount of sewage is dumped into a river the BOD will",
a: "increase",
b: "remain unchanged",
c: "slightly decrease",
d: "decrease",
correct: "c"
},

{
question:" Which is a fungicide?",
a: "2,4-D",
b: "DDT",
c: "Bordeaux mixture",
d: "BHC",
correct: "c"
},

{
question:" Instead of using pesticides to eradicate pests, another method using the pest’s natural predators or parasites to control its numbers is frequently used: This environmentally friendly method is termed:",
a: "biological control",
b: "predator release",
c: "insecticide management",
d: "None of these",
correct: "a"
},

{
question:" In an ecotone, the species which become abundant are called:",
a: "Edge species",
b: "Keystone species",
c: "Endemic species",
d: "Foster species",

correct:"a"
},

{

question:" The objective of Environment studies is",
a: "Raise consciousness about environment conditions",
b: "To teach environmentally appropriate behavior",
c: "Create an environmental ethic sensitive society",
d: "All of the above",

correct: "d"
},

{

question:" Which of the following is not influenced by human activities?",
a: "Destruction of mangroves and wetlands",
b: "Depletion of ground water",
c: "Increased extinction rate of species",
d: "None of the above",

correct: "d"
},

{

question:" Which of the following is management option for air pollution?",
a: "Regulations and standards",
b: "Transport planning",
c: "Using CNG as fuel",
d: "All of these",

correct: "d"

},

{

question:" Development activities on the hydrosphere cause",
a: "Air pollution",
b: "Soil pollution",
c: "Water pollution",
d: "Soil erosion",

correct: "c"
},

{

question:" The species restricted to be present in one region are called",
a: "Edge species",
b: "Endemic species",
c: "Endangered species",
d: "Keystone species",

correct: "b"
},

{

question:" The basic requirements of human beings are provided by",
a: "Industrialization",
b: "Agriculture",
c: "Nature",
d: "Urbanization",

correct: "c"
},

{

question:" Environment is the life support system that includes",
a: "Air",
b: "Water",
c: "Land",
d: "All of the above",
correct:"d"
},

{

question:" The term ‘Environment’ has been derived from the French word which means to encircle or surround",
a: "Environ",
b: "Oikos",
c: "Geo",
d: "Aqua",
correct:"a"
},

{

question:" Biosphere is",
a: "The solid shell of inorganic materials on the surface of the earth",
b: "The thin shell of organic matter on the surface of the earth comprising of all the living things",
c: "The sphere which occupies the maximum volume of all the spheres",
d: "All the above",
correct:"b"
},

{

question:" Atmosphere consists of 79 percent Nitrogen and 21 percent Oxygen by",
a: "Volume",
b: "Weight",
c: "Density",
d: "All of these",
correct:"b"
},
{
question:" The word ‘Environment’ is derived from",
a: "Greek",
b: "French",
c: "Spanish",
d: "English",
correct:"b"
},

{

question:" Which among the following is a climatic factor?",
a: "pressure",
b: "humidity",
c: "temperature",
d: "all of the above",
correct:"d"
},

{

question:" World environment day is on:",
a: "5th May",
b: "5th June",
c: "18th July",
d: "16th August",

correct:"b"
},

{
question:" Which of the following are major environmental issues involved in mining?",
a: "air pollution",

b: "water pollution",

c: "soil degradation",

d: "all of the above",
correct:"d"
},

{

question:" Sustainable development means",
a: "meeting present needs without compromising on future needs",

b: "progress of human beings",

c: "balance between human needs and the ability of earth to provide the resources",

d: "all of the above",
correct:"c"

},

{

question:" The most important remedy to avoid negative impact due to industrialization is",
a: "industry should be closed",

b: "don’t allow new industrial units",

c: "industry should treat all the wastes generated by it before disposal",

d: "industries should be shifted far away from human habitats",
correct:"d"

},

{

question:" Sustainable development will not aim at",
a: "Social economic development which optimizes the economic and social benefits available in the present, without spoiling the likely potential for similar benefits in the future",

b: "Reasonable and equally distributed level of economic well-being that can be perpetuated continually",

c: "Development that meets the needs of the present without compromising the needs of future generations to meet their own needs",

d: "Maximizing the present day benefits through increased resource consumption",
correct:"c"
},

{

question:" The adverse effect of modern agriculture is",
a: "Water pollution",

b: "Soil degradation",

c: "Water logging",

d: "All of the above",
correct:"b"
},

{

question:" Soil erosion removes surface soil which contains",
a: "Organic matter",

b: "Plant nutrients",

c: "Both a and b",

d: "none of the above",
correct:"a"
},

{

question:" Water logging is a phenomenon in which",
a: "Crop patterns are rotated",

b: "Soil root zone becomes saturated due to over irrigation",

c: "Erosion of soil",

d: "None of the above",
correct:"b"
},

{

question:" The impact of construction of dams",
a: "Submerged forest",

b: "Loss of wild life habitat",

c: "Damages downstream ecosystem",

d: "All of the above",
correct:"d"
},

{

question:" What would you do to prevent environmental damage",
a: "Plant trees",

b: "Halt deforestation",

c: "Control pollution",

d: "All of the above",
correct:"d"
},

{

question:" Environmental impact assessment",
a: "is the study of feasibility of a project",

b: "is a study of bio-physical characteristics of the environment that may result from a human action",

c: "Both a and b",

d: "None of the above",
correct:"a"
},

{

question:" Which of the following is the most environmental friendly agricultural practice?",
a: "Using chemical fertilizers",

b: "Using insecticides",

c: "Organic farming",

d: "None of the above",
correct:"c"
},

{
question:" Narmada Bachao Andholan’ is an initiative by",
a:"Medha Patkar",
b:"Sunderlal Bahguna",
c:"Indhira Gandhi",
d:"Madhav Gadgil",
correct :"a"
},

{
question:" Autobiography of Dr. Salim Ali",
a:"Wings of a sparrow",
b: "Fall of a sparrow",
c: "Song of a sparrow",
d: "Life of a sparrow",
correct :"b"
},

{
question:" BNHS is located in",
a: "Delhi",
b: "Mumbai",
c: "Bihar",
d:"Assam",
correct :"B"
},

{

question:" E. O. Wilson’s book which won the award for Best Book on Environmental isssues",

a:"Biodiversity",
b: "Diversity of Life",
c: "Nature",
d: "Man and Life",
correct :"b"
},

{
question:" Earth provides enough to satisfy every man’s need, but not for every mans greed - words by",

a:"Tagore",
b: "Gandhiji",
c: "Nehru",
d:"Sardar Patel",
correct :"B"
},

{

question: " Expand WWF",
a:"World Wide Fund for Nature",
b: "World Wide Fund for Forest",
c: "World Wide Fund for Environment",
d:"World Wide Fund for Biodiversity",
correct:"a"
},


{
question: " Indian Prime minister who played significant role in conservation of wild life",

a: "Rajiv Gandhi",
b: "Indira Gandhi",
c: "Manmohan Singh",
d: "A B Vajpai",
correct :"c"
},

{
question:" Indias s most famous environmental Lawyer",

a: "M. c: Mehta",
b: "S. P. Godrej",
c: "M. S. Swaminathan",
d: "Anil Agarwal",
correct :"a"
},

{
question:" Magazine of Bombay Natural History Society is named as",

a:"Panda",
b:"Peacock",
c: "Tiger",
d: "Hornbill",
correct :"d"
},

{
question:" The book silent spring was written by",

a: "Madhav Gadgil",
b: "Anil Agarwal",
c: "Rachel Carson",
d: "E.O.Wilson",
correct :"c"
},

{
question:" Wild Life Institute of India is located in",

a: "Andaman",
b: "Hyderabad",
c: "Dehradun",
d: "Bangalore",
correct :"c"
},

{
question:" World Environment Day",

a: "5th June",
b: "5th July",
c: "5th August",
d: "5th September",
correct :"a"
},

{
question:" The biggest award for environmental activities in India is given in the name of an individual. In whose name is it constituted?",

a:"Lal Bahadur Shasthri",
b: "Morarji Desai",
c: "Indira Gandhi",
d: "Kamaraj",
correct :"c"
},

{
question:" All forms of water that comes down on Earth, including rain, snow, hail etc: is known as",

a: "Calcification",
b: "Fixation",
c: "Precipitation",
d: "Accumulation",
correct :"c"
},

{
question:" The ocean covers		percentage of Earth’s surface",
a: "51.5%",
b: "61%",
c: "71%",
d: "91%",
correct :"C"
},

{
question:" The portion of the earth and its environment which can support life is known as",

a:"Crust",
b: "Biosphere",
c: "Exosphere",
d:"Atmosphere",
correct :"b"
},

{
question:" What is troposphere?",

a: "Portion of air",
b: "Portion of water",
c: "Lowest layer of atmosphere where we survive	",
d:"Portion of sky",
correct :"c"
},

{
question:" The main energy source for the environment is",

a:"Solar energy",
b: "Chemical energy",
c: "Bioelectric energy",
d:"Electrical energy",
correct :"a"
},

{
question:" What is UNCED?",
a:"United Nations Conference on Education",
b: "United Nations Conference on Environmental Day ",
c: "United Nations Conference on Environment and Development",
d: "None of these",
correct :"c"
},

{
question:" Atmospheric humidity is measured by",

a: "Auxanometer",
b: "Photometer",
c: "Hygrometer",
d: "None",
correct :"c"
},

{
question: " The area to which a species is biologically adapted to live is known",

a: "Niche",
b: "Habitat",
c: "Succession",
d: "Community",
correct :"b"
},

{
question: " Study of inter-relationship between organisms and their environment is called",

a:"Ecology",
b: "Ecosystem",
c: "Phytogeography",
d:"Ethology",
correct :"a"
},

{
question: " The term Ecology was coined by",

a: "a:G.Tansley",
b: "Earnst Haeckel",
c: "Aristotle"	,
d: "Linnaeus",
correct :"b"
},

{
question:" An example of an abiotic component",

a: "Plants",
b: "Soil",
c: "Animals",
d: "Bacteria",
correct :"b"
},

{
question: " The area to which a species is biologically adapted to live is known",

a: "Niche",
b: "Habitat",
c: "Succession",
d: "Community",
correct :"b"
},

{
question: " The objective of environmental education is",

a: "Raise consciousness about environmental education",
b: "To teach environmentally appropriate behaviour",
c: "Create an environmental ethic that fosters awareness about ecological inter-dependence of economics, social and political",
d: "All of the above",
correct :"d"
},

{
question: " Which of the following is not influenced by human activities?",

a: "Depletion of ground water",
b: "Destruction of mangroves and wetlands",
c: "Increased extinction rate of species",
d: "None of the above",
correct :"a"
},

{
question: " Environmental education is important only at",

a: "Primary school stage",
b: "Secondary school stage",
c: "Collage stage",
d: "All stages",
correct :"d"
},


{
question:" Which of the following conceptual components of the environment are effective transporters of matter?",
a: "Atmosphere and hydrosphere",
b: "Atmosphere and lithosphere",
c: "Hydrosphere and lithosphere",
d: "Lithosphere and biosphere",
correct :"a"
},

{
question:" Biosphere is",
a:"The solid shell of inorganic materials on the surface of the Earth",
b: "The thin shell of organic matter on the surface of earth comprising of all the living things",
c: "The sphere which occupies the maximum volume of all the spheres ",
d: "All of the above",
correct :"b"
},

{
question:" Which of the following conceptual sphere of the environment is having the least storage capacity for matter?",

a: "Atmosphere",
b: "Lithosphere",
c: "Hydrosphere",
d: "Biosphere",
correct :"a"
},

{
question: " Which of the following is an example of impact of development activities on the Hydrosphere?",

a: "Air pollution",
b: "Soil pollution",
c: "Soil erosion",
d: "Water pollution",
correct :"d"
},

{
question: " Weather occurs in the Earths:",
a: "Troposhere",
b: "Mesophere",
c: "Ionosphere",
d: "Thermosphere",
correct :"a"
},

{
question: " Biosphere is a term used to represent the:",

a: "Entire atmosphere consisting of troposphere, stratosphere, mesosphere, and thermosphere",
b: "Entire hydrosphere-representing the entire collection of water over the Earth as well as inside the Earth",
c: "A small zone of Earth, where the lithosphere, hydrosphere, and atmosphere come in contact with one another",
d: "Entire lithosphere- representing the solid Earth and its interior",
correct :"c"
},

{
question: " The term ecology was introduced by:",

a:"Haeckel",
b: "Odum",
c: "Tansely",
d: "Ramdeo Mishra",
correct :"a"
}


]: (student_class=="Seventh") ?
[
  {
      question: " World Forest day is celebrated on",
      a: "21st March",
      b: "5th June",
      c: "1st Dec",
      d: "7th June",
      correct: "a"
  },
  {
      question : " Yellowing of Taj Mahal is an effect of",
      a: "Acid rain",
      b: "Global warming",
      c: "Ozone depletion",
      d: "All of the above",
      correct: "a"
  },
  {
      question : " Green Revolution in India was initiated by  	",
      a: "M.S. Swaminathan",
      b: "Sunderlal Bahuguna",
      c: "Kurien",
      d: "Medha Patkar",
      correct: "a"
  },
  {
      question : " Who wrote the book Violence of Green Revolution",
      a: "Vandana Siva",
      b: "Sheela Dikshit",
      c: "Menaka Gandhi",
      d: "Arundhathi Roy",
      correct: "a"
  },
  {
      question : " The Chipko movement is started by",
      a: "Engler",
      b: "Sunderlal Bahuguna",
      c: "Medha Padkar",
      d: "None of these",
      correct: "b"
  },
  {
      question: " Green revolution is associated with  	",
      a: "Sericulture",
      b: "Agriculture",
      c: "Fish culture",
      d: "Silviculture",
      correct: "b"
  },
  {
      question : " Which gas is likely to be reduced in the atmosphere by deforestation?",
      a: "Carbon dioxide",
      b: "Nitrogen",
      c: "Oxygen",
      d: "Sulphur dioxide",
      correct: "c"
  },
  {
      question : " Extensive planting of trees to increase forest cover is called",
      a: "Afforestation",
      b: "Agroforestry",
      c: "Deforestation",
      d: "Social forestry",
      correct: "a"
  },
  {
      question : " Soil erosion can be prevented by",
      a: "Deforestation",
      b: "Afforestation",
      c: "Overgrazing",
      d: "Removal of vegetation",
      correct: "b"
  },
  {
      question : " The components of LPG are ________",
      a: "Methane & Hexane",
      b: "Propane & Butane",
      c: "Ethane & Methane",
      d: "Propane & Ethane",
      correct: "b"
  },
  {
      question: " The resources that can be replaced by natural ecological cycle is called",
      a: "Renewable",
      b: "Non-renewable",
      c: "Exhaustible",
      d: "Natural",
      correct: "a"
  },
  {
      question : " The amount of solar radiation reaching the surface of the earth is called",
      a: "Solar flux",
      b: "Reflected light",
      c: "Minerals",
      d: "Solvents",
      correct: "a"
  },
  {
      question : " The most harmful of ultraviolet radiations are",
      a: "UV-C",
      b: "UV-B",
      c: "UV-A",
      d: "All the above",
      correct: "a"
  },
  {
      question : " A renewable source of energy is",
      a: "Petroleum",
      b: "Coal",
      c: "Nuclear fuel",
      d: "Trees",
      correct: "d"
  },
  {
      question : " The capacity to do work is termed as",
      a: "Power",
      b: "Force",
      c: "Strength",
      d: "Energy",
      correct: "d"
  },
  {
      question: " The unit of total water content of the soil is known as",
      a: "Holard",
      b: "Chraserd",
      c: "Echard",
      d: "All of the above",
      correct: "a"
  },
  {
      question : " Pedology?",
      a: "Study of water",
      b: " Study of air",
      c: "Study of soil",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " Deforestation generally decreases",
      a: "Global Warming",
      b: "Drought",
      c: "Soil erosion",
      d: "Rainfall",
      correct: "d"
  },
  {
      question : " Which among the following result in the formation of soil?",
      a: "Radiation",
      b: "Weathering",
      c: "Erosion",
      d: "Pollution",
      correct: "b"
  },
  {
      question : " Mulching helps in",
      a: "Soil fertility",
      b: "Moisture conservation",
      c: "Improvements soil structure",
      d: "Soil sterility",
      correct: "b"
  },
  {
      question: " is an example of ‘bottom feeders’.",
      a: "Cat fish",
      b: "Frog",
      c: "Snake",
      d: "Tadpole",
      correct: "a"
  },
  {
      question : " Trees shed their leaves during winter and hot summer.",
      a: "Ever green",
      b: "Coniferous",
      c: "deciduous",
      d: "Shola",
      correct: "c"
  },
  {
      question : " A lake ecosystem functions as a",
      a: "Terai",
      b: "Shola grasslands",
      c: "Semi arid plains",
      d: "Himalayan pastures",
      correct: "a"
  },
  {
      question : " An example of one way ecological cycle is",
      a: "carbon dioxide cycle",
      b: "water cycle",
      c: "energy cycle",
      d: "oxygen cycle",
      correct: "c"
  },
  {
      question : " Brackish water ecosystems in river deltas are among",
      a: "Least productive ecosystems",
      b: "Most productive in terms of biomass production",
      c: "Unproductive",
      d: "Stagnant ecosystems",
      correct: "b"
  },

  {
      question : " Ecology is",
      a: "The science that studies the evolution of life",
      b: "Integrates both social and natural sciences to help us understand how the earth works",
      c: " The study of the relationships between organisms and their environment",
      d: "The study of the environment in the absence of humans",
      correct: "d"
  },
  {
      question : " Forests grow in high rain fall areas are",
      a: "Ever green forests",
      b: " temperate forests",
      c: "conifers",
      d: "Tundra",
      correct: "a"
  },
  {
      question : " Nitrogen fixing blue green alga",
      a: "Clostridium",
      b: "Rhizobium",
      c: "Nostoc",
      d: "Nitrosomonas",
      correct: "c"
  },
  {
      question : " Nitrogen gas returns to the atmosphere by the action of",
      a: "Nitrogen fixing bacteria",
      b: "Denitrifying bacteria",
      c: "Nitrifying bacteria",
      d: "Nitrate fertilizers",
      correct: "b"
  },
  {
      question: " Patches of tall grasslands interspersed with Sal forest ecosystem is",
      a: "Terrai",
      b: "Himalayan Pasture",
      c: "Deccan Plateau",
      d: "Plains of Western India",
      correct: "a"
  },
  {
      question : " Ramsar Convention refers to the conservation of _______",
      a: "Deserts",
      b: "Wetlands",
      c: "Agriculture lands",
      d: "Forest land",
      correct: "b"
  },
  {
      question : " Some species whose removal can affect the survival of an ecosystem are called",
      a: "Herbivores",
      b: "Keystone species",
      c: "Producers",
      d: "Carnivores",
      correct: "b"
  },
  {
      question : " Sunderbans is home to",
      a: "Giant permanent pond",
      b: "Temporary aquatic system",
      c: "Simplest aquatic ecosystem",
      d: "Water tank",
      correct: "b"
  },
  {
      question : " The conversion of ammonia to nitrate is known as _______",
      a: "ammonification",
      b: "nitrification",
      c: "denitrification",
      d: "All of these",
      correct: "c"
  },
  {
      question: " What causes acid rain?",
      a: "Open defecation",
      b: "Burning of fossil fuels",
      c: "increase spread of paddy fields",
      d: "the use of cowdung",
      correct: "b"
  },
  {
      question : " The forests which occur in law rain fall area is",
      a: "Evergreen forests",
      b: "Deciduous forests",
      c: "Coniferous forest",
      d: "all of the above",
      correct: "b"
  },
  {
      question : " The inherent ability of organisms to reproduce and multiply is called,",
      a: "C value",
      b: "biotic potential",
      c: "carrying capacity",
      d: "K value",
      correct: "b"
  },
  {
      question : " The largest brackish water lake situated in Asia is in Orissa. Which is the lake?",
      a: "Chilka lake",
      b: "Vembanad lake	",
      c: "Woolar lake",
      d: "Dal lake",
      correct: "a"
  },
  {
      question : " The Little Rann of Kutch is home to",
      a: "Horse",
      b: "Great Indian Bustard",
      c: "Lion",
      d: "Wild Ass",
      correct: "d"
  },
  {
      question: " The presence of which is necessary for photosynthesis",
      a: "Chloroform",
      b: "Chlorophyll",
      c: "Phosphorus",
      d: "Polymer",
      correct: "b"
  },
  {
      question : " The process through which ecosystems tend to change after a period of time is called",
      a: "Ecological Succession",
      b: "Biological Succession",
      c: "Geographical Succession",
      d: "None of the above",
      correct: "a"
  },
  {
      question : " The species that flower are called",
      a: "gymnosperms",
      b: "bryophytes",
      c: "angiosperms",
      d: "algae",
      correct: "c"
  },
  {
      question : " The term ‘Eco’ implies",
      a: "Environment",
      b: "Ecotone",
      c: "Ecotourism",
      d: "Soil",
      correct: "a"
  },
  {
      question : " The word Biophilia was coined by",
      a: "Dr. Hackel",
      b: "Dr. Johanssen",
      c: "Dr. Benjamine",
      d: ")E. O. Wilson",
      correct: "d"
  },
  {
      question : " What is Dendrology?",
      a: "Study of Plants",
      b: "Study of Butterflies",
      c: "Study of Trees",
      d: "None of these",
      correct: "c"
  },
  {
          question : " What is symbiosis?",
          a: " Study of distribution of related species ",
          b: " Association between members of same species ",
          c: " Association between members of two species ",
          d: " none ",
          correct: "c"
      },
{
         question : " When number of food chains is interlocked this is called",
          a: " Food link ",
          b: " food chain ",
          c: " food web ",
          d: " pyramid ",
          correct: "c"
      },
{
         question : " Which is an example for sedimentary biogeochemical cycle?",
          a: " Oxygen cycle ",
          b: " Nitrogen cycle ",
          c: " Water cycle",
          d: " Phosphorus cycle ",
          correct: "d"
      },
{
          question : " Which is the second largest in species richness?",
          a: " Desert ",
          b: " Tundra ",
          c: " Coral reefs ",
          d: " Flowing water ",
          correct: "c"
      },
{
         question : " Grassland of USA is referred to as",
          a: " Prairies ",
          b: " Steppes ",
          c: " Pampas ",
          d: " Veldts ",
          correct: "a"
      },
{
          question : " The complex network of interconnected food chains is called  	",
          a: " Trophic level ",
          b: " Food web ",
          c: " Ecological pyramid ",
          d: " Ecology chain ",
          correct: "b"
      },
{
          question : " The animal which consumes decaying organic matter is  	",
          a: " Carnivore ",
          b: " Detritivore ",
          c: " Herbivore ",
          d: " Producers ",
          correct: "b"
      },
{
         question : " An ecosystem gradually merges with an adjoining one through a transitional zone is called the  	",
          a: " Herbivores ",
          b: " Carnivores ",
          c: " Enzymes ",
          d: " None of these ",
          correct: "a "
      },
{
          question : " Favorable morphological and physiological response to a change in environment is called",
          a: " Preadaptation ",
          b: " Ecotyping ",
          c: " Formation of ecophenes ",
          d: " Acclimatization ",
          correct: "d"
      },
{
         question : " Plants adapted to open, sunny habitats are",
          a: " Sciophytes ",
          b: " Heliophytes ",
          c: " Mesophytes ",
          d: " Epiphytes ",
          correct: "b"
      },
{
          question : " Temperate forests occur in India in",
          a: " Indo-gangetic plains ",
          b: "Westen forest",
          c: " Eastern India ",
          d: " Southern peninsula ",
          correct: "d"
      },
{
          question : " In India, tropical evergreen forests occur in",
          a: " Himachal Pradesh ",
          b: " Madhya Pradesh ",
          c: " Assam ",
          d: " Tamil Nadu ",
          correct: "c"
      },
{
          question : " Which one is natures cleaner?",
          a: " Consumers ",
          b: " Producers ",
          c: " Decomposers and Scavengers ",
          d: " Symbionts ",
          correct: "c"
      },
{
          question : " The relationship between nitrogen fixing bacteria and leguminous plants is an example for",
          a: " Parasitism ",
          b: " Predation ",
          c: " Mutualism ",
          d: " Symbiosis ",
          correct: "c"
      },
{
          question : " Thorn forests are found in the	regions",
          a: " Semi-arid ",
          b: " High rain fall areas ",
          c: " Low temperature ",
          d: " Frozen areas ",
          correct: "a"
      },
{
         question : " A Hawk that eats a frog is a",
          a: " Producer ",
          b: " Primary Consumer ",
          c: " Secondary Consumer ",
          d: " Tertiary Consumer ",
          correct: "d"
      },
{
         question : " An example of lotic system",
          a: " Pond ",
          b: " River ",
          c: " Lake ",
          d: " Reservoir ",
          correct: "b"
      },
{
          question : " Lotic ecosystem refers to",
          a: " Static water system ",
          b: " Ecosystem of flowing water ",
          c: " Ecosystem of estuaries ",
          d: " Deep marine water system ",
          correct: "b"
      },
{
          question : " Autotrophs are  	",
          a: " Consumers ",
          b: " Herbivores ",
          c: " Saprophytes ",
          d: " Producers ",
          correct: "d"
      },
{
          question : " Organisms which depened on Producers for nutrition are called",
          a: " Autotrophs ",
          b: " Saprophytes ",
          c: " Consumers ",
          d: " Xerophytes ",
          correct: "c"
      },
{
          question : " The source of atmospheric oxygen is",
          a: " Nitrogen cycle ",
          b: " Green Plants ",
          c: " Water ",
          d: " Carbon Cycle ",
          correct: "b"
      },
{
          question : " Phytoplankton are",
          a: " Sciophytes ",
          b: " Heliophytes ",
          c: " Oxylophytes ",
          d: " Epiphytes ",
          correct: "d"
      },
{
         question : " Photosynthesis is found in",
          a: " Producers ",
          b: " Decomposers ",
          c: " Consumers ",
          d: " Scavengers ",
          correct: "a"
      },
{
          question : " What is ‘Black Lung?”",
          a: " Occupational Hazard to the miners ",
          b: " Occupational Hazard to navigators ",
          c: " Occupational Hazard to pesticide applicators ",
          d: " None of these ",
          correct: "a"
      },
{
          question : " What causes acid rain?",
          a: " Open defecation ",
          b: " Burning of fossil fuels ",
          c: " increase spread of paddy fields ",
          d: " the use of cowdung ",
          correct: "b"
      },
{
          question : " What are the chemicals that lead to acid rain?",
          a: " Hydrogen peroxide ",
          b: " sulfur dioxide & nitrogen oxide ",
          c: " Carbon dioxide ",
          d: " Ammonium phosphate & various silicates ",
          correct: "b"
      },
{
         question : " Water pollution is caused by....",
          a: " CO ",
          b: " Fertilizers ",
          c: " PAN ",
          d: " Fossil fuels ",
          correct: "b"
      },
{
          question : " Vermi-composting is a natural method of",
          a: " Producing compost manure ",
          b: " Producing worms ",
          c: " Managing waste it creates ",
          d: " Destroying worms ",
          correct: "a"
      },
{
          question : " Utilisation of natural resources in moderate manner to remaining something for the next generation is termed as",
          a: " Resettlement ",
          b: " Sustainable development ",
          c: " Rehabilitation ",
          d: " Mutual development ",
          correct: "b"
      },
{
          question : " Torrey Canyon is famous for:",
          a: " Gulf of War ",
          b: " Industries ",
          c: " Electric Potential ",
          d: " Oil spillage ",
          correct: "d"
      },
{
          question : " The projected rise in temperature in the next few decades",
          a: "1.5 to 2 O C ",
          b: "1.4 to 5.8 O C ",
          c: "2.5 to 3.9 O C ",
          d: "1.5 to 9.2 O C ",
          correct: "b"
      },
{
         question : " The term ‘Nuclear winter’ is associated with",
          a: " Nuclear War ",
          b: " Nuclear disarmament ",
          c: " Nuclear weapon testing ",
          d: " After effect of a nuclear explosion",
          correct: "d"
      },
{
          question : " The word Tsunami is derived from two Japanese words",
          a: " tsu (big) and nami   (flow) ",
          b: " tsu (harbour) and nami (wave)",
          c: " tsu (big wave) and name (wave)",
          d: " None of these]",
          correct: "b"
      },
{
         question : " The World Wetlands Day is celebrated on  	",
          a: " February 02",
          b: " February 28",
          c: " June 05",
          d: " March 21",
          correct: "a"
      },
{
          question : " Torrey Canyon is famous for",
          a: " Gulf of War ",
          b: " Industries ",
          c: " Electric Potential ",
          d: " Oil spillage ",
          correct: "d"
      },
{
         question : " The movement ‘Pani Panjayath’ was initiated to conserve waters in the drought prone areas of _________ state",
          a: " Tamilnadu ",
          b: " Rajasthan ",
          c: " Maharashtra ",
          d: " Karnataka",
          correct: "c"
      },
{
         question : " The nations threatened by submergence on account of global warming",
          a: " Pakistan and Afghanistan ",
          b: " Iran and Bangladesh ",
          c: " Peru and West Indies ",
          d: " Bangladesh and Maldives ",
          correct: "d"
      },
{
          question : " The most widely found pollutant in the air is...",
          a: " CO 2",
          b: " CFC ",
          c: " CO ",
          d: " SO 2",
          correct: "a"
      },
{
          question : " The method of simultaneous integration of trees with agricultural crops is called",
          a: " Agro forestry ",
          b: " Deforestation ",
          c: " Reforestation ",
          d: " combined culture ",
          correct: "a"
      },
{
          question : " The major reason why earth’s surface increases its temperature is due to",
          a: " The earth’s surface is getting exposed ",
          b: " The increase in the use of plastics ",
          c: " About 75% of the solar energy reaching the earth surface is getting absorbed by earth ",
          d: " The depleation of ozone ",
          correct: "c"
      },
{
         question : " The Expansion of SPCA",
          a: " Society for the Protection of Common Animals ",
          b: " Society for the Prevention of Cruelty to Animals ",
          c: " Society for the Prohibition of Cruelty to Animals ",
          d: " none ",
          correct: "b"
      },
{
         question : " The expansion on PQLI is",
          a: " Physical quality of life index ",
          b: " population quotient of life in India	",
          c: " poor quality of life in India ",
          d: " poverty, quality of life in India ",
          correct: "a"
      },
{
         question : " The function of ozone layer",
          a: " To prevent strong wind and rains ",
          b: " to facilitate precipitation at lower levels ",
          c: " to protect earth from sun’s harmful ultra-violet radiation ",
          d: " to increase the supply of oxygen ",
          correct: "c"
      },
{
         question : " The historical monument that is affected by acid rain is",
          a: " Taj Mahal ",
          b: " Pyramid of Egypt ",
          c: " Pisa Tower ",
          d: " Golden Temple ",
          correct: "a"
      },
{
          question : " The intensity of earthquake is measured in ____",
          a: " Beaufort scale ",
          b: " Richter scale ",
          c: " Mohs scale ",
          d: " Joules ",
          correct: "b"
      },
{
          question : " The major cause of depletion of ozone layer in the atmosphere is",
          a: " Freon Gases ",
          b: " CFC ",
          c: " N 2 O ",
          d: " CO 2",
          correct: "b"
      },
{
          question : " The chemical structure of Ozone is",
          a: " O 2",
          b: " O3",
          c: " O4",
          d: " Oz3",
          correct: "b"
      },
{
         question : " The controversial dam across the river Narmada?",
          a: " Sardar Sarovar ",
          b: " Hirakud ",
          c: " Bhakranangal ",
          d: " Sutlej ",
          correct: "a"
      },
{
          question : " The deadliest Tsunami in recorded history took place on",
          a: "26-Dec-2004",
          b: "26-Dec-2000",
          c: "15-Nov-1990",
          d: "15-Dec-1999",
          correct: "a"
      },
{
          question : " A disease which is caused due to air pollution is",
          a: "Asthma",
          b: "Lung infection",
          c: "Typhoid",
          d: "Both [a] and [b]",
          correct: "d"
      },
{
         question : " The environmental stresses caused by urban individuals are expressed by",
          a: " Ecological pyramid ",
          b: " Ecological footprint ",
          c: " Ecological indicators ",
          d: " Ecological index",
          correct: "b"
      },
{
          question : " Salmonellosis is a disease related to consumption of",
          a: " Chicken ",
          b: " Eggs ",
          c: " Mutton ",
          d: " All of these ",
          correct: "d"
      },
{
          question : " Soil pollution is caused by.",
          a: " Industrial Wastes ",
          b: " Detergents ",
          c: " Agrochemicals ",
          d: " All of these ",
          correct: "d"
      },
{
          question : " Some pollutants combine with hemoglobin and impede oxygen transport. Such pollutants are..",
          a: " SO 3",
          b: " N2 O ",
          c: " N2 O ",
          d: " All of these ",
          correct: "d"
      },
{
          question : " A disease which is caused due to air pollution is",
          a: "Asthma",
          b: "Lung infection",
          c: "Typhoid",
          d: "Both [a] and [b]",
          correct: "d"
      },
{
          question : " Spraying of DDT to kill insects’ causes’ pollution of...",
          a: " Air ",
          b: " Water ",
          c: " Soil ",
          d: " All of these ",
          correct: "d"
      },
{
          question : " Superbugs are",
          a: " Synthetic bug ",
          b: " Bacteria ",
          c: " Radio nucleotide ",
          d: " Industries ",
          correct: "b"
      },
{
          question : " The 3 R principles in waste management involves",
          a: " Reduce, Regain, Reuse ",
          b: " Reduce, Reuse, Recycle ",
          c: " Reduce, Reform, Reset ",
          d: " Reduce, Retain, Regain",
          correct: "c"
      },
{
          question : " The Anthrax disease is caused b:",
          a: " Virus ",
          b: " Bacteria ",
          c: " Protozoa ",
          d: " Helminthes",
          correct: "b"
      },
{
          question : " Public Health is not dependent on",
          a: " Safe drinking water ",
          b: " sufficient food ",
          c: " competitive market conditions ",
          d: " good  social conditions ",
          correct: "c"
      },
{
          question : " Public awareness of environment creates  	",
          a: " Environment protection ",
          b: " Environment degradation ",
          c: " Environmental  improvement ",
          d: " Environmental cultivation ",
          correct: "a"
      },
{
          question : " Presence of E. coli in water is an indication of",
          a: " Fecal contamination ",
          b: " Lead contamination ",
          c: " Viral contamination ",
          d: " Mercury  contamination ",
          correct: "a"
      },
{
          question : " Poisonous gas caused Bhopal gas tragedy",
          a: " Methyl isocyanate ",
          b: " Ethyl isocyante ",
          c: " Methyl isocyanide ",
          d: " Ethyl isocyamide ",
          correct: "a"
      },
{
         question : " Ozone layer is situated in which strata of artmosphere?",
          a: " Thermosphere ",
          b: " Stratosphere ",
          c: " ionosphere ",
          d: " mesosphere ",
          correct: "b"
      },
{
         question : " On which date was the Stockholm Conference on Human Environment held?",
          a: " July 6th 1974",
          b: " Aug 8th 1976",
          c: " June 5th 1972",
          d: " Dec 12th 1990",
          correct: "c"
      },
{
         question : " One third of the global cases of Tuberculosis is in",
          a: " Britain ",
          b: " Sweden ",
          c: " India ",
          d: " China ",
          correct: "c"
      },
{
          question : " Organ affected by pneumonia",
          a: " Liver ",
          b: " Kidney ",
          c: " Heart ",
          d: " Lungs ",
          correct: "d"
      },
{
         question : " Ozone",
          a: " strong poisonous form of Oxygen with 3 atoms in a molecule ",
          b: " A mix of various gases forming a protective cover ",
          c: " Purest form of Oxygen which increases its supply on earth ",
          d: " a strong and protective compound from Oxygen and Hydrogen ",
          correct: "a"
      },
{
          question : " Ozone in lower atmosphere is an example of …",
          a: " Primary pollutant ",
          b: " Secondary pollutant ",
          c: " Tertiary pollutant ",
          d: " Not a pollutant ",
          correct: "b"
      },
{
          question : " Ozone layer is",
          a: "20 – 50 km above the surface of the earth ",
          b: "70 to 90 kms above the earth ",
          c: "30– 40 kms below the earth ",
          d: "20 – 50 kms below the sea level ",
          correct: "a"
      },
{
         question : " National Maritime Day of India is celebrated on  	",
          a: " October 16",
          b: " April 05",
          c: " March 21",
          d: " May 22",
          correct: "b"
      },
{
          question : " Natural earthquakes are caused by  	",
          a: " Earth’s crust ",
          b: " deep seas ",
          c: "peak mountains",
          d: " forests ",
          correct: "a"
      },
{
          question : " Noise is  	",
          a: " Huge sound ",
          b: " Sound of vehicles ",
          c: " Undesirable and unwanted sound ",
          d: " Sound  of crackers ",
          correct: "c"
      },
{
          question : " Official date of Earth Day is on  	",
          a: " April 22",
          b: " March 21",
          c: " May 22",
          d: " June 05",
          correct: "a"
      },
{
          question : " On which date was the Stockholm Conference on Human Environment held?",
          a: " July 6th 1974",
          b: " Aug 8th 1976",
          c: " June 5th 1972",
          d: " Dec 12th 1990",
          correct: "c"
      },
{
         question : " India Government passed the Air act in the year",
          a: "1991",
          b: "1981",
          c: "1982",
          d: "2001",
          correct: "b"
      },
{
          question : " Infection of HIV is usually detected by which test",
          a: " Elisa test ",
          b: " Hybridization ",
          c: " Gram staining ",
          d: " None ",
          correct: "a"
      },
{
          question : " IPCC",
          a: "International Panel on Climate Change",
          b: " International Peace Conference for Climate ",
          c: " Intergovernmental Panel on Climate Change ",
          d: " Intercontinental Plans for Continuous ",
          correct: "c"
      },
{
          question : " Largest source of air pollution in cities are…",
          a: " Industries ",
          b: " Sewage ",
          c: " Automobiles ",
          d: " Tanneries ",
          correct: "c"
      },
{
          question : " Leader of ‘Narmada Bachao Andolan’",
          a: " Vandana Siva ",
          b: " Medha Patkar ",
          c: " Menaka Gandhi ",
          d: " Mayilamma ",
          correct: "b"
      },
{
          question : " Minamata disease is due to...",
          a: " Mercury poisoning ",
          b: " Lead poisoning ",
          c: " Arsenic poisoning ",
          d: " Cadmium  poisoning ",
          correct: "a"
      },
{
          question : " Mullaperiyar dam is in the district?",
          a: " Thrissur ",
          b: " Pathanamthitta ",
          c: " Idukki ",
          d: " Alappuzha ",
          correct: "c"
      },
{
          question : " El Nino",
          a: " a climate cycle in the Pacific Ocean impacting global weather patterns ",
          b: " Cold current in the Atlantic influencing South American weather ",
          c: "An annual underwater phenomenon affecting global weather",
          d: " A sub-saharan hot wind affecting global climate ",
          correct: "a"
      },
{
          question : " Environmental Protection Act was introduced in the year",
          a: "1986",
          b: "1988",
          c: "1972",
          d: "1989",
          correct: "a"
      },
{
         question : " Example for a bio-degradable polymer is",
          a: " Polyethylene ",
          b: " Polypropylene ",
          c: " Poly lactic acid ",
          d: " Polyester ",
          correct: "c"
      },
{
          question : " Exposure of human body to radiation may cause…",
          a: " Polio ",
          b: " Gastroenteritis ",
          c: " Haemophilia ",
          d: " Leukemia ",
          correct: "d"
      },
{
          question : " Increased heart beat, constriction of blood vessels and dilation of pupil are symptoms of...",
          a: " Sound pollution ",
          b: " Thermal pollution ",
          c: " Air pollution ",
          d: " Nuclear pollution ",
          correct: "a"
      },
{
          question : " BOD is used for the measurement of...",
          a: " Atmospheric pollution ",
          b: " Soil pollution ",
          c: " Water pollution ",
          d: " Nuclear pollution ",
          correct: "c"
      },
{
          question : " Causative organisms of Malaria",
          a: " Bacteria ",
          b: " Fungus ",
          c: " Plasmodium ",
          d: " Virus ",
          correct: "c"
      },
{
          question : " Component not released in the burning coal is…",
          a: " NO 2",
          b: " SO 2",
          c: " Fly Ash ",
          d: " O 2",
          correct: "d"
      },
{
          question : " Death rate of the population",
          a: " Mortality ",
          b: " Viability ",
          c: " Natality ",
          d: " Vitality",
          correct: "a"
      },
{
          question : " Ear muffs or Cotton plugs are used to reduce pollution of....",
          a: " Air ",
          b: " Noise ",
          c: " Thermal ",
          d: "Nuclear",
          correct: "b"
      },
{
          question : " EIA is the",
          a: " Economic Information Awareness",
          b: " Environmental Information Awareness ",
          c: " Environmental Impact Assessment ",
          d: " Environmental Impact Avoidance ",
          correct: "b"
      },
{
          question : " “Ozone Hole” is a  	",
          a: " Hole in the atmosphere ",
          b: " Destruction of ozone layer ",
          c: " Hole in the hydrosphere ",
          d: " Hole in the troposphere ",
          correct: "b"
      },
{
          question : " “Plumbism” is the disorder develops in man when exposed to....",
          a: " Lead ",
          b: " Mercury ",
          c: " Arsenic ",
          d: " CO ",
          correct: "a"
      },
{
          question : " A pollutant not released by exhaust of automobiles is…",
          a: " SO 2",
          b: " CO ",
          c: " Fly Ash ",
          d: " Hydrocarbon gases ",
          correct: "c"
      },
{
          question : " Acid rain contains",
          a: " Sulphuric acid ",
          b: " Hydrochloric acid ",
          c: " Oxalic acid ",
          d: " Acetic acid ",
          correct: "a"
      },
{
          question : " An example of natural pollutant is",
          a: " Forest fire ",
          b: " Natural Organic Decay ",
          c: " Volcanic eruptions ",
          d: " all of the above ",
          correct: "d"
      },
{
          question : " An example of non-biodegradable pollutant is",
          a: " Sewage ",
          b: " Plastic ",
          c: " Litter ",
          d: " Vegetable waste ",
          correct: "b"
      },
{
          question : " Birth rate is called",
          a: " Mortality ",
          b: " vital index ",
          c: " natality ",
          d: " viability ",
          correct: "c"
      },
{
          question : " Bishnoi women is connected to",
          a: " Hindi Film ",
          b: " Chipko movement ",
          c: " Climate change ",
          d: " Women rights ",
          correct: "b"
      },
{
          question : " The Residential and Commercial wastes mainly consist of:",
          a: " Food wastes ",
          b: " Card board ",
          c: " Packaging materials",
          d: " None of these ",
          correct: "a"
      }
// {
//           question : " Lead in water can cause",
//           a: " Eye disease ",
//           b: " Arthritis ",
//           c: " Kidney damage ",
//           d: " Hair falling ",
//           correct: "c"
//       },
// {
//           question : " Colorless odorless and non corrosive air pollutant is",
//           a: " Sulphur dioxide ",
//           b: " Carbon monoxide ",
//           c: " Carbon dioxide ",
//           d: "Ozone",
//           correct: "c"
//       },
// {
//           question : " Disease aggravated by air pollution is",
//           a: " Cholera ",
//           b: " Rheumatism ",
//           c: " Bronchitis ",
//           d: " Haemophilia ",
//           correct: "c"
//       },
// {
//           question : " Which of the following type of pollution can cause the outbreak of Jaundice?",
//           a: " Air ",
//           b: " Thermal ",
//           c: " Water ",
//           d: " Land ",
//           correct: "c"
//       },
// {
//           question : " Centre of Modern nuclear technology in India",
//           a: " CRAS ",
//           b: " SARC ",
//           c: " BARC ",
//           d: " None of these ",
//           correct: "c"
//       },
// {
//           question : " What is an Incinerator?",
//           a: " Furnace used for burning solid waste ",
//           b: " Furnace used for treating liquid waste ",
//           c: " Both a & b ",
//           d: " None of these ",
//           correct: "a"
//       },
// {
//           question : " Photochemical smog is called",
//           a: " Tokyo smog ",
//           b: " London smog ",
//           c: " Los Angeles smog ",
//           d: " None ",
//           correct: "c"
//       },
// {
//           question : " The combustion of waste in the absence of Oxygen is called",
//           a: " Haemolysis ",
//           b: " Pyrolysis ",
//           c: " Hydrolysis ",
//           d: " None ",
//           correct: "b"
//       },
// {
//           question : " The heating of earths atmosphere due to trapped radiation is known as",
//           a: " Global warming ",
//           b: " Glass-House effect ",
//           c: " Thermal effect ",
//           d: " Green House Effect ",
//           correct: "d"
//       },
// {
//           question : "Thickness of plastic cover permissible to use",
//           a: "50 Microns ",
//           b: "20 Microns ",
//           c: "100 Microns ",
//           d: "10 Microns ",
//           correct: "c"
//       },
// {
//           question : " A biodegradable plastic developed by Biopak Corporation Australia",
//           a: " Biopol ",
//           b: " Pet ",
//           c: " Polyester ",
//           d: " PVC ",
//           correct: "a"
//       },
// {
//           question : " The state which constituted green bench",
//           a: " Kerala ",
//           b: " Tamilnadu ",
//           c: " Assam ",
//           d: " Madhya Pradesh ",
//           correct: "b"
//       },
// {
//           question : " Name the endangered animal which is protected in Rajamalai National park",
//           a: " Chital ",
//           b: " Black buck ",
//           c: " Nilgiri Tahr ",
//           d: " None ",
//           correct: "c"
//       },
// {
//           question : " Animals and plants are best protected in",
//           a: " Zoos ",
//           b: " Botanical Gardens ",
//           c: " National Parks ",
//           d: " Sanctuaries ",
//           correct: "c"
//       },
// {
//           question : " Worlds first Teak Forest was planted in 1842 in Kerala. Identify the place",
//           a: " Wayanad ",
//           b: " Nilambur ",
//           c: " Silent Valley ",
//           d: " Nelliyampathy ",
//           correct: "b"
//       },
// {
//           question : " The Native Place of Redwood trees?",
//           a: " Australia ",
//           b: " Amazon ",
//           c: " California ",
//           d: " Thailand ",
//           correct: "c"
//       },
// {
//           question : " What is meant by ex-situ conservation?",
//           a: " Conservation of a species by protecting its habitat along with all other species living t here ",
//           b: " Conservation of forest eco system ",
//           c: " Conservation of a species outside its natural habitat ",
//           d: " Conservation of plants",
//           correct: "c"
//       },
// {
//           question : " Agastyamalai Biosphere reserve is in",
//           a: " Pathanamthitta ",
//           b: " Thiruvananthapuram ",
//           c: " Idukki ",
//           d: " Wayanad ",
//           correct: "b"
//       },
// {
//           question : " First National Park in India",
//           a: " Jim Corbert National Park ",
//           b: " Bandipur National Park ",
//           c: " Gir National Park ",
//           d: " Sunderbans National Park]",
//           correct: "a"
//       },
// {
//           question : " Eravikulam National Park conserves",
//           a: " Lion tailed macaque ",
//           b: " Tiger ",
//           c: " Elephant ",
//           d: " Nilgiri Tahr ",
//           correct: "d"
//       },
// {
//           question : " The most endangered ecosystem in India",
//           a: " Shola forest ecosystem ",
//           b: " Evergreen forest ecosystem ",
//           c: " Pond ecosystem ",
//           d: " Tundra Ecosystem ",
//           correct: "b"
//       },
// {
//           question : " Many wild plant and animals are on the verge of extinction due to",
//           a: " Habitat destruction ",
//           b: " Climatic changes ",
//           c: " Non availability of food ",
//           d: " None of the above ",
//           correct: "a"
//       },
// {
//           question : " In which year Silent Valley was declared as National Park",
//           a: "1988",
//           b: "1982",
//           c: "1984",
//           d: " 1981",
//           correct: "c"
//       },
// {
//           question : " The Red Data book which lists endangered species is maintained by",
//           a: " UNO ",
//           b: " WHO ",
//           c: " IUCN ",
//           d: " WWF ",
//           correct: "c"
//       },
// {
//           question : "First Biosphere reserve in India",
//           a: " Nilgiri ",
//           b: " Agastyamala ",
//           c: " Eravikulam ",
//           d: " Chinnar ",
//           correct: "a"
//       },
// {
//           question : " Which of the following is an extinct species?",
//           a: " Tiger ",
//           b: " Peacock ",
//           c: " Elephant ",
//           d: " Rhino ",
//           correct: "b"
//       },
// {
//           question : " Which of the following is an extinct species?",
//           a: " Tiger ",
//           b: " Lion ",
//           c: " Dodo ",
//           d: " Ostrich ",
//           correct: "c"
//       },
// {
//           question : " Snow leopard is found in which National Park?",
//           a: " Kaziranga ",
//           b: " The Great Himalayan ",
//           c: " Bharatpur ",
//           d: " Nagarhole ",
//           correct: "b"
//       },
// {
//           question : " Largest reptile in the world",
//           a: " Dragon ",
//           b: " Anaconda ",
//           c: " Crocodile ",
//           d: " Python ",
//           correct: "b"
//       },
// {
//           question : " Asiatic lion is found only in  	",
//           a: " Gir Forest ",
//           b: " Manas ",
//           c: " Kasiranga ",
//           d: " Sundarbans ",
//           correct: "a"
//       },
// {
//           question : " The one-horned Rhinoceros is now restricted to which state?",
//           a: " Maharashtra ",
//           b: " Gujarat ",
//           c: " Assam ",
//           d: "Uttar Pradesh",
//           correct: "d"
//       },
// {
//           question : " The only known breeding colony of the greater and lesser Flamingos in our country is seen in
// ………………….. desert.",
//           a: " The Great Rann of Kutch ",
//           b: " The Thar ",
//           c: " Ladakh ",
//           d: " Atacama ",
//           correct: "a"
//       },
// {
//           question : " Some species of plants and animals are extremely rare and may occur only at a few locations are called",
//           a: " Endemic ",
//           b: " Endangered ",
//           c: " Vulnerable ",
//           d: " Threatened ",
//           correct: "b"
//       },
// {
//           question : " In which Indian state is Corbet National park located",
//           a: " Madya Pradesh ",
//           b: " Uttarakhand ",
//           c: " Kerala ",
//           d: " Tamilnadu ",
//           correct: "b"
//       },
// {
//           question : " The first national park of Kerala",
//           a: " Aralam ",
//           b: " Kottayam ",
//           c: " Idukki ",
//           d: " Iravikulam ",
//           correct: "d"
//       },
// {
//           question : " In which year was Project Tiger launched?",
//           a: "1973",
//           b: "1964",
//           c: "1998",
//           d: "1970",
//           correct: "a"
//       },
// {
//           question : " Earth summit of Rio de Janeiro 1992) resulted in",
//           a: " Compilation of Red list ",
//           b: " Establishment of biosphere reserves ",
//           c: " Conservation of biodiversity ",
//           d: " IUCN ",
//           correct: "c"
//       },
// {
//           question : " All the genes of a population is called",
//           a: " Gene pool ",
//           b: " Genome ",
//           c: " Gene bunch ",
//           d: " Gene population",
//           correct: "a"
//       },
// {
//           question : " A set of organisms that resemble one another in appearance and behaviour is called a_______",
//           a: " Exons ",
//           b: " Prions ",
//           c: " Species ",
//           d: " guilds ",
//           correct: "c"
//       },
// {
//           question : " The phenomenon of occurrence of additional species found in the ecotone or transitional zone between adjoining ecosystems is known as_________",
//           a: " Edge effect,
//           b: " Root effect ",
//           c: " Raman effect ",
//           d: " Coolidge effect ",
//           correct: "a"
//       },
// {
//           question : " Who among the following is commonly called ‘Bird Man of India’?",
//           a: " Salim Ali ",
//           b: " M.S. Swaminathan ",
//           c: " M.C. Mehta ",
//           d: " Raphel Emerson ",
//           correct: "a"
//       },
// {
//           question : " The only ape found in India",
//           a: " Gorilla ",
//           b: " Chimpanzee ",
//           c: " Hoolock gibbon ",
//           d: " Oranguttan ",
//           correct: "c"
//       },
// {
//           question : " Which of the following region has maximum diversity?",
//           a: " Mangroves ",
//           b: " temperate rainforest ",
//           c: " Taiga ",
//           d: " coral reefs ",
//           correct: "d"
//       },
// {
//           question : " Which plants die after flowering?",
//           a: " Lotus ",
//           b: " Bamboo ",
//           c: " Chrysanthemum ",
//           d: " Butea ",
//           correct: "b"
//       },
// {
//           question : " Which tree is known as Coral tree?",
//           a: " Quercus ",
//           b: " Dipterocarps ",
//           c: " Erythrina ",
//           d: " Zizypus ",
//           correct: "c"
//       },
// {
//           question : " Salim Ali Centre for Ornithology and Natural history is located at ____",
//           a: " Pune ",
//           b: " Hyderabad ",
//           c: " Kerala ",
//           d: " Coimbatore ",
//           correct: "d"
//       },
// {
//           question : " World wildlife week is observed during",
//           a: " First week of October ",
//           b: " Last week of October ",
//           c: " Third week of October ",
//           d: " First  week of September ",
//           correct: "a"
//       },
// {
//           question : " Zoological Survey of India is at",
//           a: " Delhi ",
//           b: "Mumbai",
//           c: " Kolkata ",
//           d: "Chennai",
//           correct: "c"
//       },
// {
//           question : " The Salim Ali Bird sanctuary is located at",
//           a: " Pondicherry ",
//           b: " Thattekad ",
//           c: " Anakkatti ",
//           d: " Kalakkadj",
//           correct: "b"
//       }


]: (student_class=="Eigth") ?
[
  {
      question: " What is ‘temporary threshold shift’?",
      a: "Hearing loss due to excessive noise",
      b: "Noise that is untolerable",
      c: "Tolerable noise",
      d: "naudible noise",
      correct: "a"
  },
  {
      question : " What is Bagasse? What is it used for?",
      a: "Sugar cane waste – to make paper",
      b: "Biogas – used as fuel	",
      c: "Liquid waste – as fertilizer",
      d: "Vermi compost – as fertilizer",
      correct: "a"
  },
  {
      question : " What is Carcinogen?",
      a: "Drugs for curing infectious disease",
      b: "Drugs used for curing cancer",
      c: "Cancer causing agent",
      d: "Food colourants",
      correct: "c"
  },
  {
      question : " What is GIS?",
      a: "Geographical Information System",
      b: "Geological Information System",
      c: "Geographical Index System",
      d: "Geographical Information Status",
      correct: "a"
  },
  {
      question : " What is meant by GM foods?",
      a: "Growth modified foods",
      b: "Genetically modified food",
      c: "Growth marked foods",
      d: "Good mobility food",
      correct: "b"
  },
  {
      question: " What is the average increase in temperature over last century?",
      a: "0.6",
      b: "0.2",
      c: "0.7",
      d: "0.8",
      correct: "d"
  },
  {
      question : " Where was the Stockholm conference on Human Environment held?",
      a: "Sweden",
      b: "Austria",
      c: "India",
      d: "Greece",
      correct: "a"
  },
  {
      question : " Which among the following is a water borne disease?",
      a: "Cholera",
      b: "Tuberculosis",
      c: "AIDS",
      d: "Dermatitis",
      correct: "a"
  },
  {
      question : " Which blood cells get affected by HIV?",
      a: "RBC",
      b: "Lymphocytes",
      c: "Monocytes",
      d: "Basophil",
      correct: "b"
  },
  {
      question : " Which group of mosquitoes are the vectors of malaria?",
      a: "Culex",
      b: "Aedes",
      c: "Anopheles",
      d: "Mansonia",
      correct: "c"
  },
  {
      question: " Which heavy metal is the cause for black foot disease?",
      a: "Cadmium",
      b: "Arsenic",
      c: "Mercury",
      d: "Lead",
      correct: "b"
  },
  {
      question : " Which is the first state in India that enforced a ban to the manufacture and use of plastics",
      a: "Kerala",
      b: "West Bangal",
      c: "Uttarpradesh",
      d: "Delhi",
      correct: "c"
  },
  {
      question : " TWhich is the warmest year on record?",
      a: "1998",
      b: "2010",
      c: "2015",
      d: "2016",
      correct: "d"
  },
  {
      question : " Which of the following is considered a nuclear disaster?",
      a: "Bhopal Tragedy of 1984",
      b: "Chernobyl USSR",
      c: "Three mile incident",
      d: "both b &c",
      correct: "d"
  },
  {
      question : " Which one is an example for megacity in India?",
      a: "Kochi",
      b: "Mumbai",
      c: "Bangalore",
      d: "Madras359",
      correct: "b"
  },
  {
      question: " Which one is the permanent sterilization method used for females?",
      a: "Tubectomy",
      b: "Vasectomy",
      c: "Microtomy",
      d: "Contraceptive pills",
      correct: "a"
  },
  {
      question : " Which state proposed a ban on all types of polythene packing for the first time in India?",
      a: "Himachal Pradesh",
      b: "Madhya Pradesh",
      c: "Kerala",
      d: "Karnataka",
      correct: "a"
  },
  {
      question : " Who coined the slogan of ‘Chipko Movement – Ecology is Permanent Economy?",
      a: "Jawaharlal Nehru",
      b: "Salim Ali",
      c: "Sunderlal Bahuguna",
      d: "Rachel Carson",
      correct: "d"
  },
  {
      question : " Who had stated in the Stockholm Conference in 1972 that poverty was the greatest polluter?",
      a: "Indira Gandhi",
      b: "Mahatma Gandhi",
      c: "Rajiv Gandhi",
      d: "Jawaharlal Nehru",
      correct: "a"
  },
  {
      question : " Wild life protection act was formulated during the period of  ",
      a: "Mrs. Indira Gandhi",
      b: "Lal Bahadur Shasthri",
      c: "Rajiv Gandhi",
      d: "Morarji Desai",
      correct: "a"
  },
  {
      question: " With the signing of ________	in 1987, a treaty for the protection of ozone layer, the use of __________ was to be banned by the year _________",
      a: "Kyoto Protocol, fossil fuels, 2010",
      b: "GATT, opium, 2000",
      c: "BOLT, Ammonia, 2000",
      d: "Montreal Protocol, CFCs, 2000",
      correct: "d"
  },
  {
      question : " World environment day is observed every year marks the anniversary of",
      a: "Ramsar Convention-1971",
      b: "Stockholm conference-1972",
      c: "Rio de Janerio Earth Summit-1992",
      d: "Indian Forest Conservation Act -1982",
      correct: "b"
  },
  {
      question : " World Water Day is celebrated on",
      a: "May 22",
      b: "June 05",
      c: "March 22",
      d: "May 11",
      correct: "c"
  },
  {
      question : " Sedimentation is a",
      a: "Primary water treatment",
      b: "Secondary water treatment",
      c: "Tertiary water treatment",
      d: "None of these",
      correct: "d"
  },
  {
      question : " Rain during November is more acidic than monsoon rain due to",
      a: "Dissolved CO2",
      b: "Dissolved SO2",
      c: "Dissolved NO2",
      d: "None of the above",
      correct: "b"
  },

  {
      question : " Which chemical was responsible for Bhopal gas tragedy?",
      a: "Methyl iso Cyanate",
      b: "Benzene Hexa Chloride",
      c: "Tri Nitro Toluene",
      d: "B & C",
      correct: "a"
  },
  {
      question : " Ganga Action Plan in India was launched in the year ",
      a: "1988",
      b: "1986",
      c: "1980",
      d: "1978",
      correct: "b"
  },
  {
      question : " Enrichment	of	water	body	by	nutrients	like	hosphorus	and	nitrogen	called",
      a: "Succession",
      b: "Eutrophication",
      c: "Stratification",
      d: "Climax Vegetation",
      correct: "b"
  },
  {
      question : " The worst nuclear accident happened to date is occurred at ",
      a: "Chernobyl in 1986",
      b: "Three Mile Power Plant in 1979	",
      c: "Sellafield in 1957",
      d: "Fukushima in 2011",
      correct: "a"
  },
  {
      question: " The legally binding international agreement to reduce Greenhouse gases by 5% 2012	is",
      a: "Vienna convention",
      b: "Montreal Protocol",
      c: "Kyoto Protocol",
      d: "None of the above",
      correct: "c"
  },
  {
      question : " Which of the following enhances soil fertility?",
      a: "Crop rotation",
      b: "Improved methods of agriculture",
      c: "Using new seed varieties",
      d: "Irrigation",
      correct: "a"
  },
  {
      question : " Salinization is _________",
      a: "Accumulation of salts in water",
      b: "Accumulation of salts in soil",
      c: "Accumulation of salts in body",
      d: "Accumulation of salts in animals",
      correct: "b"
  },
  {
      question : " What is oil slick?",
      a: "Boiled oil",
      b: "Cooled oil",
      c: "Thin film of oil in sea water",
      d: "Oil in deep sea",
      correct: "b"
  },
  {
      question : " Cigarette smoking exposes one to _______",
      a: "Sulphur dioxide",
      b: "Carbon dioxide",
      c: "Nitrogen peroxide",
      d: "Carbon monoxide",
      correct: "d"
  },
  {
      question: " Euro II standard refers to _________",
      a: "Lowering sulfur content in fuel",
      b: "Increasing sulfur content in fuel",
      c: "Lowering carbon content in fuel",
      d: "increasing carbon content in fuel",
      correct: "c"
  },
  {
      question : " What is temporary threshold shift?",
      a: "Hearing loss due to excessive noise",
      b: "Noise that is untolerable",
      c: "Tolerable noise",
      d: "Inaudible noise",
      correct: "a"
  },
  {
      question : " Acid is an example of ________",
      a: "Corrosive waste",
      b: "Infectious waste",
      c: "Radioactive waste",
      d: "Ignitable waste",
      correct: "a"
  },
  {
      question : " Any unfavorable alteration of the environment may be called as",
      a: "Eutrophication",
      b: "Environmental pollution",
      c: "Biomagnification",
      d: "Bioaccumulation",
      correct: "b"
  },
  {
      question : " The presence of solid, liquid or gaseous compounds, which may not be normally present, or in excess concentration in the atmosphere is called",
      a: "Air pollution",
      b: "Water pollution",
      c: "Soil pollution",
      d: "Radioactive pollution",
      correct: "a"
  },
  {
      question: " Air pollution from automobiles can be controlled by fitting",
      a: "Electrostatic precipitator",
      b: "wet scrubber",
      c: "Catalytic converter",
      d: "All the above",
      correct: "c"
  },
  {
      question : " Which of the following is a natural source of Air pollution?",
      a: "Acid rain",
      b: "Precipitation",
      c: "Storms",
      d: "Volcanic eruptions",
      correct: "d"
  },
  {
      question : " Effect of carbon monoxide on blood, causing",
      a: "H2C03",
      b: "COHb",
      c: "C02Hb",
      d: "HbCO2",
      correct: "d"
  },
  {
      question : " Which of the following is a biodegradable pollutant?",
      a: "DDT",
      b: "Sewage",
      c: "CFC",
      d: "Freons",
      correct: "b"
  },
  {
      question : " The major green house gas which is responsible for causing about 60% of the green house effect on earth among the following is",
      a: "Carbon monoxide",
      b: "Methane",
      c: "NOx",
      d: "Carbon dioxide",
      correct: "a"
  },
  {
      question : " Which of the following is not pollutant causing water pollution?",
      a: "Biodegradable organic waste",
      b: "Non biodegradable organic chemicals",
      c: "Inorganic substances",
      d: "None of these",
      correct: "a"
  },
  {
          question : " Which among the following is not a primary air pollutant?",
          a: "Oxides of nitrogen",
          b: "Volatile organic compounds like hydrocarbons",
          c: "suspended particulate matter",
          d: "PAN",
          correct: "a"
      },

{
          question : " Longer exposure to NO2 even in small concentrations may cause disease pertaining to",
          a: "Liver",
          b: "Lungs",
          c: "Kidneys",
          d: "Heart",
          correct: "a"
      },

{
          question : " Carbon dioxide reacts with moisture in the atmosphere forming",
          a: "H2C02",
          b: "H2C03",
          c: "COHb",
          d: "CaHC03",
          correct: "a"
      },

{
          question : " Global warming means",
          a: "Increase in solar radiation",
          b: "Increase in Earth's Body Temperature",
          c: "Acid Rain",
          d: "All the above",
          correct: "a"
      },

{
          question : " Which of the following is not a Green House Gas?",
          a: "Ozone",
          b: "C02",
          c: "Water vapour",
          d: "SO2",
          correct: "a"
      },

{
          question : " Which of the following is not a solution for Global warming?",
          a: "Reducing fossil fuel consumption",
          b: "Plantation of more Trees",
          c: "Deforestation",
          d: "None of the above",
          correct: "C"
      },


{
          question : " Important sources of land pollution are",
          a: "Industrial Wastes",
          b: "Agricultural Wastes",
          c: "Both a & b",
          d: "None of the above",
          correct: "a"
      },

{
          question : " GreenHouse effect causes",
          a: "Rise in temperature of earth",
          b: "Increase in rainfall",
          c: "Lowering of acid rain",
          d: "Lowering in temperature of earth",
          correct: "a"
      },

{
          question : " Climate and global air circulations are mainly affected by the properties of",
          a: "Water and air",
          b: "Temperature",
          c: "Precipitation",
          d: "None of the above",
          correct: "a"
      },

{
          question : " What is the maximum allowable concentration of fluorides in drinking water?",
          a: "3.0 mg/L",
          b: "2.5 mg/L",
          c: "2.0 mg/L",
          d: "1.5mg/L",
          correct: "a"
      },

{
          question : " Domestic sewage is",
          a: "Waste water generated from kitchens and bathrooms",
          b: " Waste water from industries",
          c: "Wastewater from residential areas",
          d: "None of the above",
          correct: "a"
      },

{
          question : " The noise is measured in",
          a: "Decibels",
          b: "Joule",
          c: "ppm	",
          d: "Celsius",
          correct: "a"
      },

{
          question : " Contribution of carbon dioxide to global warming from industries",
          a: "0.5",
          b: "0.24",
          c: "0.25	",
          d: "0.75",
          correct: "a"
      },

{
          question : " Which of the following gases is not concerned with the greenhouse effect?",
          a: "C02",
          b: "CH4",
          c: " S02",
          d: "Water Vapour",
          correct: "a"
      },

{
          question : " During greenhouse effect, carbon dioxide and water vapours absorbs",
          a: "Short wave radiations",
          b: "Long wave radiations",
          c: "Solar radiation",
          d: "UV radiations",
          correct: "a"
      },

{
          question : " Acid rains are more prominent in",
          a: "Temperate regions",
          b: "Tropical regions",
          c: "Arid regions",
          d: "Equally prominent in all",
          correct: "c"
      },

{
          question : " The important gaseous pollutants contributing to acid rain are",
          a: "S02andNOx",
          b: "C02 and H2S",
          c: "NOxand03",
          d: "None of the above",
          correct: "a"
      },

{
          question : " The ozone depletion in the stratosphere is chiefly caused by the release of",
          a: "Chlorofluorocarbons",
          b: "Carbon dioxide",
          c: "Methane",
          d: "None of the above",
          correct: "a"
      },

{
          question : " The highest value of Acid Rain Recorded was:",
          a: "4.5",
          b: "5.7",
          c: "7.2",
          d: "2",
          correct: "a"
      },

{
          question : " Movement of Nutrients from the soil by the Acid Rain is called:",
          a: "Infiltration",
          b: "Transpiration",
          c: "Leaching",
          d: "Exfiltration",
          correct: "a"
      },

{
          question : " The term acid rain was coined in the year",
          a: "1952",
          b: "1852",
          c: "1652",
          d: "1752",
          correct: "a"
      },

{
          question : " The major contributors to the acid rain are known as",
          a: "Precursors",
          b: "Processors",
          c: "Protons",
          d: " Pollutants",
          correct: "a"
      },

{
          question : " Which of the following is the remedial measure for acid rain?",
          a: "Reducing the release of oxides of nitrogen and sulphur into the atmosphere",
          b: "Use of coal, free from sulphur",
          c: "Use of electrostatic precipitator and catalytic converters",
          d: "All of the above",
          correct: "a"
      },

{
          question : " The pH of acid rain is",
          a: "Between 3-5",
          b: "Between 5-7",
          c: "Between 1-3",
          d: "Between 7-9",
          correct: "a"
      },

{
          question : " Acid rain affects",
          a: "Materials",
          b: "Plants",
          c: "Soil",
          d: "All of the above",
          correct: "b"
      },

{
          question : " Ozone layer is measured in",
          a: "Dobson Units",
          b: "Millimetres",
          c: "Decibels",
          d: "Centimetres",
          correct: "a"
      },

{
          question : " Animal husbandry may result in",
          a: "Global warming",
          b: "Ozone depletion",
          c: "Genetic Damage",
          d: "None of the above",
          correct: "a"
      },

{
          question : " Freons are called",
          a: "Hydrocarbons",
          b: "Ozone",
          c: "Methane",
          d: "Solvents",
          correct: "a"
      },

{
          question : " Karnataka State Pollution Control Board was established in the year",
          a: "1974",
          b: "1976",
          c: "1982",
          d: "1986",
          correct: "a"
      },

{
          question : " Which of the following is the authority to monitor state industrial effluents?",
          a: "Centre for science and development",
          b: "State pollution control board",
          c: "Indian environmental association",
          d: "none of these",
          correct: "b"
      },

{
          question : " Environmental education is targeted to",
          a: "General public",
          b: "Technicians and scientists",
          c: "Professional social groups",
          d: "All of these",
          correct: "d"
      },

{
          question : " Environment Protection Act of 1986 is meant for",
          a: "Waste management",
          b: "Desert management",
          c: "Forest management",
          d: "Protection of human environment including human, plants, animals and property",
          correct: "a"
      },

{
          question : " World environment day is celebrated on",
          a: "June 5th",
          b: "November 5th",
          c: " December 5th",
          d: "April 5th",
          correct: "a"
      },
{
          question : " The air prevention and control of pollution Act was enacted in the year",
          a: "1987",
          b: "1974",
          c: "1981",
          d: "1986",
          correct: "a"
      },

{
          question : " The first major environmental protection law promulgated in India was",
          a: "Environmental Act",
          b: "Water Act",
          c: "Air Act",
          d: "None of these",
          correct: "a"
      },

{
          question : " Environmental protection is the responsibility of",
          a: "Government of India",
          b: "NGOs",
          c: "Individuals",
          d: "All of the above",
          correct: "a"
      },

{
          question : " Environmental protection is a fundamental duty of the citizen of India under the",
          a: "Article 51-A (g)",
          b: "48-A",
          c: "47",
          d: "21",
          correct: "a"
      },

{
          question : " The environmental (protection) act of India was enacted in the year",
          a: "1956",
          b: "1966",
          c: "1986",
          d: "1996",
          correct: "a"
      },

{
          question : " Name the disease caused by mercury poisoning in Japan",
          a: "Itai itai",
          b: "Xeroderma pigmentosum",
          c: "Measles",
          d: "Minamata disease",
          correct: "b"
      },

{
          question : " The place where the worst nuclear disaster took place?",
          a: "Washington",
          b: "Chernobyl",
          c: "Bhopal",
          d: "Japan",
          correct: "a"
      },

{
          question : " Aquatic life is damaged by",
          a: "Sound pollution",
          b: "Air Pollution",
          c: "Thermal pollution",
          d: "All of these",
          correct: "c"
      },

{
          question : " Ozone depletion is mostly caused by",
          a: "CO2",
          b: "Ccl",
          c: "CFCs",
          d: "CO",
          correct: "c"
      },

{
          question : " Global warming is caused by",
          a: "GHGs",
          b: "CFCs",
          c: "CH4",
          d: "NO2",
          correct: "a"
      },

{
          question : " The darkening of the skin due to arsenic poisoning is called",
          a: "Black syndrome",
          b: "Diffuse melanosis",
          c: "Skin scaling",
          d: "None of these",
          correct: "b"
      },

{
          question : " Boron, Zinc and Manganese are usually referred to as",
          a: "Micronutrients",
          b: "Macronutrients",
          c: "Soil Vitamins",
          d: "MBZ nutrients",
          correct: "a"
      },

{
          question : " Incineration of Municipal waste involves",
          a: "Oxidation",
          b: "Deduction",
          c: "Redox action",
          d: "Disintegration",
          correct: "a"
      },

{
          question : " The famous Minamata disease in Japan is due to the accumulation of in fishes",
          a: "Cadmium",
          b: "Mercury",
          c: "Zinc",
          d: "Lead",
          correct: "b"
      },

{
          question : " Soil pollution is caused by",
          a: "Aerosol",
          b: "Ozone",
          c: "Acid Rain",
          d: "PAN",
          correct: "c"
      },

{
          question : " GreenHouse effect is caused by",
          a: "Increase in CO2",
          b: "Increase in O2",
          c: "Decrease in O2",
          d: "Decrease in CO2",
          correct: "a"
      },

{
          question : " is the poisonous gas leaked during Bhopal gas tragedy",
          a: "MIC	",
          b: "PVC",
          c: "Teflon",
          d: "Hydroen Sulphide",
          correct: "a"
      },

{
          question : " The term Nuclear winter is associated with",
          a: "Nuclear War",
          b: "Nuclear disarmament",
          c: "Nuclear weapon testing",
          d: "After effect of a nuclear explosion",
          correct: "d"
      },

{
          question : " The phenomenon of accumulation of non-biodegradable pesticides in human beings",
          a: "Biomagnification",
          b: "Bioaccumulation",
          c: "Biodegradation",
          d: "Bioremediation",
          correct: "b"
      },

{
          question : " Example for a physical pollutant",
          a: "Water",
          b: "Air",
          c: "Radiation",
          d: "Plant",
          correct: "c"
      },

{
          question : " DDT is a	pollutant",
          a: "Biodegradable",
          b: "Non biodegradable",
          c: "Un-biodegradable",
          d: "Naturally degradable",
          correct: "b"
      },

{
          question : " Eutrophication results from",
          a: "Agricultural and sewage water",
          b: "Vehicle exhaust",
          c: "Pesticides",
          d: "Industrial effluents",
          correct: "a"
      },

{
          question : " What is meant by root zone process?",
          a: "A control measure to prevent water pollution",
          b: "A process by which roots of plants are spread on the ground",
          c: "A control measure to prevent soil pollution",
          d: "None of these",
          correct: "a"
      },

{
          question : " Exxon Valdez?",
          a: "Oil Tanker which sank in 1989 along the coast of Alaska and marine life seriously affected",
          b: "A plane which crashed and caused death of human life",
          c: "A ship which wrecked on the coast of India",
          d: "None of these",
          correct: "a"
      },

{
          question : " BOD stands for",
          a: "Biological Oxygen Decrease",
          b: "Biotic Oxygen Demand",
          c: "Biological Oxygen Demand",
          d: "None of the above",
          correct: "c"
      },
{
          question : " Which of the following units is used to measure the intensity of noise?",
          a: "Decibel",
          b: "Phon",
          c: "Hz",
          d: "Watts/m",
          correct: "a"
      },

{
          question : " Human ear is most sensitive to noise in which of the following frequency range?",
          a: "1-2 kHz",
          b: "10-12 kHz",
          c: "100-500 Hz",
          d: "13-16 Hz",
          correct: "d"
      },

{
          question : " Which of the following pairs regarding typical composition of hospital wastes is incorrect?",
          a: "Plastics: 9-12%",
          b: "Metals: 1-2%",
          c: "Ceramic: 8-10%",
          d: "Biodegradable: 35-40%",
          correct: "d"
      },

{
          question : " Maximum soot is released from_________",
          a: "Petrol vehicles",
          b: "Diesel Vehicles",
          c: "CNG vehicles",
          d: "Thermal power plants",
          correct: "d"
      },

{
          question : " Surface ozone is produced from_________",
          a: "Transport sector",
          b: "Textile industry",
          c: "Carbon monoxide",
          d: "None of the above",
          correct: "a"
      },
{
          question : " In the metro city of Kolkata, the major cause of air pollution is___________",
          a: "Cement plants",
          b: "Chemical industry",
          c: "Hydrocarbons",
          d: "Water vapours",
          correct: "a"
      },

{
          question : " Which of the following is the main discharge from coal based power plants (thermal plants)?",
          a: "SPM",
          b: "Smog",
          c: "Fly ash",
          d: "None of the above",
          correct: "c"
      },


{
          question : " The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
          a: "Nitrates",
          b: "Fluorides",
          c: "Sulphates",
          d: "Oxides",
          correct: "a"
      },

{
          question : " Which of the following metal is responsible for Minamata disease?",
          a: "Mercury",
          b: "Chromium",
          c: "Cadmium",
          d: "Iron",
          correct: "a"
      },
{
          question : " Intake of lead may primarily cause damage of the_______",
          a: "Brain",
          b: "Liver",
          c: "Lung",
          d: "Kidney",
          correct: "a"
      },

{
          question : " Which of the following geographic areas is the largest Source of CO2 emissions from burning fossil fuel?",
          a: "China",
          b: "North America",
          c: "Russia",
          d: "European Union",
          correct: "b"
      },

{
          question : " Industries generating hazardous waste are classified as__________",
          a: "Brown",
          b: "Yellow",
          c: "Green",
          d: "Red",
          correct: "d"
      },
{
          question : " Which of the following greenhouse gases are entirely anthropogenic in origin?",
          a: "Water vapour",
          b: "CFCs",
          c: "Carbon dioxide",
          d: "Methane",
          correct: "b"
      },

{
          question : " Peroxyacyl nitrate (PAN) is a by-product of_________",
          a: "Photochemical smog",
          b: "Sulphurous smog",
          c: "London smog",
          d: "None of the above",
          correct: "a"
      },

{
          question : " The balance in oxygen level is maintained by________",
          a: "Photosynthesis and cellular respiration",
          b: "Industrial emissions of gases",
          c: "Release of ozone in upper atmosphere",
          d: "None of the above",
          correct: "a"
      },

{
          question : " Which of the following methods can be used to increase the supply of usable, good quality water?",
          a: "Chlorination",
          b: "Cloud seeding",
          c: "Metallurgy",
          d: "None of these",
          correct: "b"
      },

{
          question : " Ozone depletion is caused due to increase in the level of___________",
          a: "Water vapour",
          b: "Oxygen",
          c: "Chlorofluorocarbon",
          d: "Carbon monoxide",
          correct: "c"
      },
{
          question : " What type of chemical weathering is enhanced by acid rain?",
          a: "Hydrolysis",
          b: "Dissolution",
          c: "Oxidation",
          d: "None of the above",
          correct: "a"
      },
{
          question : " What process causes the disintegration of rock at or near the earth's surface?",
          a: "Physical weathering",
          b: "Chemical weathering",
          c: "Erosion",
          d: "None of the above",
          correct: "a"
      },
{
          question : " Which of the following gas affects human health by reducing the blood's ability to carry oxygen to different parts of the body?",
          a: "Carbon monoxide",
          b: "Carbon dioxide",
          c: "Sulphur dioxide",
          d: "Nitrous dioxide",
          correct: "a"
      },
{
          question : " Nitrogen oxide affects human health by_________",
          a: "Causing irritation to the eyes and skin",
          b: "Aggravating asthma problem",
          c: "Decreasing blood's ability to transport oxygen",
          d: "None of the above",
          correct: "b"
      },

{
          question : " The air pollutants are mainly classified as___________",
          a: "Point source and nonpoint source",
          b: "Primary and secondary pollutants",
          c: "Natural or anthropogenic pollutants",
          d: "None of the above",
          correct: "b"
      },


{
          question : " The best way to dispose plant waste is___________",
          a: "Burning",
          b: "Composting",
          c: "Dumping in a hilly area",
          d: "Incineration",
          correct: "b"
      },


{
          question : " Which of the following is not one of the major environmental problems resulting from human interference in the nitrogen cycle?",
          a: "Global warming due to release of nitrous oxide",
          b: "Acid rain",
          c: "Eutrophication",
          d: "Ozone depletion",
          correct: "d"
      },


{
          question : " Which of the following is not a major greenhouse gas________",
          a: "Carbon dioxide",
          b: "Methane",
          c: "Water vapour",
          d: "Calcium carbonate",
          correct: "d"
      },


{
          question : " Montreal Protocol signed in 1987 was signed to_______",
          a: "Phase out the use of CFCs which cause depletion of the ozone layer",
          b: "Reduces the greenhouse effect",
          c: "Protect endangered species",
          d: "Ban nuclear testing in tropical oceans",
          correct: "a"
      },


{
          question : " Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
          a: "Increased skin cancer",
          b: "Reduced immune system",
          c: "Increased liver cancer",
          d: "Damage to eyes",
          correct: "c"
      },


{
          question : " Unburnt carbon particles causes__________",
          a: "Cardiac problem",
          b: "Respiratory problems",
          c: "Throat problems",
          d: "Skin infection",
          correct: "b"
      },


{
          question : " According to WHO, the maximum permissible level of chlorides in drinking water is__________",
          a: "100 mg/1",
          b: "600 mg/1",
          c: "200 mg/l",
          d: "800 mg/1",
          correct: "c"
      },
{
          question : " The main difference between primary air pollutants and secondary air pollutants is____________",
          a: "Former contains water molecules, while secondary pollutants do not",
          b: "Primary air pollutants have a more direct effect on human health",
          c: "Former are released directly into the atmosphere, while the latter are formed by chemical reactions in the atmosphere",
          d: "Primary air pollutants are formed through photochemical reactions in the sunlight, while the secondary air pollutants are not",
          correct: "c"
      },
{
          question : " Which of the following can be considered as the best example of primary air pollutants?",
          a: "Carbon dioxide released from burning of coal",
          b: " Sulphur trioxide",
          c: "Ozone produced in photochemical smog",
          d: "Carbon dioxide released through photosynthesis",
          correct: "a"
      },
{
          question : " Which of the following best illustrates a secondary air pollutant?",
          a: "CO2, released from the burning of coal",
          b: "NO2, released from the burning of oil",
          c: "Ozone produced in photochemical smog",
          d: "None of the above",
          correct: "c"
      },


{
          question : " The common features between NO2, SO2, CO2 and SPM is that all of them__________",
          a: "Are classified as primary pollutants",
          b: "Are classified as secondary pollutants",
          c: "Have an equal role in causing acid rain",
          d: "Are greenhouse gases",
          correct: "a"
      },
{
          question : " How are nitrogen oxides, sulphur oxides and carbon Oxides related?",
          a: "All of them are secondary air pollutants that contribute to global warming",
          b: "All of them are primary air pollutants that contribute to acid deposition",
          c: "All are air pollutants formed by combustion of fossil fuels",
          d: "All of them are air pollutants that result in respiratory diseases in humans",
          correct: "b"
      },
{
          question : " Atmospheric pollutants are mainly present in_____",
          a: "Ionosphere",
          b: "Stratosphere",
          c: "Mesosphere",
          d: "Troposphere and lower stratosphere",
          correct: "d"
      },
{
          question : " Carbon dioxide and methane are similar in terms of________",
          a: "Both being secondary air pollutants",
          b: "Being responsible for respiratory diseases",
          c: "Contribution to global warming",
          d: "None of the above",
          correct: "c"
      },
{
          question : " What is the main source of pollutants of nitrogen Oxides, sulphur oxides and carbon oxides?",
          a: "Photochemical reactions in the atmosphere",
          b: "Burning fossil fuels at high temperatures",
          c: "Industrial processes",
          d: "All the above",
          correct: "b"
      },
{
          question : " Why is photochemical smog typically worse in the summer?",
          a: "There is more solar energy to drive photochemical reactions",
          b: "People tend to travel more in summers",
          c: "Warm temperatures prevent the dissipation of pollutants",
          d: "None of the above",
          correct: "a"
      },
{
          question : " How does photochemical smog form?",
          a: "The release of primary air pollutants",
          b: "Interaction occurs between chemicals such as CFCs and ozone",
          c: "Reactions occur between secondary air pollutants and sunlight",
          d: "The release of formaldehyde and radon inside buildings",
          correct: "c"
      },
{
          question : " Which of the following can help in reducing air pollution?",
          a: "Small-sized cars",
          b: "Removal of sulphur from coal",
          c: "Lower ignition fuels",
          d: "None of the above",
          correct: "b"
      },
{
          question : " Air pollution is an increasing problem in developing Countries due to________",
          a: "Burning of more coal to produce electricity",
          b: "Changing lifestyles",
          c: "Unavailability of environment-friendly technologies",
          d: "All the above",
          correct: "d"
      },
{
          question : " Quality of resource not degraded due to pollution is_________",
          a: "Sun",
          b: "Water",
          c: "Sand",
          d: "Air",
          correct: "a"
      },
{
          question : " The main source of water pollution is_______",
          a: "Sewage water",
          b: "Industrial pollutants",
          c: "Acid rain",
          d: "None of the above",
          correct: "a"
      },

{
          question : " Which of the following ultimately causes oxygen depletion in water bodies?",
          a: "Fish",
          b: "Human beings",
          c: "Microorganisms",
          d: "None of the above",
          correct: "c"
      },
{
          question : " Which of the following is a water-borne disease?",
          a: "Blue baby syndrome",
          b: "Typhoid",
          c: "Meningitis",
          d: "Cholera",
          correct: "d"
      },
{
          question : " Minamata disease is due to ____",
          a: "Mercury poisoning",
          b: " Lead poisoning",
          c: "Arsenic poisoning",
          d: "Cadmium poisoning",
          correct: "a"
      },

{
          question : " Mullaperiyar dam is in the district?",
          a: "Thrissur",
          b: "Pathanamthitta",
          c: "Idukki",
          d: "Alappuzha",
          correct: "c"
      },

{
          question : " National Maritime Day of India is celebrated on",
          a: "October 16",
          b: "April 05",
          c: "March 21",
          d: "May 22",
          correct: "b"
      },
{
          question : " Natural earthquakes are caused by",
          a: "Earth’s crust",
          b: "deep seas",
          c: "peak mountains",
          d: "forests",
          correct: "a"
      }


]: (student_class=="Ninth") ?
[
  {
      question: " Name the atmospheric layer closest to the ground",
      a: "Troposphere",
      b: "Mesosphere",
      c: "Thermosphere",
      d: "Stratosphere",
      correct: "a"
  },
  {
      question : " The most abundant gas on the earth’s atmosphere is",
      a: "Oxygen",
      b: "Carbon ",
      c: "Nitrogen ",
      d: "Hydrogen",
      correct: "c"
  },
  {
      question : " What atmospheric layer has most of the clouds?",
      a: "Mesosphere",
      b: "Thermosphere",
      c: "Exosphere",
      d: "Troposphere",
      correct: "d"
  },
  {
      question : " An altitude of 100 kilometres (62 mi; 330,000 ft) above the Earth’s sea level marks the beginning of space where human travellers are considered astronauts. What is it called?",
      a: "Appleton–Barnett layer",
      b: "Karman line",
      c: "Heaviside layer",
      d: "Van Allen belts",
      correct: "b"
  },
  {
      question : " The study of weather is called?",
      a: "meteorology",
      b: "climatology",
      c: "aeronomy",
      d: "aerology",
      correct: "a"
  },
  {
      question: " Which one of the following is NOT a primary layer of the atmosphere?",
      a: "Mesosphere",
      b: "Troposphere",
      c: "Exosphere",
      d: "Stratosphere",
      correct: "c"
  },
  {
      question : " A millimetre of mercury is a manometric unit of pressure, defined as precisely 133.322387415 pascals. What is the symbol for a millimetre of mercury?",
      a: "hhMg",
      b: "MPA",
      c: "mmHg",
      d: "inHg",
      correct: "c"
  },
  {
      question : " Name the atmospheric layer that is completely cloudless and free of water vapor.",
      a: "Exosphere",
      b: "Troposphere",
      c: "Thermosphere",
      d: "Stratosphere",
      correct: "c"
  },
  {
      question : " The ozone layer or ozone shield is a region of Earth’s atmosphere that absorbs most of the Sun’s ultraviolet (UV) radiation. Which layer of the atmosphere contains ozone layer? ",
      a: "Troposphere",
      b: "Mesosphere",
      c: "Thermosphere",
      d: "Stratosphere",
      correct: "d"
  },
  {
      question : " What is the average atmospheric pressure at sea level as defined by the International Standard Atmosphere?",
      a: "101325 pascals",
      b: "14.6959 pascals",
      c: "1013 pascals",
      d: "984.43 pascals",
      correct: "a"
  },
  {
      question: " Who coined the word ‘ecology’?",
      a: "Ernst Haeckel",
      b: "Charles Darwin",
      c: "Gregory Mendel",
      d: "None of these",
      correct: "a"
  },
  {
      question : " What are saprophytes?",
      a: "Living beings that feed on the sap from tree bark",
      b: "Living beings that feed on dead or decayed organic matter",
      c: "Living beings that feed on other living beings.",
      d: "None of these",
      correct: "b"
  },
  {
      question : " Who are ethologists?",
      a: "Scientists who study about ethos",
      b: "Scientists who study about the behaviour of wild animals",
      c: "Scientists who study about the behaviour of animals in a particular eco system.",
      d: "None of these",
      correct: "b"
  },
  {
      question : " What are terricolous animals?",
      a: "Animals that live in a particular territory",
      b: "Animals that live on high mountains",
      c: "Animals that live in the soil",
      d: "None of these",
      correct: "c"
  },
  {
      question : " What are arboreal animals?",
      a: "Animals living in trees",
      b: "Animals living in water",
      c: "Animals living in marshy lands",
      d: "None of these",
      correct: "a"
  },
  {
      question: " Who is known as the father of evolution?",
      a: "Gregory Mendel",
      b: "Charles Darwin",
      c: "Albert Einstein",
      d: "None of these",
      correct: "b"
  },
  {
      question : " Which of the following is an amphibian?",
      a: "Salamanders",
      b: "Lizards",
      c: "Fish",
      d: "None of these",
      correct: "b"
  },
  {
      question : " The region of air close to the earth and extending up to 10km high is called",
      a: "Atmosphere",
      b: "Stratosphere",
      c: "Troposphere",
      d: "None of these",
      correct: "c"
  },
  {
      question : " What are planktons?",
      a: "Plants living in water ",
      b: "Very small plants and animals living in water",
      c: "Very small animals living on land",
      d: "None of these",
      correct: "b"
  },
  {
      question : " What is the meaning of the term ‘abyssopelagic’?",
      a: "Organisms living at water depths greater than 2000 m",
      b: "Organisms living at water depths greater than 4000 m",
      c: "Organisms living at water depths greater than 3000 m",
      d: "None of these",
      correct: "b"
  },
  {
      question: " The production of light by living beings is known as",
      a: " Bio-luminescence",
      b: "Bio-lighting",
      c: "Bio-fluorescence",
      d: "None of these",
      correct: "a"
  },
  {
      question : " Which country is popularly knowns as ‘land of the windmills’?",
      a: "The Netherlands",
      b: "Poland",
      c: "Norway",
      d: "None of these",
      correct: "a"
  },
  {
      question : " Who was the first man to travel in space?",
      a: "Edwin Aldrin",
      b: "Neil Armstrong",
      c: "Yuri Gagarin",
      d: "None of these",
      correct: "c"
  },
  {
      question : " What is the instrument used to detect earthquakes?",
      a: "Radiometer",
      b: "Barometer",
      c: "Seismograph",
      d: "None of these",
      correct: "c"
  },
  {
      question : " What is the unit in which radio activity is measured?",
      a: "Newton",
      b: "Roentgen",
      c: "Decibel",
      d: "None of the above",
      correct: "b"
  },

  {
      question : " The region of the atmosphere above 400 km and higher is known as",
      a: "Exosphere",
      b: "Mesosphere",
      c: "Thermosphere",
      d: "None of the above",
      correct: "a"
  },
  {
      question : " The major diet of pandas is",
      a: "Acacia leave",
      b: "Bamboo",
      c: "Grass",
      d: "None of the above",
      correct: "b"
  },
  {
      question : " Finding Nemo is a 2003 American computer-animated comedy-drama adventure film which tells the story of the fish named Marlin who, along with a regal blue tang named Dory, searches for his abducted son Nemo all the way to Sydney Harbour. What species of a fish is Nemo? ",
      a: "Godfish",
      b: "Clownfish",
      c: "surgeonfish",
      d: "Blowfish",
      correct: "b"
  },
  {
      question : " The film ‘Happy Feet’ features a species of penguins that inhabit the continent of Antarctica. Name this species of penguin. ",
      a: "King Penguin",
      b: "Gentoo Penguin",
      c: "Emperor Penguin",
      d: "Little blue penguin",
      correct: "c"
  },
  {
      question: " World Wetlands Day is observed on",
      a: "February 2",
      b: "February 28",
      c: "February 22",
      d: "February 12",
      correct: "a"
  },
  {
      question : " Agrostology is the study of",
      a: "Plants",
      b: "Agriculture",
      c: "Algae",
      d: "Grasses",
      correct: "d"
  },
  {
      question : " What does an anemologist study?",
      a: "Animalsr",
      b: "Names",
      c: "Wind",
      d: "Atoms",
      correct: "c"
  },
  {
      question : " Name the largest freshwater lake in Northeast India",
      a: "Gurudongmar Lake",
      b: "Loktak Lake",
      c: "Lake Tsongmo",
      d: "Dipor Beel",
      correct: "b"
  },
  {
      question : "Do you know the only floating park in the world, located in North East India?",
      a: "Keibul Lamjao National Park",
      b: "Kanchendzonga National Park",
      c: "Dibru-Saikhowa National Park",
      d: "Manas National Park",
      correct: "a"
  },
  {
      question: " The Ramsar Convention is an international treaty for the conservation and sustainable use of wetlands.It is also known as the Convention on Wetlands. What does Ramsar stand for?",
      a: "An environmentalist",
      b: "A city",
      c: "An endangered animal",
      d: "A Greek God",
      correct: "b"
  },
  {
      question : " The sangai is an endemic, rare and endangered subspecies of brow-antlered deer. In which state it is found?",
      a: "Gujarat",
      b: "Sikkim",
      c: "Manipur",
      d: "Meghalaya",
      correct: "c"
  },
  {
      question : " Which of these areas has been designated as the area with the greatest concentration of marine biodiversity on planet Earth? ",
      a: "Raja Ampat, Indonesia",
      b: "Great Barrier Reef, Australia",
      c: "Andaman Islands, India",
      d: "Galapagos islands",
      correct: "a"
  },
  {
      question : " This islands are famed for their vast number of endemic species and were studied by Charles Darwin during the voyage of the Beagle.",
      a: "Raja Ampat, Indonesia",
      b: "Great Barrier Reef, Australia",
      c: "Andaman Islands, India",
      d: "Galapagos islands",
      correct: "d"
  },
  {
      question : " The Encantadas, or Enchanted Isles” is a novella by American author Herman Melville which consists of ten philosophical “Sketches” on the islands. Which one of the following is referred to as Enchanded Isles?",
      a: "Andaman Islands, India",
      b: "Galapagos islands",
      c: "Coronado Island",
      d: "Greenland",
      correct: "b"
  },
  {
      question: " The microbes that are active at low temperatures",
      a: "Thermophiles",
      b: "Mesophiles",
      c: "Psychrophiles",
      d: "Neutrophiles",
      correct: "c"
  },
  {
      question : " Sick Building Syndrome (SBS) describes which phenomenon?",
      a: "Indoor air pollution",
      b: "Indoor water pollution",
      c: "Indoor noise pollution",
      d: "All the above",
      correct: "a"
  },
  {
      question : " The energy possessed by a body by virtue of its position relative to others",
      a: "Kinetic energy",
      b: "Potential energy",
      c: "Chemical energy",
      d: "Positional energy",
      correct: "b"
  },
  {
      question : " The outermost layer of Earth’s atmosphere or the upper limit of the atmosphere is",
      a: "Thermosphere",
      b: "Exosphere",
      c: "Ionosphere",
      d: "Mesosphere",
      correct: "b"
  },
  {
      question : " To be classified as a hurricane in the Saffir Simpson hurricane wind scale (SSHWS), a tropical cyclone must have maximum sustained winds of at least",
      a: "74 mph",
      b: "100 mph",
      c: "50 mph",
      d: "80 mph",
      correct: "a"
  },
  {
      question : " The injection of fertilizers, soil amendments, and other water-soluble products into an irrigation system is termed as",
      a: "Fertilization",
      b: "Fertigation",
      c: "Drip irrigation",
      d: "Foliar feeding",
      correct: "b"
  },
  {
          question : " The head quarters of UNEP is at",
          a: "New York",
          b: "Geneva",
          c: "Sockholm",
          d: "Nairobi",
          correct: "d"
      },


{
          question : " Name the intergovernmental body under the auspices of the United Nations that shared the 2007 Nobel Peace Prize with al Gore, former U.S. Vice President",
          a: "WTO",
          b: "UNEP",
          c: "Typhoid",
          d: "UNEScO",
          correct: "d"
      },

{
          question : " Who was the chairman of IPcc in 2007 when it was awarded Nobel Peace Prize?",
          a: "Hoesung Lee",
          b: "RK Pachauri",
          c: "bert bolin",
          d: "Robert Watson",
          correct: "b"
      },



{
          question : " Which camel species has two humps on its back?",
          a: "arabian camel",
          b: "australian camel",
          c: "bactrian camel",
          d: "dromedary camels",
          correct: "c"
      },



{
          question : " OPEc is the Organization of Petroleum Exporting countries which was founded at a meeting on September 14, 1960. Which one of the following was NOT a founding member?",
          a: "Qatar",
          b: "Iran",
          c: "Iraq",
          d: "Venezuela",
          correct: "a"
      },



{
          question : " by 2040, the world s population is expected to rise to approximately:",
          a: "7 billion",
          b: "9 billion",
          c: "12 billion",
          d: "20 billion",
          correct: "b"
      },


{
          question : " Project Tiger is a tiger conservation programme launched by the Government of India ensuring a viable population of bengal tigers in their natural habitats and also to protect them from extinction. Which year it was launched?:",
          a: "1973",
          b: "1975",
          c: "1978",
          d: "1970",
          correct: "a"
      },

{
          question : " Name India’s first national park:",
          a: "Manas National Park",
          b: "Gir Forest National Park",
          c: "bandhavgarh National Park",
          d: "Hailey National Park",
          correct: "d"
      },

{
          question : " Which state in India has got its own Wildlife act and not covered under Wildlife Protection act, 1972?",
          a: "Kerala",
          b: "Karnataka",
          c: "Jammu and Kashmir",
          d: "assam",
          correct: "c"
      },

{
          question : " The Hollywood movie 'Jurassic Park' was based on the novel with the same name written by:",
          a: "Robin cook",
          b: "Michael crichton",
          c: "agatha christie",
          d: "Jules Verne",
          correct: "b"
      },

{
          question : " The first asteroid, today known as the largest member of the asteroid belt, was discovered by Giuseppe Piazzi in 1801. Name the asteroid:",
          a: "ceres",
          b: "Vesta",
          c: "Pallas",
          d: "Hygiea",
          correct: "a"
      },

{
          question : " Which is the longest mountain range in the world?",
          a: "Karakoram",
          b: "Rockies",
          c: "Himalayas",
          d: "andes",
          correct: "d"
      },

{
          question : " Which country ratified the Kyoto Protocol in late 2004 and thus caused it to become an international law?",
          a: "US",
          b: "Russia",
          c: "Japan",
          d: "France",
          correct: "b"
      },

{
          question : " The natural process of the atmosphere heating through the trapping of re-radiated infrared radiation is known as:",
          a: "The green house effect",
          b: "Thermal inversion",
          c: "Solar heating",
          d: "Global warming",
          correct: "d"
      },

{
          question : " about how much of the wold’s land area is tropical rainforests?",
          a: "2 per cent",
          b: "7 per cent",
          c: "10 per cent",
          d: "15 per cent",
          correct: "b"
      },

{
          question : " Temperate forests are likely to have which of the following species of trees?",
          a: "Pine",
          b: "Spruce",
          c: "Typhoid",
          d: "all of the above",
          correct: "d"
      },

{
          question : " A disease which is caused due to air pollution is:",
          a: "asthma",
          b: "Lung",
          c: "Typhoid",
          d: "both",
          correct: "dnd"
      },

 {
question : " In what type of bioregion is desertification is most likely to occur?",

a:"Tropical Forests",
b:"Temperate Forests",
c: "coniferous Forests",
d: "Grasslands",
answer : "d"
},

{
question :" around the North Pole of Earth, tiny electrically charged particles high in the atmosphere react with rays from the sun to create beautiful sheets of light. Theser are called:",

a: "aurora borealis",
b: "aurora australis",
c: "aurora Solaris",
d: "None of the above",
answer : "a"
},

{

 question : " PVc is a very toxic form of plastic: What is the full form of PVc?",

a: "Plastic vinyl compounds",
b: "Polymer vinyl chloride",
c: "Polyvinyl chloride",
d: "Polyvinyl camphor",
answer : "c"
},

{

 question :" Which bollywood actor was the ambassador of the Earth Hour 2009 in India?",

a: "Shahrukh Khan",
b: "Naseruddin Shah",
c: "anupam Kher",
d: "aamir Khan",
answer : "d"
},

{

 question :" Which of the following materials can be recovered from the recycling of soft drink cans?",

a: "Paper",
b: "Plastic",
c: "Metal",
d: "Glass",
answer : "c"
},

{

 question : " coined the word ‘ecology’?",

a: "Ernst Haeckel",
b: "charles darwin",
c: "Gregory Mendel",
d: "albert Einstein",
answer : "a"
},

{

 question :" What are saprophytes?",

a:"Living beings that feed on the sap from tree bark",
b: "Living beings that feed on dead or decayed organic matter",
c: "Living beings that feed on other living beings.",
d: "Living beings that feed on dead or decayed inorganic matter",
answer : "b"
},

{

 question :" Who are ethologists?",

a: "Scientists who study about ethos",
b: "Scientists who study about the behaviour of wild animals",
c: "Scientists who study about the behaviour of animals in a particular eco system.",
d: "Scientists who study about the",
answer : "b"
},

{

 question :" What are terricolous animals?",

a: "animals that live in a particular territory",
b: "animals that live on high mountains",
c: "animals that live in the soil",
d: "animals that live in a particular region",
answer : "c"
},

{

 question :" What are arboreal animals?",

a: "animals living in trees",
b: "animals living in water",
c: "animals living in marshy lands",
d: "animals living in water and land",
answer : "a"
},

{

 question :" Who is known as the father of evolution?",
a: "Gregory Mendel",
b: "charles darwin",
c: "albert Einstein",
d: "Ernst Haeckel",
answer : "b"
},

{

 question :" Which of the following is an amphibian?",
a: "Salamanders",
b: "Lizards",
c: "Fish",
d: "Snake",
answer : "a"
},


{
 question :" What is the safe level of noise intensity for humans?",
a: "Up to 90 decibels",
b: "up to 70 decibels",
c: "up to 80 decibels",
d: "Up to 60 decibels",
answer : "c"
},

{
question :" The region of air close to the earth and extending up to 10km high is called:",
a: "atmosphere",
b: "Stratosphere",
c: "Troposphere",
d: "barometer",
answer : "c"
},

{

 question :" What are planktons?",

a: "Plants living in water",
b: "Very small plants and animals living in water",
c: "Very small animals living on land",
d: "Plants living on land",
answer : "b"
},

{

question :" What is the meaning of the term ‘abyssopelagic’?",
a: "Organisms living at water depths greater than 2000 m",
b: "Organisms living at water depths greater than 4000 m",
c: "Organisms living at water depths greater than 3000m",
d: "Organisms living at water depths greater than 1000m",
answer :"b"
},

{

question : " The production of light by living beings is known as:",
a: "bio-luminescenc",
b: "bio-lighting",
c: "bio-fluorescence",
d: "bio-diversity",
answer : "a"
},

{

question :" Which country is popularly knowns as ‘land of the windmills’?",
a: "The Netherlands",
b: "Poland",
c: "Norway",
d: "Japan",
answer : "a"
},

{
question : " Who was the first man to travel in space?",
a: "Edwin aldrin",
b: "Neil armstrong",
c: "Yuri Gagarin",
d: "Gregory Mendel",
answer : "c"
},

{

question :" Which instrument is used to measure wind velocity?",
a: "barometer",
b: "anemometer",
c: "Hygrometer",
d: "Radiometer",
answer : "b"
},

{

question :" What is the instrument used to detect earthquakes?",
a: "Radiometer",
b: "barometer",
c: "Seismograph",
d: "anemometer",
answer :"c"
},

{

question : " What is the unit in which radio activity is measured?",
a: "Newton",
b: "Roentgen",
c: "decibel",
d: "Gagarin",
answer : "b"
},

{

question :" The region of the atmosphere above 400 km and higher is known as",
a: "Exosphere",
b: "Mesosphere",
c: "Thermosphere",
d: "atmosphere",
answer :"a"
},

{

question :" The major diet of pandas is",
a: "acacia leave",
b: "bamboo",
c: "Grass",
d: "Tree",
answer :"b"
},

{

question :" Which of the following is not an endangered animal?",
a: "Siberian tiger",
b: "Loggerhead turtle",
c: "The Maned Wolf",
d: "Indian tiger",
answer : "c"
},

{

question : " The non-point pollution of river water involves discharge of pollutants through",
a: "urban sewage drains",
b: "industrial effluents",
c: "agricultural fields",
d: "both (a: and (b:",
correct: "c"
},





{
question : " In which of the following countries are the Kermadec Islands located?",
a: "France",
b: "UK",
c: "New Zealand",
d: "None of the above",
correct: "c"
},

{
question : " In which of the following state of India bhitarkanika National Park is situated?",
a: "Rajasthan",
b: "Odisha",
c: "Nagaland",
d: "Tamil Nadu",
correct: "b"
},

{
question :" Which of the following Wildlife Sanctuary is located in andhra Pradesh?",
a: "Mahao Wildlife Sanctuary",
b: "Kamlang Wildlife Sanctuary",
c: "amchang Wildlife Sanctuary",
d: "Sonai Rupai Wildlife Sanctuary",
correct: "a"
},

{
question :" In which of the following state of India, bellandur Lake is situated?",
a: "bengaluru",
b: "Manipur",
c: "Sikkim",
d: "Maharashtra",
correct: "a"
},

{
question : " For which of the following movies has chloe Zhao been conferred with the Oscar award?",
a: "The Father",
b: "Minari",
c: "Nomadland",
d: "Soul",
correct: "c"
},

{
question : " In which of the following year the Environment Protection act enacted?",
a: "1984",
b: "1986",
c: "1989",
d: "1990",
correct: "b"
},

{
question :" What is Light?",
a: "Longitudinal Wave",
b: "Transverse Wave",
c: "both a and b",
d: "Neither a nor b",
correct: "b"
},

{
question : " Which of the following country has the highest total number of Military Personnel?",
a: "Vietnam",
b: "South Korea",
c: "India",
d: "North Korea",
correct:"a"
},

{
question : " What is the capital of Ukraine?",
a: "Kyiv (Kiev)",
b: "Yerevan",
c: "canberra",
d: "Moscow",
correct: "a"
},

{
question : " In which of the following Indian states do the Varuna and assi rivers flow?",
a: "Uttar Pradesh",
b: "Maharashtra",
c:" Rajasthan",
d: "Madhya Pradesh",
correct: "a"
},

{
question :" In which of the following years was bangladesh formed as a separate country?",
a: "1970",
b: "1971",
c: "1972",
d: "1973",
correct: "b"
},

{
question :" Which of the following rivers is known as the 'father of african rivers'?",
a: "Niger",
b: "Nile",
c: "Orange river",
d: "Kasai river",
correct: "b"
},

{
question : " Which of the following battles were fought by chhatrapati Shivaji Maharaj?",
a: "battle of Kolhapur",
b: "battle of Pratapgad",
c: "battle of Sinhagad",
d: "all the above",
correct: "d"
},

{
question :" When was champaran Satyagraha started?",
a: "1916",
b: "1917",
c: "1920",
d: "1921",
correct: "b"
},

{
question :" When was Gandhi-Irwin Pact signed?",
a: "1928",
b: "1930",
c: "1931",
d: "1935",
correct: "c"
},

{
question :" abiy ahmed is the Prime Minister of which country?",
a: "Ethiopia",
b: "Eritrea",
c: "Kenya",
d: "None of the above",
correct: "a"
},

{
question :" Second buddhist council was presided by whom?",
a: "Gautamiputra Satkarni",
b: "Vasumitra",
c: "Sabakami",
d: "None of the above",
correct:"c"
},

{
question : " What is the name of the Guptas' silver coin?",
a: "Para",
b: "Rupaka",
c: "dinara",
d: "None of the above",
correct: "b"
},

{
question :" In which of the following states is Umlingla Pass located?",
a: "Uttarakhand",
b: "Manipur",
c: "Sikkim",
d: "Ladakh",
correct: "d"
},

{
question : " Who founded the Ram cult in Northern India?",
a: "Kabir",
b: "Ramananda",
c: "bhavabhuti",
d: "Guru Nanak",
correct: "b"
},

{
question : " Which of the following is not a folk dance of Himachal Pradesh?",
a: "Jhora",
b: "chharhi",
c: "chhapeli",
d: "Panwariya",
and: "d"
},

{
question :" Who gave the most detailed accounts of all historic descriptions of the ancient city of Hampi?",
a: "Fernao Nuniz",
b: "domingo Paes",
c: "Ibn batuta",
d: "abdur Razzaq",
correct: "b"
}
,

{
question :" Who is the author of the 'durgeshnandini' novel?",
a: "bankim chandra chattopadhyay",
b: "baliram Keshav Rao Hedgewar",
c: "barindra Kumar Ghosh",
d: "behramji M Malabari",
correct: "a"
},

{
question : " Who is known as the 'Grand Old Man of lndia'?",
a: "dr bhimrao Ramji ambedkar",
b: "dr Rajendra Prasad",
c: "dadabhai Naoroji",
d: "Gopal Krishna Gokhale",
correct:"c"
},

{
question : " Who is popularly known as Loknayak?",
a: "Jamnalal bajaj",
b: "Jayaprakash Narayana",
c: "Jatindra Nath das",
d: "Khudiram bose",
correct: "b"
},

{
question : " carbon monoxide is a poisonous gas which when inhaled in too much quantity causes headache, nausea, vomiting and even death. The toxicity of carbon monoxide is due to",
a:  "Its greater affinity for haemoglobin as compared to carbon dioxide",

b:  "Its lower affinity for haemoglobin as compared to carbon dioxide",

c:  "Its greater affinity for haemoglobin as compared to oxygen",

d:  "Its greater affinity for oxygen as compared to haemoglobin",
correct: "c"
},

{
question : " Which of the following is the latest addition to World Heritage sites list by UNEScO?",
a:  "Khangchendzonga National Park, Sikkim",

b:  "capital complex, chandigarh",

c:  "Nalanda Mahavihara, bihar",

d:  "all of these",

correct: "d"
},

{
question : " The increase in Earth's average surface temperature due to the effect of greenhouse gases such as cO2, and emissions from fossil fuel is known as global warming. What could be the effect of global warming?",
a:  "There will be melting of polar ice caps.",

b:  "There will be an increase in crop production.",

c:  "There will be a rise in sea level",
d:  "both a and c",

correct: "d"
},

{
question : " Which of the following movements fights against the taking over of fertile land for testing of missiles in a thickly populated village in Odisha?",
a:  "chipko Movement",

b:  "baliapal Movement",

c:  "bishnoi Movement",

d:  "appiko Movement",

correct: "b"
},

{
question : " World Water day focuses on water conservation and critical water issues. On which date it is celebrated?",
a:  "11 december",

b:  "22 april",

c:  "22 March",

d:  "21 November",

correct: "c"
},

{
question :" The antarctic Treaty states that",
a:  "The continent be used for scientific research only",

b:  "The continent be used for tourist purpose only",

c:  "No person can live on antarctic continent",

d:  "Only wild tribes are free to live on the continent",

correct: "a"
},



{
question :" Which of the following might happen if plants stop releasing oxygen into the atmosphere?",
a:  "The plants will be healthier.",

b:  "The number of plants will increase",

c:  "There will be rich biodiversity.",

d:  "The number of animals will decrease.",

correct: "d"
},

{
question :" Toyota sponsored a campaign which was hosted by NdTV to save environment. The main goal of this campaign was to spread awareness among people in India to sustain the greenery of Mother Nature. Name the campaign.",
a:  "Green Nature",

b:  "Greenathon",

c:  "Green Nation",

d:  "clean India Green India",
correct: "b"
},

{
question : " Vulture, hyena and eagle are examples of______.",
a:  "Producers",

b:  "Herbivores",

c:  "decomposers",

d:  "Scavengers",

correct: "d"
},

{
question : " What percent of the Earth's water is found in the atmosphere?",
a:  "0.001",

b:  "0.003",

c:  "0.02",

d:  "0.2",

correct: "a"
},

{
question : " Navdanya is a movement for Earth democracy based on the philosophy of 'Vasudhaiva Kutumbakam' which means that the earth is one family. Who is the founder of this movement?",
a:  "anil agarwal",

b:  "Vandana Shiva",

c:  "Mike Pandey",

d:  "Shekhar Kapur",

correct: "b"
},

{
question : " Which of the following is not a feature of the Eutrophic lakes?",
a: "They are generally occupied by blooms",
b: "They have high plant nutrient flux",
c: "They have low primary productivity",
d: "They are dominated by blue green algae",
correct: "c"
},

{
question : " The Maenam Wildlife Sanctuary (MWS) is located in which state?",
a: "Sikkim",
b: "chhattisgarh",
c: "Kerala",
d: "Nagaland",
correct: "a"
},

{
question :" The Ratapani Tiger Reserve (RTS) is located in which state?",
a: "Madhya Pradesh",
b: "Sikkim",
c: "Rajasthan",
d: "Karnataka",

correct: "a"

},

{
question : " The Madhav National Park (MNP) is located in which district of Madhya Pradesh?",
a: "Shivpuri district",
b: "Hoshangabad district",
c: "Sheopur district",
d: "balaghat district",

correct: "a"
},

{
question : " Red data book is published by ___?",
a: "United Nations Environment Programme",
b: "World Wildlife Fund",
c: "World Environment Facility",
d: "International Union For The conservation Of Nature and Natural Resources",

correct: "d"
},

{
question : " In which year Ecological Task Forces (ETFs) scheme was initiated?",
a: "1980",
b: "1982",
c: "1983",
d: "1985",

correct: "b"
},

{
question : " bengal desi is a Hybrid variety of which of the following crops?",
a: "Jute",
b: "cotton",
c: "Sesame",
d: "Gram",

correct: "b"
},





{
question :" argon is the third most common gas in the Earth’s atmosphere, at 0.93%. This gas is generated due to decay of which among the following isotopes in the Earth’s crust?",
a: "K-40",
b: "ca-40",
c: "ca-48",
d: "K-41",

correct: "a"
},

{
question : " Which among the following is the major objective of the compensatory afforestation Fund?",
a: "To provide for imposing cess for conversion of forest land to non-forest land",
b: "To provide for establishing a fund for forestation on barren land",
c: "To utilize the amounts realised in lieu of forest land diverted for non-forest purpose",
d: "all of the above purposes",

correct: "c"
},

{
question : " Which of the following pollutants is the major reason behind adverse effect on the white marbles of Taj Mahal?",
a: "black carbon",
b: "Nitrogen oxides",
c: "brown carbon",
d: "Sulphur dioxide",

correct: "c"
},


{
question : " as per recent survey, which of the following pollutants has been highly responsible for the pollution of groundwater in the Indo-Gangetic basin?",
a: "arsenic",
b: "ddT",
c: "detergents",
d: "Landfills",

correct: "c"
},

{
question : " In a photochemical smog, which gas causes irritation to mucous membrane and respiratory system?",
a: "Nitrous oxide",
b: "Sulphur dioxide",
c: "Ozone",
d: "carbon monoxide",

correct: "c"
},

{
question : " In which of the following states of India you are most likely to come across the endangered Sangai deer in its natural habitat?",
a: "Jammu & Kashmir",
b: "Gujarat",
c: "Kerala",
d: "Manipur",

correct: "b"
},





{
question : " Identify the protected area with the help of given information: The park is known for its rare and endangered endemic wildlife such as hispid hare, golden langur and pygmy hog. It was declared a World Heritage site in december 1985 by UNEScO. The site has a tiger reserve, an elephant reserve and a biosphere reserve. Select the correct from option given below:",

a: "Manas National Park",
b: "Khangchendzonga National Park",
c: "Sundarbans National Park",
d: "Great Himalayan National Park",

correct: "a"
},

{
question :  " Which of the following islands has been tagged as the remotest and the most polluted island in the world after researchers recorded the highest density of plastic waste on the island than anywhere else in the world?",
a: "Henderson Island",
b: "Falkland Island",
c: "Majuli Island",
d: "Sumatra Island",

correct: "a"
},



{
question : " What is the name of the typhoon that recently hit Philippines?",
a: "Frank",
b: "Kammuri",
c: "angela",
d: "Haiyan",
correct: "b"
},

{
question :  " Which of the following is the only ape found in India?",
a: "Gorilla",
b: "chimpanzee",
c: "Hoolock Gibbon",
d: "Mandrill",

correct : "c"

},

{
question :  " The World’s largest bio-fuel plant has been established with a production capacity of 100 million liters per year, is located in",
a: "China",
b: "India",
c: "Brazil",
d: "USA",
correct : "c"
},
{
question :  " Rio Summit is associated with",
a: "Convention on Biological Diversity",
b: "Green house gases",
c: "Ozone depletion",
d: "Wet lands",
correct : "a"
},
{
question :  " The method of soil conservation in the coastal and dry regions where rows of trees are planted to check the wind movement to protect soil cover is called",
a: "Mulching",
b: "Contour barriers",
c: "Rock dam",
d: "Shelter belts",
correct : "d"
},
{
question :  " The radiant energy received by the Earth from the sun is ",
a: "Radiation",
b: "Insolation",
c: "Reflection",
d: "Refraction",
correct : "b"
},
{
question :  " Which has the maximum rate of deforestation?",
a: "Tropical Zone",
b: "Desert Zone",
c: "Temperate Zone",
d: "Northern Forest",
correct : "a"
}




]: (student_class=="Tenth") ?
[
  {
      question: " Which has the maximum rate of deforestation?",
      a: "Tropical Zone",
      b: "Desert Zone",
      c: "Temperate Zone",
      d: "Northern Forest",
      correct: "a"
  },
  {
      question : " Which among the following statements is incorrect in view of the plants?",
      a: "They convert the solar energy into mechanical energy",
      b: "They prepare their food from organic compounds",
      c: "They are also called producers",
      d: "They are the initial source of energy in a food chain",
      correct: "b"
  },
  {
      question : " In a food chain the second trophic level is occupied by:",
      a: "Carnivores",
      b: "Autotrophs",
      c: "Herbivores",
      d: "Producers",
      correct: "c"
  },
  {
      question : " Every food chain in the ecosystem begins with………. which are the original source of food.",
      a: "Saprophytes",
      b: "Parasites",
      c: "Producers",
      d: "Herbivores",
      correct: "c"
  },
  {
      question : " We should reduce the use of the plastic bags, bottles etc. because:",
      a: "They are not durable",
      b: "They are non-biodegradable",
      c: "They are made of toxic materials",
      d: "They react with the atmospheric gases",
      correct: "b"
  },
  {
      question: " Green plants utilize ……… percent of sun’s energy to prepare their food by the process of photosynthesis?",
      a: "1 percent",
      b: "10 percent",
      c: "20 percent",
      d: "99 percent",
      correct: "a"
  },
  {
      question : " The process of accumulation of harmful chemical substances like pesticides, in the body of living organisms at each trophic level of a food chain is known as:",
      a: "Biological magnification",
      b: "Biological accumulation",
      c: "Chemical magnification",
      d: "Chemical accumulation",
      correct: "a"
  },
  {
      question : " The radiant energy received by the Earth from the sun is",
      a: "Radiation",
      b: "Insolation",
      c: "Reflection",
      d: "Refraction",
      correct: "b"
  },
  {
      question : " Which among the following is a correct full form for DDT? ",
      a: "Dichlorodiphenyltrichloroethane",
      b: "Dichlorodiphenyltetrachloroethane",
      c: "Dichlorodecaphenyltrichloroethane",
      d: "Dichlorodiethyltrichloroethane",
      correct: "a"
  },
  {
      question : " If 100 J energy is available at the producer level in a food chain then the energy available to the secondary consumer will be:",
      a: "10 J",
      b: "0.1 J",
      c: "1 J",
      d: " 0.01 J",
      correct: "c"
  },
  {
      question: " What will happen if deer is missing in the food chain given below? Grass → Deer → Tiger",
      a: "The population of tiger increases",
      b: "The population of grass decreases",
      c: "Tiger will start eating grass",
      d: "The population of tiger decreases and the population of grass increases",
      correct: "d"
  },
  {
      question : " Which of the following substances will not be converted to compost when added in a composting pit?",
      a: "Waste paper",
      b: "Fruit and vegetable peels",
      c: "Human and animal excreta",
      d: "Plastic bags",
      correct: "d"
  },
  {
      question : " Global warming is a phenomenon related to:",
      a: "Evaporation",
      b: "Ecological balance",
      c: "Greenhouse effect",
      d: "Desertification",
      correct: "c"
  },
  {
      question : " Which of the following radiations is responsible for the conversion of atmospheric oxygen to ozone?",
      a: "Gamma radiations",
      b: "Cosmic radiations",
      c: "nfrared radiations",
      d: "Ultraviolet radiations",
      correct: "d"
  },
  {
      question : " The substance which is chiefly responsible for the depletion of ozone layer is:",
      a: "CFCs",
      b: "CH4",
      c: "DDT",
      d: "O3",
      correct: "d"
  },
  {
      question: " Resources that take too long a period of time to be used as a resource are called as",
      a: "Renewable resource",
      b: "Non-renewable resource",
      c: "Exhaustible resource",
      d: "Inexhaustible resource",
      correct: "d"
  },
  {
      question : " The fossil fuel that is derived from the dead remains of plants that grew some 250 million years ago is",
      a: "Petroleum",
      b: "Natural gas",
      c: "Coal",
      d: "LPG",
      correct: "c"
  },
  {
      question : " Man made resources are alternative to natural resources for a variety of reasons. Which of these would not be one of those?",
      a: "They increase variety and choice",
      b: "They are cheaper to produce than natural resources",
      c: "They are made from renewable resources",
      d: "They are better suited for the purpose for which they will be used",
      correct: "c"
  },
  {
      question : " A liquid fuel that was formed from the ancient remains of sea plants and animals is",
      a: "Natural gas",
      b: "Petroleum",
      c: "Geothermal energy",
      d: "Coal",
      correct: "b"
  },
  {
      question : " Energy in the rays from the sun is called",
      a: "Solar energy",
      b: "Wind energy",
      c: "Tidal energy",
      d: "Water energy",
      correct: "a"
  },
  {
      question: " T Which is a list of renewable resources?",
      a: "Petroleum, geothermal, wind",
      b: "Biomass, geothermal, hydropower",
      c: "Natural gas, wind, biomass",
      d: "Hydropower, solar, wind energy",
      correct: "d"
  },
  {
      question : " Energy from the heat inside the earth is",
      a: "Natural gas",
      b: "Geothermal",
      c: "Petroleum",
      d: "Terrathermal",
      correct: "b"
  },
  {
      question : " A coal deposit that is not economical to mine today would be considered part of our",
      a: "Coal reserves",
      b: "Coal resources",
      c: "Coal reservoirs",
      d: "None of these",
      correct: "a"
  },
  {
      question : " The process of restoring forests that once existed but was removed at some time in the past is known as",
      a: "Afforestation",
      b: "Reforestation",
      c: "Deforestation",
      d: "None of these",
      correct: "b"
  },
  {
      question : " Red data book contains data of",
      a: "All plant species",
      b: "All animal species",
      c: "Threatened species",
      d: "Economically important species",
      correct: "c"
  },

  {
      question : " IUCN Headquarters is at",
      a: "Morges, Switzerland",
      b: "Paris, France",
      c: "Vienna, Austria",
      d: "New York, USA",
      correct: "a"
  },
  {
      question : " Which of the following regions has the maximum diversity?",
      a: "Mangroves",
      b: "Temperate forest",
      c: "Taiga",
      d: "Coral reefs",
      correct: "d"
  },
  {
      question : " Dodo is ",
      a: "Endangered species",
      b: "Rare species",
      c: "Extinct species",
      d: "Exotic species",
      correct: "c"
  },
  {
      question : " Blue whale is placed under",
      a: "Endangered",
      b: "Rare",
      c: "Extinct",
      d: "Exotic",
      correct: "a"
  },
  {
      question: " Conservation within the natural habitat is",
      a: "Ex-situ conservation",
      b: "In-situ conservation",
      c: "Ex-vivo conservation",
      d: "In-vivo conservation",
      correct: "b"
  },
  {
      question : " Which one of the following is not included under in situ conservation?",
      a: "Zoo",
      b: "National Park",
      c: "Wild life Sanctuary",
      d: "Biosphere Reserve",
      correct: "a"
  },
  {
      question : " Ex-situ conservation includes",
      a: "Zoo",
      b: "Botanical Garden",
      c: "Germplasm Bank",
      d: "All of the above",
      correct: "d"
  },
  {
      question : " Hotspots are regions of high",
      a: "Rareism",
      b: "Endemism",
      c: "Diversity",
      d: "Critically endangered population",
      correct: "c"
  },
  {
      question : "Endemic species are",
      a: "Rare species",
      b: "Species localized in a specific region",
      c: "Cosmopolitan in distribution",
      d: "None of these",
      correct: "b"
  },
  {
      question: "  Which one of the following has the maximum genetic diversity in India?",
      a: "Tea",
      b: "Teak",
      c: "Mango",
      d: "Wheat",
      correct: "c"
  },
  {
      question : " Which one of the following regions in India is a hotspot of biodiversity?",
      a: "Sundarbans",
      b: "Western Ghats",
      c: "Eastern Ghats",
      d: "Gangetic plains",
      correct: "b"
  },
  {
      question : "  Darwin’s finches are a good example of ",
      a: "Convergent evolution",
      b: "Adaptive radiation",
      c: "Connecting link",
      d: "Industrial melanism",
      correct: "b"
  },
  {
      question : " Which group of vertebrates comprises of highest number of species",
      a: "Mammals",
      b: "Fishes",
      c: "Reptiles",
      d: "Birds",
      correct: "b"
  },
  {
      question : " 5th June is observed as",
      a: "World environment day",
      b: "World forest day",
      c: "World population day",
      d: "World wildlife day",
      correct: "a"
  },
  {
      question: " The unfavorable alteration of environment by human activities is termed as",
      a: "Ecological disturbance",
      b: "Ecological degradation",
      c: "Pollution",
      d: "Catastrophe",
      correct: "b"
  },
  {
      question : " Biogas contains mainly",
      a: "Carbon dioxide",
      b: "Methane",
      c: "Butane",
      d: "Propane",
      correct: "b"
  },
  {
      question : " Main source of acid rain is",
      a: "Sulphur dioxide",
      b: "Nitrogen",
      c: "Carbon dioxide",
      d: "Carbon monoxide",
      correct: "a"
  },
  {
      question : " Treated water can be disinfected by adding",
      a: "Alum",
      b: "Fluorine",
      c: "Chlorine",
      d: "Oxygen",
      correct: "c"
  },
  {
      question : " The burning of fossil fuels releases large amount of",
      a: "Nitrogen",
      b: "Sulphur",
      c: "Carbon",
      d: "Hydrogen",
      correct: "b"
  },
  {
      question : " Which of the following does not causes air pollution when used for heating purposes",
      a: "Coal",
      b: "Petrol",
      c: "Kerosene",
      d: "Solar energy",
      correct: "d"
  },
  {
question :" A common bactericide used in swimming pools is:",
a: "Chlorine",
b: "Alum",
c: "Borax",
d: "DDT",
correct: "a"
},
{
question :" Green house effect is linked to",
a: "Nitrogen oxides",
b: "Sulphur dioxides",
c: "Carbon dioxides",
d: "Carbon monoxides",
correct: "c"
},
{
question :" Disposable glasses and plates are made up of",
a: "PVC",
b: "Polystyrene",
c: "Polyvinyl alcohol",
d: "Polypropylene",
correct: "d"
},
{
question :" Aerosols consisting of solid particles produced by combustion",
a: "Fog",
b: "Smog",
c: "Smoke",
d: "None of these",
correct: "b"
},
{
question :" Which of the following are consequences of ozone depletion",
a: "Skin cancer and cataract",
b: "Reduced growth in plants",
c: "Shortening of zooplanktons and their breeding period",
d: "All of the above",
correct: "a"
},
{
question :" Which out of the following is a measure to control air pollution",
a: "Reduction in use of fossil fuels",
b: "Increasing use of renewable energy resources",
c: "Using catalytic convertors in vehicles",
d: "All of the above",
correct: "d"
},
{
question :" The discharge of warm/hot water directly into rivers is known as",
a: "Water pollution",
b: "Thermal pollution",
c: "Marine pollution",
d: "None of the above",
correct: "b"
},
{
question :" Yellowing of Taj Mahal is an effect of",
a: "Acid rain",
b: "Global warming",
c: "Ozone depletion",
d: "All of the above",
correct: "a"
},
{
question :" Identify the aftermaths of acid rain from the following",
a: "Dissolving and washing away of nutrients from the soil",
b: "Increasing the acidity of soils, thereby hindering the growth of plants",
c: "Damaging the building materials/ heritage sites",
d: "All of the above",
correct: "d"
},
{
question :" Increase in concentration of toxic level in each trophic level is referred to as",
a: "Eutrophication",
b: "Biomagnification",
c: "Bioaccumulation",
d: "Bioconcentration",
correct: "b"
},
{
question :" Pollutants that are easily manageable and decomposable in nature are called",
a: "Biodegradable pollutants",
b: "Non-biodegradable pollutants",
c: "Renewable pollutants",
d: "None of these",
correct: "a"
},
{
question :" The supersonic jets cause air pollution by the thinning of",
a: "Carbon dioxide layer",
b: "Sulphur dioxide layer",
c: "Ozone layer",
d: "Oxygen layer",
correct: "c"
},
{
question :" Which of the following is the best indicator of SO2 pollution",
a: "Bryophytes",
b: "Pteridophytes",
c: "Lichens",
d: "Algae",
correct: "c"
},
{
question :" Ozone depletion is caused due to increase in the level of",
a: "Water vapour",
b: "Oxygen",
c: "Chlorofluorocarbon",
d: "Carbon monoxide",
correct: "c"
},
{
question :" What type of chemical weathering is enhanced by acid rain?",
a: "Hydrolysis",
b: "Dissolution",
c: "Oxidation",
d: "None of the above",
correct: "a"
},
{
question :" What process causes the disintegration of rock at or near the earth’s surface?",
a: "Physical weathering",
b: "Chemical weathering",
c: "Erosion",
d: "None of the above",
correct: "a"
},
{
question :" Which of the following gas affects human health by reducing the blood’s ability to carry oxygen to different parts of the body?",
a: "Carbon monoxide",
b: "Carbon dioxide",
c: "Sulphur dioxide",
d: "Nitrous dioxide",
correct: "a"
},
{
question :" Nitrogen oxide affects human health by__________",
a: "Causing irritation to the eyes and skin",
b: "Aggravating asthma problem",
c: "Decreasing blood’s ability to transport oxygen",
d: "None of the above ",
correct: "b"
},
{
question :" The air pollutants are mainly classified as____________",
a: "Point source and non-point source",
b: "Primary and secondary pollutants",
c: "Natural or anthropogenic pollutants",
d: "None of the above",
correct: "b"
},
{
question :" The best way to dispose plant waste is___________",
a: "Burning",
b: "Composting",
c: "Dumping in a hilly area",
d: "Incineration",
correct: "b"
},
{
question :" Which of the following is not one of the major environment problems resulting from human interference in the nitrogen cycle?",
a: "Global warming due to release of nitrous oxide",
b: "Acid rain",
c: "Eutrophication",
d: "Ozone depletion",
correct: "d"
},
{
question :" Which of the following is not a major greenhouse gas_________",
a: "Carbon dioxide",
b: "Methane",
c: "Water vapour",
d: "Calcium carbonate",
correct: "d"
},
{
question :" Montreal Protocol signed in 1987 was signed to_______",
a: "Phase out the use of CFC’s which cause depletion of the ozone layer",
b: "Reduces the greenhouse effect",
c: "Protect endangered species",
d: "Ban nuclear testing in tropical oceans",
correct: "a"
},
{
question :" Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
a: "Increased skin cancer",
b: "Reduced immune system",
c: "Increased liver cancer",
d: "Damage to eyes",
correct: "b"
},
{
question :" Unburnt carbon particles causes__________",
a: "Cardiac problem",
b: "Respiratory problems",
c: "Throat problems",
d: "Skin infection",
correct: "b"
},
{
question :" Which of the following units is used to measure the intensity of noise?",
a: "Decibel",
b: "Phon",
c: "Hz",
d: "Watts/m",
correct: "a"
},
{
question :" Human ear is most sensitive to noise in which of the following frequency range?",
a: "1-2 kHz",
c: "10-12 kHz",
b: "100-500 Hz",
d: "13-16 kHz",
correct: "d"
},
{
question :" Which of the following pairs regarding typical composition of hospitals wastes is incorrect?",
a: "Plastics: 9-12%",
b: "Metals: 1-2%",
c: "Ceramic: 8-10%",
d: "Biodegradable: 35-40%",
correct: "d"
},
{
question :" Maximum soot is released from_________",
a: "Petrol vehicles",
b: "Diesel Vehicles",
c: "CNG vehicles",
d: "Thermal power plants",
correct: "d"
},
{
question :" Surface ozone is produced from___________",
a: "Transport sector",
b: "Textile industry",
c: "Carbon monoxide",
d: "None of the above",
correct: "a"
},
{
question :" In the metro city of Kolkata, the major cause of air pollution is____________",
a: "Cement plants",
b: "Chemical industry",
c: "Hydrocarbons ",
d: "Water vapours",
correct: "a"
},
{
question :" Which of the following is the main discharge from coal based power plants (thermal plants)?",
a: "SPM",
b: "Smog",
c: "Fly ash",
d: "None of the above",
correct: "c"
},
{
question :" The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
a: "Nitrates",
b: "Fluorides",
c: "Sulphates",
d: "Oxides",
correct: "a"
},
{
question :" Which of the following metal is responsible for Minamata disease?",
a: "Mercury",
b: "Chromium",
c: "Cadmium",
d: "Iron",
correct: "a"
},
{
question :" Intake of lead may primarily cause damage of the________",
a: "Brain",
b: "Liver",
c: "Lung",
d: "Kidney",
correct: "a"
},
{
question :" Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},
{
question :" Industries generating hazardous waste are classified as___________",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red",
correct: "d"
},
{
question :" Which of the following greenhouse gases are entirely anthropogenic in origin?",
a: "Water vapour",
b: "CFCs",
c: "Carbon dioxide",
d: "Methane",
correct: "b"
},
{
question :" Peroxyacyl nitrate (PAN) is a by-product of____________",
a: "Photochemical smog",
b: "Sulphurous smog",
c: "London smog",
d: "None of the above",
correct: "a"
},
{
question :" The balance in oxygen level is maintained by________",
a: "Photosynthesis and cellular respiration",
b: "Industrial emissions of gases",
c: "Release of ozone in upper atmosphere",
d: "None of the above",
correct: "a"
},
{
question :" Which of the following methods can be used to increase the supply of usable, good quality water?",
a: "Chlorination",
b: "Cloud seeding",
c: "Metallurgy",
d: "None of these",
correct: "b"
},
{
question :" According to WHO, the maximum permissible level of chlorides in drinking water is___________",
a: "100 mg/1",
b: "600 mg/1",
c: "200 mg/l",
d: "800 mg/1",
correct: "c"
},
{
question :" The main difference between primary air pollutants and secondary air pollutants is",
a: "Former contains water molecules, while secondary pollutants do not.",
b: "Primary air pollutants have more direct effect on human health.",
c: "Former are released directly into the atmosphere, while the latter are formed by chemical reactions in the atmosphere.",
d: "Primary air pollutants are formed through photochemical reactions in the sunlight, while the secondary air pollutants are not.",
correct: "c"
},
{
question :" Which of the following can be considered as the best example of primary air pollutants?",
a: "Carbon dioxide released from burning of coal.",
b: "Sulphur trioxide.",
c: "Ozone produced in photochemical smog.",
d: "Carbon dioxide released through photosynthesis.",
correct: "a"
},
{
question :" Which of the following best illustrates a secondary air pollutant?",
a: "CO2, released from the burning of coal",
b: "NO2, released from the burning of oil.",
c: "Ozone produced in photochemical smog.",
d: "None of the above",
correct: "c"
},
{
question :" The common features between NO2, SO2, CO2 and SPM is that all of them___________",
a: "Are classified as primary pollutants.",
b: "Are classified as secondary pollutants.",
c: "Have equal role in causing acid rain.",
d: "Are greenhouse gases.",
correct: "b"
},
{
question :" How are nitrogen oxides, sulphur oxides and carbon Oxides related?",
a: "All of them are secondary air pollutants that contribute to global warming.",
b: "All of them are primary air pollutants that contribute to acid deposition.",
c: "All are air pollutants formed by combustion of fossil fuels.",
d: "All of them are air pollutants that result in respiratory diseases in human",
correct: "b"
},
{
question :" Atmospheric pollutants are mainly present in_____",
a: "Ionosphere",
b: "Stratosphere",
c: "Mesosphere",
d: "Troposphere and lower stratosphere",
correct: "d"
},
{
question :" Carbon dioxide and methane are similar in terms of__________",
a: "Both being secondary air pollutants.",
b: "Being responsible for respiratory diseases.",
c: "Contribution to global warming.",
d: "None of the above",
correct: "c"
},
{
question :" What is the main source of pollutants of nitrogen Oxides, sulphur oxides and carbon oxides?",
a: "Photochemical reactions in the atmosphere.",
b: "Burning fossil fuels at high temperatures.",
c: "Industrial processes",
d: "All the above",
correct: "b"
},
{
question :" Why is photochemical smog typically worse in the summer?",
a: "There is more solar energy to drive photochemical reactions.",
b: "People tend to travel more in summers.",
c: "Warm temperatures prevent the dissipation of pollutants.",
d: "None of the above",
correct: "a"
},
{
question :" How does photochemical smog form?",
a: "The release of primary air pollutants.",
b: "Interaction occurs between chemicals such as CFCs and ozone.",
c: "Reactions occur between secondary air pollutants and sunlight.",
d: "The release of formaldehyde and radon inside buildings.",
correct: "c"
},
{
question :" Which of the following can help in reducing air pollution?",
a: "Small-sized cars",
b: "Removal of sulphur from coal",
c:  "Lower ignition fuels",
d: "None of the above",
correct: "b"
},
{
question :" Air pollution is an increasing problem in developing Countries due to________",
a: "Burning of more coal to produce electricity.",
b: "Changing lifestyles.",
c: "Unavailability of environment-friendly technologies.",
d: "All the above",
correct: "d"
},
{
question :" Quality of resource not degraded due to pollution is__________",
a: "Sun",
b: "Water",
c: "Sand",
d: "Air",
correct: "a"
},
{
question :" The main source of water pollution is_______",
a: "Sewage water",
b: "Industrial pollutants",
c: "Acid rain",
d: "None of the above",
correct: "a"
},
{
question :" Which of the following ultimately causes oxygen depletion in water bodies?",
a: "Fish",
b: "Human beings",
c: "Microorganisms ",
d: "None of the above",
correct: "c"
},
{
question :" Which of the following is a water-borne disease?",
a: "Blue baby syndrome",
b: "Typhoid",
c: "Meningitis",
d: "Cholera",
correct: "d"
},
{
question :" Which one of the following is NOT a greenhouse gas found naturally in the atmosphere?",
a: "Nitrogen oxide",
b: "Carbon dioxide",
c: "Methane",
d: "Ozone",
correct: "a"
},
{
question :" Baval trees should be planted and used to prevent and control",
a: "Water pollution",
b: "Air pollution",
c: "Soil pollution",
d: "Noise pollution",
correct: "b"
},
{
question :" The protocol which decided to completely phase out CFC is",
a: "Cartagena protocol",
b: "Stockholm Convention",
c: "Montreal protocol",
d: "Kyoto protocol",
correct: "c"
},

{
question :" Which of the following is biodegradable?",
a: "Aluminium can",
b: "Polythene bag",
c: "Cowdung",
d: "DDT",
correct: "c"
},
{
question :" Which of the following is an abiotic component of an ecosystem?",
a: "Humus",
b: "Bacteria",
c: "Plants",
d: "Fungi",
correct: "a"
},
{
question :" Which one of the following pairs belong to the category of primary consumers?",
a: "Eagle and snake",
b: "Grasshoppers & cattle",
c: "Snake and frog",
d: "Water beetles & fish",
correct: "b"
},
{
question :" Which of the following chemicals causes depletion of the ozone layer?",
a: "Carbon tetrachloride",
b: "Methane",
c: "Chloro fluoro carbon",
d: "Carbon monoxide",
correct: "c"
},
{
question :" In a food chain, the third trophic level is always occupied by",
a: "herbivore",
b: "carnivore",
c: "decomposer",
d: "producer",
correct: "b"
},
{
question :" The depletion of the ozone layer causes",
a: "global warming",
b: "earthquakes",
c: "increased UV radiations",
d: "acid rain",
correct: "c"
},
{
question :" In the given foodchain if the amount of energy at the fourth trophic level is 4 kJ, what will be the energy available at the producer level? Grass → Grasshopper → Frog → Snake",
a: "4 kJ",
b: "40 kJ",
c: "400 kJ",
d: "4000 kJ",
correct: "d"
},
{
question :" What will happen if all the deer are killed in the given food chain? Grass → Deer → Lion",
a: "The population of grass decreases.",
b: "The population of lions increases.",
c: "The population of lions remains unchanged.",
d: "The population of lions decreases and grass increases.",
correct: "d"
},
{
question :" Which of the two in the following sets belong to the same trophic level?",
a: "Grass; Grasshopper",
b: "Goat; Spider",
c: "Hawk ; Rat",
d: "Frog ; Lizard",
correct: "d"
},
{
question :" Excessive exposure to ultraviolet radiation causes ",
a: "inflammation of liver ",
b: "cancer of skin",
c: "damage to the lungs ",
d: "jaundice",
correct: "b"
},
{
question :" Which one of the following is an artificial ecosystem?",
a: "Lake ",
b: "Forest",
c: "Pond",
d: "Crop field",
correct: "d"
},
{
question :" The Earth summit was organised by",
a: "UNESCO",
b: "UNCED",
c: "WHO",
d: "UNICEF",
correct: "b"
},
{
question :" World Environmental day is celebrated on ________ every year.",
a: "01-05-2001",
b: "05-06-2005",
c: "01-10-2024",
d: "01-12-2025",
correct: "b"
},
{
question :" Environment includes",
a: "Abiotic component",
b: "Biotic component",
c: "Oxygen and Nitrogen",
d: "Abiotic and Biotic component",
correct: "d"
},
{
question :" The largest ecosystem of earth is",
a: "Biome",
b: "Hydrosphere",
c: "Lithosphere",
d: "Biosphere",
correct: "d"
},
{
question :" For which of the following reason, it is necessary to secure a large area for forest?",
a: "Absorption of carbon dioxide",
b: "Conservation of wild",
c: "More rain",
d: "Ecological balance",
correct: "d"
},
{
question :" Among the following climatic factors, which one has the least effect upon a terrestrial ecosystem?",
a: "Temperature variation",
b: "Wind",
c: "Conditions of sunlight",
d: "Availability of water",
correct: "b"
},
{
question  :" Soil is eroded heavily due to deforestation, it affects the flowing of surface water badly. Which of the following is badly affected by these causes",
a: "Human Resource",
b: "Ecological System",
c: "Climate",
d: "Local Plants",
correct: "b"
},
{
question :" What is the ecological system integrating all living beings and their relationships?",
a: "Total Wild Life",
b: "Biosphere",
c: "Lithosphere",
d: "Hydrosphere",
correct: "b"
},
{
question :" Global warming is expected to result in",
a: "Increase in sea level",
b: "Change in crop pattern",
c: "Change in coastal line",
d: "All of these",
correct: "d"
},
{
question :" What is the cause of ‘Green house effect’?",
a: "Nitrogen",
b: "Carbon Dioxide",
c: "Carbon Monoxide",
d: "Nitrogen Dioxide",
correct: "b"
},
{
question :" Where is the secretariat of the Conference on Biological Diversity?",
a: "London",
b: "Italy",
c: "Montreal",
d: "Toronto",
correct: "c"
},
{
question :" Which one of the following ecosystems covers the largest area of the earth’s surface?",
a: "Desert Ecosystem",
b: "Grassland Ecosystem",
c: "Mountain Ecosystem",
d: "Marine Ecosystem",
correct: "d"
},
{
question :" The correct sequence in decreasing order of the albedo values of these ecosystem is::,1. Taiga,2. Tropical evergreen,3. Tropical deciduous,4. Tundra",
a: "1 4 3 2",
b: "4 1 2 3",
c: "4 1 3 2",
d: "1 4 2 3",
correct: "c"
},
{
question :" Select the correct correct from the following: ,1. Melting of polar ice caps and subsequently rise in the sea level is the most important effect of global warming.,2. The sea level is likely to rise by one meter by 2070 AD if the present level of global warming is not controlled.,3. All the coral islands in the world will be submerged.,4. By 2044 AD, Fiji is likely to be submerged and rise in the sea level by the same year will pose a grave danger to the Netherlands.",
a: "1 2 3 and 4",
b: "4 only",
c: "1 2 and 4",
d: "1 2 and 3",
correct: "a"
},
{
question :" The Ozone hole over Antarctica was discovered in",
a: "1975",
b: "1985",
c: "1978",
d: "1987",
correct: "b"
},
{
question :" Which of the following has maximum bio-diversity?",
a: "Desert",
b: "Polar Region",
c: "River",
d: "Tropical Region",
correct: "d"
},
{
question :" The Biosphere is a region of earth which supports life. It includes- 1.Hydrosphere, 2.Lithosphere, 3.Stratosphere, 4.Troposphere",
a: "1 and 3",
b: "12 and 4",
c: "1 and 4",
d: "23 and 4",
correct: "b"
},
{
question :" Of the solar energy coming into the Biosphere, what percentage of it is actually used in the photosynthesis?",
a: "Less than 1",
b: "Between 1% and 15%",
c: "Between 15% and 2%",
d: "More than 2%",
correct: "d"
},
{

question :" Which of the following is least likely to be an effect of global warming?",
a: "Increased frequency of hurricanes",
b: "Loss of fertile delta region as for agriculture",
c: "Decreased rate of photosynthesis in vegetation",
d: "Shrinking of the polar ice regions",
correct: "c"
},
{
question :" EL-Nino is",
a: "Warm Ocean Current",
b: "Sea Storm",
c: "Tropical Disturbance",
d: "Another name of Typhoon",
correct: "a"
},
{
question :" What is the biggest source of pollution in the world?",
a: "Sewage and Garbage",
b: "Automobile Laxity",
c: "Herbicide and Insecticide",
d: "Industrial Tributaries",
correct: "a"
},
{
question :" The method of soil conservation in which different crops are grown in alternate rows and are sown at different times to protect the soil from rain wash is called?",
a: "Mulching",
b: "Intercropping",
c: "Rockdam",
d: "Terrace farming",
correct: "b"
},
{
question :" Which of the following environment supports the growth of Mangrove Swamp?",
a: "Tidal flat",
b: "Monsoon",
c: "Equatorial",
d: "Mixed",
correct: "a"
},
{
question :" The first protocol to ban the emissions of choloro fluorocarbons in the atmosphere was made in",
a: "Montreal",
b: "Osaka",
c: "Geneva",
d: "Florida",
correct: "a"
},
{
question :" The cause of reduction of forest coverage is",
a: "Agriculture",
b: "Manufacturing Industry",
c: "Rising Population",
d: "Toursim and Pilgrimage",
correct: "c"
},
{
question :" What is the benefit of rain water storage?",
a: "Recharging ground water level",
b: "Respite from floods",
c: "Reduce the scarcity of water",
d: "Protection from soilerosion",
correct: "a"
},
{
question :" When was the World Wildlife Fund founded?",
a: "1969",
b: "1992",
c: "1961",
d: "1965",
correct: "c"
},
{
question :" Which of the following is an important Green house Gas? ",
a: "Carbon Dioxide",
b: "Chlorofluorocarbon",
c: "Carbon Monoxide",
d: "Freon",
correct: "a"
},
{
question :" Which of the following is a renewable source of energy?",
a: "Atomic power",
b: "Hydro electric power",
c: "Thermal power",
d: "Natural gas",
correct: "b"
},
{
question :" Due to growing demand of which of the following product, tropical forest are being damaged the most",
a: "Pork",
b: "Sugar",
c: "Meat of Goat",
d: "Beef",
correct: "d"
}




]: (student_class=="Eleventh") ?
[
  {
question :" Which of these layers of the atmosphere consists of the ozone layer that is responsible for absorbing the Ultra-Violet (UV) light?",
a: "Troposphere",
b: "Mesosphere",
c: "Stratosphere",
d: "None of these",
correct: "c"
},

{
question :" Which of these are essential non-metallic minerals?",
a: "Coal, silica, clay, cement",
b: "Iron, copper, aluminium, zinc",
c: "Gold, platinum, silver",
d: "Granite, limestone, marble",
correct: "a"
},

{
question :" What is the estimated percentage of forest land that India should ideally have?",
a: "15%",
b: "50%",
c: "44%",
d: "33%",
correct: "d"
},

{
question :" An extensive number of chains interlinked in an ecosystem forms a ____ together.",
a: "Food chain",
b: "Food web",
c: "Carbon cycle",
d: "Nitrogen cycle",
correct: "b"
},

{
question :" Which of these elements is considered to be the largest source of commercial energy consumption in the world?",
a: "Nuclear",
b: "Natural gas",
c: "Oil",
d: "Coal",
correct: "c"
},

{
question :" Which one of these does NOT refer to the direct use of forest products?",
a: "Grass for grazing",
b: "Gums and resins",
c: "Medicine",
d: "Bamboo for baskets",
correct: "b"
},

{
question :" Which of these does not constitute to be a reason for the loss of forests?",
a: "Extinction of species",
b: "Increasing use of sood",
c: "Building dams and mining",
d: "Extensive usage of fuel woods",
correct: "a"
},

{
question :" Which of these days is celebrated in the form of World Environment Day all around the world?",
a: "July 5th",
b: "June 10th",
c: "October 20th",
d: "June 5th",
correct: "d"
},

{
question :" In which of these following can we find Brackish water ecosystems?",
a: "Wetlands",
b: "Streams",
c: "Deltas",
d: "Coastal shallows",
correct: "c"
},

{
question :" Which drug is associated with the tea or coffee plant source?",
a: "Camphor",
b: "Caffeine",
c: "Thorn Apple",
d: "Opium Poppy",
correct: "b"
},

{
question :" How many total numbers of biodiversity hotspots are there in the world?",
a: "36",
b: "32",
c: "28",
d: "18",
correct: "a"
},

{
question :" Which of these is the most naturally occurring and frequent disaster?",
a: "Tsunami",
b: "Drought",
c: "Earthquake",
d: "Flood",
correct: "d"
},

{
question :" Which two forms of alcohol do we include in biofuels?",
a: "Methanol and Ethanol",
b: "Propanol and Ethanol",
c: "Propanol and Methanol",
d: "None of the above",
correct: "a"
},

{
question :" Which of these gases is not permitted to be released by the Prevention and Control of Pollution Act by the Government?",
a: "Sulphur Dioxide",
b: "Carbon Monoxide",
c: "Nitrogen Oxide",
d: "All of the above",
correct: "d"
},

{
question :" In which of these years was the Forest Conservation Act amended?",
a: "1978",
b: "1988",
c: "1963",
d: "1952",
correct: "b"
},

{
question :" Which of these elements is present in the drinking water that can lead to numerous fatal diseases?",
a: "Phosphorus",
b: "Calcium",
c: "Arsenic",
d: "None of the above",
correct: "c"
},

{
question :" Which of these species do we use in indigenous medicine?",
a: "Babul",
b: "Zizyphus",
c: "Tamarind",
d: "None of the above",
correct: "d"
},

{
question :" Which of these are also known as Detrivores?",
a: "Decomposers",
b: "Carnivores",
c: "Herbivores",
d: "None of the above",
correct: "a"
},

{
question :" Which of these sacred groves acts as the gene bank for various wild plants?",
a: "Mauhak",
b: "Deorais",
c: "Jahera",
d: "None of these",
correct: "b"
},

{
question :" Which of these countries constitute approximately 57% of the various large dams in the world?",
a: "Brazil and India",
b: "Japan and India",
c: "China and India",
d: "Brazil and China",
correct: "c"
},

{
question :" The processes that warm the atmosphere are often collectively referred to as the, ",
a: "globalization",
b: "greenhouse effect",
c: "Silurian",
d: "none of the above",
correct: "b"
},

{
question :" What is the reason of duration of cold wave in America?",
a: "Bio-diversity and Habitat ",
b: "Climate and Energy",
c: "Political Administration",
d: "Polar Vortex",
correct: "d"
},

{
question :" Which of the following regions specializes in the cultivation of citrus fruits?",
a: "Equatorial region ",
b: "Mediterranean region",
c: "Polar region",
d: "Tundra region",
correct: "b"
},

{
question :" How fast to we need to stop burning fossil fuels to limit global temperature rise to 2 degrees C7 (3.6 degrees F)",
a: "We need to stop burning fossil fuels by 2100",
b: "We need to stop burning fossil fuels by 2040.",
c: "Fossil fuels don't matter, the Sun will cool and so will the Earth.",
d: "It's already too late to stay below the 2-degree threshold) We should have stopped buming fossil fuels in the early 2000s",
correct: "b"
},

{
question :" The leading producer of 'bort' variety of diamond in the world is",

a: "South Africa",
b: "Zaire",
c: "Ghana",
d: "Angola",

correct: "b"
},

{

question :" Which one of the following groups of four climates represents humid conditions?",

a: "A-B-C-E",
b: "A-C-D-E",
c: "BCDE",
d: "A-C-D-F",

correct: "a"
},

{

question :" The coldest place in India is ",
a: "Jammu and Kashmir",
b: "Drass (Kargil)",
c: "Mawsynram",
d: "Delhi",
correct: "b"
},

{
question :" Nights are cooler in the deserts than in the plains because",
a: "Sand radiates heat more quickly than the earth ",
b: "The sky remains clear most of the time",
c: "Sand absorbs heat more quickly than the earth",
d: "None of the above reasons",

correct: "a"
},

{
question :" The country which tops in the production of cocoa is",
a: "Ghana",
b: "Brazil",
c: "Ivory Coast",
d: "Nigeria",

correct: "c",
},

{

question :" classification attempts to organise climates according to their causes.",

a: "Empirical",
b: "Hydrological",
c: "Genetic",
d: "None of the above",

correct: "c"
},

{

question :" Most of the Japanese industries are located on the",

a: "Hokkaido coast",
b: "Honshu coast ",
c: "Shikoko coast",
d: "Kyushu coast",

correct: "a"
},

{

question :" 5th June is observed as",
a: "World environment day",
b: "World forest day",
c: "World population day",
d: "World wildlife day",
correct: "a"
},

{
question :" The unfavorable alteration of environment by human activities is termed as",
a: "Ecological disturbance",
b: "Ecological degradation",
c: "Pollution",
d: "Catastrophe",
correct: "b"
},

{
question :" Biogas contains mainly",
a: "Carbon dioxide",
b: "Methane",
c: "Butane",
d: "Propane",
correct: "b"
},

{
question :" Main source of acid rain is",
a: "Sulphur dioxide",
b: "Nitrogen",
c: "Carbon dioxide",
d: "Carbon monoxide",
correct: "a"
},

{
question :" Treated water can be disinfected by adding",
a: "Alum",
b: "Fluorine",
c: "Chlorine",
d: "Oxygen",
correct: "c"
},

{
question :" The burning of fossil fuels releases large amount of",
a: "Nitrogen",
b: "Sulphur",
c: "Carbon",
d: "Hydrogen",
correct: "b"
},

{
question :" Which of the following does not causes air pollution when used for heating purposes",
a: "Coal",
b: "Petrol",
c: "Kerosene",
d: "Solar energy",
correct: "d"
},

{
question :" pH of rainwater is",
a: "5-6",
b: "6-7",
c: "7-8",
d: "8-9",
correct: "a"
},

{
question :" A poisonous gas given out of vehicles exhaust is",
a: "Carbon monoxide",
b: "Ethane",
c: "Methane",
d: "Carbon dioxide",
correct: "a"
},

{
question :" A common bactericide used in swimming pools is",
a: "Chlorine",
b: "Alum",
c: "Borax",
d: "DDT",
correct: "a"
},

{
question : " Green house effect is linked to",
a: "Nitrogen oxides",
b: "Sulphur dioxides",
c: "Carbon dioxides",
d: "Carbon monoxides",
correct: "c"
},

{
question : " Disposable glasses and plates are made up of",
a: "PVC",
b: "Polystyrene",
c: "Polyvinyl alcohol",
d: "Polypropylene",
correct: "d"
},

{
question : " Aerosols consisting of solid particles produced by combustion",
a: "Fog",
b: "Smog",
c: "Smoke",
d: "None of these",
correct: "c"
},

{
question : " Which of the following are consequences of ozone depletion",
a: "Skin cancer and cataract",
b: "Reduced growth in plants",
c: "Shortening of zooplanktons and their breeding period",
d: "All of the above",
correct: "a"
},

{
question : " Which out of the following is a measure to control air pollution",
a: "Reduction in use of fossil fuels",
b: "Increasing use of renewable energy resources",
c: "Using catalytic convertors in vehicles",
d: "All of the above",
correct: "d"
},

{
question : " The discharge of warm/hot water directly into rivers is known as",
a: "Water pollution",
b: "Thermal pollution",
c: "Marine pollution",
d: "None of the above",
correct: "b"
},

{
question : " Yellowing of Taj Mahal is an effect of",
a: "Acid rain",
b: "Global warming",
c: "Ozone depletion",
d: "All of the above",
correct: "a"
},

{
question : " Identify the aftermaths of acid rain from the following",
a: "Dissolving and washing away of nutrients from the soil",
b: "Increasing the acidity of soils, thereby hindering the growth of plants",
c: "Damaging the building materials/ heritage sites",
d: "All of the above",
correct: "d"
},

{
question : " Increase in concentration of toxic level in each trophic level is referred to as",
a: "Eutrophication",
b: "Biomagnification",
c: "Bioaccumulation",
d: "Bioconcentration",
correct: "b"
},

{
question : " Pollutants that are easily manageable and decomposable in nature are called",
a: "Biodegradable pollutants",
b: "Non-biodegradable pollutants",
c: "Renewable pollutants",
d: "None of these",
correct: "a"
},

{
question : " The supersonic jets cause air pollution by the thinning of",
a: "Carbon dioxide layer",
b: "Sulphur dioxide layer",
c: "Ozone layer",
d: "Oxygen layer",
correct: "c"
},

{
question : " Which of the following is the best indicator of SO2 pollution",
a: "Bryophytes",
b: "Pteridophytes",
c: "Lichens",
d: "Algae",
correct: "c"
},

{
question : " Ozone depletion is caused due to increase in the level of",
a: "Water vapour",
b: "Oxygen",
c: "Chlorofluorocarbon",
d: "Carbon monoxide",
correct: "c"
},

{
question : " What type of chemical weathering is enhanced by acid rain?",
a: "Hydrolysis",
b: "Dissolution",
c: "Oxidation",
d: "None of the above",
correct: "a"
},

{
question : " What process causes the disintegration of rock at or near the earth’s surface?",
a: "Physical weathering",
b: "Chemical weathering",
c: "Erosion",
d: "None of the above",
correct: "a"
},

{
question : " Which of the following gas affects human health by reducing the blood’s ability to carry oxygen to different parts of the body?",
a: "Carbon monoxide",
b: "Carbon dioxide",
c: "Sulphur dioxide",
d: "Nitrous dioxide",
correct: "a"
},

{
question : " Nitrogen oxide affects human health by____",
a: "Causing irritation to the eyes and skin",
b: "Aggravating asthma problem",
c: "Decreasing blood’s ability to transport oxygen",
d: "None of the above",
correct: "b"
},

{
question : " The air pollutants are mainly classified as______",
a: "Point source and non-point source",
b: "Primary and secondary pollutants",
c: "Natural or anthropogenic pollutants",
d: "None of the above",
correct: "b"
},

{
question : " The best way to dispose plant waste is_____",
a: "Burning",
b: "Composting",
c: "Dumping in a hilly area",
d: "Incineration",
correct: "b"
},

{
question : " Which of the following is not one of the major environment problems resulting from human interference in the nitrogen cycle?",
a: "Global warming due to release of nitrous oxide",
b: "Acid rain",
c: "Eutrophication",
d: "Ozone depletion",
correct: "d"
},

{
question : " Which of the following is not a major greenhouse gas_____",
a: "Carbon dioxide",
b: "Methane",
c: "Water vapour",
d: "Calcium carbonate",
correct: "d"
},

{
question : " Montreal Protocol signed in 1987 was signed to___",
a: "Phase out the use of CFC’s which cause depletion of the ozone layer",
b: "Reduces the greenhouse effect",
c: "Protect endangered species",
d: "Ban nuclear testing in tropical oceans",
correct: "a"
},

{
question : " Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
a: "Increased skin cancer",
b: "Reduced immune system",
c: "Increased liver cancer",
d: "Damage to eyes",
correct: "c"
},

{
question : " Unburnt carbon particles causes____",
a: "Cardiac problem",
b: "Respiratory problems",
c: "Throat problems",
d: "Skin infection",
correct: "b"
},

{
question : " Which of the following units is used to measure the intensity of noise?",
a: "Decibel",
b: "Phon",
c: "Hz",
d: "Watts/m",
correct: "a"
},

{
question : " Human ear is most sensitive to noise in which of the following frequency range?",
a: "1-2 kHz",
b: "10-12 kHz",
c: "100-500 Hz",
d: "13-16 kHz",
correct: "d"
},

{
question : " Which of the following pairs regarding typical composition of hospitals wastes is incorrect?",
a: "Plastics: 9-12%",
b: "Metals: 1-2%",
c: "Ceramic: 8-10%",
d: "Biodegradable: 35-40%",
correct: "d"
},

{
question : " Maximum soot is released from_____",
a: "Petrol vehicles",
b: "Diesel Vehicles",
c: "CNG vehicles",
d: "Thermal power plants",
correct: "d"
},

{
question : " Surface ozone is produced from_____",
a: "Transport sector",
b: "Textile industry",
c: "Carbon monoxide",
d: "None of the above",
correct: "a"
},

{
question : " In the metro city of Kolkata, the major cause of air pollution is______",
a: "Cement plants",
b: "Chemical industry",
c: "Hydrocarbons",
d: "Water vapours",
correct: "a"
},

{
question : " Which of the following is the main discharge from coal based power plants (thermal plants)?",
a: "SPM",
b: "Smog",
c: "Fly ash",
d: "None of the above",
correct: "c"
},

{
question : " The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is____",
a: "Nitrates",
b: "Fluorides",
c: "Sulphates",
d: "Oxides",
correct: "a"
},

{
question : " Which of the following metal is responsible for Minamata disease?",
a: "Mercury",
b: "Chromium",
c: "Cadmium",
d: "Iron",
correct: "a"
},

{
question : " Intake of lead may primarily cause damage of the____",
a: "Brain",
b: "Liver",
c: "Lung",
d: "Kidney",
correct: "a"
},

{
question : " Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},

{
question : " Industries generating hazardous waste are classified as_____",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red ",
correct: "d"
},

{
question : " Which of the following greenhouse gases are entirely anthropogenic in origin?",
a: "Water vapour",
b: "CFCs",
c: "Carbon dioxide",
d: "Methane",
correct: "b"
},

{
question : " What are planktons?",
a: "Plants living in water",
b: "Very small plants and animals living in water",
c: "Very small animals living on land",
d: "Plants living on land",
correct: "b"
},

{
question : " What is the meaning of the term ‘abyssopelagic’?",
a: "Organisms living at water depths greater than 2000 m",
b: "Organisms living at water depths greater than 4000 m",
c: "Organisms living at water depths greater than 3000m",
d: "Organisms living at water depths greater than 1000m",
correct: "b"
},

{
question : " The production of light by living beings is known as",
a: "Bio-luminescence",
b: "Bio-lighting",
c: "Bio-fluorescence",
d: "Bio-diversity",
correct: "a"
},

{
question : " Which country is popularly knowns as ‘land of the windmills’?",
a: "The Netherlands",
b: "Poland",
c: "Norway",
d: "Japan",
correct: "a"
},

{
question : " Who was the first man to travel in space?",
a: "Edwin Aldrin",
b: "Neil Armstrong",
c: "Yuri Gagarin",
d: "Gregory Mendel",
correct: "c"
},

{
question : " Which instrument is used to measure wind velocity?",
a: "Barometer",
b: "Anemometer",
c: "Hygrometer",
d: "Radiometer",
correct: "b"
},

{
question : " What is the instrument used to detect earthquakes?",
a: "Radiometer",
b: "Barometer",
c: "Seismograph",
d: "Anemometer",
correct: "c"
},

{
question : " What is the unit in which radio activity is measured?",
a: "Newton",
b: "Roentgen",
c: "Decibel",
d: "Gagarin",
correct: "b"
},

{
question : " The region of the atmosphere above 400 km and higher is known as",
a: "Exosphere",
b: "Mesosphere",
c: "Thermosphere",
d: "Atmosphere",
correct: "a"
},

{
question : " The major diet of pandas is",
a: "Acacia leave",
b: "Bamboo",
c: "Grass",
d: "Tree",
correct: "b"
},

{
question : " Which of the following is not an endangered animal?",
a: "Siberian tiger",
b: "Loggerhead turtle",
c: "The Maned Wolf",
d: "Indian tiger",
correct: "c"
},

{
question : " The non-point pollution of river water involves discharge of pollutants through",
a: "urban sewage drains",
b: "industrial effluents",
c: "agricultural fields",
d: "both a and b",
correct: "c"
},

{
question : " In ecological terms, what does the term 'standing crop' signify ?",
a: "total weight of whole organic matter",
b: "total weight of heterotrops",
c: "total area covered by crops",
d: "None of the above",
correct: "a"
},

{
question : " The ecological processes follow the principle of uniformitarianism. This means :",
a: "the ecological processes have a uniform effect",
b: "same physical and biological processes that operates today operated in the past",
c: "physical and biological processes operate with a uniform rate",
d: "None of the above",
correct: "b"
},

{
question : " In which of the following countries are the Kermadec Islands located? ",
a: "France",
b: "UK",
c: "New Zealand",
d: "None of the above",
correct: "c"
},

{
question : " In which of the following state of India Bhitarkanika National Park is situated?",
a: "Rajasthan",
b: "Odisha",
c: "Nagaland",
d: "Tamil Nadu",
correct: "b"
},
{
question : " Which of the following Wildlife Sanctuary is located in Andhra Pradesh?",
a: "Mahao Wildlife Sanctuary",
b: "Kamlang Wildlife Sanctuary",
c: "Amchang Wildlife Sanctuary",
d: "Sonai Rupai Wildlife Sanctuary",
correct: "a"
},
{
question : " In which of the following state of India, Bellandur Lake is situated?",
a: "Bengaluru",
b: "Manipur",
c: "Sikkim",
d: "Maharashtra",
correct: "a"
},
{
question : " For which of the following movies has Chloe Zhao been conferred with the Oscar Award?",
a:  "The Father",
b: "Minari",
c: "Nomadland",
d: "Soul",
correct: "c"
},
{
question : " In which of the following year the Environment Protection Act enacted?",
a: "1984",
b: "1986",
c: "1989",
d: "1990",
correct: "b"
},
{
question : " What is Light?",
a: "Longitudinal Wave",
b: "Transverse Wave",
c: "Both A and B",
d: "Neither A nor B",
correct: "b"
},
{
question : " Which of the following country has the highest total number of Military Personnel?",
a: "Vietnam",
b: "South Korea",
c: "India",
d: "North Korea",
correct: "a"
},
{
question : " What is the capital of Ukraine?",
a: "Kyiv (Kiev)",
b: "Yerevan",
c: "Canberra",
d: "Moscow",
correct: "a"
},
{
question : " In which of the following Indian states do the Varuna and Assi rivers flow?",
a: "Uttar Pradesh",
b: "Maharashtra",
c: "Rajasthan",
d: "Madhya Pradesh",
correct: "a"
},
{
question : " In which of the following years was Bangladesh formed as a separate country?",
a: "1970",
b: "1971",
c: "1972",
d: "1973",
correct: "b"
},
{
question : " Which of the following rivers is known as the father of African rivers?",
a: "Niger",
b: "Nile",
c:  "Orange river",
d: "Kasai river",
correct: "b"
},
{
question : " Which of the following battles were fought by Chhatrapati Shivaji Maharaj?",
a: "Battle of Kolhapur",
b: "Battle of Pratapgad",
c: "Battle of Sinhagad",
d: "All the above",
correct: "d"
},
{
question : " When was Champaran Satyagraha started?",
a: "1916",
b: "1917",
c: "1920",
d: "1921",
correct: "b"
},
{
question : " When was Gandhi-Irwin Pact signed?",
a: "1928",
b: "1930",
c: "1931",
d: "1935",
correct: "c"
},
{
question : " Abiy Ahmed is the Prime Minister of which country?",
a: "Ethiopia",
b: "Eritrea",
c: "Kenya",
d: "None of the above",
correct: "a"
},
{
question : " Second Buddhist Council was presided by whom?",
a: "Gautamiputra Satkarni",
b: "Vasumitra",
c: "Sabakami",
d: "None of the above",
correct: "c"
},
{
question : " What is the name of the Guptas' silver coin?",
a: "Para",
b: "Rupaka",
c: "Dinara",
d: "None of the above",
correct: "b"
},
{
question : " In which of the following states is Umlingla Pass located?",
a: "Uttarakhand",
b: "Manipur",
c: "Sikkim",
d: "Ladakh",
correct: "d"
},
{
question : " Who founded the Ram Cult in Northern India?",
a: "Kabir",
b: "Ramananda",
c: "Bhavabhuti",
d: "Guru Nanak",
correct: "b"
},
{
question : " Which of the following is not a folk dance of Himachal Pradesh?",
a: "Jhora",
b: "Chharhi",
c: "Chhapeli",
d: "Panwariya",
correct: "d"
},
{
question : " Who gave the most detailed accounts of all historic descriptions of the ancient city of Hampi?",
a: "Fernao Nuniz",
b: "Domingo Paes",
c: "Ibn Batuta",
d: "Abdur Razzaq",
correct: "b"
},
{
question : " Who is the author of the 'Durgeshnandini' novel?",
a: "Bankim Chandra Chattopadhyay",
b: "Baliram Keshav Rao Hedgewar",
c: "Barindra Kumar Ghosh",
d: "Behramji M Malabari",
correct: "a"
},
{
question : " Who is known as the 'Grand Old Man of lndia'?",
a: "Dr Bhimrao Ramji Ambedkar",
b: "Dr Rajendra Prasad",
c: "Dadabhai Naoroji",
d: "Gopal Krishna Gokhale",
correct: "c"
},

{
question : " Who is popularly known as Loknayak?",
a: "Jamnalal Bajaj",
b: "Jayaprakash Narayana",
c: "Jatindra Nath Das",
d: "Khudiram Bose",
correct: "b"
},

{

question : " Carbon monoxide is a poisonous gas which when inhaled in too much quantity causes headache, nausea, vomiting and even death. The toxicity of carbon monoxide is due to",
a: "Its greater affinity for haemoglobin as compared to carbon dioxide",
b: "Its lower affinity for haemoglobin as compared to carbon dioxide",
c: "Its greater affinity for haemoglobin as compared to oxygen",
d: "Its greater affinity for oxygen as compared to haemoglobin",
correct: "c"
},

{
question : " Which of the following is the latest addition to World Heritage sites list by UNESCO?",
a: "Khangchendzonga National Park, Sikkim",
b: "Capital Complex, Chandigarh",
c: "Nalanda Mahavihara, Bihar",
d: "All of these",
correct: "d"
},

{
question : " The increase in Earth's average surface temperature due to the effect of greenhouse gases such as CO2, and emissions from fossil fuel is known as global warming. What could be the effect of global warming?",
a: "There will be melting of polar ice caps",
b: "There will be an increase in crop production",
c: "There will be a rise in sea level",
d: "Both A and C",
correct: "d"
},
{
question : " Which of the following movements fights against the taking over of fertile land for testing of missiles in a thickly populated village in Odisha?",
a: "Chipko Movement",
b: "Baliapal Movement",
c: "Bishnoi Movement",
d: "Appiko Movement",
correct: "b"
},
{

question : " World Water Day focuses on water conservation and critical water issues. On which date it is celebrated?",
a: "11 December",
b: "22 April",
c: "22 March",
d: "21 November",
correct: "c"
},
{

question : " The Antarctic Treaty states that",
a: "The continent be used for scientific research only",
b: "The continent be used for tourist purpose only",
c: "No person can live on Antarctic continent",
d: "Only wild tribes are free to live on the continent",
correct: "a"
},
{

question : " Which of the following might happen if plants stop releasing oxygen into the atmosphere?",
a: "The plants will be healthier",
b: "The number of plants will increase",
c: "There will be rich biodiversity",
d: "The number of animals will decrease",
correct: "d"
},
{

question : " Toyota sponsored a campaign which was hosted by NDTV to save environment. The main goal of this campaign was to spread awareness among people in India to sustain the greenery of Mother Nature. Name the campaign",
a: "Green Nature",
b: "Greenathon",
c: "Green Nation",
d: "Clean India Green India",
correct: "b"
},
{
          question : " Some species of plants and animals are extremely rare and may occur only at a few locations are called",
          a: " Endemic ",
          b: " Endangered ",
          c: " Vulnerable ",
          d: " Threatened ",
          correct: "b"
      },
{
          question : " In which Indian state is Corbet National park located",
          a: " Madya Pradesh ",
          b: " Uttarakhand ",
          c: " Kerala ",
          d: " Tamilnadu ",
          correct: "b"
      },
{
          question : " The first national park of Kerala",
          a: " Aralam ",
          b: " Kottayam ",
          c: " Idukki ",
          d: " Iravikulam ",
          correct: "d"
      },
{
          question : " In which year was Project Tiger launched?",
          a: "1973",
          b: "1964",
          c: "1998",
          d: "1970",
          correct: "a"
      },
{
          question : " Earth summit of Rio de Janeiro 1992) resulted in",
          a: " Compilation of Red list ",
          b: " Establishment of biosphere reserves ",
          c: " Conservation of biodiversity ",
          d: " IUCN ",
          correct: "c"
      },
{
          question : " All the genes of a population is called",
          a: " Gene pool ",
          b: " Genome ",
          c: " Gene bunch ",
          d: " Gene population",
          correct: "a"
      },
{
          question : " A set of organisms that resemble one another in appearance and behaviour is called a_______",
          a: " Exons ",
          b: " Prions ",
          c: " Species ",
          d: " guilds ",
          correct: "c"
      },
{
          question : " The phenomenon of occurrence of additional species found in the ecotone or transitional zone between adjoining ecosystems is known as_________",
          a: " Edge effect",
          b: " Root effect ",
          c: " Raman effect ",
          d: " Coolidge effect ",
          correct: "a"
      },
{
          question : " Who among the following is commonly called ‘Bird Man of India’?",
          a: " Salim Ali ",
          b: " M.S. Swaminathan ",
          c: " M.C. Mehta ",
          d: " Raphel Emerson ",
          correct: "a"
      },
{
          question : " The only ape found in India",
          a: " Gorilla ",
          b: " Chimpanzee ",
          c: " Hoolock gibbon ",
          d: " Oranguttan ",
          correct: "c"
      },
{
          question : " Which of the following region has maximum diversity?",
          a: " Mangroves ",
          b: " temperate rainforest ",
          c: " Taiga ",
          d: " coral reefs ",
          correct: "d"
      },
{
          question : " Which plants die after flowering?",
          a: " Lotus ",
          b: " Bamboo ",
          c: " Chrysanthemum ",
          d: " Butea ",
          correct: "b"
      },
{
          question : " Which tree is known as Coral tree?",
          a: " Quercus ",
          b: " Dipterocarps ",
          c: " Erythrina ",
          d: " Zizypus ",
          correct: "c"
      },
{
          question : " Salim Ali Centre for Ornithology and Natural history is located at ____",
          a: " Pune ",
          b: " Hyderabad ",
          c: " Kerala ",
          d: " Coimbatore ",
          correct: "d"
      },
{
          question : " World wildlife week is observed during",
          a: " First week of October ",
          b: " Last week of October ",
          c: " Third week of October ",
          d: " First  week of September ",
          correct: "a"
      },
{
          question : " Zoological Survey of India is at",
          a: " Delhi ",
          b: "Mumbai",
          c: " Kolkata ",
          d: "Chennai",
          correct: "c"
      },
{
          question : " The Salim Ali Bird sanctuary is located at",
          a: " Pondicherry ",
          b: " Thattekad ",
          c: " Anakkatti ",
          d: " Kalakkadj",
          correct: "b"
      },
{
question :" Which of the following is the main discharge from coal based power plants (thermal plants)?",
a: "SPM",
b: "Smog",
c: "Fly ash",
d: "None of the above",
correct: "c"
},
{
question :" The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
a: "Nitrates",
b: "Fluorides",
c: "Sulphates",
d: "Oxides",
correct: "a"
},
{
question :" Which of the following metal is responsible for Minamata disease?",
a: "Mercury",
b: "Chromium",
c: "Cadmium",
d: "Iron",
correct: "a"
},
{
question :" Intake of lead may primarily cause damage of the________",
a: "Brain",
b: "Liver",
c: "Lung",
d: "Kidney",
correct: "a"
},
{
question :" Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},
{
question :" Industries generating hazardous waste are classified as___________",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red",
correct: "d"
},
{
question :" Which of the following greenhouse gases are entirely anthropogenic in origin?",
a: "Water vapour",
b: "CFCs",
c: "Carbon dioxide",
d: "Methane",
correct: "b"
},
{
question :" Peroxyacyl nitrate (PAN) is a by-product of____________",
a: "Photochemical smog",
b: "Sulphurous smog",
c: "London smog",
d: "None of the above",
correct: "a"
}


]:
[
  {
question :" Pollution causes undesirable changes in which the following characteristics of air, water, land or soil ?",
a: "Physical",
b: "Chemical",
c: "Biological",
d: "All of these",
correct: "d"
},

{
question :" To improve the quality of environment (air, water and soil) the Govt. of India passed the 'Environment (Protection) Act' in year",
a: "1981",
b: "1986",
c: "1987",
d: "1974",
correct: "b"
},

{
question :" Which one of the following is a most efficient device to eliminate particulate matters from the industrial emissions?",
a: "Cyclonic separators",
b: "Trajectory separators",
c: "Incineration",
d: "Electrostatic precipitator",
correct: "d"
},

{
question :" The scrubber is used mainly to remove which of the following gas/es from the exhaust after spraying water/lime?",
a: "CO₂",
b: "SO₂",
c: "O₂ and N₂",
d: "CO and CO₂",
correct: "b"
},

{
question :" Which of the two expensive metals are used as catalysts by catalytic converters and are fitted into automobiles for reducing emission of poisonous gases?",
a: "Platinum-palladium, rhodium",
b: "Cadmium, rhodium",
c: "Copper, cadmium",
d: "Lead, mercury",
correct: "a"
},

{
question :" Which of the following level of sound may damage ear drum and can impair the hearing ability permanently?",
a: "80 dB",
b: "100 dB",
c: "120 dB",
d: "150 dB",
correct: "d"
},

{
question :" Euro Il norms stipulate that sulphur be controlled at, ppm in diesel and",
a: "350, 150",
b: "150; 350",
c: "350; 250",
d: "150; 250",
correct: "a"
},

{
question :"  All automobiles and fuel-petrol and diesel were to have met the Euro Ill emission specifications in some cities from 1 April 2005 and have to meet the Euro-IV norms by",
a: "1 April 2008",
b: "1 April 2009",
c: "1 April 2010",
d: "1 April 2012",
correct: "c"
},

{
question :" Which of the following minimum percentage of impurities by domestic sewage make the water unfit for human use?",
a: "1",
b: "5",
c: "0.1",
d: "0.5",
correct: "c"
},

{
question :" The amount of organic matter in sewage water can be estimated by",
a: "measuring demand",
b: "weight of micro-organisms",
c: "salt analysis",
d: "calorimetery",
correct: "a"
},

{
question :" Non-biodegradable pollutants are created by",
a: "humans",
b: "natural disasters",
c: "excessive use of resources",
d: "nature",
correct: "a"
},

{
question :" According to the Central Pollution Control Board, particles that are responsible for causing great harm to human health are of diameter",
a: "2.50 micrometers",
b: "5.00 micrometers",
c: "10.00 micrometers",
d: "7.5 micrometers",
correct: "a"
},

{
question :" The material generally used for sound proofing of rooms like a recording studio and auditorium, etc. is:",
a: "styrofoam",
b: "wood",
c: "coir",
d: "cotton",
correct: "a"
},

{
question :" Compressed Natural Gas (CNG) is",
a: "methane",
b: "ethane",
c: "butane",
d: "propane",
correct: "a"
},

{
question :" World's most problematic squatic weed is",
a: "Eichornia",
b: "Wolffia",
c: "Azolla",
d: "Trapa",
correct: "a"
},

{
question :" Which of the following causes biomagnification?",
a: "Mercury",
b: "DDT",
c: "Both",
d: "None of the above",
correct: "c"
},

{
question :" The expanded form of DDT is",
a: "dichloro diphenyl trichloroethane",
b: "dichloro diethyl trichloroethane",
c: "dichloro dipyrydyl trichloroethane",
d: "dichloro diphenyl tetrachloroacetate",
correct: "a"
},

{
question :" Which of the following material takes the longest time for biodegradation?",
a: "Bone",
b: "Jute",
c: "Paper",
d: "Cotton",
correct: "a"
},

{
question :" In an area where DDT had been used extensively, the population of birds declined significantly because",
a: "Many of the birds eggs laid, did not hatch",
b: "Birds stopped laying eggs",
c: "Earthworms in the area got eradicated",
d: "Earthworms in the area",
correct: "c"
},

{
question :" Lichens indicate 502 pollution because they",
a: "show association between algae and fungi",
b: "grow faster than others",
c: "are sensitive to SO₂",
d: "flourish in SO, rich environment",
correct: "c"
},

{
question :" Acid rains are produced by ",
a: "excess NO₂ and SO₂ from burning fossil fuels",
b: "excess production of NH3 by industry and coal gas",
c: "excess release of carbon monoxide by incomplete combustion",
d: "excess formation of CO₂ by combustion and animal respiration",
correct: "a"
},

{
question :" Green-house effect is warming due to",
a: "infra-red rays reaching earth ",
b: "moisture layer in atmosphere",
c: " increase in temperature due to increase in carbon dioxide concentration of atmosphere",
d: "ozone layer of atmosphere",
correct: "c"
},

{
question :" Major aerosol pollutant in jet plane emission is",
a: "sulphur dioxide ",
b: "carbon monoxide",
c: "methane",
d: "chlorofluoro-carbons",
correct: "d"
},

{
question :" Gas released during Bhopal tragedy was",
a: "methyl isocyanate ",
b: "potassium isothiocyanate",
c: "sodium isothiocyanate",
d: "ethyl isothiocyanate",
correct: "a"
},

{
question :" The process of restoring forests that once existed but was removed at some time in the past is known as",

a: "Afforestation",
b: "Reforestation",
c: "Deforestation",
d: "None of these",

correct: "b"
},

{

question :" Red data book contains data of",

a: "All plant species",
b: "All animal species",
c: "Threatened species",
d:  "Economically important species",

correct: "c"
},

{

question :" IUCN Headquarters is at",
a: "Morges, Switzerland",
b: "Paris, France",
c: "Vienna, Austria",
d: "New York, USA",
correct: "a"
},

{
question :" Which of the following regions has the maximum diversity?",
a: "Mangroves",
b: "Temperate forest",
c: "Taiga",
d: "Coral reefs",

correct: "d"
},

{
question :" The most important reason for decrease in biodiversity is",
a: "Habitat pollution",
b: "Over exploitation",
c: "Habitat destruction",
d: "Introduction of exotic specie",

correct: "a",
},

{

question :" Dodo is",

a: "Endangered species",
b: "Rare species",
c: "Extinct species",
d: "Exotic species",

correct: "c"
},

{

question :" Blue whale is placed under",

a: "Endangered",
b: "Rare",
c: "Extinct",
d: "Exotic",

correct: "a"
},

{

question :" Conservation within the natural habitat is",
a: "Ex-situ conservation",
b: "In-situ conservation",
c: "Ex-vivo conservation",
d: "In-vivo conservation",
correct: "b"
},

{
question :" Which one of the following is not included under in situ conservation?",
a: "Zoo",
b: "National Park",
c: "Wild life Sanctuary",
d: "Biosphere Reserve",
correct: "a"
},

{
question :" Ex-situ conservation includes",
a: "Zoo",
b: "Botanical Garden",
c: "Germplasm Bank",
d: "All of the above",
correct: "d"
},

{
question :" Hotspots are regions of high",
a: "Rareism",
b: "Endemism",
c: "Diversity",
d: "Critically endangered population",
correct: "c"
},

{
question :" Endemic species are",
a: "Rare species",
b: "Species localized in a specific region",
c: "Cosmopolitan in distribution",
d: "None of these",
correct: "b"
},

{
question :" Which one of the following has the maximum genetic diversity in India?",
a: "Tea",
b: "Teak",
c: "Mango",
d: "Wheat",
correct: "c"
},

{
question :" Which one of the following regions in India is a hotspot of biodiversity?",
a: "Sundarbans",
b: "Western Ghats",
c: "Eastern Ghats",
d: "Gangetic plains",
correct: "b"
},

{
question :" Darwin’s finches are a good example of",
a: "Convergent evolution",
b: "Adaptive radiation",
c: "Connecting link",
d: "Industrial melanism",
correct: "b"
},

{
question :" Which group of vertebrates comprises of highest number of species",
a: "Mammals",
b: "Fishes",
c: "Reptiles",
d: "Birds",
correct: "b"
},

{
question :" 5th June is observed as",
a: "World environment day",
b: "World forest day",
c: "World population day",
d: "World wildlife day",
correct: "a"
},

{
question : " The unfavorable alteration of environment by human activities is termed as",
a: "Ecological disturbance",
b: "Ecological degradation",
c: "Pollution",
d: "Catastrophe",
correct: "b"
},

{
question : " Biogas contains mainly",
a: "Carbon dioxide",
b: "Methane",
c: "Butane",
d: "Propane",
correct: "b"
},

{
question : " Main source of acid rain is",
a: "Sulphur dioxide",
b: "Nitrogen",
c: "Carbon dioxide",
d: "Carbon monoxide",
correct: "a"
},

{
question : " Treated water can be disinfected by adding",
a: "Alum",
b: "Fluorine",
c: "Chlorine",
d: "Oxygen",
correct: "c"
},

{
question : " The burning of fossil fuels releases large amount of",
a: "Nitrogen",
b: "Sulphur",
c: "Carbon",
d: "Hydrogen",
correct: "b"
},

{
question : " Which of the following does not causes air pollution when used for heating purposes",
a: "Coal",
b: "Petrol",
c: "Kerosene",
d: "Solar energy",
correct: "d"
},

{
question : " Yellowing of Taj Mahal is an effect of",
a: "Acid rain",
b: "Global warming",
c: "Ozone depletion",
d: "All of the above",
correct: "a"
},

{
question : " pH of rainwater is",
a: "5-6",
b: "6-7",
c: "7-8",
d: "8-9",
correct: "a"
},

{
question : " A poisonous gas given out of vehicles exhaust is",
a: "Carbon monoxide",
b: "Ethane",
c: "Methane",
d: "Carbon dioxide",
correct: "a"
},

{
question : " A common bactericide used in swimming pools is",
a: "Chlorine",
b: "Alum",
c: "Borax",
d: "DDT",
correct: "a"
},

{
question : " Green house effect is linked to",
a: "Nitrogen oxides",
b: "Sulphur dioxides",
c: "Carbon dioxides",
d: "Carbon monoxides",
correct: "c"
},

{
question : " Disposable glasses and plates are made up of",
a: "PVC",
b: "Polystyrene",
c: "Polyvinyl alcohol",
d: "Polypropylene",
correct: "d"
},

{
question : " Aerosols consisting of solid particles produced by combustion",
a: "Fog",
b: "Smog",
c: "Smoke",
d: "None of these",
correct: "b"
},

{
question : " Which of the following are consequences of ozone depletion",
a: "Skin cancer and cataract",
b: "Reduced growth in plants",
c: "Shortening of zooplanktons and their breeding period",
d: "All of the above",
correct: "a"
},

{
question : " Which out of the following is a measure to control air pollution",
a: "Reduction in use of fossil fuels",
b: "Increasing use of renewable energy resources",
c: "Using catalytic convertors in vehicles",
d: "All of the above",
correct: "d"
},

{
question : " The discharge of warm/hot water directly into rivers is known as",
a: "Water pollution",
b: "Thermal pollution",
c: "Marine pollution",
d: "None of the above",
correct: "b"
},

{
question : " Yellowing of Taj Mahal is an effect of",
a: "Acid rain",
b: "Global warming",
c: "Ozone depletion",
d: "All of the above",
correct: "b"
},

{
question : " Identify the aftermaths of acid rain from the following",
a: "Dissolving and washing away of nutrients from the soil",
b: "Increasing the acidity of soils, thereby hindering the growth of plants",
c: "Damaging the building materials/ heritage sites",
d: "All of the above",
correct: "d"
},

{
question : " Increase in concentration of toxic level in each trophic level is referred to as",
a: "Eutrophication",
b: "Biomagnification",
c: "Bioaccumulation",
d: "Bioconcentration",
correct: "b"
},

{
question : " Pollutants that are easily manageable and decomposable in nature are called",
a: "Biodegradable pollutants",
b: "Non-biodegradable pollutants",
c: "Renewable pollutants",
d: "None of these",
correct: "a"
},

{
question : " The supersonic jets cause air pollution by the thinning of",
a: "Carbon dioxide layer",
b: "Sulphur dioxide layer",
c: "Ozone layerr",
d: "Oxygen layer",
correct: "c"
},

{
question : " Which of the following is the best indicator of SO2 pollution",
a: "Bryophytes",
b: "Pteridophytes",
c: "Lichens",
d: "Algae",
correct: "c"
},

{
question : " Ozone depletion is caused due to increase in the level of",
a: "Water vapour",
b: "Oxygen",
c: "Chlorofluorocarbon",
d: "Carbon monoxide",
correct: "c"
},

{
question : " What type of chemical weathering is enhanced by acid rain?",
a: "Hydrolysis",
b: "Dissolution",
c: "Oxidation",
d: "None of the above",
correct: "a"
},

{
question : " What process causes the disintegration of rock at or near the earth’s surface?",
a: "Physical weathering",
b: "Chemical weathering",
c: "Erosion",
d: "None of the above",
correct: "a"
},

{
question : " Which of the following gas affects human health by reducing the blood’s ability to carry oxygen to different parts of the body?",
a: "Carbon monoxide",
b: "Carbon dioxide",
c: "Sulphur dioxide",
d: "Nitrous dioxide",
correct: "a"
},

{
question : "  Nitrogen oxide affects human health by__________",
a: "Causing irritation to the eyes and skin",
b: "Aggravating asthma problem",
c: "Decreasing blood’s ability to transport oxygen",
d: "None of the above",
correct: "b"
},

{
question : " The air pollutants are mainly classified as____________",
a: "Point source and non-point source",
b: "Primary and secondary pollutants",
c: "Natural or anthropogenic pollutants",
d: "None of the above",
correct: "b"
},

{
question : " The best way to dispose plant waste is___________",
a: "Burning",
b: "Composting",
c: "Dumping in a hilly area",
d: "Incineration",
correct: "b"
},

{
question : " Which of the following is not one of the major environment problems resulting from human interference in the nitrogen cycle?",
a: "Global warming due to release of nitrous oxide ",
b: "Acid rain",
c: "Eutrophication",
d: "Ozone depletion",
correct: "a"
},

{
question : " Which of the following is not a major greenhouse gas _________",
a: "Carbon dioxide",
b: "Methane",
c: "Water vapour",
d: "Calcium carbonate",
correct: "d"
},

{
question : " Montreal Protocol signed in 1987 was signed to_______",
a: "Phase out the use of CFC’s which cause depletion of the ozone layer",
b: "Reduces the greenhouse effect",
c: "Protect endangered species",
d: "Ban nuclear testing in tropical oceans",
correct: "a"
},

{
question : " Which of the following is not one of the prime health risks associated with greater UV radiation through the atmosphere due to depletion of stratospheric ozone?",
a: "Increased skin cancer",
b: "Reduced immune system",
c: "Increased liver cancer",
d: "Damage to eyes",
correct: "c"
},

{
question : " Unburnt carbon particles causes__________",
a: "Cardiac problem",
b: "Respiratory problems",
c: "Throat problems",
d: "Skin infection",
correct: "b"
},

{
question : " Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},

{
question : " Which of the following units is used to measure the intensity of noise?",
a: "Decibel",
b: "Phon",
c: "Hz",
d: "Watts/m",
correct: "a"
},

{
question : " Human ear is most sensitive to noise in which of the following frequency range?",
a: "1-2 kHz",
b: "10-12 kHz",
c: "100-500 Hz",
d: "13-16 kHz",
correct: "d"
},

{
question : " Which of the following pairs regarding typical composition of hospitals wastes is incorrect?",
a: "Plastics: 9-12%",
b: "Metals: 1-2%",
c: "Ceramic: 8-10%",
d: "Biodegradable: 35-40%",
correct: "d"
},

{
question : " Maximum soot is released from_________",
a: "Petrol vehicles",
b: "Diesel Vehicles ",
c: "CNG vehicles",
d: "Thermal power plants",
correct: "d"
},

{
question : " Surface ozone is produced from___________",
a: "Transport sector",
b: "Textile industry",
c: "Carbon monoxide",
d: "None of the above",
correct: "a"
},

{
question : " In the metro city of Kolkata, the major cause of air pollution is____________",
a: "Cement plants",
b: "Chemical industry",
c: "Hydrocarbons",
d: "Water vapours",
correct: "a"
},

{
question : " Which of the following is the main discharge from coal based power plants (thermal plants)?",
a: "SPM",
b: "Smog",
c: "Fly ash",
d: "None of the above",
correct: "c"
},

{
question : " The chemical responsible for blue baby syndrome that is caused by restricted supply of oxygen to the brain is________",
a: "Nitrates",
b: "Fluorides",
c: "Sulphates",
d: "Oxides",
correct: "a"
},

{
question : " Which of the following metal is responsible for Minamata disease?",
a: "Mercury",
b: "Chromium",
c: "Cadmium",
d: "Iron",
correct: "a"
},

{
question : " Intake of lead may primarily cause damage of the________",
a: "Brain",
b: "Liver",
c: "Lung",
d: "Kidney",
correct: "a"
},

{
question : " Which of the following geographic area is the largest Source of CO2, emissions from burning of fossil fuel?",
a: "China",
b: "North America",
c: "Russia",
d: "European Union",
correct: "b"
},

{
question : " Industries generating hazardous waste are classified as___________",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red",
correct: "d"
},

{
question : " Which of the following greenhouse gases are entirely anthropogenic in origin?",
a: "Water vapour",
b: "CFCs",
c: "Carbon dioxide",
d: "Methane",
correct: "b"
},

{
question : " Peroxyacyl nitrate (PAN) is a by-product of____________",
a: "Photochemical smog",
b: "Sulphurous smog",
c: "London smog",
d: "None of the above",
correct: "a"
},

{
question : " The balance in oxygen level is maintained by________",
a: "Photosynthesis and cellular respiration",
b: "Industrial emissions of gases",
c: "Release of ozone in upper atmosphere",
d: "None of the above",
correct: "a"
},

{
question : " Which of the following methods can be used to increase the supply of usable, good quality water?",
a: "Chlorination",
b: "Cloud seeding",
c: "Metallurgy",
d: "None of the above",
correct: "b"
},

{
question : " According to WHO, the maximum permissible level of chlorides in drinking water is___________",
a: "100 mg/1",
b: "600 mg/1",
c: "200 mg/l",
d: "800 mg/1",
correct: "c"
},

{
question : " The main difference between primary air pollutants and secondary air pollutants is",
a: "Former contains water molecules, while secondary pollutants do not.",
b: "Primary air pollutants have more direct effect on human health.",
c: "Former are released directly into the atmosphere, while the latter are formed by chemical reactions in the atmosphere.",
d: "Primary air pollutants are formed through photochemical reactions in the sunlight, while the secondary air pollutants are not.",
correct: "c"
},
{
question : " Which of the following can be considered as the best example of primary air pollutants?",
a: "Carbon dioxide released from burning of coal.",
b: "Sulphur trioxide",
c: "Ozone produced in photochemical smog",
d: "Carbon dioxide released through photosynthesis",
correct: "a"
},
{
question : " Which of the following best illustrates a secondary air pollutant?",
a: "CO2, released from the burning of coal",
b: "NO2, released from the burning of oil",
c: "Ozone produced in photochemical smog",
d: "None of the above",
correct: "c"
},
{
question : " The common features between NO2, SO2, CO2 and SPM is that all of them___________",
a:  "Are classified as primary pollutants.",
b: "Are classified as secondary pollutants.",
c: "Have equal role in causing acid rain",
d: "Are greenhouse gases",
correct: "a"
},
{
question : " How are nitrogen oxides, sulphur oxides and carbon Oxides related?",
a: "All of them are secondary air pollutants that contribute to global warming.",
b: "All of them are primary air pollutants that contribute to acid deposition.",
c: "All are air pollutants formed by combustion of fossil fuels.",
d: "All of them are air pollutants that result in respiratory diseases in humans.",
correct: "b"
},
{
question : " Atmospheric pollutants are mainly present in_____",
a: "Ionosphere",
b: "Stratosphere",
c: "Mesosphere",
d: "Troposphere and lower stratosphere",
correct: "d"
},
{
question : " Carbon dioxide and methane are similar in terms of__________",
a: "Both being secondary air pollutants.",
b: "Being responsible for respiratory diseases.",
c: "Contribution to global warming.",
d: "None of the above",
correct: "c"
},
{
question : " What is the main source of pollutants of nitrogen Oxides, sulphur oxides and carbon oxides?",
a: "Photochemical reactions in the atmosphere.",
b: "Burning fossil fuels at high temperatures.",
c: "Industrial processes",
d: "All the above",
correct: "b"
},
{
question : " Why is photochemical smog typically worse in the summer?",
a: "There is more solar energy to drive photochemical reactions.",
b: "People tend to travel more in summers.",
c: "Warm temperatures prevent the dissipation of pollutants.",
d: "None of the above",
correct: "a"
},
{
question : " How does photochemical smog form?",
a: "The release of primary air pollutants.",
b: "Interaction occurs between chemicals such as CFCs and ozone.",
c: "Reactions occur between secondary air pollutants and sunlight.",
d: "The release of formaldehyde and radon inside buildings.",
correct: "c"
},
{
question : " Which of the following can help in reducing air pollution?",
a: "Small-sized cars",
b: "Removal of sulphur from coal",
c:  "Lower ignition fuels",
d: "None of the above",
correct: "b"
},
{
question : " Air pollution is an increasing problem in developing Countries due to________",
a: "Burning of more coal to produce electricity.",
b: "Changing lifestyles.",
c: "Unavailability of environment-friendly technologies.",
d: "All the above",
correct: "d"
},
{
question : "  Quality of resource not degraded due to pollution is__________",
a: "Sun",
b: "Water",
c: "Sand",
d: "Air",
correct: "a"
},
{
question : " The main source of water pollution is_______",
a: "Sewage water",
b: "Industrial pollutants",
c: "Acid rain",
d: "None of the above",
correct: "a"
},
{
question : " Which of the following ultimately causes oxygen depletion in water bodies?",
a: "Fish",
b: "Human beings",
c: "Microorganisms",
d: "None of the above",
correct: "c"
},
{
question : " Which of the following is a water-borne disease?",
a: "Blue baby syndrome",
b: "Typhoid",
c: "Meningitis",
d: "Cholera",
correct: "d"
},
{
question : " Which one of the following is NOT a greenhouse gas found naturally in the atmosphere?",
a: "Nitrogen oxide",
b: "Carbon dioxide",
c: "Methane",
d: "Ozone",
correct: "a"
},
{
question : " Baval trees should be planted and used to prevent and control",
a: "Water pollution",
b: "Air pollution",
c: "Soil pollution",
d: "Noise pollution",
correct: "b"
},
{
question : " The protocol which decided to completely phase out CFC is",
a: "Cartagena protocol",
b: "Stockholm Convention",
c: "Montreal protocol",
d: "Kyoto protocol",
correct: "c"
},
{
question : " Which of the following is not a folk dance of Himachal Pradesh?",
a: "Jhora",
b: "Chharhi",
c: "Chhapeli",
d: "Panwariya",
correct: "d"
},
{
question : " Which of the following is biodegradable?",
a: "Aluminium can",
b: "Polythene bag",
c: "Cowdung",
d: "DDT",
correct: "c"
},
{
question : " Which of the following is an abiotic component of an ecosystem?",
a: "Humus",
b: "Bacteria",
c: "Plants",
d: "Fungi",
correct: "a"
},
{
question : " Which one of the following pairs belong to the category of primary consumers?",
a: "Eagle and snake",
b: "Grasshoppers & cattle",
c: "Snake and frog",
d: "Water beetles & fish",
correct: "b"
},

{
question : " Which of the following chemicals causes depletion of the ozone layer?",
a: "Carbon tetrachloride",
b: "Methane",
c: "Chloro fluoro carbon",
d: "Carbon monoxide",
correct: "c"
},

{

question : " In a food chain, the third trophic level is always occupied by",
a: "herbivore",
b: "carnivore",
c: "decomposer",
d: "producer",
correct: "b"
},

{
question : " The depletion of the ozone layer causes",
a: "global warming",
b: "earthquakes",
c: "increased UV radiations",
d: "acid rain",
correct: "c"
},

{
question : " For which of the following movies has Chloe Zhao been conferred with the Oscar Award?",
a: "The Father",
b: "Minari",
c: "Nomadland",
d: "Soul",
correct: "c"
},
{
question : " In which of the following year the Environment Protection Act enacted?",
a: "1984",
b: "1986",
c: "1989",
d: "1990",
correct: "b"
},
{

question : " What is Light?",
a: "Longitudinal Wave",
b: "Transverse Wave",
c: "Both A and B",
d: "Neither A nor B",
correct: "b"
},
{

question : " Which of the following country has the highest total number of Military Personnel?",
a: "Vietnam",
b: "South Korea",
c: "India",
d: "North Korea",
correct: "a"
},
{

question : " What is the capital of Ukraine?",
a: "Kyiv (Kiev)",
b: "Yerevan",
c: "Canberra",
d: "Moscow",
correct: "a"
},
{

question : " In which of the following Indian states do the Varuna and Assi rivers flow?",
a: "Uttar Pradesh",
b: "Maharashtra",
c: "Rajasthan",
d: "Madhya Pradesh",
correct: "a"
},
{
          question : " In which of the following years was Bangladesh formed as a separate country?",
          a: "1970",
          b: "1971",
          c: "1972",
          d: "1973",
          correct: "b"
      },
{
          question : " Which of the following rivers is known as the 'father of African rivers'?",
          a: "Niger",
          b: "Nile",
          c: "Orange river",
          d: "Kasai river",
          correct: "b"
      },
{
          question : " Which of the following battles were fought by Chhatrapati Shivaji Maharaj?",
          a: " Battle of Kolhapur ",
          b: " Battle of Pratapgad ",
          c: " Battle of Sinhagad ",
          d: " All the above ",
          correct: "d"
      },
{
          question : " When was Champaran Satyagraha started?",
          a: "1916",
          b: "1917",
          c: "1920",
          d: "1921",
          correct: "b"
      },
{
          question : " When was Gandhi-Irwin Pact signed?",
          a: "1928",
          b: "1930",
          c: "1931",
          d: "1935",
          correct: "c"
      },
{
          question : " Abiy Ahmed is the Prime Minister of which country?",
          a: " Ethiopia ",
          b: " Eritrea ",
          c: " Kenya ",
          d: " None of the above",
          correct: "a"
      },
{
          question : " Second Buddhist Council was presided by whom?",
          a: " Gautamiputra Satkarni ",
          b: " Vasumitra ",
          c: " Sabakami ",
          d: " None of the above ",
          correct: "c"
      },
{
          question : " The phenomenon of occurrence of additional species found in the ecotone or transitional zone between adjoining ecosystems is known as_________",
          a: " Edge effect",
          b: " Root effect ",
          c: " Raman effect ",
          d: " Coolidge effect ",
          correct: "a"
      },
{
          question : " What is the name of the Guptas' silver coin?",
          a: " Para ",
          b: " Rupaka ",
          c: " Dinara ",
          d: " None of the above ",
          correct: "b"
      },
{
          question : " In which of the following states is Umlingla Pass located?",
          a: " Uttarakhand ",
          b: " Manipur ",
          c: " Sikkim ",
          d: " Ladakh ",
          correct: "d"
      },
{
          question : " Who founded the Ram Cult in Northern India?",
          a: " Kabir ",
          b: " Ramananda ",
          c: " Bhavabhuti ",
          d: " Guru Nanak ",
          correct: "b"
      },
{
          question : " Which of the following is not a folk dance of Himachal Pradesh?",
          a: " Jhora ",
          b: " Chharhi ",
          c: " Chhapeli ",
          d: " Panwariya ",
          correct: "d"
      },
{
          question : " Who gave the most detailed accounts of all historic descriptions of the ancient city of Hampi?",
          a: " Fernao Nuniz ",
          b: " Domingo Paes ",
          c: " Ibn Batuta ",
          d: " Abdur Razzaq ",
          correct: "b"
      },
{
          question : " Who is the author of the 'Durgeshnandini' novel?",
          a: " Bankim Chandra Chattopadhyay ",
          b: " Baliram Keshav Rao Hedgewar ",
          c: " Barindra Kumar Ghosh ",
          d: " Behramji M Malabari  ",
          correct: "a"
      },
{
          question : " Who is known as the 'Grand Old Man of lndia'?",
          a: " Dr Bhimrao Ramji Ambedkar ",
          b: " Dr Rajendra Prasad  ",
          c: " Dadabhai Naoroji  ",
          d: " Gopal Krishna Gokhale",
          correct: "c"
      },
{
          question : " Who is popularly known as Loknayak?",
          a: " Jamnalal Bajaj  ",
          b: " Jayaprakash Narayana",
          c: " Jatindra Nath Das ",
          d: " Khudiram Bose",
          correct: "b"
      },
{
          question : " The Salim Ali Bird sanctuary is located at",
          a: " Pondicherry ",
          b: " Thattekad ",
          c: " Anakkatti ",
          d: " Kalakkadj",
          correct: "b"
      },
{
question :" Which of the following is the latest addition to World Heritage sites list by UNESCO?",
a: "Khangchendzonga National Park, Sikkim",
b: "Capital Complex, Chandigarh",
c: "Nalanda Mahavihara, Bihar",
d: "All of these",
correct: "d"
},
{
question :" The increase in Earth's average surface temperature due to the effect of greenhouse gases such as CO2, and emissions from fossil fuel is known as global warming. What could be the effect of global warming?",
a: "There will be melting of polar ice caps.",
b: "There will be an increase in crop production.",
c: "There will be a rise in sea level.",
d: "Both A and C",
correct: "d"
},
{
question :" Which of the following movements fights against the taking over of fertile land for testing of missiles in a thickly populated village in Odisha?",
a: "Chipko Movement",
b: "Baliapal Movement",
c: "Bishnoi Movement",
d: "Appiko Movement",
correct: "b"
},
{
question :" World Water Day focuses on water conservation and critical water issues. On which date it is celebrated?",
a: "11 December",
b: "22 April",
c: "22 March",
d: "21 November",
correct: "c"
},
{
question :" The Antarctic Treaty states that",
a: "The continent be used for scientific research only",
b: "The continent be used for tourist purpose only",
c: "No person can live on Antarctic continent",
d: "Only wild tribes are free to live on the continent",
correct: "a"
},
{
question :" Industries generating hazardous waste are classified as___________",
a: "Brown",
b: "Yellow",
c: "Green",
d: "Red",
correct: "d"
},
{
question :" Which of the following might happen if plants stop releasing oxygen into the atmosphere?",
a: "The plants will be healthier.",
b: "The number of plants will increase.",
c: "There will be rich biodiversity.",
d: "The number of animals will decrease.",
correct: "d"
},
{
question :" Vulture, hyena and eagle are examples of______",
a: "Producers",
b: "Herbivores",
c: "Decomposers",
d: "Scavengers",
correct: "d"
}


]


const questionEl = document.getElementById('questions');
const answerEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById("b_text");
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const button = document.getElementById('button');

let arr = new Array;
let currentQuiz  = 0;
let score = 0;
var score1 = (test_attempted=="True")?
  (quiz.innerHTML = `<h2>Your Score ${student_score} / 30</h2>`,
  document.getElementById("model3").style.display="none",
document.getElementById("video-stream").style.display="none")
  :
loadQuiz();



function loadQuiz(){
deleteCheck()

// const currentQuizData = quiz_Data[currentQuiz];
for (var i = 0; i < 30; i++) {

  var random = Math.floor(Math.random() * 145) + 1;
  // var currentQuizData = quiz_Data[Math.floor(Math.random() * 4) + 1];

  if(arr.indexOf(random) !== -1){
    alert('WARNING!');
  }
  else{
    arr.push(random);
    console.log(arr);
    for (var i = 0; i < 30; i++) {
      var currentQuizData = quiz_Data[random];
      questionEl.innerText = currentQuizData.question
      a_text.innerText = currentQuizData.a
      b_text.innerText = currentQuizData.b
      c_text.innerText = currentQuizData.c
      d_text.innerText = currentQuizData.d
    }
    button.addEventListener("click", ()=>{
        const answer = checkAnswer()
        if(answer){

            if(answer === quiz_Data[currentQuiz].correct){
                score++
            }
            currentQuiz++;
            if(currentQuiz < 30){
                loadQuiz()
            }else{


                quiz.innerHTML = `<h2>Your Score ${score} / 30</h2><br><form  method="post" action="">
                      <input style="visibility:hidden; position:absolute" type="text" name="score" value="${score}" required><button  type="submit" value="Submit">Submit</button>
                  </form>`





                $(document).ready(function() {
            var final_score = score;

            $("#button").click(function() {
                $.ajax({
                    url: "/quiz",
                    dataType: "json",
                    data: {
                        final_score: final_score,
                        csrfmiddlewaretoken: '{{ csrf_token }}'
                        },
                    success : function(json) {
                        alert("Successfully sent the URL to Django");
                    },
                    error : function(xhr,errmsg,err) {
                        alert("Could not send URL to Django. Error: " + xhr.status + ": " + xhr.responseText);
                    }
                });
            });
        });
            }
        }

    })

  }
}



// questionEl.innerText = arr[i].question
// a_text.innerText = arr[i].a
// b_text.innerText = arr[i].b
// c_text.innerText = arr[i].c
// d_text.innerText = arr[i].d

// if(currentQuizData){
// questionEl.innerText = currentQuizData.question
// a_text.innerText = currentQuizData.a
// b_text.innerText = currentQuizData.b
// c_text.innerText = currentQuizData.c
// d_text.innerText = currentQuizData.d
// }

}

function checkAnswer(){
    let answer = undefined
    answerEl.forEach(el =>{
        if(el.checked){
            answer =  el.id;
        }
    } );
         return answer
}

function deleteCheck(){
    answerEl.forEach(el =>{
        el.checked = false;
    } )
}






var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "";

var sec         = 1800,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';

        secpass();
    }, 1000);

function secpass() {
    'use strict';

    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;

    if (remSec < 10) {

        remSec = '0' + remSec;

    }
    if (min < 10) {

        min = '0' + min;

    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {

        sec = sec - 1;

    } else {

        clearInterval(countDown);

        alert("Time's Up!");
        quiz.innerHTML = `<h2>Your Score ${score} / 30</h2><br><form  method="post" action="">
              <input style="visibility:hidden; position:absolute" type="text" name="score" value="${score}" required><button  type="submit" value="Submit">Submit</button>
          </form>`

        countDiv.innerHTML = "Time's Up!";

    }
}


// button.addEventListener("click", ()=>{
//     const answer = checkAnswer()
//     if(answer){
//
//         if(answer === quiz_Data[currentQuiz].correct){
//             score++
//         }
//         currentQuiz++;
//         if(currentQuiz < quiz_Data.length){
//             loadQuiz()
//         }else{
//
//
//             quiz.innerHTML = `<h2>Your Score ${score} / ${quiz_Data.length}</h2><br><form  method="post" action="">
//
//
//                   <!-- to error: add class "has-danger" -->
//
//
//                   <input style="visibility:hidden; position:absolute" type="text" name="score" value="${score}" required><button  type="submit" value="Submit">Submit</button>
//
//
//               </form>`
//
//
//
//
//
//             $(document).ready(function() {
//         var final_score = score;
//         alert(final_score);
//         $("#button").click(function() {
//             $.ajax({
//                 url: "/quiz",
//                 dataType: "json",
//                 data: {
//                     final_score: final_score,
//                     csrfmiddlewaretoken: '{{ csrf_token }}'
//                     },
//                 success : function(json) {
//                     alert("Successfully sent the URL to Django");
//                 },
//                 error : function(xhr,errmsg,err) {
//                     alert("Could not send URL to Django. Error: " + xhr.status + ": " + xhr.responseText);
//                 }
//             });
//         });
//     });
//         }
//     }
//
// })



// history.pushState(null, null, 'quiz');
// window.addEventListener('popstate', function (event) {
//     history.pushState(null, null, 'quiz');
// });
