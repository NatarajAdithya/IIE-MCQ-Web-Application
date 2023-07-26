
//Array of objects(qustions)


const quiz =[
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
	{
		q:'In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhays speed is:',
		options:["5 kmph" ,"6 kmph" , "6.25 kmph" ,"7.5 kmph" ],
		answer:0
	},
	{
		q:"A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance (in km) is:",
		options:['35','36 2/3','37 ½','40'],
		answer:3
	},
	{
		q:"Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
		options:['2 times','2 ½ times' ,'2 ¾ times','3 times'],
		answer:0
	},
	{
		q:"Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
		options:['24' ,'27', '40','None'],
		answer:0
	},
	{
		q:"A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
		options:['14 years' ,'18 years', '20 years' ,'22 years'],
		answer:3
	},
	{
		q:"Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
		options:['16 years' ,'18 years', '20 years' ,"Cannot be determined"],
		answer:0
	},
	{
		q:"The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
		options:["12 years ",'14 years' ,'18 years', '20 years' ],
		answer:3
	},
	{
		q:"At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
		options:["12 years ",'15 years' ,'19 1/2 years', '21 years' ],
		answer:1
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
		q:"Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?",
		options:['1 year','2 years' ,'25 years','Data inadequate'],
		answer:3
	},
	{
		q:"Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
		options:['5/11','6/11','7/11','8/11'],
		answer:1
	},
	{
		q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
		options:['1/13 hrs','2 8/11 hrs','3 9/17 hrs','4 ½ hrs'],
		answer:1
	},
	{
		q:"A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
		options:['6 hours','10 hours','15 hours','30 hours'],
		answer:2
	},
	{
		q:'Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?',
		options:['1 hour','2 hours','6 hours','8 hours'],
		answer:2
	},
	{
		q:'A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?',
		options:['15 min','20 min','27.5 min','30 min'],
		answer:3
	},
	{
		q:'A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?',
		options:['3 hrs 15 min','3 hrs 45 min','4 hrs ','4 hrs 15 min'],
		answer:1
	},
	{
		q:'Three taps A, B and C can fill a tank in 12, 15 and 20 hours respectively. If A is open all the time and B and C are open for one hour each alternately, the tank will be full in:',
		options:["6 hours" ,"6 2/3 hours" ,"7 hours" ,"7 1/2 hours"],
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
		q:"QAR, RAS, SAT, TAU,________",
		options:['UAV','UAT','TAS','TAT'],
		answer:0
	},
	{
		q:"DEF, DEF2, DE2F2, _____, D2E2F3",
		options:['DEF3','D3EF3','D2E3F','D2E2F2'],
		answer:3
	},
	{
		q:'Amit said - "This girl is the wife of the grandson of my mother". How is Amit related to the girl?',
		options:['Brother','Grandfather','Husband','Father-in-law'],
		answer:3
	},
	{
		q:"Pointing to a photograph. Bajpai said, He is the son of the only daughter of the father of my brother. How Bajpai is related to the man in the photograph?",
		options:['Nephew','Brother ','Father','Maternal Uncle'],
		answer:3
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
		q:"If A + B means A is the father of B; A - B means A is the brother B; A % B means A is the wife of B and A x B means A is the mother of B, which of the following shows that M is the maternal grandmother of T?",
		options:['M x N % S + T','M x N - S % T','M x S - N % T','M x N x S % T'],
		answer:0
	},
	{
		q:"Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
		options:['60 gallons','100 gallons','120 gallons','180 gallons'],
		answer:2
	},
	{
		q:"If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
		options:['Q - N + M x P','P + S x N - Q','P - M + N x Q','Q - S % P'],
		answer:2
	},
	{
		q:"If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?",
		options:['M - N x C + F','F - C + N x M','N + M - F x C','M x N - C + F'],
		answer:3
	},
	{
		q:"If A + B means A is the brother of B; A x B means A is the son of B; and A % B means B is the daughter of A then which of the following means M is the maternal uncle of N?",
		options:['M + O x N','M % O x N + P','M + O % N','None of these'],
		answer:3
	},
	{
		q:"If D is the brother of B, how B is related to C? To answer this question which of the statements is/are necessary? 1. The son of D is the grandson of C 2. B is the sister of D.",
		options:['Only 1','Only 2','Either 1 or 2','1 and 2 '],
		answer:3
	},
	]
	
	