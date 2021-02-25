const taglines = [
  "-- --- .-. ... . / -.-. --- -.. . .-. .-.-.-",
  "A force to be reckoned with.",
  "ACL tearer and wrist breaker. ^1000 (That's not a threat; I'm just accident-prone.)",
  "Also answers to Tyler.",
  "Aspiring applicant of The Finer Things Club.",
  "Awkward, ^500 but in a sort of charming way.",
  "Bad boy for life.",
  "Bagel biter.",
  "Bicycle rider.",
  "Big fan of the colors <span class='hero__quip--highlight-blue'>blue</span> and <span class='hero__quip--highlight-gray'>gray</span>.",
  "Binger of The Office.",
  "Board game geek.",
  "Brother.",
  "Card-carrying Bible, history, and language nerd.",
  "Cash Apper ($taylorjwalker).",
  "Chick-fil-A One™ Silver member.",
  "Childlike enjoyer of magic.",
  "Comedy connoisseur.",
  "Computer science major.",
  "Creator of <a href='https://pubsub.club'>pubsub.club</a>.",
  "Dark moder.",
  "Daydreamer.",
  "Delicate dafodil.",
  "Digital denizen hoping to be a digital nomad some day.",
  "Dippin' Dots-eating time traveler.",
  "Expert Googler.",
  "Faithful attender of Fried Chicken Thursdays at Florida Farm Bureau.",
  "Former child.",
  "Former owner of a whole Bitcoin.",
  "Friend of someone who knows Tom Holland. ^1000 He rode on her jet ski!",
  "Future procrastinator.",
  "Hamilton fan. ^1000 Is there a name for us?",
  "Handsome... ^1000 according to my grandmother.",
  "Has a structured settlement and needs cash now!",
  "Has heard the tragedy of Darth Plagueis The Wise.",
  "Hopeful romantic.",
  "Hydro homie.",
  "INFP, ^1000 I think.",
  "Informed consumer.",
  "Introvert.",
  "Jimmy Neutron fanatic.",
  "Lemon lover.",
  "Liar ^500 (exclusively whilst playing social deception games).",
  "Mathematics minor.",
  "<span class='hero__quip--blurry'>Needs glasses.</span>",
  "Memorizer of useless information. ^1000 My library card number is ^500 2290100152••••.",
  "Misser of 100% of the shots I don't take.",
  "Night owl.",
  "Not a doctor. Shh.",
  "One in a million ^1000 (or at least a thousand).",
  "Orange Tic Tac swallower. ^1000 A whole pack at once!",
  "Orange juice snob. ^1000 Check out Natalie's Orchid Island Juice Company... ^500 you're welcome.",
  "Overthinker. ^2000 Or am I?",
  "Pal.",
  "Patron of the arts.",
  "Person whose jib you like the cut of, I hope.",
  "Podcast listener.",
  "Possibly Jewish.",
  "Regal Unlimited™ subscriber.",
  "Registered voter.",
  "Rock climber.",
  "Scuba diver. ^1000 If I can't scuba, then what's this all been about? ^500 What have I been working toward?",
  "S^500l^500o^500w^500 t^500y^500p^500i^500s^500t^500.",
  "Seizer of days.",
  "Semicolon enthusiast;",
  "Silly goose.",
  "Singer-song^500listener.",
  "Strict adherent to Inbox Zero.",
  "That guy drinking tea at a coffee shop.",
  "One of Twenty One Pilots' top 2% fans.",
  "University of Florida alumnus. ^1000 Go Gators!",
  "Venmoer (@taylorjwalker).",
  "Victim to one of the classic blunders.",
  "Was in the parking lot earlier. ^1000 That's how you know me.",
  "Was member of the [Rubik's] Cube Club back in high school.",
  "Watch wearer.",
  "Weary pilgrim.",
  "World traveler. ^1000 Have you ever dreamt of being in the middle of the world?",
];

new Typed("#hero__quip", {
  strings: [...taglines.sort(() => Math.random() - 0.5), ""],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 3000,
});

const psDayElement = document.querySelector("#ps__day");
psDayElement.textContent = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});
