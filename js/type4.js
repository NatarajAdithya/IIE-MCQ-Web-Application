
//Array of objects(qustions)


const quiz =[
    {
        q:"Look at this series: 80, 10, 70, 15, 60, ... What number should come next?",
        options:['20','25','30','50'],
        answer:0
    },
    {
        q:'Two, trains, one from Howrah to Patna and the other from Patna to Howrah, start simultaneously. After they meet, the trains reach their destinations after 9 hours and 16 hours respectively. The ratio of their speeds is:',
        options:['2 : 3','4 : 3', '6 : 7','9 : 16'],
        answer:1
    },
    {
        q:'On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:',
        options:['Rs. 45','Rs. 50 ','Rs. 55','Rs. 60'],
        answer:3
    },
    {
        q:'Look at this series: 80, 10, 70, 15, 60, ... What number should come next?',
        options:['20','25','30','50'],
        answer:0
    },
    {
        q:'Look at this series: 2, 6, 18, 54, ... What number should come next?',
        options:['108','148','162','216'],
        answer:2
    },
    {
        q:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        options:['3','4','5','6'],
        answer:2
    },
    {
        q:"Arrange the words given below in a meaningful sequence. 1. Income	2. Status	3. Education 4. Well-being	5. Job",
        options:['3, 1, 5, 2, 4','1, 3, 2, 5, 4','1, 2, 5, 3, 4','3, 5, 1, 2, 4'],
        answer:3
    },
    {
        q:"Look at this series: 8, 6, 9, 23, 87 , ... What number should come next?",
        options:['128', '226 ' ,'324 ',' 429'],
        answer:3
    },
    {
        q:"A train overtakes two persons who are walking in the same direction in which the train is going, at the rate of 2 kmph and 4 kmph and passes them completely in 9 and 10 seconds respectively. The length of the train is:",
        options:['45 m' ,'50 m' ,'54 m' ,'72 m'],
        answer:1
    },
    {
        q:"A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
        options:['No profit, no loss','5%','8%','10%'],
        answer:1
    },
    {
        q:"Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options:['7','10','12','13'],
        answer:1
    },
    {
        q:"The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        options:['4 years','8 years','10 years','None of these'],
        answer:0
    },
    {
        q:'A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?',
        options:['Rs. 1090','Rs. 1160','Rs. 1190','Rs. 1202'],
        answer:2
    },
    {
        q:"The product of two numbers is 9375 and the quotient, when the larger one is divided by the smaller, is 15. The sum of the numbers is:",
        options:['380','395','400','425'],
        answer:2
    },
    {
        q:"A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        options:['7','8','9','10'],
        answer:3
        
    },
    {
        q:"The sum of two number is 25 and their difference is 13. Find their product.",
        options:['104','114','315','325'],
        answer:1
    },
    {
        q:"How many seconds will a 500 metre long train take to cross a man walking with a speed of 3 km/hr in the direction of the moving train if the speed of the train is 63 km/hr?",
        options:['25','30','40','45'],
        answer:2
    },
    {
        q:"If one-third of one-fourth of a number is 15, then three-tenth of that number is:",
        options:['35','36','45','54'],
        answer:3
    },
    {
        q:"Arrange the words given below in a meaningful sequence. 1. Rainbow	2. Rain	3. Sun 4. Happy	5. Child",
        options:['4, 2, 3, 5, 1','2, 3, 1, 5, 4','4, 5, 1, 2, 3','2, 1, 4, 5, 3'],
        answer:1
    },
    {
        q:"Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
        options:['9','11','13','15'],
        answer:3
    },
    {
        q:"Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
        options:['3.5','4.5','5.6','6.5'],
        answer:2
    },
    {
        q:"Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options:['(1/3)','(1/8)','(2/8)','(1/16)'],
        answer:1
    },
    {
        q:"The sum of the digits of a two-digit number is 15 and the difference between the digits is 3. What is the two-digit number?",
        options:['69','78','96','Cannot be determined'],
        answer:3
    },
    {
        q:"The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        options:['15','16','18','25'],
        answer:1
    },
    {
        q:"Look at this series: 22, 21, 23, 22, 24,23, ... What number should come next?",
        options:['22','24','25','26'],
        answer:2
    },
    {
        q:"The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        options:['200m','225 m','245 m','250m'],
        answer:2
    },
    {
        q:"Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        options:['24','27','40','Cannot be determined'],
        answer:0
    },
    {
        q:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        options:['3','4','5','6'],
        answer:2
    },
    {
        q:"In a two-digit, if it is known that its unit's digit exceeds its ten's digit by 2 and that the product of the given number and the sum of its digits is equal to 144, then the number is:",
        options:['24','26','42','46'],
        answer:0
    },
    {
        q:"Arrange the words given below in a meaningful sequence. 1. Poverty	2.Population	3. Death 4. Unemployment	5. Disease",
        options:['2, 3, 4, 5, 1','3, 4, 2, 5, 1','2, 4, 1, 5, 3','1, 2, 3, 4, 5'],
        answer:2

    },
    {
        q:"Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
        options:['22','24','25','26'],
        answer:2
    },
    {
        q:'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?',
        options:['12','14','27','53'],
        answer:1
    },
    {
        q:'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
        options:['1 : 3','3 : 2','3 : 4','None of these'],
        answer:1
    },
    {
        q:'A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:',
        options:['14 years','18 years','20 years','22 years'],
        answer:3
    },
    {
        q:'In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?',
        options:['30%','70%','100%','250%'],
        answer:1
    },
    {
        q:"A number consists of 3 digits whose sum is 10. The middle digit is equal to the sum of the other two and the number will be increased by 99 if its digits are reversed. The number is:",
        options:['145','253','370','352'],
        answer:1
    },
    {
        q:'.  Arrange the words given below in a meaningful sequence. 1. Police	2. Punishment	3. Crime 4. Judge	5. Judgement',
        options:['3, 1, 2, 4, 5','1, 2, 4, 3, 5','5, 4, 3, 2, 1','3, 1, 4, 5, 2'],
        answer:3
    },
    {
        q:'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
        options:['40 sec','42 sec','45 sec','48 sec'],
        answer:0
    },
    {
        q:'Look at this series: 2, 6, 18, 54, ... What number should come next?',
        options:['108','148','162','216'],
        answer:2
    },
    {
        q:'The sum of the present ages of a father and his son is 60 years. Six years ago, fathers age was five times the age of the son. After 6 years, sons age will be:',
        options:['12 years','14 years', '18 years',' 20 years'],
        answer:3
    },
    {
        q:"The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        options:['15','16','18','25'],
        answer:1
    },
    {
        q:'What is the sum of two consecutive even numbers, the difference of whose squares is 84?',
        options:['34','38','42','46'],
        answer:2
    },
    {
        q:'Arrange the words given below in a meaningful sequence. 1. Word	2. Paragraph	3. Sentence 4. Letters	5. Phrase',
        options:['4, 1, 5, 2, 3','4, 1, 3, 5, 2','4, 2, 5, 1, 3','4, 1, 5, 3, 2'],
        answer:3
    },
    {
        q:'Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?',
        options:['4.2','4.4','4.7','5.1'],
        answer:2
    },
    {
        q:'A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
        options:['3.6 sec','18 sec','36 sec','72 sec'],
        answer:2
    },
    {
        q:"At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        options:['12 years','15 years','19 and half','21 years'],
        answer:1
    },
    {
        q:'The product of two numbers is 9375 and the quotient, when the larger one is divided by the smaller, is 15. The sum of the numbers is:',
        options:['380','395','400','425'],
        answer:2
    },
    {
        q:'Arrange the words given below in a meaningful sequence. 1. Nation	2. Village	3. City 4. District	5. State',
        options:['2, 3, 4, 5, 1','2, 3, 4, 1, 5','1, 3, 5, 4, 2','1, 2, 3, 4, 5'],
        answer:0
    },
    {
        q:'Look at this series: 8, 6, 9, 23, 87 , ... What number should come next?',
        options:['128','226','324','429'],
        answer:3
    },
    {
        q:'A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?',
        options:['Rs. 18.20','Rs. 70','Rs. 72','Rs. 88.25'],
        answer:2
    },

    ]
    
    