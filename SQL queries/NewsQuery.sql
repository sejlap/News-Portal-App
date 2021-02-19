create table dbo.News(
NewsId int identity(1,1),
NewsTitle varchar (500),
NewsText varchar(5000),
PhotoFileName varchar(500)
)


select * from dbo.News;

insert into dbo.News values  ('President of the United States', 
'The president of the United States (POTUS)[A] is the head of state and head of government of the United States of America. The president directs the executive branch of the federal government and is the commander-in-chief of the United States Armed Forces.
The power of the presidency has grown substantially since its formation, as has the power of the federal government as a whole.[10] While presidential power has ebbed and flowed
over time, the presidency has played an increasingly strong role in American political life since the beginning of the 20th century, with a notable expansion during the presidency of Franklin D. Roosevelt. 
In contemporary times, the president is also looked upon as one of the worlds most powerful political figures as the leader of the only remaining global superpower.
As the leader of the nation with the largest economy by nominal GDP, the president possesses significant domestic and international hard and soft power.', 'pic1.jpg')

insert into dbo.News values  ('How Car Collecting Powered Through the Pandemic',' Joe Boyd, a civil litigation lawyer in Macon, Ga., had been scouting for a 1970s Toyota Land Cruiser for some time. Last May, in the thick of the pandemic, he pounced.
Id just started my own solo practice, but all the courts were closed because of Covid-19,” said Mr. Boyd, 49, who spotted a fully restored 1975 model in an online ad. So it turned out to be a great time for me to do this
Grabbing a buddy, he flew some 900 miles to Garage Kept Motors in Grand Rapids, Mich., and drove away with his dream car — which came with a refinished matching trailer and its own roof-mounted surfboard — for $27,000.
Rather than back away from classic automobiles because of the pandemic, buyers flocked to them, sometimes in stunning numbers. Online auto sales and auctions, starting to gain acceptance among collectors before the virus, took off, and some tent-pole auctions with limited attendance claimed new records.', 'pic2.jpg')

insert into dbo.News values  ('Change by the Plateful: Covering Restaurants in a Pandemic', ' Times Insider explains who we are and what we do, and delivers behind-the-scenes insights into how our journalism comes together.
In November, Falansai, a Vietnamese restaurant that had closed at the start of the pandemic, was taken over by a new owner and chef named Eric Tran. I was intrigued by his menu, which included confit duck necks and a seafood curry soup made with peanut milk. The backyard was supposed to be open for outdoor dining on warm nights, but there weren’t any. Too curious to wait for spring, I placed a delivery order, using my own name instead of an alias so the courier would know which bell to ring.
Mr. Tran told me later that when he saw the order, he and his sous-chef asked each other whether they were cooking for the Times restaurant critic.', 'pic3.jpg')
