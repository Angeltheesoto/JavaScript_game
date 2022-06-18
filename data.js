export let newChoices = [
  /* Choices label = 'choice [index#-level#-button#]' - ex:
    'level 11': {'c1': 'choice 1-5-one', 'level': 5, 'question': 'question 1-1'},
    'level 12': {'c2': 'choice 1-6-two', 'level': 6},
    'level 13': {'c3': 'choice 1-7-three', 'level': 7},
    'level 14': {'c4': 'choice 1-8-four', 'level': 8}
  */
  // questions Label = 'question [path#-currentQuestion#]' -
  {
    'level 11': {'c1': 'Be adventurest and go through the rocky river.', 'level': 1, 'question': `You and a friend are on a trip at one of the largest forest in the United States. Your hiking through the mountains of Tongrass National Forest, Alaska. Its been nothing but three fun filled days with hiking, camping and fishing in the great outdoors. You and your best-friend are miles away from any contact with civilization and your both tired and ready to head back home. You have enough supplies to last you at least two more days for the journey back. To head back your best-friend suggest a more adventurest route through the rocky river, pass the abonded yellow bus. There is also another shorter route on the map that a ranger had mentioned to you before the trip. He had mentioned a path called the Moose path. He also mentioned an alternative path called the Cove trail.`},
    'level 12': {'c2': 'Take the shorter path the ranger had mentioned.', 'level': 2},
    'level 13': {'c3': 'The wild animals dont scare you, so you go through the Cove trail.', 'level': 3},
    'level 14': {'c4': 'Stay another two days because you dont want to leave just yet.', 'level':4}
  },
  {
    'level 11': {'c1': 'Scream and yell to scare the bear away. Show them you are a threat and they should leave you alone.', 'level': 5, 'question': 'You both head down the mountain to the rocky river trying your best to maneuver through the rocks. On your way down the mountain you both stop, and see a group of bears grabbing fish right from the river. Then all of a sudden one of them starts charging your way. What do you do?'},
    'level 12': {'c2': 'You hold your ground and stay calm. After the bear charges, slowly retreat while keeping an eye on the bear.', 'level': 6},
    'level 13': {'c3': 'Try and talk to the bear to let him know you are not a threat. You avoid direct eye contact to show your a kind person.', 'level': 7},
    'level 14': {'c4': 'You decide to climb up a tree, because if your up top the bears cant reach you.', 'level': 8}
  },
  {
    'level 11':{'c1': 'You try and run as far away as you can to beat it before it reaches you.', 'level': 9, 'question': 'You walk down Moose path and decide to see what happens. You and your friend are following a long straight dirt path along side the mountain. When all of a sudden you both hear light trembles. The trembles seem to get louder and louder as you look around to see where the sound is coming from. Your friend shouts "Over there!". You quickly look to see a giant river of rocks tumbling down the mountain. Its an enormous land slide. You have to act quick because the rocks are getting closer and closer by the second. What do you do?'},
    'level 12':{'c2': 'You curl up into a ball on the floor in hopes of having it not hurt you.', 'level': 10},
    'level 13':{'c3': 'You climb up a very thick tree and wish for the best.', 'level': 11},
    'level 14':{'c4': 'You spot a small cliff like rock just a few feet away and you sprint straight towards it for cover.', 'level': 12}
  },
  {
    'level 11':{'c1': 'You believe you can outrun them, so you run as fast as you can back towards the path you had originally went.', 'level': 13, 'question': 'You and your friend are walking through a thick woodsy area straight through cove path. You both see nothing but a bright light coming from the end of one of the many paths so you both decide to see whats there. As you get closer and closer you are revealed to a large circular field surronded by caves and tress. You slowly walk towards the caves to see the vastness of them, but all of a sudden you see shiny bright eyes appear from the darkness. As more and more appear one by one you start to worry what is behind the shadows. As you try to back up slowly, wolves appear to move towards you from the shadows. They look very ferocious and hungry, what do you do?'},
    'level 12':{'c2': 'You try and fight back the wolves with your friend to hopefully make them back off.', 'level': 14},
    'level 13':{'c3': 'You remembered you had a flair gun so you fire it to try and scare them off.', 'level': 15},
    'level 14':{'c4': 'You tell your friend to stay absolutely still as you hope they will eventually leave you alone.', 'level': 16}
  },
  {
    'level 11':{'c1': 'choice 4-17-one', 'level': 17, 'question': 'You stayed for too long and now you and your best-friend dont have enough food and water to make it back home. You both try your best to get home but you pass out from lack of energy to make it back.', 'gameOver': ''},
    'level 12':{'c2': 'choice 4-18-two', 'level': 18},
    'level 13':{'c3': 'choice 4-19-three', 'level': 19},
    'level 14':{'c4': 'choice 4-20-four', 'level': 20}
  },
  {
    'level 11':{'c1': 'choice 5-21-one', 'level': 21, 'question': 'The bear smacks you as hard as he can and you fall to ground with serious injuries from the bear. Unable to get back up, neither you nor your friend make it out alive.', 'gameOver': ''},
    'level 12':{'c2': 'choice 5-22-two', 'level': 22},
    'level 13':{'c3': 'choice 5-23-three', 'level': 23},
    'level 14':{'c4': 'choice 5-24-four', 'level': 24}
  },
  {
    'level 11':{'c1': 'choice 6-25-one', 'level': 25, 'question': 'The bear slowly stops from charging towards you and senses you are not a threat. He then goes back to hunting for fish and lets you and your friend be on your way. You both make it home safely.', 'survived': ''},
    'level 12':{'c2': 'choice 6-26-two', 'level': 26},
    'level 13':{'c3': 'choice 6-27-three', 'level': 27},
    'level 14':{'c4': 'choice 6-28-four', 'level': 28}
  },
  {
    'level 11':{'c1': 'choice 7-29-one', 'level': 29, 'question': 'It seems talking to the bear has calmed the bear down and has made him back off. Avoiding eye contact has shown you are not threatening him as well. The bear leaves and allows the path home to be a safe to go.', 'survived': ''},
    'level 12':{'c2': 'choice 7-30-two', 'level': 30},
    'level 13':{'c3': 'choice 7-31-three', 'level': 31},
    'level 14':{'c4': 'choice 7-32-four', 'level': 32}
  },
  {
    'level 11':{'c1': 'choice 8-33-one', 'level': 33, 'question': 'You climbed the tree as high as you can in hopes none of the bears can reach you. But bears are excelent climbers so they climb their way up with ease. You are unable to go any higher that the bear finally catches up to you and yanks you right off the tree. You fall straight to your death.', 'gameOver': ''},
    'level 12':{'c2': 'choice 8-34-two', 'level': 34},
    'level 13':{'c3': 'choice 8-35-three', 'level': 35},
    'level 14':{'c4': 'choice 8-36-four', 'level': 36}
  },
  {
    'level 11':{'c1': 'choice 9-37-one', 'level': 37, 'question': 'You ran as fast as you could. You are just a few feet away from being safe but sadly the land slide hits you and you are crushed by the impact of the tumbling rocks and trees.', 'gameOver': ''},
    'level 12':{'c2': 'choice 9-38-two', 'level': 38},
    'level 13':{'c3': 'choice 9-39-three', 'level': 39},
    'level 14':{'c4': 'choice 9-40-four', 'level': 40}
  },
  {
    'level 11':{'c1': 'choice 10-41-one', 'level': 41, 'question': 'Your friend decides to ditch you while you lay on the floor as that is facing death right in the face. The land slide sweeps you away into an abyss and you are forever lost in the piles of rubble.', 'gameOver': ''},
    'level 12':{'c2': 'choice 10-42-two', 'level': 42},
    'level 13':{'c3': 'choice 10-43-three', 'level': 43},
    'level 14':{'c4': 'choice 10-44-four', 'level': 44}
  },
  {
    'level 11':{'c1': 'choice 11-45-one', 'level': 45, 'question': 'The tree you and your friend climb gets hit hard by the debre. The branches shake and even some break, but the tree stands its ground and is not pushed over at all. Once the slide has passed you and your friend make it safely down and head on home.', 'survived': ''},
    'level 12':{'c2': 'choice 11-46-two', 'level': 46},
    'level 13':{'c3': 'choice 11-47-three', 'level': 47},
    'level 14':{'c4': 'choice 11-48-four', 'level': 48}
  },
  {
    'level 11':{'c1': 'choice 12-49-one', 'level': 49, 'question': 'You quickly tell your friend to run with you to the clif like rock.You both crouch beneath it and hold your hands against your head to protect from the loudness of the slide. Its just enough space to fit both of you, as the land slide tumbles loudly over the rock banging and crashing over everything. After some time the slide slowly comes to a stop. You both walk away without a scratch and head home safely.', 'survived': ''},
    'level 12':{'c2': 'choice 12-50-two', 'level': 50},
    'level 13':{'c3': 'choice 12-51-three', 'level': 51},
    'level 14':{'c4': 'choice 12-52-four', 'level': 52}
  },
  {
    'level 11':{'c1': 'choice 13-53-one', 'level': 53, 'question': 'Your running as fast as you can to lose the wolves and hopefully get somewhere safe. But the wolves catch up quickly and catch your friend. The other wolves continue to chase you as you are rushing through the trees and going off the path. The wolves are just too quick and eventually catch up to you.', 'gameOver': ''},
    'level 12':{'c2': 'choice 13-54-two', 'level': 54},
    'level 13':{'c3': 'choice 13-55-three', 'level': 55},
    'level 14':{'c4': 'choice 13-56-four', 'level': 56}
  },
  {
    'level 11':{'c1': 'choice 14-57-one', 'level': 57, 'question': 'The wolves slowly start to surround you and your friend to prevent you from escaping. They come try and attack you one by one as each one takes a shot at you. You hold yout ground and try your best to keep them at bay by making loud noises and throwing punches. Your hoping they will eventually give in but they are too persistent, and they dont give up. You and your friend eventually become too tired to hold your ground and they eventually all attack at once to finish the job.', 'gameOver': ''},
    'level 12':{'c2': 'choice 14-58-two', 'level': 58},
    'level 13':{'c3': 'choice 14-59-three', 'level': 59},
    'level 14':{'c4': 'choice 14-60-four', 'level': 60}
  },
  {
    'level 11':{'c1': 'choice 15-61-one', 'level': 61, 'question': 'After you fired the flair gun the wolves get scared by it and back away as the stair straight up into the sky watching it glow up the sky in a bright red. That gives you guys enough time to go back to the other path and get far away from where the wolves were. You make it back home safe and sound.', 'survived': ''},
    'level 12':{'c2': 'choice 15-62-two', 'level': 62},
    'level 13':{'c3': 'choice 15-63-three', 'level': 63},
    'level 14':{'c4': 'choice 15-64-four', 'level': 64}
  },
  {
    'level 11':{'c1': 'choice 16-65-one', 'level': 65, 'question': 'Your both scared for your lives as the wolves get closer and closer. Your as still as a statue and you hope to not move a muscle because the wolves are all around you sniffing and noming on your clothes. They wait and stare at you for hours untill they are absolutely sure you are not food. They eventually leave back to their cave and you are free to move around. Exahusted from the hours of standing you both slowly make your way back as to make sure not to awake the wolves again. After a long tiresome journey trying to get back home you finally make it safely.', 'survived': ''},
    'level 12':{'c2': 'choice 16-66-two', 'level': 66},
    'level 13':{'c3': 'choice 16-67-three', 'level': 67},
    'level 14':{'c4': 'choice 16-68-four', 'level': 68}
  },
  {
    // path not needed
    'level 11':{'c1': 'choice 17-69-one', 'level': 69, 'question': 'question 1-5'},
    'level 12':{'c2': 'choice 17-70-two', 'level': 70},
    'level 13':{'c3': 'choice 17-71-three', 'level': 71},
    'level 14':{'c4': 'choice 17-72-four', 'level': 72}
  },
  {
    // path not needed
    'level 11':{'c1': 'choice 18-73-one', 'level': 73, 'question': 'question 2-5'},
    'level 12':{'c2': 'choice 18-74-two', 'level': 74},
    'level 13':{'c3': 'choice 18-75-three', 'level': 75},
    'level 14':{'c4': 'choice 18-76-four', 'level': 76}
  },
  {
    // path not needed
    'level 11':{'c1': 'choice 19-77-one', 'level': 77, 'question': 'question 3-5'},
    'level 12':{'c2': 'choice 19-78-two', 'level': 78},
    'level 13':{'c3': 'choice 19-79-three', 'level': 79},
    'level 14':{'c4': 'choice 19-80-four', 'level': 80}
  },
  {
    // path not needed
    'level 11':{'c1': 'choice 20-81-one', 'level': 81, 'question': 'question 4-5'},
    'level 12':{'c2': 'choice 20-82-two', 'level': 82},
    'level 13':{'c3': 'choice 20-83-three', 'level': 83},
    'level 14':{'c4': 'choice 20-84-four', 'level': 84}
  }
];