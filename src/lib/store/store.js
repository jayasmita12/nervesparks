import { writable } from "svelte/store";

let data1 =[
    {"id":1,"name":"Hyundai","description":"Hyundai is a South Korean automaker that has gained prominence globally."},
    {"id":2,"name":"Tesla","description":"Tesla is an American electric vehicle (EV) manufacturer that focuses on sustainable transportation."},
    {"id":3,"name":"Mercedes-Benz","description":"Mercedes-Benz is a German luxury automobile manufacturer."},
    {"id":4,"name":"BMW","description":"BMW is a German luxury car manufacturer renowned for its high-performance vehicles."},
    {"id":5,"name":"Honda","description":"Honda is a Japanese automaker known for its reliable vehicles and innovative technologies."},
    {"id":6,"name":"Ford","description":"Ford is an American automaker known for its long history and popular models. "},
    {"id":7,"name":"Toyota","description":"Toyota is a Japanese automotive manufacturer known for its reliable and fuel-efficient vehicles."}
]
let data2 =[
    {
        id: 1,
        carCompanyId: '1',
        modals: [
            {
                modalName: 'Hyundai Sonata',
                modaldesc:
                    'A mid-size sedan that offers a spacious cabin, smooth ride, and a range of available features like a touchscreen infotainment system and advanced driver-assistance systems.'
            },
            {
                modalName: 'Hyundai Tucson',
                modaldesc:
                    'A compact SUV featuring a versatile interior, modern design, and a good balance of performance and fuel efficiency.'
            },
            {
                modalName: 'Hyundai Kona',
                modaldesc:
                    'A subcompact SUV that offers a distinctive design, agile handling, and a choice of gasoline, hybrid, and electric powertrains.'
            },
            {
                modalName: 'Hyundai Venue',
                modaldesc:
                    'A subcompact crossover with a compact footprint, practical interior, and a good array of features at an affordable price.'
            },
            {
                modalName: 'Hyundai Accent',
                modaldesc:
                    'A subcompact sedan that provides good fuel efficiency, a comfortable ride, and a user-friendly infotainment system.'
            },
            {
                modalName: 'Hyundai Veloster:',
                modaldesc:
                    'A unique compact hatchback with a sporty design, three-door layout, and agile handling.'
            }
        ]
    },
    {
        id: 2,
        carCompanyId: '4',
        modals: [
            {
                modalName: 'BMW 5 series',
                modaldesc:
                    'A mid-size sedan that offers a spacious cabin, smooth ride, and a range of available features like a touchscreen infotainment system and advanced assistance systems.'
            },
            {
                modalName: 'BMW 3 series',
                modaldesc:
                    'A compact SUV featuring a versatile interior, modern design, and a good performance and fuel efficiency.'
            },
            {
                modalName: 'BMW X3',
                modaldesc:
                    'A subcompact SUV that offers a distinctive design, agile handling, and a choice of gasoline, hybrid, and electric powertrains.'
            },
            {
                modalName: 'BMW X5',
                modaldesc:
                    'A subcompact crossover with a compact footprint, practical interior, and a good array of features at an affordable price.'
            },
            {
                modalName: 'BMW X7',
                modaldesc:
                    'A subcompact sedan that provides good fuel efficiency, a comfortable ride, and a user-friendly infotainment system.'
            },
            {
                modalName: 'BMW M5:',
                modaldesc:
                    'A unique compact hatchback with a sporty design, three-door layout, and agile handling.'
            }
        ]
    },
{
        id: 3,
        carCompanyId: '2',
        modals: [
            {
  "modalName": "Model S",
  "modaldesc": "A luxury all-electric sedan that offers impressive acceleration, long-range capabilities, and advanced technology features."
},
 {
  "modalName": "Model 3",
  "modaldesc": "A more affordable all-electric sedan designed for everyday driving. The Model 3 provides excellent range, a minimalist interior, and advanced Autopilot features."
},
 {
  "modalName": "Model X",
  "modaldesc": "An all-electric SUV with unique falcon-wing doors, a spacious interior, and powerful performance. The Model X combines utility and luxury in an electric package."
},
 {
  "modalName": "Model Y",
  "modaldesc": "A compact all-electric SUV that shares a platform with the Model 3. The Model Y offers versatility, ample cargo space, and an electric driving experience."
},
 {
  "modalName": "Cybertruck",
  "modaldesc": "A futuristic all-electric pickup truck known for its unconventional design, robust capabilities, and impressive towing and hauling capacities."
},
{
  "modalName": "Roadster",
  "modaldesc": "Tesla's next-generation sports car. The new Roadster is expected to offer blistering acceleration, a top speed exceeding 250 mph, and a range of over 600 miles."
}
    ]
    },

{
  id: 4,
        carCompanyId: '3',
        modals:[
   
 {
  "modalName": "A-Class",
  "modaldesc": "A compact luxury sedan known for its sleek design, advanced technology, and comfortable interior."
},
 {
  "modalName": "C-Class",
  "modaldesc": "A versatile luxury sedan offering a balance of performance, elegance, and cutting-edge features."
},
 {
  "modalName": "E-Class",
  "modaldesc": "A mid-size luxury sedan that combines sophistication, innovative technology, and a refined driving experience."
},
 {
  "modalName": "S-Class",
  "modaldesc": "A flagship luxury sedan renowned for its luxurious interior, advanced safety features, and unparalleled comfort."
},
 {
  "modalName": "GLA",
  "modaldesc": "A compact luxury SUV that offers sporty handling, a well-appointed interior, and a range of powerful engine options."
},
{
  "modalName": "GLC",
  "modaldesc": "A stylish and versatile mid-size luxury SUV featuring a comfortable cabin, advanced safety technologies, and refined performance."
},
{
  "modalName": "GLE",
  "modaldesc": "A mid-size luxury SUV known for its spacious interior, advanced technology, and exceptional on-road performance."
},
 {
  "modalName": "GLS",
  "modaldesc": "A full-size luxury SUV offering a commanding presence, a lavish interior, and a host of advanced features for a first-class driving experience."
},
{
  "modalName": "AMG GT",
  "modaldesc": "A high-performance sports car lineup known for its breathtaking design, exhilarating performance, and track-ready capabilities."
},
{
  "modalName": "EQC",
  "modaldesc": "An all-electric luxury SUV that combines the elegance and quality of Mercedes-Benz with emission-free driving and advanced electric technology."
}
]

}
];

export let carcompanyname = writable(data1)
export let carcompanyid = writable(null)
export let carmodal = writable(data2)
export let contentSearch = writable("")