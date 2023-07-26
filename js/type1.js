
//Array of objects(qustions)


const quiz =[
{
	q:"A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
	options:['3.6','7.2','8.4 ','10'],
	answer:1
},
{
	q:'An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1  hours, it must travel at a speed of:',
	options:[' 300 kmph', '360 kmph', '600 kmph', '720 kmph'],
	answer:3
},
{
	q:'If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:',
	options:['50 km','56 km', '70 km', '80 km'],
	answer:0
},
{
	q:'Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?',
	options:['9','10','11','20'],
	answer:1
},
{
	q:'The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
	options:["4 years" ,"8 years" , "10 years" ,"None of these" ],
	answer:0
},
{
	q:"A father said to his son, I was as old as you are at the present at the time of your birth. If the fathers age is 38 years now, the son's age five years back was:",
	options:["14 years" ,"19 years" , "33 years" ,"38 years" ],
	answer:0
},
{
	q:"A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
	options:["7",'8','9','10'],
	answer:3
},
{
	q:"Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
	options:['16 years ' ,'18 years', '28 years','24.5 years'],
	answer:3
},
{
	q:"A pump can fill a tank with water in 2 hours. Because of a leak, it took 2  hours to fill the tank. The leak can drain all the water of the tank in:",
	options:['4  hours' ,'7 hours', '8 hours' ,'14 hours'],
	answer:3
},
{
	q:"A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
	options:["20 hours ","25 hours ","35 hours", "Cannot be determined"],
	answer:2
},
{
	q:"Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
	options:["12 min ",'15 min ','25 min ','10 min '],
	answer:0
},
{
	q:"One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in:",
	options:["81 min ",'108 min ','144 min ','192 min '],
	answer:2
},
{
	q:'SCD, TEF, UGH, ____, WKL',
	options:['CMN', 'UJI', 'VIJ','IJT'],
	answer:1
},
{
	q:"B2CD, _____, BCD4, B5CD, BC6D",
	options:[,'B2C2D','BC3D','B2C3D' ,'BCD7'],
	answer:1
},
{
	q:"FAG, GAF, HAI, IAH, ____",
	options:['JAK','HAL','HAK','JAI'],
	answer:0
	
},
{
	q:"ELFA, GLHA, ILJA, _____,MLNA",
	options:['OLPA','KLMA','LLMA','KLLA'],
	answer:3
},
{
	q:"CMM, EOO, GQQ, _____, KUU",
	options:['GRR','GSS','ISS','ITT'],
	answer:2
},
{
	q:"Pointing to a photograph of a boySuresh said, He is the son of theonly son of my mother.How is Suresh related to that boy?",
	options:['Brother','Uncle','Cousin','Father'],
	answer:3
},
{
	q:"If A is the brother of B; B is the sister ofC; and C is the father of D,how D is related to A?",
	options:['Brother','Sister','Nephew','Cannot be determined'],
	answer:3
},
{
	q:"Introducing a boy, a girl said, He is the son of the daughter of the father of myHow is the boy related to the girl? ",
	options:['Brother','Nephew' ,'Uncle','Son-in-law'],
	answer:0
},
{
	q:"Pointing to a photograph Lata says,Heis the son of the only son of my grandfather.How is the man in the photograph related to Lata?",
	options:['Brother','Uncle','Cousin','data is inadequate'],
	answer:0
},
{
	q:'A, P, R, X, S and Z are sitting in a row. Sand Z are in the centre. A and P are at theends. R is sitting to the left of A. Who is to the right of P ?',
	options:['A', 'X', 'S', 'Z'],
	answer:1
},
{
	q:'The present ages of three persons in    proportions 4 : 7 : 9. Eight years ago,the sum of their ages was 56. Find their  present  ages (in years).',
	options:['8, 20, 28','16, 28, 36','20, 35, 45','None of these'],
	answer:1
},
{
	q:'The ratio between the speeds of twotrains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:',
	options:['70 km/hr','75 km/hr','84 km/hr','87.5 km/hr'],
	answer:3
},
{
	q:'Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours.  The number of hours taken by C alone  to fill the tank is:',
	options:["10" ,"12" , "14" ,"16" ],
	answer:2
},
{
	q:"ZA5, Y4B, XC6, W3D, ____",
	options:['E7V ','V2E','VE5','VE7'],
	answer:3
},
{
	q:"QPO, NML, KJI, _____, EDC",
	options:['HGF','CAB','JKL','GHI'],
	answer:0
},
{
	q:"JAK, KBL, LCM, MDN, _____",
	options:['OEP','NEO','MEN','PFQ'],
	answer:1
},
{
	q:"BCB, DED, FGF, HIH, ___",
	options:['JKJ','HJH','IJI','JHJ'],
	answer:0
},
{
	q:"P5QR, P4QS, P3QT, _____, P1QV",
	options:['PQW','PQV2','P2QU','PQ3U'],
	answer:2
},
{
	q:"Deepak said to Nitin,That boy playing with the football is the younger of the two brothers of the daughter of my fathers wife. How is the boy playing football related to  Deepak?",
	options:['Son','Brother ','Cousin','Brother-in-law'],
	answer:0
},
{
	q:"Veena who is the sister-in-law of Ashok, is the daughter-in-law of Kalyani. Dheeraj is the father of Sudeep who is the only brother  of Ashok. How Kalyani is related to Ashok?",
	options:['Mother-in-law','Aunt','Wife','None of these'],
	answer:3
},
{
	q:'Amit said - "This girl is the wife of the grandson of my mother". How is Amit related to the girl?',
	options:['Brother','Grandfather','Husband','Father-in-law'],
	answer:3
},
{
	q:"Pointing towards a man, a woman said, His mother is the only daughter of my mother.How is the woman related to the man?",
	options:['Mother','Grandmother ','Sister','Daughter'],
	answer:0
},
{
	q:"Introducing a woman, Shashank said,She is the mother of the only daughter of my son.How that woman is related to Shashank?",
	options:['Daughter','Sister-in-law','Wife ',' Daughter-in-law'],
	answer:3
	
},
{
	q:"A man on tour travels first 160 km at 64  km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the  tour is:",
	options:['35.55 km/hr','36 km/hr', '71.11 km/hr','71 km/hr'],
	answer:2
},
{
	q:"In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay's speed is:",
	options:['5 kmph','6 kmph','6.25 kmph','7.5 kmph'],
	answer:0
},
{
	q:"Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
	options:['8 kmph','11 kmph','12 kmph','14 kmph'],
	answer:2
},
{
	q:"It takes eight hours for a 600 km journey, if 120 km is done by train and the rest by car.it takes 20 minutes more, if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the cars is:",
	options:['2:3','3:2','3:4','4:3'],
	answer:2
},
{
	q:"A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot @ 4 km/hr and partly on bicycle @ 9 km/hr. The distance travelled on foot is:",
	options:['14 km ','15 km ' ,'16 km ','17 km '],
	answer:2
},
{
	q:"Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to   her was born. What is the difference  between the ages of her parents?",
	options:['2 years','4 years','6 years','8 years'],
	answer:2
},
{
	q:"A person's present age is two-fifth of the age of his mother. After 8 years, he will be  one- half of the age of his mother. How old  is the mother at present?",
	options:['32 years','36 years','40 years','48 years'],
	answer:2
},
{
	q:"The age of father 10 years ago was thrice the age of his son. Ten years hence, father's age will be twice that of his son. The ratio of their present ages is:",
	options:['5 : 2','7 : 3 ', '9 : 2' ,'13 : 4'],
	answer:1
},
{
	q:"Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened.The cistern will be filled in just half an hour, if the B is turned off after:",
	options:['5 min','9 min', '10 min' ,'15 min'],
	answer:1
},
{
	q:"Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
	options:['10 min. 20 sec.', '11 min. 45 sec.','12 min. 30 sec.' ,'14 min. 40 sec.'],
	answer:3
},
{
	q:"Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
	options:['60 gallons','100 gallons','120 gallons','180 gallons'],
	answer:2
},
{
	q:"A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
	options:['100 kmph','110 kmph','120 kmph','130 kmph'],
	answer:2
},
{
	q:"In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
	options:['1 hr','2 hrs','3 hrs','4 hrs'],
	answer:0
},
{
	q:"A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
	options:['220 km' ,'224 km', '230 km','234 km'],
	answer:1
},
{
	q:"A car travelling with   of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car.",
	options:['17 6/7 km/hr','25 km/hr' ,'30 km/hr','35 km/hr'],
	answer:3
},
]

