import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1, phase: "governing",
    question: "A sudden economic downturn has hit manufacturing. Your base wants industry bailouts, but moderates demand fiscal austerity.",
    answers: [
      { text: "Sign a massive corporate bailout and stimulus package.", feedback: "Your working-class base cheers. Rust Belt and Midwest polling rises — but fiscal hawks are furious.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 15, funds: -50000 }, regional_effects: { midwest: 5.0, plains: 2.0, northeast: -2.0 }, legislative_effects: 6, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Implement austerity measures to curb future inflation.", feedback: "Markets stabilize, but your core voters feel betrayed. Midwest manufacturing regions sour on you.", effects: { political_capital: 10, approval: -10, base_enthusiasm: -20, funds: 25000 }, regional_effects: { midwest: -5.0, plains: -2.0, northeast: 2.0 }, legislative_effects: -8, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "Negotiate a targeted manufacturing tax credit compromise.", feedback: "A middle-ground solution. Neither the base nor fiscal conservatives are thrilled, but no one walks out.", effects: { political_capital: 5, approval: 0, base_enthusiasm: -5, funds: -15000 }, regional_effects: { midwest: 2.0 }, legislative_effects: 3, trump_effects: null, trump_tag: null }
    ]
  },
  {
    id: 2, phase: "governing",
    question: "A Supreme Court vacancy has opened. Your nomination will shape constitutional law for a generation. Who do you choose?",
    answers: [
      { text: "Nominate a staunch progressive judge aligned with your base.", feedback: "Your base is electrified. But moderate senators threaten a filibuster, and the South is outraged.", effects: { political_capital: -25, approval: -3, base_enthusiasm: 25, funds: 0 }, regional_effects: { west_coast: 3.5, northeast: 3.5, south: -4.0 }, legislative_effects: 10, trump_effects: { south: -5, plains: -4 }, trump_tag: 'minus' },
      { text: "Choose a consensus moderate with bipartisan Senate appeal.", feedback: "The Senate confirms quickly. Moderates approve. Your progressive base feels deeply betrayed.", effects: { political_capital: 15, approval: 6, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: 2.0, south: 2.0, northeast: -1.0 }, legislative_effects: -4, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "Nominate a business-friendly jurist backed by corporate donors.", feedback: "PAC donations surge, but your progressive voters call it a corporate sellout.", effects: { political_capital: -5, approval: -5, base_enthusiasm: -10, funds: 50000 }, regional_effects: { plains: 3.0, west_coast: -2.0 }, legislative_effects: -12, trump_effects: { south: 2, plains: 1 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 3, phase: "governing",
    question: "A major trading partner threatens agricultural tariffs over your technology export controls. How do you respond?",
    answers: [
      { text: "Retaliate hard — impose sweeping counter-tariffs on their exports.", feedback: "Populist crowds cheer the America-First stance, but farm exports crater. The Plains hurt badly.", effects: { political_capital: 5, approval: -4, base_enthusiasm: 10, funds: -20000 }, regional_effects: { plains: -5.0, south: -3.0, midwest: 1.0 }, legislative_effects: -5, trump_effects: { south: 4, plains: 5 }, trump_tag: 'plus' },
      { text: "Negotiate a swift free-trade compromise to end the dispute.", feedback: "Coastal tech hubs and suburbs cheer the stability. But industrial workers feel sold out.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -10, funds: 15000 }, regional_effects: { west_coast: 4.0, northeast: 3.0, midwest: -4.0 }, legislative_effects: 6, trump_effects: { south: -4, plains: -4 }, trump_tag: 'minus' },
      { text: "File a diplomatic complaint through the World Trade Organization.", feedback: "Avoids escalation, but critics across the aisle call your administration weak and globalist.", effects: { political_capital: -5, approval: -2, base_enthusiasm: -5, funds: 0 }, regional_effects: { plains: -1.0 }, legislative_effects: 0, trump_effects: { south: -3, plains: -3 }, trump_tag: 'minus' }
    ]
  },
  {
    id: 4, phase: "governing",
    question: "A landmark energy bill reaches your desk. Green groups demand clean energy mandates. Energy states demand more drilling.",
    answers: [
      { text: "Sign an executive order banning new drilling and funding clean energy.", feedback: "Coastal progressives celebrate. But Plains energy workers are furious, and energy bills spike.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 20, funds: -30000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, plains: -5.0, south: -4.0 }, legislative_effects: -6, trump_effects: { south: -6, plains: -5 }, trump_tag: 'minus' },
      { text: "Open public lands for oil exploration to slash fuel prices.", feedback: "Gas prices fall and corporate donations flow in. But environmentalists hold mass protests.", effects: { political_capital: 5, approval: 4, base_enthusiasm: -20, funds: 45000 }, regional_effects: { plains: 5.0, south: 4.0, west_coast: -6.0, northeast: -4.0 }, legislative_effects: 4, trump_effects: { south: 5, plains: 4 }, trump_tag: 'plus' },
      { text: "Push a bipartisan roads, bridges, and power grid bill.", feedback: "Overwhelmingly popular across the spectrum, though it costs significant political capital to pass.", effects: { political_capital: -15, approval: 8, base_enthusiasm: 5, funds: -20000 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: 2.0 }, legislative_effects: 9, trump_effects: { south: -1, plains: -1 }, trump_tag: 'minus' }
    ]
  },
  {
    id: 5, phase: "governing",
    question: "Healthcare premiums are spiking to record highs. Congress and the public are demanding action.",
    answers: [
      { text: "Push for a comprehensive Medicare-for-All Public Option.", feedback: "Requires massive political horse-trading and spending, but fires up the entire progressive base.", effects: { political_capital: -35, approval: 5, base_enthusiasm: 30, funds: -60000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, plains: -4.0 }, legislative_effects: -14, trump_effects: { south: -4, plains: -4 }, trump_tag: 'minus' },
      { text: "Deregulate state insurance markets to increase consumer choice.", feedback: "Conservatives approve. Funds stabilize. But your base calls it a giveaway to insurance executives.", effects: { political_capital: 10, approval: -5, base_enthusiasm: -15, funds: 10000 }, regional_effects: { south: 3.5, plains: 3.5, northeast: -3.0 }, legislative_effects: -5, trump_effects: { south: 3, plains: 2 }, trump_tag: 'plus' },
      { text: "Cap prescription drug prices — insulin, seniors' meds, and generics.", feedback: "A rare bipartisan win. Hugely popular with seniors and working families across the entire map.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 10, funds: -10000 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: 2.0, west_coast: 2.0, plains: 2.0 }, legislative_effects: 8, trump_effects: { south: 1, plains: 1 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 6, phase: "governing",
    question: "A massive cybersecurity breach of the national electric grid has caused widespread power outages. Intel indicates state-sponsored attackers. How do you respond?",
    answers: [
      { text: "Blame the hostile foreign power immediately, ordering retaliatory cyber-attacks.", feedback: "Your base cheers the strength, but fear of war and escalation causes moderate approval to decline.", effects: { political_capital: -5, approval: -3, base_enthusiasm: 18, funds: -10000 }, regional_effects: { northeast: -2.0, west_coast: -2.0, plains: 2.0, south: 2.0 } },
      { text: "Address the nation calmly, focus on infrastructure resilience and security updates.", feedback: "Wins approval for stable leadership. Base enthusiasm is moderate, but energy grid repairs require budget.", effects: { political_capital: 5, approval: 6, base_enthusiasm: -5, funds: -30000 }, regional_effects: { midwest: 3.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Push for a sweeping bipartisan Cybersecurity & Infrastructure Act in Congress.", feedback: "A major legislative push that stabilizes critical infrastructure, though it costs significant political capital.", effects: { political_capital: -20, approval: 4, base_enthusiasm: 5, funds: -20000 }, legislative_effects: 9 }
    ]
  },
  {
    id: 7, phase: "campaign",
    question: "The campaign has officially launched. What is your opening strategic play?",
    answers: [
      { text: "Energetic coastal base mobilization — massive rallies in liberal cities.", feedback: "Base enthusiasm explodes on the coasts. But rural America sees it as out-of-touch elitism.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 20, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0 }, trump_effects: { south: -3, plains: -2 }, trump_tag: 'minus' },
      { text: "Heavy TV advertising blitz targeting suburban Midwest families.", feedback: "Drains funds but converts suburban moderates and builds a solid Midwest edge.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 5, funds: -50000 }, regional_effects: { midwest: 6.0, south: 1.0 }, trump_effects: null, trump_tag: null },
      { text: "Populist economic tour through Southern industrial and rural towns.", feedback: "Resonates strongly with working-class Southern and Plains voters. Makes the South genuinely competitive.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 10, funds: -30000 }, regional_effects: { south: 5.0, midwest: 2.0, plains: 2.0 }, trump_effects: { south: 3, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 8, phase: "campaign",
    question: "Debate night. Your opponent hammers your economic record. The whole country is watching. How do you respond?",
    answers: [
      { text: "Go on the offensive — attack the opponent's corporate lobbying record.", feedback: "The base is fired up by your fight. But some moderates see it as unpresidential.", effects: { political_capital: -5, approval: 1, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, south: -2.0 }, trump_effects: null, trump_tag: null },
      { text: "Calmly explain the international economic factors behind inflation.", feedback: "Scores with educated suburbanites, but feels academic and defensive to working-class viewers.", effects: { political_capital: 10, approval: 3, base_enthusiasm: -5, funds: 0 }, regional_effects: { northeast: 3.0, midwest: 1.0 }, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "Pivot hard to your jobs record and infrastructure achievements.", feedback: "Solid and relatable. Working-class voters across the Midwest and South respond strongly.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 8, funds: 0 }, regional_effects: { midwest: 4.0, south: 2.0, plains: 2.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 9, phase: "campaign",
    question: "A whistleblower reveals a major donor received a private White House meeting before winning a government contract. The press is in a feeding frenzy.",
    answers: [
      { text: "Publish all records, own the optics, and announce ethics reforms.", feedback: "A moment of transparency that restores integrity — but short-term approval takes a significant hit.", effects: { political_capital: 10, approval: -6, base_enthusiasm: 5, funds: -30000 }, regional_effects: { midwest: -2.0, northeast: 1.0, west_coast: 1.0 }, trump_effects: { south: -2, plains: -1 }, trump_tag: 'minus' },
      { text: "Attack the whistleblower's credibility and call it a partisan hoax.", feedback: "Your base rallies hard. But swing voters in the Midwest and Northeast are disgusted.", effects: { political_capital: -15, approval: -8, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 2.0, south: 1.0, northeast: -4.0, west_coast: -4.0, midwest: -3.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Flood the airwaves with positive ads to drown out the coverage.", feedback: "Effectively neutralizes the scandal in the short term, but at enormous financial cost.", effects: { political_capital: 0, approval: 1, base_enthusiasm: 0, funds: -60000 }, regional_effects: { midwest: 1.0 }, trump_effects: null, trump_tag: null }
    ]
  },
  {
    id: 10, phase: "campaign",
    question: "A popular progressive third-party candidate is siphoning young voters in key coastal states. What is your play?",
    answers: [
      { text: "Offer a major policy concession — invite their leaders to your climate advisory council.", feedback: "Progressives return home, but fiscal moderates in the Midwest feel the leftward lurch.", effects: { political_capital: -10, approval: 2, base_enthusiasm: 15, funds: -10000 }, regional_effects: { west_coast: 4.0, northeast: 4.0, midwest: -2.0 }, trump_effects: { south: -4, plains: -3 }, trump_tag: 'minus' },
      { text: "Ignore them entirely and focus all attacks on the main opponent.", feedback: "Avoids elevating their profile, but the bleeding in safe coastal states quietly continues.", effects: { political_capital: 5, approval: -2, base_enthusiasm: -10, funds: 0 }, regional_effects: { west_coast: -3.0, northeast: -3.0 }, trump_effects: null, trump_tag: null },
      { text: "Run targeted attack ads exposing their lack of governing experience.", feedback: "Successfully damages their credibility with swing voters. A bit cynical, but effective.", effects: { political_capital: 0, approval: 3, base_enthusiasm: -5, funds: -25000 }, regional_effects: { west_coast: 3.0, northeast: 3.0 }, trump_effects: { south: 1, plains: 1 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 11, phase: "campaign",
    question: "Election Eve. One last move. Where do you direct your final resources and energy?",
    answers: [
      { text: "Massive urban and college GOTV (Get Out The Vote) drive.", feedback: "Base enthusiasm surges to its peak. Turnout in key urban corridors should be enormous.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 25, funds: -30000 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 2.0, south: 2.0, plains: 1.0 }, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "All-out negative ad blitz in the Midwest and South toss-up districts.", feedback: "Chips away at the opponent in key states through relentless attack ads. Polarizing, but targeted.", effects: { political_capital: -10, approval: -3, base_enthusiasm: 10, funds: -40000 }, regional_effects: { midwest: 6.0, south: 5.0 }, trump_effects: null, trump_tag: null },
      { text: "Nationwide primetime unity speech — no attacks, just your vision.", feedback: "A sweeping, presidential close that wins over remaining undecideds and national press.", effects: { political_capital: 15, approval: 8, base_enthusiasm: -5, funds: -20000 }, regional_effects: { midwest: 3.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 3.0 }, trump_effects: { south: -1, plains: -1 }, trump_tag: 'minus' }
    ]
  },
  {
    id: 12, phase: "campaign",
    question: "An unexpected diplomatic crisis erupts: a US reconnaissance plane is forced down in international waters by a rival superpower. Your opponent calls you weak. How do you respond?",
    answers: [
      { text: "Order a military show of force and demand immediate release of the crew.", feedback: "Base enthusiasm surges, but fears of escalation cause approval to drop in swing suburbs.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 18, funds: -15000 }, regional_effects: { plains: 3.0, south: 2.0, west_coast: -3.0, northeast: -3.0 } },
      { text: "Conduct quiet, intense diplomatic negotiations behind closed doors to secure their release.", feedback: "Moderates praise your calm leadership and the crew is released safely, but your base wishes for a stronger stance.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -10, funds: 0 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 1.0 } },
      { text: "Deliver a primetime address warning of the crisis but refusing to be drawn into a foreign war.", feedback: "Hits a popular note of cautious strength. Neutralizes the opponent's attacks at moderate financial cost.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 8, funds: -20000 }, regional_effects: { midwest: 3.0, south: 2.0, plains: 1.0 } }
    ]
  },

  // ─── LINCOLN SCENARIOS ─────────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "lincoln",
    question: "Fort Sumter has been bombarded by Confederate forces. Southern states are in open rebellion. The Union hangs by a thread. What is your first move?",
    answers: [
      { text: "Issue an immediate proclamation calling 75,000 militia to defend the Union.", feedback: "The North rallies with patriotic fury. The border states are alarmed but hold. The war has begun on your terms.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 30, funds: -40000 }, regional_effects: { northeast: 8.0, midwest: 6.0, south: -10.0 }, legislative_effects: 5 },
      { text: "Attempt a final diplomatic compromise — offer to let slavery stand where it exists if states return.", feedback: "Abolitionists are furious and feel betrayed. The South sees it as weakness and presses forward anyway.", effects: { political_capital: 5, approval: -8, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: -5.0, midwest: -3.0, south: -3.0 }, legislative_effects: -5 },
      { text: "Suspend habeas corpus and move to immediately arrest Confederate sympathizers in border states.", feedback: "The border states are held, but civil libertarians condemn the move as authoritarian overreach.", effects: { political_capital: -15, approval: -5, base_enthusiasm: 10, funds: -20000 }, regional_effects: { midwest: 2.0, south: -5.0, northeast: -2.0 }, legislative_effects: -8 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "lincoln",
    question: "Abolitionists demand you emancipate all enslaved people immediately by executive order. Border state Unionists warn that it will shatter the fragile coalition holding the North together.",
    answers: [
      { text: "Issue the Emancipation Proclamation — free enslaved people in Confederate states immediately.", feedback: "History is made. The moral weight of the Union cause is transformed. The border states bristle but hold.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 30, funds: 0 }, regional_effects: { northeast: 8.0, midwest: 4.0, south: -6.0 }, legislative_effects: 12 },
      { text: "Propose a gradual, compensated emancipation plan funded by the federal government.", feedback: "A pragmatic middle ground that keeps border states loyal, though abolitionists call it a moral half-measure.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -5, funds: -60000 }, regional_effects: { midwest: 3.0, northeast: 2.0, south: -2.0 }, legislative_effects: 5 },
      { text: "Maintain the status quo — the war is about Union, not slavery, and you say so publicly.", feedback: "Border states are satisfied. But morale in the Northeast crumbles and international support falters.", effects: { political_capital: 10, approval: -7, base_enthusiasm: -20, funds: 0 }, regional_effects: { northeast: -6.0, midwest: -2.0 }, legislative_effects: -4 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "lincoln",
    question: "General McClellan refuses to advance on Richmond despite having a massive army. He sends you condescending telegrams. The war is stalling and casualties mount.",
    answers: [
      { text: "Fire McClellan immediately and appoint a more aggressive general to lead the Army of the Potomac.", feedback: "The gamble pays off in the long run, but the transition is chaotic and the press attacks you as impulsive.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 15, funds: -20000 }, regional_effects: { northeast: 2.0, midwest: 3.0 }, legislative_effects: 3 },
      { text: "Travel personally to McClellan's headquarters to order him to advance — a direct public confrontation.", feedback: "The dramatic visit forces McClellan's hand but humiliates the military brass and creates lasting enemies.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 8, funds: -10000 }, regional_effects: { northeast: 4.0, midwest: 2.0 }, legislative_effects: -3 },
      { text: "Give McClellan one final formal written order to advance or resign his commission.", feedback: "A measured ultimatum. McClellan grudgingly moves, though his heart is not in the fight.", effects: { political_capital: 5, approval: -2, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 1.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "lincoln",
    question: "War costs are astronomical. The Treasury is nearly empty. Your finance secretary proposes the first federal income tax and greenback currency to fund the Union Army.",
    answers: [
      { text: "Sign the Revenue Act immediately — institute the income tax and issue $150M in greenbacks.", feedback: "The treasury stabilizes and the army is paid and fed. Business interests grumble, but the war effort advances.", effects: { political_capital: -10, approval: -3, base_enthusiasm: 5, funds: 80000 }, regional_effects: { northeast: -2.0, midwest: 1.0 }, legislative_effects: 6 },
      { text: "Issue war bonds and appeal to Northern patriotism — avoid new taxes.", feedback: "Bond sales flood in on a wave of patriotic fervor, but the amount raised falls short of military needs.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 10, funds: 40000 }, regional_effects: { northeast: 4.0 }, legislative_effects: 2 },
      { text: "Nationalize the railroad system to directly fund the war through freight revenues.", feedback: "Operationally effective, but railroad magnates immediately begin funding your political opponents.", effects: { political_capital: -20, approval: -5, base_enthusiasm: -5, funds: 60000 }, regional_effects: { northeast: -4.0, midwest: -2.0 }, legislative_effects: -8 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "lincoln",
    question: "War-weary Northerners are mounting massive protests against conscription. Draft riots have broken out in New York City, leaving over 100 dead. The city is on the verge of anarchy.",
    answers: [
      { text: "Deploy federal troops to crush the riots and enforce conscription by military force.", feedback: "Order is restored, but the brutal suppression generates scathing press. Anti-war Democrats gain in the polls.", effects: { political_capital: -10, approval: -6, base_enthusiasm: -10, funds: -30000 }, regional_effects: { northeast: -5.0, midwest: -2.0 }, legislative_effects: -6 },
      { text: "Allow wealthy men to buy their way out of service for $300 — a commutation clause.", feedback: "Riots subside as the wealthy opt out, but working-class voters feel bitterly betrayed by the 'rich man's war.'", effects: { political_capital: 10, approval: -8, base_enthusiasm: -15, funds: 40000 }, regional_effects: { northeast: -4.0, midwest: -3.0 }, legislative_effects: -3 },
      { text: "Personally address the nation, appealing to Northern sacrifice in the name of Union and freedom.", feedback: "Your words quiet the protests and restore a sense of shared purpose. It costs you, but it holds the country together.", effects: { political_capital: -20, approval: 8, base_enthusiasm: 15, funds: -10000 }, regional_effects: { northeast: 4.0, midwest: 3.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "lincoln",
    question: "General Ulysses S. Grant has won major victories in the West, but high casualty counts lead critics to call him a 'butcher.' Radical Republicans want him elevated to General-in-Chief, while cautious politicians object.",
    answers: [
      { text: "Appoint Grant as General-in-Chief of all Union armies immediately. 'I cannot spare this man; he fights.'", feedback: "Grant assumes control, coordinating a relentless strategy. Base morale skyrockets, though the initial casualties alarm moderates.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 20, funds: -25000 }, regional_effects: { northeast: 5.0, midwest: 4.0 }, legislative_effects: 5 },
      { text: "Keep Grant in the West and maintain General Halleck in Washington to avoid political controversy.", feedback: "Avoids immediate political fights, but the war lacks cohesive leadership and the base is frustrated.", effects: { political_capital: 10, approval: -5, base_enthusiasm: -10, funds: 0 }, regional_effects: { northeast: -3.0 } },
      { text: "Bring Grant to Washington for a personal meeting before deciding, to assess his political loyalty.", feedback: "The meeting builds mutual trust, though the delay irritates Radicals who demand instant action.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 5, funds: -10000 }, regional_effects: { midwest: 2.0 } }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "lincoln",
    question: "The 1864 election is here. Democrats are running on an 'immediate peace' platform, calling the war a failure. Defeatism is spreading in the North. Where do you make your stand?",
    answers: [
      { text: "Campaign purely on military victory — no peace without restoration of the Union and an end to slavery.", feedback: "Sherman's March and the fall of Atlanta deliver you a thunderous military victory just in time to seal the election.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 20, funds: -30000 }, regional_effects: { northeast: 5.0, midwest: 6.0 }, trump_effects: null, trump_tag: null },
      { text: "Hint at possible negotiated peace to peel off moderate voters, then pivot once re-elected.", feedback: "The political triangulation works short-term, but abolitionists and Radical Republicans call it a betrayal.", effects: { political_capital: 5, approval: 3, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 4.0, northeast: 1.0 }, trump_effects: null, trump_tag: null },
      { text: "Barnstorm the Midwest, focusing on soldiers voting from the battlefield via absentee ballot.", feedback: "The soldier vote swings massive majorities in your direction. It's the decisive edge in the closest states.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 25, funds: -25000 }, regional_effects: { midwest: 8.0, northeast: 3.0 }, trump_effects: null, trump_tag: null }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "lincoln",
    question: "A Democratic Party newspaper has published fabricated letters portraying you as corrupt and personally profiteering from the war. It is spreading rapidly across the country.",
    answers: [
      { text: "Ignore it entirely — respond only with your war record and let the truth speak for itself.", feedback: "The honest stoicism resonates with your supporters, and the forgeries are eventually exposed by rival papers.", effects: { political_capital: 5, approval: 2, base_enthusiasm: 5, funds: 0 }, regional_effects: { northeast: 2.0, midwest: 1.0 }, trump_effects: null, trump_tag: null },
      { text: "Publish a point-by-point rebuttal under your own signature in every major Northern paper.", feedback: "The forceful response clears the air, though some wonder if the vigorous denial signals hidden guilt.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 8, funds: -20000 }, regional_effects: { northeast: 3.0 }, trump_effects: null, trump_tag: null },
      { text: "Have a friendly editor publicly expose the forgeries and trace them back to Confederate agents.", feedback: "The scandal backfires spectacularly on the Democrats, painting them as Confederate collaborators.", effects: { political_capital: -5, approval: 8, base_enthusiasm: 12, funds: -10000 }, regional_effects: { northeast: 5.0, midwest: 4.0 }, trump_effects: null, trump_tag: null }
    ]
  },

  // ─── OBAMA SCENARIOS ───────────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "obama",
    question: "The global financial system is on the verge of total collapse. Lehman Brothers has failed and the Great Recession is spreading. Wall Street needs an emergency bailout to prevent a second Great Depression.",
    answers: [
      { text: "Sign the $700B TARP bailout to rescue the banks — the economy must be stabilized at any cost.", feedback: "The banking system is saved, but 'bailing out Wall Street' becomes a rallying cry that poisons your base for years.", effects: { political_capital: -20, approval: -5, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: 2.0, midwest: -4.0, plains: -3.0 }, legislative_effects: 8 },
      { text: "Let the largest banks fail and use government funds only to protect Main Street depositors and small banks.", feedback: "The 'moral hazard' stand thrills progressives but triggers a deeper recession. Unemployment climbs to 12%.", effects: { political_capital: 5, approval: -12, base_enthusiasm: 10, funds: -50000 }, regional_effects: { midwest: -6.0, south: -4.0, northeast: -3.0 }, legislative_effects: -10 },
      { text: "Pass TARP plus a massive $800B stimulus for infrastructure, green energy, and direct job creation.", feedback: "The dual rescue package is audaciously expensive but stabilizes both finance and the real economy effectively.", effects: { political_capital: -30, approval: 3, base_enthusiasm: 15, funds: -60000 }, regional_effects: { midwest: 4.0, northeast: 3.0, west_coast: 3.0, plains: -2.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "obama",
    question: "The Affordable Care Act is your signature domestic achievement, but it barely survived Congress. Now Republicans and a handful of Red State Democrats want to repeal or gut it before it takes effect.",
    answers: [
      { text: "Fight tooth and nail to defend every clause — use the full power of the White House to hold the line.", feedback: "The law survives intact. 20 million Americans gain coverage. But Republicans weaponize it in the midterms.", effects: { political_capital: -25, approval: 2, base_enthusiasm: 20, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, south: -3.0, plains: -3.0 }, legislative_effects: -8 },
      { text: "Negotiate a 'grand bargain' that delays the individual mandate to win over moderate Republicans.", feedback: "The compromise keeps the framework alive but progressives feel betrayed that you blinked under pressure.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -12, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: -2.0 }, legislative_effects: 5 },
      { text: "Take the case directly to the American people — hold 50 town halls in 50 states in 30 days.", feedback: "The unprecedented outreach blitz shifts public opinion decisively. Congress holds the line under public pressure.", effects: { political_capital: -15, approval: 7, base_enthusiasm: 18, funds: -40000 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 3.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "obama",
    question: "Intelligence agencies have confirmed a high-value Al-Qaeda target in a Pakistani compound. It may be Osama Bin Laden. You can act unilaterally — or risk the intelligence being leaked if you inform Pakistan.",
    answers: [
      { text: "Authorize the Navy SEAL raid without telling Pakistan — go in unilaterally and take the shot.", feedback: "The raid kills Bin Laden. America erupts in celebration. Your approval rating surges to its highest point ever.", effects: { political_capital: 10, approval: 15, base_enthusiasm: 20, funds: 0 }, regional_effects: { northeast: 5.0, midwest: 4.0, south: 3.0, plains: 2.0, west_coast: 3.0 }, legislative_effects: 5 },
      { text: "Notify Pakistani intelligence first — preserve the diplomatic relationship even at risk to the mission.", feedback: "Pakistan responds with outrage and the target disappears. A massive diplomatic incident ensues.", effects: { political_capital: -20, approval: -10, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: -3.0, south: -5.0, plains: -4.0, midwest: -3.0 }, legislative_effects: -8 },
      { text: "Order a precision drone strike rather than a ground raid to minimize risk to U.S. forces.", feedback: "The strike hits, but without a body the kill is unconfirmed. The heroic moment the nation needs never comes.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 5, funds: -5000 }, regional_effects: { northeast: 2.0, midwest: 1.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "obama",
    question: "Occupy Wall Street has paralyzed major American cities. Protesters are calling for wealth redistribution and prosecution of banking executives. Your base agrees. Wall Street threatens to pull funding.",
    answers: [
      { text: "Publicly endorse the protests and announce a new financial crimes task force to prosecute bankers.", feedback: "Progressives erupt with joy. Occupy becomes a governing mandate. But PAC money floods to your opponent.", effects: { political_capital: -15, approval: 4, base_enthusiasm: 25, funds: -50000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 2.0, south: -3.0 }, legislative_effects: -6 },
      { text: "Call for peaceful protest but distance yourself from the movement's more radical demands.", feedback: "A careful political middle, but both sides feel abandoned. The protests intensify without White House cover.", effects: { political_capital: 5, approval: -3, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 1.0 }, legislative_effects: 2 },
      { text: "Work with mayors to peacefully clear the encampments and redirect energy to Congressional reform bills.", feedback: "The camps are dismantled but three progressive finance bills pass, channeling the movement's momentum.", effects: { political_capital: -10, approval: 2, base_enthusiasm: -5, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 2.0 }, legislative_effects: 8 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "obama",
    question: "Edward Snowden has leaked classified NSA surveillance programs, revealing the government is collecting phone records of millions of Americans. The world is watching your response.",
    answers: [
      { text: "Defend the program as essential national security infrastructure and prosecute Snowden under the Espionage Act.", feedback: "The intelligence community is satisfied, but civil libertarians and your progressive base call it a betrayal of core values.", effects: { political_capital: 10, approval: -5, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: -4.0, west_coast: -5.0, south: 2.0, plains: 1.0 }, legislative_effects: 4 },
      { text: "Announce sweeping NSA reforms and publicly acknowledge the surveillance went too far.", feedback: "Progressives and civil libertarians cheer. Intelligence hawks are furious. The trust in your administration is restored.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 15, funds: -10000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, south: -2.0 }, legislative_effects: -5 },
      { text: "Commission an independent review panel — delay a definitive position while you assess the political fallout.", feedback: "The cautious non-answer frustrates everyone. Critics say you are hiding behind bureaucracy.", effects: { political_capital: 5, approval: -3, base_enthusiasm: -8, funds: 0 }, regional_effects: { northeast: -1.0, west_coast: -1.0 }, legislative_effects: 0 }
    ]
  },

  // ─── TRUMP SCENARIOS ───────────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "trump",
    question: "Your signature campaign promise was building a wall on the southern border. Congress is dragging its feet on funding. Your base is watching. How do you get your wall?",
    answers: [
      { text: "Declare a national emergency and redirect military construction funds — build it by executive order.", feedback: "The base goes wild. 'BUILD THAT WALL!' trends nationally. Republicans in Congress largely fall in line, though legal challenges immediately flood the courts.", effects: { political_capital: 5, approval: -1, base_enthusiasm: 30, funds: -80000 }, regional_effects: { plains: 7.0, south: 6.0, northeast: -5.0, west_coast: -5.0 }, legislative_effects: 4, trump_effects: { south: 8, plains: 8 }, trump_tag: 'plus' },
      { text: "Negotiate a comprehensive immigration reform bill that trades wall funding for a path to citizenship.", feedback: "A grand compromise passes, but your base feels betrayed. Right-wing media calls it 'amnesty.'", effects: { political_capital: 15, approval: 3, base_enthusiasm: -25, funds: -40000 }, regional_effects: { midwest: 3.0, south: -3.0, plains: -4.0, northeast: 3.0 }, legislative_effects: 10, trump_effects: { south: -8, plains: -8 }, trump_tag: 'minus' },
      { text: "Use the budget reconciliation process to sneak wall funding into an omnibus spending bill.", feedback: "$5B in wall funding passes quietly. The base is mollified. The move sparks a government shutdown threat.", effects: { political_capital: -20, approval: 0, base_enthusiasm: 10, funds: -30000 }, regional_effects: { south: 3.0, plains: 3.0 }, legislative_effects: 6, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "trump",
    question: "Tech companies and Silicon Valley executives are furious that you want to restrict the H-1B visa program, which imports hundreds of thousands of high-skilled foreign workers annually. Your MAGA base cheers. Big Tech threatens to move jobs overseas.",
    answers: [
      { text: "Slash H-1B quotas by 75% — American jobs for American workers, no exceptions.", feedback: "The base is ecstatic. Silicon Valley erupts in fury. Several tech giants announce they are relocating engineering hubs to Canada.", effects: { political_capital: -5, approval: -3, base_enthusiasm: 22, funds: -20000 }, regional_effects: { plains: 6.0, south: 5.0, midwest: 3.0, west_coast: -8.0, northeast: -4.0 }, legislative_effects: 2, trump_effects: { south: 6, plains: 6 }, trump_tag: 'plus' },
      { text: "Raise H-1B minimum salaries dramatically to $200K+ so companies can't use them as cheap labor.", feedback: "A clever compromise that protects American wages without alienating all of tech. Both sides claim partial victory.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 8, funds: 0 }, regional_effects: { plains: 2.0, south: 2.0, midwest: 2.0, west_coast: -2.0 }, legislative_effects: 5, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Give tech executives exactly what they want — maintain H-1B in exchange for massive domestic job pledges.", feedback: "Billion-dollar factory announcements flood the news cycle. But MAGA influencers say you sold out to globalists.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -20, funds: 40000 }, regional_effects: { midwest: 4.0, west_coast: 2.0, plains: -4.0, south: -3.0 }, legislative_effects: 8, trump_effects: { south: -6, plains: -6 }, trump_tag: 'minus' }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "trump",
    question: "You are on the brink of a massive trade war with China. Your economists warn tariffs will raise consumer prices. Your base loves the 'America First' framing. The stock market is jittery.",
    answers: [
      { text: "Slap 25% tariffs on all Chinese goods — America First, take it or leave it.", feedback: "The base is roaring. China retaliates against American soybeans and pork. Plains farmers feel the pain immediately.", effects: { political_capital: 5, approval: -4, base_enthusiasm: 18, funds: -30000 }, regional_effects: { plains: -4.0, south: -3.0, midwest: -2.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: 2, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Threaten tariffs loudly, extract concessions privately, then declare victory without full implementation.", feedback: "A classic negotiating win on paper, but the art-of-the-deal crowd is suspicious. Markets breathe easier.", effects: { political_capital: 10, approval: 3, base_enthusiasm: 5, funds: 10000 }, regional_effects: { midwest: 3.0, south: 1.0, plains: 1.0 }, legislative_effects: 3, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Negotiate a broad Phase One trade deal — China agrees to purchase billions in American agricultural goods.", feedback: "Farmer incomes surge. The heartland cheers. But critics say you let China off easy on structural reforms.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 10, funds: 20000 }, regional_effects: { plains: 6.0, south: 4.0, midwest: 5.0, northeast: 1.0, west_coast: 1.0 }, legislative_effects: 5, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "trump",
    question: "The Department of Justice, run by your own appointees, is investigating allegations of financial misconduct from your business empire pre-presidency. It is dominating the news cycle. What is your move?",
    answers: [
      { text: "Fire the DOJ officials leading the investigation — the deep state is out to get you.", feedback: "Your base cheers your defiance. While the media calls it obstruction, your party in Congress stands firmly behind you. Approval with moderates dips, but you keep control of the narrative.", effects: { political_capital: -5, approval: -4, base_enthusiasm: 20, funds: 0 }, regional_effects: { south: 3.0, plains: 3.0, northeast: -6.0, west_coast: -6.0, midwest: -4.0 }, legislative_effects: 4, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Release your tax returns to prove financial transparency and call the investigation baseless.", feedback: "The tax returns reveal some embarrassing details but nothing criminal. Moderates are relieved. The story fades.", effects: { political_capital: 5, approval: 6, base_enthusiasm: -15, funds: -10000 }, regional_effects: { northeast: 3.0, midwest: 4.0, south: -3.0, plains: -3.0 }, legislative_effects: 5, trump_effects: { south: -4, plains: -4 }, trump_tag: 'minus' },
      { text: "Attack the investigation relentlessly on social media — keep your base fired up and on offense.", feedback: "Your base sees it as a political witch hunt and donates record amounts. But the story never dies.", effects: { political_capital: -5, approval: -4, base_enthusiasm: 15, funds: 30000 }, regional_effects: { plains: 1.0, south: 1.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: 0, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "trump",
    question: "Tech giants Twitter and Facebook have banned you from their platforms for policy violations. Tens of millions of your most loyal followers are cut off from your primary communication channel.",
    answers: [
      { text: "Launch your own social media platform — Truth Social — and make it a subscriber-funded movement.", feedback: "Truth Social becomes a massive fundraising ecosystem for your base. While critics call it a vanity project, it gives you an unfiltered channel to your supporters.", effects: { political_capital: 0, approval: -1, base_enthusiasm: 25, funds: 40000 }, regional_effects: { plains: 5.0, south: 5.0, northeast: -4.0, west_coast: -4.0 }, legislative_effects: 2, trump_effects: { south: 7, plains: 7 }, trump_tag: 'plus' },
      { text: "File antitrust lawsuits against Big Tech — use the DOJ to investigate censorship as market manipulation.", feedback: "Populists across the aisle support antitrust action. Silicon Valley lobbyists mobilize against you, but your base is thrilled to see you fighting back.", effects: { political_capital: -5, approval: 5, base_enthusiasm: 15, funds: -20000 }, regional_effects: { plains: 3.0, south: 3.0, midwest: 3.0, west_coast: -2.0 }, legislative_effects: 5, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' },
      { text: "Use the moment to push through Section 230 reform in Congress — make platforms legally liable for censorship.", feedback: "A policy win that reshapes the internet legal landscape. The legislative fight is tough, but it's a core priority for your party.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 10, funds: -10000 }, regional_effects: { plains: 2.0, south: 2.0, midwest: 1.0 }, legislative_effects: 8, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
    ]
  },

  // ─── AOC SCENARIOS ─────────────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "aoc",
    question: "You've staked your presidency on passing the Green New Deal — a $10 trillion transformation of the American economy. Corporate Democrats and all Republicans are threatening to kill it in committee.",
    answers: [
      { text: "Go nuclear — use the full weight of your grassroots movement to primary every Democrat who votes no.", feedback: "Three key Democratic holdouts fold under massive constituent pressure. The GND passes by a razor-thin margin.", effects: { political_capital: -30, approval: 3, base_enthusiasm: 35, funds: -20000 }, regional_effects: { northeast: 7.0, west_coast: 7.0, midwest: -4.0, south: -6.0, plains: -5.0 }, legislative_effects: 10 },
      { text: "Accept a scaled-down 'Green New Deal Lite' — clean electricity mandates only, no job guarantees.", feedback: "Something passes, but progressive media calls it a betrayal of the movement. 'You had the votes and blinked.'", effects: { political_capital: 10, approval: 2, base_enthusiasm: -20, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 1.0 }, legislative_effects: 5 },
      { text: "Take the GND directly to the streets — a 50-city mobilization to make it a first-term mandate.", feedback: "Youth turnout explodes. Polling shifts 8 points in favor nationally. Congress is forced to hold floor votes.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 30, funds: -50000 }, regional_effects: { northeast: 6.0, west_coast: 6.0, midwest: 2.0 }, legislative_effects: 7 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "aoc",
    question: "Wall Street titans and major corporations are spending $500 million against your wealth tax proposal, which would tax assets over $50 million at 2% annually. Your base demands you fight.",
    answers: [
      { text: "Increase the wealth tax to 3% over $50M and 5% over $1B — go bigger and make it a class war.", feedback: "The policy is enormously popular among working-class voters nationally. Stock market drops 8% in one week.", effects: { political_capital: -20, approval: 6, base_enthusiasm: 25, funds: -30000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 4.0, south: 2.0, plains: 2.0 }, legislative_effects: -10 },
      { text: "Pair the wealth tax with a $5,000 universal dividend check mailed to every American adult.", feedback: "The 'Democracy Dividend' is a political masterstroke. Popularity soars even in red states. Economists are divided.", effects: { political_capital: -30, approval: 10, base_enthusiasm: 20, funds: -80000 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 5.0, south: 4.0, plains: 3.0 }, legislative_effects: -5 },
      { text: "Accept a capital gains tax hike instead — less ambitious but more likely to actually pass Congress.", feedback: "A watered-down win. Progressive donors are frustrated but the policy still raises $400B over ten years.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: 1.0, west_coast: 1.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "aoc",
    question: "A high-profile scandal involving your Chief of Staff regarding illegal campaign contributions surfaces. The opposition demands an immediate firing and a public apology.",
    answers: [
      { text: "Fire your Chief of Staff publicly and launch an independent investigation into your own campaign.", feedback: "The immediate accountability maintains your moral standing with the base, though it causes chaos in your administration.", effects: { political_capital: -15, approval: -2, base_enthusiasm: 10, funds: -10000 }, regional_effects: { northeast: -2.0, west_coast: -2.0 }, legislative_effects: -5 },
      { text: "Defend your Chief of Staff, labeling the scandal as a 'smear campaign' by banking lobbyists.", feedback: "Solidifies your base, but moderate Democrats start distancing themselves from you in the press.", effects: { political_capital: -20, approval: -6, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: -4.0, west_coast: -4.0 }, legislative_effects: -10 },
      { text: "Task a third-party committee to oversee the investigation while your Chief of Staff takes a paid leave.", feedback: "A measured, tactical response that prevents a full-blown meltdown and keeps your legislative agenda on track.", effects: { political_capital: 5, approval: 2, base_enthusiasm: -5, funds: -5000 }, regional_effects: { midwest: 1.0 }, legislative_effects: 2 }
    ]
  },

  // ─── BERNIE SANDERS SCENARIOS ──────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "bernie",
    question: "As you prepare to address the nation for the first time as President, you feel the weight of history on your shoulders. A razor-thin win means if your close Senate allies didn't make it, the people's agenda is dead on arrival. The tragic events of the January 6th Capitol riots have divided the nation. What speech do you choose to give?",
    answers: [
      { text: "Give a unifying speech eulogizing the dead, promising to rebuild the nation and bring it back together.", feedback: "Your presidential tone reassures moderates and establishment media, but your core grassroots base feels you are diluting the movement.", effects: { political_capital: 15, approval: 6, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: 2.0, midwest: 3.0, south: 2.0, plains: 1.0 }, legislative_effects: 5 },
      { text: "Speak directly to the insurrection and the extremes of the far-right. Warn supporters of the massive resistance ahead in a 50-50 Senate to lower expectations.", feedback: "Faiz and Kamala advise against this. It sets a combative tone right out of the gate and alarms moderates, though it keeps expectations honest.", effects: { political_capital: -5, approval: -4, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: -1.0, west_coast: -1.0, south: -2.0, plains: -2.0 }, legislative_effects: -5 },
      { text: "Honor the memory of those who died defending democracy, promising to build an America where the economy works for workers over billionaires.", feedback: "Electrifies your progressive movement and frames your presidency as a moral struggle. Opponents slam you as polarizing.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 25, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, south: -4.0, plains: -4.0 }, legislative_effects: -8 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "bernie",
    question: "The Senate Parliamentarian has ruled that the $15 federal minimum wage cannot be included in the upcoming budget reconciliation package. Your base demands you fight. How do you respond?",
    answers: [
      { text: "Have the Vice President overrule the parliamentarian and force a floor vote on the $15 minimum wage.", feedback: "You demonstrate absolute commitment, but moderate Democrats rebel, defeating the vote and draining your legislative trust.", effects: { political_capital: -30, approval: -3, base_enthusiasm: 30, funds: -10000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, plains: -5.0, south: -5.0 }, legislative_effects: -15 },
      { text: "Compromise on a $12 minimum wage to keep moderate Senate Democrats on board and pass the bill quickly.", feedback: "A pragmatic legislative victory. It stabilizes the economy, but progressive media slams it as a total capitulation.", effects: { political_capital: 15, approval: 4, base_enthusiasm: -20, funds: 10000 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: 8 },
      { text: "Refuse to back down. Use the bully pulpit to host massive pressure rallies in key moderate senators' home states.", feedback: "Massive crowds turn out, putting intense pressure on swing senators. The bill hangs in balance, but base energy is sky-high.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 15, funds: -25000 }, regional_effects: { midwest: 3.0, south: 2.0 }, legislative_effects: -4 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "bernie",
    question: "Progressive advocacy groups demand you cancel all $1.6 trillion in student loan debt by executive order. Moderate legal scholars warn the Supreme Court will immediately strike it down as an abuse of power.",
    answers: [
      { text: "Sign a sweeping executive order cancelling all federal student loan debt immediately.", feedback: "A historic move that electrifies young voters on the coasts. Opponents launch immediate legal battles, freezing the order.", effects: { political_capital: -20, approval: -2, base_enthusiasm: 35, funds: -30000 }, regional_effects: { northeast: 6.0, west_coast: 6.0, plains: -5.0, south: -5.0 }, legislative_effects: -10 },
      { text: "Issue a targeted executive order cancelling $10,000 per borrower, subject to strict income caps.", feedback: "A moderate compromise that survives initial legal reviews and wins suburban approval, but fails to excite the youth base.", effects: { political_capital: 5, approval: 5, base_enthusiasm: -15, funds: -10000 }, regional_effects: { midwest: 3.0, northeast: 2.0 }, legislative_effects: 4 },
      { text: "Decline the executive order and push Congress to pass a tuition-free public college bill.", feedback: "A legally sound approach, but with a 50-50 Senate, the bill is immediately gridlocked in committee.", effects: { political_capital: -10, approval: 2, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 1.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "bernie",
    question: "Inflation is rising, driving up energy and food prices. Corporations report record profits. The corporate lobby blames your spending, while your base demands a crackdown on price gouging.",
    answers: [
      { text: "Introduce a corporate Windfall Profits Tax in Congress, blaming corporate greed for inflation.", feedback: "The message is extremely popular with working-class voters. Wall Street reacts negatively and markets slip.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 22, funds: -30000 }, regional_effects: { midwest: 4.0, northeast: 3.0, south: -2.0, plains: -3.0 }, legislative_effects: -8 },
      { text: "Support the Federal Reserve's plan to raise interest rates, warning that cooling the economy is necessary.", feedback: "Markets stabilize and inflation concerns ease, but your working-class base suffers from higher borrowing costs.", effects: { political_capital: 15, approval: -8, base_enthusiasm: -20, funds: 20000 }, regional_effects: { midwest: -4.0, plains: -2.0, northeast: 2.0 }, legislative_effects: 6 },
      { text: "Authorize targeted federal subsidies and direct logistics aid to ease supply chain bottlenecks.", feedback: "A non-ideological, practical approach that helps lower costs slowly without sparking corporate battles.", effects: { political_capital: -10, approval: 3, base_enthusiasm: -5, funds: -20000 }, regional_effects: { midwest: 3.0, plains: 1.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "bernie",
    question: "A Supreme Court vacancy opens. Your choice will set the court's direction. Your base demands a progressive legal giant, while moderate senators threaten a filibuster.",
    answers: [
      { text: "Nominate a staunch progressive labor lawyer known for anti-monopoly and civil rights work.", feedback: "Your base is thrilled by this ideological stance. A brutal confirmation battle begins, stalling other legislation.", effects: { political_capital: -30, approval: -1, base_enthusiasm: 28, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, south: -5.0, plains: -4.0 }, legislative_effects: -12 },
      { text: "Choose a mainstream liberal judge strongly endorsed by the party establishment.", feedback: "Wins quick confirmation and moderate support. Your progressive base grumbles but accepts the strategic pick.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: -1.0 }, legislative_effects: 5 },
      { text: "Nominate a business-friendly centrist jurist to secure a supermajority confirmation.", feedback: "A highly controversial decision. Progressive groups hold protests outside the White House, calling it a sellout.", effects: { political_capital: 20, approval: 4, base_enthusiasm: -25, funds: 30000 }, regional_effects: { south: 4.0, plains: 3.0, northeast: -4.0, west_coast: -4.0 }, legislative_effects: 8 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "bernie",
    question: "Healthcare costs are rising. You want to lower the Medicare age to 55 and expand coverage to include dental, vision, and hearing. Insurance companies launch a multi-million dollar ad campaign against it.",
    answers: [
      { text: "Launch a national tour targeting insurance lobbies by name, demanding the full Medicare expansion.", feedback: "Your rallies attract massive crowds. The base is energized, but the legislative fight is extremely contentious.", effects: { political_capital: -25, approval: 4, base_enthusiasm: 25, funds: -40000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 3.0, south: 1.0, plains: 1.0 }, legislative_effects: -6 },
      { text: "Compromise to lower the Medicare age to 60 with no dental, vision, or hearing benefits.", feedback: "Passes the Senate quickly, but progressives are frustrated that you didn't hold out for the full expansion.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: 2.0, south: 1.0 }, legislative_effects: 6 },
      { text: "Focus instead on passing a bipartisan bill to allow Medicare to negotiate prescription drug prices.", feedback: "An extremely popular policy that cuts costs for seniors, though it tables the expansion for now.", effects: { political_capital: -5, approval: 8, base_enthusiasm: 12, funds: -15000 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 3.0 }, legislative_effects: 8 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "bernie",
    question: "The midterm cycle has concluded and your presidential re-election campaign officially begins. What is the central message of your campaign?",
    answers: [
      { text: "Frame the campaign as 'The Unfinished Revolution' against billionaires and the political establishment.", feedback: "Your anti-establishment stance excites young voters and working-class progressives, but swing voters are wary.", effects: { political_capital: 0, approval: -1, base_enthusiasm: 25, funds: -20000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, plains: -4.0, south: -4.0 } },
      { text: "Focus on your popular achievements, like drug price negotiations, presenting yourself as a pragmatist.", feedback: "Builds a strong bridge to independent voters and moderates in the Midwest, but dampens the enthusiast edge.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -5, funds: -30000 }, regional_effects: { midwest: 5.0, south: 2.0, northeast: 1.0 } },
      { text: "Emphasize the threat of the far-right returning to power, building a broad coalition to defend democracy.", feedback: "Unites the party establishment and progressives behind you, raising significant funds from major donors.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 10, funds: 40000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "bernie",
    question: "Debate night. The opponent launches a sharp attack: 'President Sanders wants to turn America into a bankrupt socialist state.' The cameras are on you. How do you respond?",
    answers: [
      { text: "Define democratic socialism: 'It means healthcare as a right, free college, and strong unions like in Denmark.'", feedback: "The Scandinavian defense resonates with progressives, but conservative media uses it to claim you want foreign models.", effects: { political_capital: -5, approval: 0, base_enthusiasm: 22, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 4.0, south: -3.0, plains: -3.0 } },
      { text: "Pivot to American history: Frame your policies as completing FDR's Economic Bill of Rights.", feedback: "A brilliant patriotic framing that scores points with working-class voters in the Rust Belt.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: 5.0, plains: 1.0, northeast: 2.0 } },
      { text: "Dismiss the label: 'I don't care about labels. I care why Americans pay the highest prices in the world for drugs.'", feedback: "Highly effective at deflecting the socialist label, focusing on popular pocketbook issues.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 3.0, south: 3.0, plains: 2.0, northeast: 2.0, west_coast: 2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "bernie",
    question: "Energy prices remain volatile, and environmental groups demand you enforce a federal ban on new fracking permits. Opponents warn this will spike gas prices in key swing states.",
    answers: [
      { text: "Stand firm on your environmental principles. Enforce the fracking ban to combat climate change.", feedback: "Your climate base is ecstatic. However, gas prices rise, and polling in industrial Rust Belt regions drops.", effects: { political_capital: -10, approval: -4, base_enthusiasm: 25, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: -5.0, plains: -5.0, south: -4.0 } },
      { text: "Temporarily release strategic oil reserves and support a gas tax holiday to lower short-term consumer costs.", feedback: "Lowers costs at the pump, providing immediate political relief, though environmentalists slam the move.", effects: { political_capital: 5, approval: 5, base_enthusiasm: -15, funds: -10000 }, regional_effects: { midwest: 4.0, plains: 3.0, south: 2.0 } },
      { text: "Announce a massive federal program to build clean energy manufacturing plants in the Rust Belt.", feedback: "A strong green jobs message that links environmental policy with industrial manufacturing in swing states.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 12, funds: -40000 }, regional_effects: { midwest: 6.0, northeast: 2.0, plains: 1.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "bernie",
    question: "A wealthy, moderate third-party candidate enters the race. They are self-funding a campaign focused on suburban voters, accusing your administration of class warfare. How do you handle them?",
    answers: [
      { text: "Expose their corporate backers and call them out as a billionaire trying to buy the election to protect their wealth.", feedback: "Your populist rhetoric hits home. Base voters are energized, and the third-party candidate's support slides.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 18, funds: -20000 }, regional_effects: { midwest: 3.0, northeast: 3.0, west_coast: 2.0 } },
      { text: "Ignore the candidate entirely and focus all your campaign resources on the main Republican opponent.", feedback: "Avoids giving them free publicity, but their support quietly holds in wealthy, moderate suburbs.", effects: { political_capital: 5, approval: -2, base_enthusiasm: -10, funds: 0 }, regional_effects: { northeast: -2.0, west_coast: -2.0 } },
      { text: "Run targeted ads highlighting how voting for a spoiler will hand the White House to the far-right.", feedback: "Effectively pulls moderate voters back to the Democratic coalition out of fear of the opposition.", effects: { political_capital: 0, approval: 4, base_enthusiasm: -5, funds: -25000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "bernie",
    question: "A foreign conflict escalates, and the national security establishment demands U.S. military intervention. Your anti-war base demands you refuse, while opponents accuse you of isolationist weakness.",
    answers: [
      { text: "Refuse military intervention. Focus on diplomatic sanctions and call for a negotiated ceasefire.", feedback: "Aligns perfectly with your lifelong anti-war principles. The base is proud, but critics call it weak.", effects: { political_capital: -5, approval: -3, base_enthusiasm: 22, funds: 0 }, regional_effects: { west_coast: 4.0, northeast: 3.0, plains: -4.0, south: -4.0 } },
      { text: "Provide economic aid and weapons to allies, but explicitly rule out sending any U.S. combat troops.", feedback: "A middle ground that supports the ally without risking American lives. Most swing voters approve.", effects: { political_capital: 10, approval: 4, base_enthusiasm: 5, funds: -20000 }, regional_effects: { midwest: 3.0, northeast: 3.0, south: 1.0 } },
      { text: "Order targeted U.S. military strikes to protect international shipping lanes and show presidential resolve.", feedback: "Demonstrates strong commander-in-chief credentials, but your anti-war base feels deeply betrayed.", effects: { political_capital: 15, approval: 3, base_enthusiasm: -25, funds: -15000 }, regional_effects: { south: 4.0, plains: 3.0, northeast: -3.0, west_coast: -4.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "bernie",
    question: "Election Eve. One final push. Where do you hold your massive final rally to mobilize the country?",
    answers: [
      { text: "Hold a massive progressive mobilization rally in Detroit and Madison to maximize Rust Belt turnout.", feedback: "Turnout in industrial working-class centers is high. The Midwest is highly competitive.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 25, funds: -30000 }, regional_effects: { midwest: 6.0, northeast: 2.0 } },
      { text: "Deliver a nationwide broadcast town hall focusing on healthcare, appealing to independent working-class families.", feedback: "A powerful final pitch that reaches a broad audience, securing crucial swing voters.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 5, funds: -20000 }, regional_effects: { midwest: 3.0, south: 2.0, plains: 2.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Conduct a whistle-stop campaign tour through Southern manufacturing towns to court crossover union voters.", feedback: "Makes surprising gains among working-class voters in the South, tightening the race.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 12, funds: -25000 }, regional_effects: { south: 5.0, midwest: 1.0 } }
    ]
  },

  // ─── OBAMA — Governing Turn 6 + Campaign Turns 7-12 ───────────────────────
  {
    id: 6, phase: "governing", candidate_id: "obama",
    question: "The Sandy Hook Elementary School massacre has shocked the nation. Twenty children are dead. You are facing enormous pressure from the public and your party to pursue sweeping gun control legislation, but the NRA and the Republican Senate majority are fiercely opposed.",
    answers: [
      { text: "Use the full weight of the presidency to push for universal background checks and an assault weapons ban in Congress.", feedback: "Your moral leadership unites the nation in grief and generates massive public support, but the Senate Republicans block the bill in a bitter filibuster fight.", effects: { political_capital: -25, approval: 4, base_enthusiasm: 20, funds: -20000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: -2.0, south: -4.0, plains: -5.0 }, legislative_effects: -8 },
      { text: "Issue 23 executive actions on gun safety and direct the ATF to enforce existing laws more rigorously.", feedback: "The executive actions are praised for their scope and avoid the legislative graveyard, though gun rights advocates call it executive overreach.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: -1.0, south: -2.0, plains: -3.0 }, legislative_effects: 2 },
      { text: "Personally travel the country holding town halls in every congressional district, building a grassroots pressure campaign.", feedback: "A months-long listening tour shifts public opinion, but Washington remains gridlocked and nothing passes before the election cycle.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 5, funds: -30000 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 1.0 }, legislative_effects: 0 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "obama",
    question: "Your re-election campaign has officially launched under the slogan 'Forward.' Mitt Romney is the Republican nominee, making strong appeals to business owners and suburban voters. Where do you open your campaign?\",",
    answers: [
      { text: "Launch with a massive 'middle class' economic pitch — focus on jobs created, auto industry rescue, and student loan reform.", feedback: "A winning economic message that makes the Rust Belt and Ohio competitive. Manufacturing communities respond strongly.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 10, funds: -30000 }, regional_effects: { midwest: 6.0, south: 2.0, northeast: 2.0 } },
      { text: "Focus on the 99% vs 1% frame — hammer Romney's Bain Capital record and offshore bank accounts.", feedback: "Devastating class-war attacks paint Romney as out of touch. Young voters are energized but suburban moderates flinch.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 20, funds: -25000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 3.0, south: -2.0 } },
      { text: "Open with a massive multicultural coalition GOTV blitz targeting Black, Latino, and youth voters.", feedback: "Unprecedented turnout among minority communities provides the decisive electoral margin. Ohio and Florida are on the map.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 22, funds: -35000 }, regional_effects: { south: 4.0, midwest: 4.0, northeast: 2.0, west_coast: 2.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "obama",
    question: "First presidential debate. You had a disastrous performance and your poll numbers slid nationwide. Romney has momentum. The press is calling your campaign in crisis. How do you recover for debate two?",
    answers: [
      { text: "Come out swinging — attack Romney's 47% remarks and his Bain Capital outsourcing record directly and relentlessly.", feedback: "'Mr. Romney: when you were campaigning in Ohio, you outsourced those jobs.' The crowd erupts. The debate is a clear win.", effects: { political_capital: 5, approval: 6, base_enthusiasm: 20, funds: 0 }, regional_effects: { midwest: 5.0, south: 2.0, northeast: 3.0, west_coast: 3.0 } },
      { text: "Pivot to presidential gravitas — lead with foreign policy wins (Bin Laden, Libya) and force Romney to defend his inexperience.", feedback: "A commanding performance on national security. Romney stumbles on Libya and you win the foreign policy exchange decisively.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 12, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0 } },
      { text: "Present a detailed second-term policy agenda — make the case for your next four years on substance.", feedback: "Wonkish but credible. Independents rate you the winner on specifics. The base wanted more blood but the numbers recover.", effects: { political_capital: 10, approval: 4, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 3.0, south: 1.0, northeast: 2.0, west_coast: 2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "obama",
    question: "Hurricane Sandy makes landfall days before the election, devastating New Jersey and New York. FEMA is responding. The Romney campaign is calling it a political disaster for them. How do you handle this moment?",
    answers: [
      { text: "Suspend all campaign activities — immediately visit the disaster zone and demonstrate hands-on federal leadership.", feedback: "Governor Christie praises you publicly. The image of bipartisan competence wins over the last undecideds decisively.", effects: { political_capital: 10, approval: 8, base_enthusiasm: 5, funds: -10000 }, regional_effects: { northeast: 7.0, midwest: 3.0, west_coast: 2.0, south: 2.0, plains: 2.0 } },
      { text: "Publicly coordinate FEMA response from the White House, calling governors personally while maintaining campaign schedule.", feedback: "Demonstrates effective management from Washington, though critics say you could have done more in person.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 5, funds: 0 }, regional_effects: { northeast: 4.0, midwest: 2.0 } },
      { text: "Coordinate relief but immediately pivot attack ads in Ohio and Wisconsin to keep electoral pressure on Romney.", feedback: "Effective tactically but a visually jarring contrast between disaster ads and attack ads. National press is critical.", effects: { political_capital: 0, approval: -2, base_enthusiasm: 10, funds: -30000 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: -2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "obama",
    question: "A wealthy libertarian-leaning tech billionaire is running third-party, siphoning college-educated suburban voters in Florida and Colorado. How do you deal with this threat?",
    answers: [
      { text: "Highlight the spoiler effect — remind voters that a third-party vote in a swing state is a vote for Romney.", feedback: "Effectively brings pragmatic progressives back home. Suburban women in Colorado return and the state looks solid.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 5, funds: -20000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 2.0 } },
      { text: "Offer a high-profile science and technology summit invitation, signaling tech-friendly policy to their voters.", feedback: "Silicon Valley donors are impressed. The candidate's support among tech workers fades, leaving their suburban coalition fractured.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 3, funds: 30000 }, regional_effects: { west_coast: 4.0, northeast: 2.0 } },
      { text: "Ignore them entirely and outspend them in Ohio and Iowa to lock down the firewall states.", feedback: "Firewall strategy succeeds. The third-party candidate fails to break 5% and their voters split heavily your way on election day.", effects: { political_capital: 5, approval: 1, base_enthusiasm: -5, funds: -40000 }, regional_effects: { midwest: 5.0, south: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "obama",
    question: "Election Eve. Internal polling shows Ohio and Virginia are knife-edge. Where do you direct the final GOTV resources?",
    answers: [
      { text: "All-in on Ohio — every volunteer, every dollar, every surrogate in Cleveland, Columbus, and Cincinnati.", feedback: "Ohio is yours. The firewall holds. The decisive margin in Ohio comes from record turnout in Cuyahoga County.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 18, funds: -35000 }, regional_effects: { midwest: 7.0, south: 1.0 } },
      { text: "Split resources between Ohio and Virginia to maximize electoral vote ceiling.", feedback: "You win both states, providing a comfortable electoral college cushion. A complete evening nationally.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 12, funds: -40000 }, regional_effects: { midwest: 4.0, south: 5.0, northeast: 2.0 } },
      { text: "Nationwide primetime closing argument — make the case for four more years in your most soaring speech.", feedback: "Your speech goes viral and nets enormous final-night donations. Undecided voters credit it as their tipping point.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 8, funds: -20000 }, regional_effects: { midwest: 3.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "obama",
    question: "A last-minute foreign policy crisis erupts: classified documents alleging a cover-up over the Benghazi attack have been leaked. Romney is calling for your resignation. The election is in 48 hours.",
    answers: [
      { text: "Hold an emergency press conference, lay out every fact transparently, and call the timing politically motivated.", feedback: "Your calm and command of the details defuses the attack. Romney's desperation tactic backfires badly with undecideds.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0, south: 2.0, plains: 1.0 } },
      { text: "Dismiss the leak publicly as a partisan intelligence operation and refuse further comment.", feedback: "The story dies by election morning but your base wants more fight. Moderates are unimpressed by the stonewalling.", effects: { political_capital: 0, approval: -2, base_enthusiasm: 5, funds: 0 }, regional_effects: { south: -2.0, midwest: -1.0 } },
      { text: "Flood the final 48 hours with surrogate attacks on Romney's foreign policy record and veterans' issues.", feedback: "The counter-offensive drowns out the Benghazi story and pivots to your strengths. You win the news cycle decisively.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 15, funds: -25000 }, regional_effects: { south: 3.0, midwest: 4.0, northeast: 2.0, west_coast: 2.0 } }
    ]
  },

  // ─── TRUMP — Governing Turn 6 + Campaign Turns 7-12 ───────────────────────
  {
    id: 6, phase: "governing", candidate_id: "trump",
    question: "COVID-19 is spreading rapidly. Your public health advisors are recommending a national lockdown. Your base hates restrictions. The economy is collapsing. You are caught between your instincts and the science.",
    answers: [
      { text: "Dismiss the severity publicly, keep the economy open, and push states to resist lockdowns.", feedback: "Your base rallies behind you. But as the death toll mounts, suburban moderates recoil and your approval with seniors collapses.", effects: { political_capital: 5, approval: -8, base_enthusiasm: 20, funds: 20000 }, regional_effects: { plains: 5.0, south: 4.0, midwest: -3.0, northeast: -6.0, west_coast: -6.0 }, legislative_effects: 2, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Endorse a short national '15 days to slow the spread' guideline, then declare victory and reopen aggressively.", feedback: "A tactical middle ground. The guidelines satisfy nervous moderates briefly, but the virus accelerates and the short window backfires.", effects: { political_capital: 5, approval: -2, base_enthusiasm: 5, funds: -10000 }, regional_effects: { midwest: 1.0 }, legislative_effects: 2, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Fast-track Operation Warp Speed — an unprecedented $10B federal push to develop a vaccine in under a year.", feedback: "A monumental scientific achievement. The vaccine arrives before the election and becomes your most undeniable policy win.", effects: { political_capital: -20, approval: 6, base_enthusiasm: 15, funds: -30000 }, regional_effects: { northeast: 4.0, midwest: 4.0, south: 3.0, plains: 3.0, west_coast: 3.0 }, legislative_effects: 4, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "trump",
    question: "Your re-election campaign kicks off in Tulsa, Oklahoma. Polls show a closer race than expected. The Democratic nominee is running on a 'return to normalcy' message. What is your opening strategic play?",
    answers: [
      { text: "Double down on MAGA energy — massive rallies in red and competitive states to maximize base turnout.", feedback: "'Four More Years!' echoes from Tulsa to Pittsburgh. Base enthusiasm hits record highs. Suburban flight is the price.", effects: { political_capital: 0, approval: -2, base_enthusiasm: 30, funds: -30000 }, regional_effects: { plains: 7.0, south: 6.0, midwest: 2.0, northeast: -4.0, west_coast: -4.0 }, trump_effects: { south: 6, plains: 6 }, trump_tag: 'plus' },
      { text: "Run as the economy president — tout pre-COVID job numbers, stock market records, and energy independence.", feedback: "A powerful economic record that cuts through the COVID narrative. Suburban moderates listen and your numbers stabilize.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 10, funds: -25000 }, regional_effects: { midwest: 5.0, south: 3.0, plains: 4.0, northeast: 1.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Frame the election as a fight for law and order — exploit urban unrest and anti-protest sentiment to fire up suburban voters.", feedback: "Law and order messaging resonates in exurban communities. Democrats are caught flat-footed defending their flank.", effects: { political_capital: 0, approval: -1, base_enthusiasm: 18, funds: -20000 }, regional_effects: { midwest: 4.0, south: 4.0, plains: 5.0, northeast: -3.0, west_coast: -5.0 }, trump_effects: { south: 5, plains: 4 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "trump",
    question: "Presidential debate night. The moderator keeps interrupting your attacks. The Democrat is trying to appear calm and presidential. How do you play the debate?",
    answers: [
      { text: "Relentlessly interrupt and dominate — chaos is your power, control is theirs. Own the stage.", feedback: "Your supporters love the energy. But post-debate polls show suburban swing voters were repelled by the interruptions.", effects: { political_capital: -5, approval: -4, base_enthusiasm: 25, funds: 0 }, regional_effects: { plains: 4.0, south: 3.0, midwest: -3.0, northeast: -4.0, west_coast: -4.0 }, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' },
      { text: "Let them talk. Come prepared with actual policy — the stock market numbers, vaccine progress, low unemployment.", feedback: "An unusually disciplined performance that wins neutral observers. Wall Street donors reward the restrained Trump with checks.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 5, funds: 30000 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: 2.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Attack the opposition's family and personal character directly, making the story personal.", feedback: "A brutal personal attack that fires up your base, but moderators call it unprecedented. The moment goes viral for the wrong reasons.", effects: { political_capital: -15, approval: -8, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 3.0, south: 3.0, midwest: -5.0, northeast: -6.0, west_coast: -6.0 }, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "trump",
    question: "Mail-in voting is expanding massively due to COVID. Your base hates mail-in voting, but early data suggests it's expanding turnout in Democratic-leaning groups. How do you respond?",
    answers: [
      { text: "Declare mail-in voting a rigged fraud and urge your base to vote in person on Election Day only.", feedback: "Your base listens, creating a massive 'Red Wave' of in-person voting on Election Day. Your party supports the focus on 'election integrity,' though it polarizes the electorate.", effects: { political_capital: 5, approval: -2, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 3.0, south: 3.0, midwest: 1.0, northeast: -3.0, west_coast: -3.0 }, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' },
      { text: "Build a massive Republican early voting and mail-in operation to match the Democrats' turnout infrastructure.", feedback: "Your party builds an unprecedented operation. While some in the base are skeptical of mail-in voting, the structural advantage is clear.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 5, funds: -40000 }, regional_effects: { midwest: 4.0, south: 4.0, plains: 4.0, northeast: 2.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Pressure USPS leadership to slow mail delivery in Democratic-majority counties in key swing states.", feedback: "The move is highly controversial and leaked to the press. It fires up the base but creates a significant national backlash, though your party defends your right to 'oversee agency efficiency.'", effects: { political_capital: -5, approval: -6, base_enthusiasm: 15, funds: 0 }, regional_effects: { plains: 2.0, south: 2.0, northeast: -6.0, west_coast: -6.0, midwest: -4.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "trump",
    question: "Internal polls show you are down in Pennsylvania and Michigan. You need a Hail Mary. A foreign intelligence leak appears to tie your Democratic opponent to a corrupt overseas deal. What do you do?",
    answers: [
      { text: "Blast the story on Twitter, hold a press conference, and demand your allies amplify it across conservative media.", feedback: "The story dominates your news ecosystem. Hardcore supporters are electrified. Mainstream media is skeptical, but your party amplifies the message.", effects: { political_capital: 5, approval: -1, base_enthusiasm: 20, funds: 20000 }, regional_effects: { plains: 5.0, south: 4.0, northeast: -4.0, west_coast: -4.0, midwest: -1.0 }, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Work with FBI officials to launch a formal investigation and let the legal drama play out publicly.", feedback: "A formal investigation creates damaging headlines. Voters are somewhat skeptical, but the legal pressure is undeniable.", effects: { political_capital: 10, approval: 1, base_enthusiasm: 10, funds: 0 }, regional_effects: { south: 2.0, plains: 2.0, midwest: 1.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Pivot away from the controversy and focus all October energy on your economic record and the vaccine.", feedback: "A disciplined close on substance. You stop the bleeding in Michigan and run up the score in Florida and Texas.", effects: { political_capital: 15, approval: 5, base_enthusiasm: 8, funds: -30000 }, regional_effects: { midwest: 3.0, south: 5.0, plains: 4.0, northeast: 1.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "trump",
    question: "Election Eve. Internal data shows Florida and North Carolina are yours but Pennsylvania is slipping. Where do you make your last stand?",
    answers: [
      { text: "Hold a marathon rally schedule — five states in one day. No sleep. The final MAGA surge.", feedback: "The physical marathon tour generates wild enthusiasm and drives Election Day turnout over the top in the Midwest.", effects: { political_capital: 0, approval: 1, base_enthusiasm: 30, funds: -20000 }, regional_effects: { midwest: 6.0, south: 3.0, plains: 3.0 }, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' },
      { text: "Declare victory in Florida live on TV before all votes are counted — force the media narrative.", feedback: "The early declaration fires up your base but the media immediately calls it premature. The night's coverage pivots to Pennsylvania.", effects: { political_capital: -10, approval: -5, base_enthusiasm: 15, funds: 0 }, regional_effects: { south: 2.0, plains: 2.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Focus on a final Pennsylvania barnstorm — Pittsburgh to Philadelphia, targeting disaffected union Democrats.", feedback: "The Pennsylvania play works. Working-class Democrats in Erie and Scranton flip, providing a narrow but decisive margin.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 20, funds: -25000 }, regional_effects: { midwest: 7.0, south: 2.0, plains: 2.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "trump",
    question: "Election Night. You are watching the results roll in. Florida and Ohio are called for you. Pennsylvania, Michigan, and Wisconsin are all on a knife's edge as Democratic urban votes are counted. What is your play?",
    answers: [
      { text: "Declare victory on live national television before the counting is complete and demand officials stop counting.", feedback: "Your base cheers. But the calls keep coming in and the contested results hand the opposition a 'stolen election' narrative.", effects: { political_capital: -15, approval: -8, base_enthusiasm: 25, funds: 0 }, regional_effects: { plains: 5.0, south: 5.0, northeast: -6.0, west_coast: -6.0, midwest: -4.0 }, trump_effects: { south: 6, plains: 6 }, trump_tag: 'plus' },
      { text: "Wait for results, deploy your legal teams to all three states to file challenges the moment a margin appears.", feedback: "A legally measured approach that sets the stage for post-election battles. The base wants more defiance but the groundwork is laid.", effects: { political_capital: 10, approval: -2, base_enthusiasm: 10, funds: -30000 }, regional_effects: { plains: 2.0, south: 2.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Hit the phones — call state Republican legislators in swing states and demand they certify regardless of final counts.", feedback: "The calls become public, creating a media firestorm. Your base is emboldened by the fight, and many state-level Republicans echo your concerns about 'election integrity.' The nation is shocked, but your party remains largely unified.", effects: { political_capital: -5, approval: -6, base_enthusiasm: 30, funds: 0 }, regional_effects: { plains: 4.0, south: 4.0, northeast: -8.0, west_coast: -8.0, midwest: -5.0 }, trump_effects: { south: 7, plains: 7 }, trump_tag: 'plus' }
    ]
  },

  // ─── AOC — Governing Turns 3-5 + Campaign Turns 7-12 ─────────────────────
  {
    id: 3, phase: "governing", candidate_id: "aoc",
    question: "America is facing a historic housing crisis. Rents have risen 40% in five years. Your base demands a federal rent control mandate. Real estate lobbies and moderate Democrats warn it will kill new housing construction.",
    answers: [
      { text: "Issue a federal emergency rent stabilization order capping rent increases at 3% annually for the next five years.", feedback: "Renters across the country erupt in celebration. Landlords immediately challenge the order in court. New construction stalls.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 28, funds: -10000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 2.0, south: -2.0, plains: -3.0 }, legislative_effects: -8 },
      { text: "Invest $500 billion in federal public housing construction — build 1.5 million new units in five years.", feedback: "The most ambitious housing program since FDR's New Deal. Construction unions are thrilled. Real estate investors are alarmed.", effects: { political_capital: -30, approval: 4, base_enthusiasm: 20, funds: -80000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 3.0, south: 1.0 }, legislative_effects: -5 },
      { text: "Offer low-income housing tax credits to developers and reform zoning laws to increase housing supply.", feedback: "A market-friendly approach that builds bipartisan coalition support, though progressives call it a half-measure for landlords.", effects: { political_capital: 10, approval: 3, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: 2.0, south: 2.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "aoc",
    question: "A viral police brutality video sparks nationwide protests and demands to 'defund the police.' Your base supports it fully. Moderate Democrats in swing districts are panicking. How do you respond?",
    answers: [
      { text: "Fully embrace the defund movement — announce a plan to redirect 25% of police budgets to mental health and community programs.", feedback: "Progressive cities erupt in solidarity marches. But moderate Democrats suffer badly in special elections across suburban districts.", effects: { political_capital: -15, approval: -5, base_enthusiasm: 30, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: -5.0, south: -6.0, plains: -5.0 }, legislative_effects: -12 },
      { text: "Champion police accountability and reform — ban chokeholds, mandate body cameras, end qualified immunity.", feedback: "A popular and legally durable reform package that passes with a bipartisan supermajority and widespread national approval.", effects: { political_capital: -10, approval: 7, base_enthusiasm: 10, funds: -10000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0, south: 2.0, plains: 1.0 }, legislative_effects: 8 },
      { text: "Call for calm, condemn police violence and rioting equally, and propose a bipartisan law enforcement task force.", feedback: "A measured tone that alienates your activist base who call it 'both-sidesing.' But it stabilizes your numbers with independents.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -20, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "aoc",
    question: "Republicans are threatening to not raise the debt ceiling unless you agree to massive spending cuts. The U.S. could default for the first time in history. Treasury Secretary warns of a global economic catastrophe. What do you do?",
    answers: [
      { text: "Invoke the 14th Amendment — declare the debt ceiling unconstitutional and order the Treasury to keep paying its debts.", feedback: "A bold constitutional gambit that sends markets soaring. Republicans sue immediately, and the case heads to the Supreme Court.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 20, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 1.0 }, legislative_effects: -5 },
      { text: "Negotiate a grand bargain — agree to freeze spending at current levels in exchange for a two-year debt ceiling extension.", feedback: "Default is averted. Markets stabilize. Your progressive base calls the freeze a betrayal of every promise you ever made.", effects: { political_capital: 15, approval: 3, base_enthusiasm: -25, funds: 0 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: 8 },
      { text: "Mint a $1 trillion platinum coin and deposit it at the Federal Reserve — a legal loophole to bypass Congress entirely.", feedback: "Legal scholars say it works. Economists are divided. The media circus is enormous, but default is avoided and Republicans have no counter.", effects: { political_capital: -10, approval: 2, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "aoc",
    question: "Your re-election campaign launches. The Republican nominee is running on economic anxiety and crime. How do you frame your campaign?",
    answers: [
      { text: "Run on the Green New Deal's job creation record — '5 million clean energy jobs in four years. That's the revolution.'", feedback: "A powerful economic narrative that wins back some Rust Belt union workers. Environmental base turns out at record rates.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 28, funds: -25000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 4.0, south: -3.0, plains: -4.0 } },
      { text: "Focus on popular wins — drug prices, housing investments, expanded Medicare — and defend your record.", feedback: "Solid incumbent defense that protects suburban gains. Progressives feel underrepresented in the messaging but independents approve.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -5, funds: -30000 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Run an explicitly anti-billionaire, anti-corporate campaign — make wealth inequality the defining issue.", feedback: "Class warfare messaging dominates the news cycle. Young voter registration explodes. Wall Street donors fund the opposition.", effects: { political_capital: -5, approval: -1, base_enthusiasm: 30, funds: -40000 }, regional_effects: { northeast: 6.0, west_coast: 6.0, midwest: 3.0, south: -4.0, plains: -5.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "aoc",
    question: "Debate night. Your opponent calls you 'the most radical and dangerous president in American history.' The country is watching. How do you respond?",
    answers: [
      { text: "Own the progressive label proudly: 'Radical? FDR was called radical. The Suffragists were called radical. I'll wear that badge.'", feedback: "An electrifying debate moment that goes viral. Your base erupts. Suburban moderates in Ohio remain unconvinced.", effects: { political_capital: -5, approval: 1, base_enthusiasm: 28, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, south: -4.0, plains: -4.0, midwest: -2.0 } },
      { text: "Pivot to your record: '5 million jobs, lower drug prices, the most homes built since 1978. Is that radical?'", feedback: "Record-based defense wins the fact-checker wars. Undecided viewers rate you the winner by 12 points in post-debate polls.", effects: { political_capital: 5, approval: 6, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: 5.0, south: 3.0, northeast: 3.0, west_coast: 3.0 } },
      { text: "Turn the attack back: 'Radical is cutting Medicare. Radical is letting people die for insulin costs. That's what I'm fighting.'", feedback: "A devastating counter-punch on healthcare that dominates the post-debate coverage. Seniors respond in swing-state polling.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 18, funds: 0 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 4.0, west_coast: 4.0, plains: 2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "aoc",
    question: "A conservative Super PAC releases an attack ad falsely claiming your climate policies caused a recent factory closure in Ohio. The ad is going viral in the Midwest. How do you respond?",
    answers: [
      { text: "Go on offense immediately — release the real facts with worker testimonials and a massive counter-ad buy in Ohio.", feedback: "The counter-ads perform brilliantly. The PAC's credibility is shredded, and your climate jobs message resonates strongly.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 10, funds: -40000 }, regional_effects: { midwest: 6.0, south: 1.0, northeast: 2.0 } },
      { text: "Hold a live press conference at the factory with the actual workers and union reps to debunk the ad in person.", feedback: "An extraordinarily effective visual. The image of you at the factory overwhelms the PAC's narrative completely.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 15, funds: -15000 }, regional_effects: { midwest: 7.0, south: 2.0, northeast: 3.0 } },
      { text: "Let surrogates and fact-checkers handle the rebuttal while you focus on your final-stretch campaign schedule.", feedback: "The rebuttal is credible but lacks the visual punch. The story persists in Ohio media for another week.", effects: { political_capital: 5, approval: 1, base_enthusiasm: 0, funds: 0 }, regional_effects: { midwest: 2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "aoc",
    question: "A progressive Green Party candidate is siphoning 4-6% of your vote in three key swing states. Their slogan is 'AOC sold out.' How do you handle them?",
    answers: [
      { text: "Offer them a major cabinet position — Secretary of the Environment — in exchange for them dropping out.", feedback: "A stunning move. They accept. Their endorsement brings their entire activist base back to your coalition overnight.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 15, funds: -10000 }, regional_effects: { west_coast: 5.0, northeast: 5.0, midwest: 2.0 } },
      { text: "Invite their leader to debate your climate record head-to-head and let the best vision win the progressive vote.", feedback: "You win the debate handily. The Green candidate looks small by comparison and their polling collapses.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: -10000 }, regional_effects: { west_coast: 4.0, northeast: 4.0, midwest: 2.0 } },
      { text: "Warn progressive voters about the spoiler effect: 'A vote for the Green Party is a vote to repeal everything we built.'", feedback: "Mathematically effective. 60% of their voters come home. The remaining holdouts aren't worth fighting.", effects: { political_capital: 5, approval: 1, base_enthusiasm: -5, funds: -20000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 1.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "aoc",
    question: "Election Eve. Your strongest ground game states are Nevada, Arizona, and Wisconsin. Where do you concentrate your final resources?",
    answers: [
      { text: "Pour everything into a Wisconsin and Michigan GOTV surge — young voters, unions, and college towns.", feedback: "Record youth and union turnout in the Great Lakes flips the map decisively in your favor. A historic progressive coalition.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 25, funds: -30000 }, regional_effects: { midwest: 7.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Hold massive multi-city rallies with celebrity surrogates — a media spectacle that drowns out the opposition.", feedback: "The spectacle generates enormous free media coverage and drives youth turnout in cities nationwide.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 20, funds: -35000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: 2.0 } },
      { text: "Spend the final day door-knocking in Sun Belt suburbs — build the new progressive majority in the South.", feedback: "An audacious final play that shocks the political establishment. Arizona and Georgia go to the wire.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: -25000 }, regional_effects: { south: 6.0, midwest: 2.0, west_coast: 2.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "aoc",
    question: "A last-minute social media post by a major influencer falsely claims you support 'open borders and abolishing ICE.' It is going viral and creating panic in your campaign. The election is tomorrow.",
    answers: [
      { text: "Post a direct, two-minute video rebuttal stating exactly what your immigration policy is and calling out the disinformation.", feedback: "Your authentic video gets 40 million views overnight. The disinformation is buried under your own message.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: 0 }, regional_effects: { south: 3.0, midwest: 4.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } },
      { text: "Have your legal team issue a formal cease-and-desist and demand the platform remove the post immediately.", feedback: "The post is removed within hours but screenshots spread everywhere. The legal action itself becomes part of the story.", effects: { political_capital: 5, approval: -1, base_enthusiasm: 5, funds: -5000 }, regional_effects: { northeast: 1.0, west_coast: 1.0 } },
      { text: "Ignore it and let your surrogates handle it — stay on your closing message about climate and healthcare jobs.", feedback: "The surrogates are credible and the story fades by morning. Your disciplined closing message reaches undecideds on election day.", effects: { political_capital: 10, approval: 3, base_enthusiasm: 8, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: 2.0, west_coast: 2.0, plains: 1.0 } }
    ]
  },

  // ─── RFK SR SCENARIOS ──────────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "rfk_sr",
    question: "You are facing the defining decision of your presidency: the Vietnam War. 550,000 U.S. troops are deployed. Casualties are mounting. The anti-war movement is exploding on college campuses. How do you proceed?",
    answers: [
      { text: "Announce an immediate and unconditional withdrawal of all U.S. forces within 90 days — end the war now.", feedback: "Anti-war America erupts in celebration. Veterans' groups are furious. The military establishment quietly begins opposing your agenda.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 30, funds: -10000 }, regional_effects: { northeast: 7.0, west_coast: 6.0, midwest: -3.0, south: -5.0, plains: -5.0 }, legislative_effects: -10 },
      { text: "Announce a phased withdrawal over 18 months tied to peace negotiations with Hanoi via back channels.", feedback: "A measured, diplomatic path that gives the military time to redeploy honorably. Hawks are contained. The peace movement cautiously supports it.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 3.0, midwest: 1.0 }, legislative_effects: 3 },
      { text: "Maintain current troop levels but suspend bombing campaigns and push a negotiated settlement at Paris peace talks.", feedback: "A cautious approach that satisfies neither side fully, but keeps the coalition together while pursuing diplomacy.", effects: { political_capital: 5, approval: -2, base_enthusiasm: -10, funds: -10000 }, regional_effects: { midwest: 2.0, south: 1.0, plains: 1.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "rfk_sr",
    question: "Urban riots continue to tear through major American cities following continued police violence against Black communities. Your attorney general is recommending federal intervention. How do you respond?",
    answers: [
      { text: "Lead a major federal civil rights enforcement push — send DOJ civil rights attorneys to every major city.", feedback: "Black communities feel genuinely supported. Southern conservatives are outraged, but your moral leadership defines the moment.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 22, funds: -20000 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 3.0, south: -6.0, plains: -4.0 }, legislative_effects: -6 },
      { text: "Travel personally to the neighborhoods that are burning — walk the streets, listen to community leaders, demonstrate solidarity.", feedback: "Your personal courage in the streets stops the riots in every city you visit. The image reshapes your presidency.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 20, funds: -5000 }, regional_effects: { northeast: 6.0, west_coast: 5.0, midwest: 4.0, south: -4.0 }, legislative_effects: 5 },
      { text: "Call for law and order while simultaneously announcing an emergency federal anti-poverty program for urban communities.", feedback: "A dual approach that calms the immediate unrest while addressing root causes. Both wings of the coalition are partially satisfied.", effects: { political_capital: -10, approval: 5, base_enthusiasm: 5, funds: -30000 }, regional_effects: { northeast: 3.0, midwest: 3.0, south: -2.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "rfk_sr",
    question: "Organized crime has deeply infiltrated the Teamsters union, one of your most powerful political allies. The FBI director is asking you to authorize a massive federal anti-racketeering investigation.",
    answers: [
      { text: "Authorize the full federal investigation — you came to Washington to fight corruption, and you mean it.", feedback: "A powerful statement of personal integrity. But the Teamsters withdraw their political support and mobilize against your agenda.", effects: { political_capital: -20, approval: 6, base_enthusiasm: 10, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 3.0, midwest: -4.0, plains: -3.0 }, legislative_effects: -8 },
      { text: "Negotiate a deal — the Teamsters agree to internal reform in exchange for the investigation being shelved.", feedback: "A pragmatic but morally uncomfortable compromise. The unions stay on board, but your reputation for fighting corruption takes a hit.", effects: { political_capital: 15, approval: -4, base_enthusiasm: -10, funds: 20000 }, regional_effects: { midwest: 3.0, south: 1.0 }, legislative_effects: 5 },
      { text: "Expand the investigation to ALL organized crime operations nationally — the Teamsters are just one thread.", feedback: "A sweeping crime offensive that positions you as the toughest law-and-order Democrat in history. Organized labor is furious.", effects: { political_capital: -25, approval: 4, base_enthusiasm: 5, funds: -10000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: -3.0 }, legislative_effects: -5 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "rfk_sr",
    question: "The Soviet Union has proposed a historic bilateral nuclear arms reduction treaty. Your military advisors are split. Your base wants peace. The hawks in your own party call it appeasement.",
    answers: [
      { text: "Embrace the treaty fully — sign it in Moscow in a historic summit modeled after your brother's Nuclear Test Ban Treaty.", feedback: "A generational moment of international statesmanship. Approval soars globally. The military-industrial complex launches a massive opposition campaign.", effects: { political_capital: -15, approval: 8, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 6.0, west_coast: 5.0, south: -3.0, plains: -2.0 }, legislative_effects: 5 },
      { text: "Negotiate hard — demand major Soviet concessions on Eastern Europe and human rights before signing anything.", feedback: "A tough-minded diplomatic stance. The treaty gets better terms and bipartisan respect. The process takes months.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 3, funds: 0 }, regional_effects: { northeast: 3.0, midwest: 2.0, west_coast: 2.0 }, legislative_effects: 4 },
      { text: "Reject the treaty as inadequate and demand verified reductions before any agreement is signed.", feedback: "Hawks and defense contractors celebrate. The peace wing of the party feels deeply betrayed by your hawkish turn.", effects: { political_capital: 10, approval: -5, base_enthusiasm: -15, funds: 10000 }, regional_effects: { south: 3.0, plains: 3.0, northeast: -4.0, west_coast: -3.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "rfk_sr",
    question: "Your brother's legacy includes the space program. NASA is requesting an unprecedented $40 billion to land on Mars by 1980. Your base loves the ambition; fiscal conservatives call it insanity while poverty persists at home.",
    answers: [
      { text: "Fund it fully — America will reach Mars. The science, jobs, and national pride are worth every dollar.", feedback: "The announcement electrifies the nation. Engineering schools are flooded with applications. The cost becomes a Republican target.", effects: { political_capital: -25, approval: 5, base_enthusiasm: 15, funds: -50000 }, regional_effects: { northeast: 4.0, west_coast: 5.0, south: 3.0, midwest: 3.0, plains: 2.0 }, legislative_effects: -5 },
      { text: "Fund NASA at 60% of the requested amount and redirect the rest to an Apollo-level investment in urban poverty programs.", feedback: "An intelligent political allocation that satisfies both coalitions partially. Scientists complain about timeline delays.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 5, funds: -30000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0 }, legislative_effects: 3 },
      { text: "Cancel the Mars program and invest the full $40B in a War on Poverty 2.0 targeting urban and rural communities.", feedback: "The progressive anti-poverty move is wildly popular with your base. The science community is devastated.", effects: { political_capital: -20, approval: 3, base_enthusiasm: 20, funds: -40000 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 4.0, south: 2.0, plains: 1.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "rfk_sr",
    question: "The Senate is moving to impeach your Secretary of State over allegations of unauthorized back-channel diplomacy with North Vietnam. The allegations are partially true, and you authorized the back-channel yourself. How do you handle this?",
    answers: [
      { text: "Defend your Secretary completely and reveal you authorized the back-channel — it was the right call for peace.", feedback: "Your personal honesty and willingness to absorb the political hit earns enormous respect, but the political cost is severe.", effects: { political_capital: -30, approval: 5, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0 }, legislative_effects: -12 },
      { text: "Accept your Secretary's resignation and distance yourself from the back-channel, calling it unauthorized.", feedback: "A painful act of political self-preservation. The Secretary falls on their sword. You keep the Senate from imploding.", effects: { political_capital: 10, approval: -5, base_enthusiasm: -12, funds: 0 }, regional_effects: { midwest: 2.0, south: 1.0 }, legislative_effects: 5 },
      { text: "Invoke executive privilege for all communications and dare the Senate to make it a constitutional crisis.", feedback: "A dramatic constitutional showdown that you ultimately win 6-3 at the Supreme Court. The Senate backs down.", effects: { political_capital: -15, approval: 2, base_enthusiasm: 8, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0 }, legislative_effects: -5 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "rfk_sr",
    question: "Your re-election campaign opens. You are the first Democratic president to run against a significant peace movement within your own party. How do you frame your four years?",
    answers: [
      { text: "Run on ending the Vietnam War — make the body count the opponent's failure, and peace your defining achievement.", feedback: "A powerful anti-war frame that defines you as the president who ended America's longest war. Veterans are divided but the youth vote is enormous.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 22, funds: -20000 }, regional_effects: { northeast: 6.0, west_coast: 6.0, midwest: 1.0, south: -3.0, plains: -3.0 } },
      { text: "Frame the campaign as a new frontier — Mars, civil rights, poverty programs, and a generation of progress.", feedback: "An aspirational campaign that reaches across coalitions. Kennedy idealism still draws massive crowds.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 18, funds: -25000 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 3.0, south: 1.0, plains: 1.0 } },
      { text: "Run as the law-and-order progressive — civil rights and crime-fighting as a single unified message.", feedback: "An unusual but powerful crossover message that pulls working-class white voters back from the Republicans.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 10, funds: -30000 }, regional_effects: { midwest: 5.0, south: 4.0, plains: 3.0, northeast: 2.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "rfk_sr",
    question: "Debate night. Your Republican opponent attacks your Vietnam withdrawal as surrender and cowardice. The camera is on you.",
    answers: [
      { text: "Challenge them to name a single American life worth dying for a war that was lost before it began.", feedback: "One of the most memorable debate moments of the decade. Pacifist America cheers. Defense hawks are infuriated.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 25, funds: 0 }, regional_effects: { northeast: 6.0, west_coast: 6.0, south: -4.0, plains: -4.0, midwest: -1.0 } },
      { text: "Calmly list the names of soldiers who came home alive because of your decision — a devastating emotional appeal.", feedback: "The personal tribute to the living veterans shifts the entire room. Post-debate polls show you won by 15 points.", effects: { political_capital: 5, approval: 7, base_enthusiasm: 18, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: 1.0, plains: 1.0 } },
      { text: "Pivot immediately to your economic record and refuse to engage on Vietnam — the war is in the past.", feedback: "A disciplined dodge, but your base wants more fire. The moment is called 'evasive' in post-debate coverage.", effects: { political_capital: 10, approval: 1, base_enthusiasm: -8, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "rfk_sr",
    question: "A splinter group from the anti-war left is running a third-party candidate, drawing 8% nationally and threatening to cost you key Northern states. How do you respond?",
    answers: [
      { text: "Hold a nationally televised summit with third-party candidate and offer them a formal peace advisory role.", feedback: "The summit produces a joint statement of principles. Their candidate endorses you in week three. Coalition reunited.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 15, funds: -10000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 2.0 } },
      { text: "Remind progressives that the Republican nominee's first act will be to re-escalate in Vietnam.", feedback: "The fear message brings 70% of the third-party vote back home. It is effective but alienates idealists.", effects: { political_capital: 5, approval: 1, base_enthusiasm: -5, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 1.0 } },
      { text: "Challenge them to a public debate over your Vietnam withdrawal record — let the progressive voters decide.", feedback: "You win the debate handily. The third-party candidate's support collapses from 8% to 3% in the following week.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: -10000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "rfk_sr",
    question: "Newly released FBI documents reveal your brother, President JFK, was investigating organized crime ties to Cuba before his assassination. Republicans are demanding you respond. The story dominates national media.",
    answers: [
      { text: "Announce a full independent commission to investigate any remaining questions about JFK's death — you want the truth too.", feedback: "A profound political moment of personal integrity. Your approval surges with every demographic. Republicans have no counter.", effects: { political_capital: -15, approval: 8, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 4.0, midwest: 4.0, south: 3.0, plains: 2.0 } },
      { text: "Release a deeply personal statement about your family's grief and call for unity and healing.", feedback: "A moving human moment that keeps the story from becoming political. The press covers it reverentially.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 8, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0, south: 1.0 } },
      { text: "Refuse all comment — this is a private family matter and you will not allow it to be weaponized politically.", feedback: "Respected but not celebrated. The story runs for a week before finding its natural end.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -2, funds: 0 }, regional_effects: { northeast: 1.0, west_coast: 1.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "rfk_sr",
    question: "Election Eve. Your coalition of young voters, Black Americans, and working-class Catholics is holding. Where do you make your final push?",
    answers: [
      { text: "A massive midnight rally in Harlem and Bedford-Stuyvesant — honor your anti-poverty record with the communities you served.", feedback: "The images of a president in the streets of Harlem the night before an election are unforgettable. Turnout is extraordinary.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 25, funds: -20000 }, regional_effects: { northeast: 7.0, midwest: 3.0, west_coast: 3.0 } },
      { text: "A Catholic working-class barnstorm through Pennsylvania, Ohio, and Michigan factory towns.", feedback: "The crossover coalition holds. Working-class Catholics who Nixon courted come home to you in the Rust Belt.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 15, funds: -25000 }, regional_effects: { midwest: 6.0, northeast: 3.0, south: 2.0 } },
      { text: "A national primetime speech from the Oval Office — the gravity of the presidency as your closing argument.", feedback: "A commanding presidential finish. Undecided voters trust the incumbent judgment by a decisive margin.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 10, funds: -15000 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "rfk_sr",
    question: "A credible threat against your life has been uncovered by the Secret Service. They are urging you to dramatically scale back your public appearances in the final days. Your base rallies on crowds. What do you do?",
    answers: [
      { text: "Continue your full campaign schedule — you refuse to live in fear and your country deserves your presence.", feedback: "An act of extraordinary personal courage that galvanizes the nation. Voter turnout surges among every demographic.", effects: { political_capital: 5, approval: 10, base_enthusiasm: 30, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 4.0, south: 3.0, plains: 3.0 } },
      { text: "Reduce large-scale rallies but continue to campaign — hold smaller, more intimate town halls with enhanced security.", feedback: "A prudent middle ground. The public approves of the measured response and your final week events are deeply personal and moving.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 12, funds: -10000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 3.0, south: 2.0 } },
      { text: "Completely suspend public events for 48 hours and send surrogates to hold events in your place.", feedback: "The Secret Service breathes a sigh of relief. Your opponent calls it weakness. The last-minute absence is felt at the polls.", effects: { political_capital: 5, approval: -3, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: -3.0, south: -3.0, northeast: -2.0, west_coast: -2.0 } }
    ]
  },

  // ─── TULSI GABBARD SCENARIOS ───────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "tulsi",
    question: "You campaigned on ending America's 'regime change wars.' Now you are inheriting 10,000 U.S. troops in Syria and 2,500 in Afghanistan. The Joint Chiefs are warning that rapid withdrawal will create a power vacuum. What do you do?",
    answers: [
      { text: "Order complete withdrawal from both Syria and Afghanistan within 90 days — a campaign promise is a campaign promise.", feedback: "Anti-war America celebrates. The establishment foreign policy community erupts. ISIS-affiliated groups immediately expand in the vacuum.", effects: { political_capital: -15, approval: -3, base_enthusiasm: 25, funds: 0 }, regional_effects: { west_coast: 4.0, northeast: 3.0, midwest: -2.0, south: -4.0, plains: -4.0 }, legislative_effects: -10 },
      { text: "Withdraw from Syria while maintaining a small counterterrorism force in Afghanistan for 18 more months.", feedback: "A nuanced middle path that keeps the military coalition together while ending the most costly intervention.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 3.0, northeast: 2.0, west_coast: 2.0, south: 1.0 }, legislative_effects: 3 },
      { text: "Honor the existing military commitments while refusing any new overseas interventions or deployments.", feedback: "A quiet but firm anti-interventionist line. Your base is frustrated but respects the measured approach.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -10, funds: 0 }, regional_effects: { south: 2.0, plains: 1.0, midwest: 1.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "tulsi",
    question: "The CIA director presents you with intelligence claiming Russia is interfering in allied European elections. The establishment demands sanctions and diplomatic expulsion. Your base is skeptical of intelligence agency claims. What do you do?",
    answers: [
      { text: "Demand full declassification of all intelligence and present it to the American public before any action.", feedback: "Your demand for transparency wins broad public approval, but allies are alarmed that you are undermining the intelligence community.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 3.0, south: -2.0, plains: -2.0 }, legislative_effects: -5 },
      { text: "Coordinate multilateral sanctions with European allies through NATO channels.", feedback: "A measured multilateral response that reassures allies and avoids an intelligence debate at home.", effects: { political_capital: 5, approval: 4, base_enthusiasm: -5, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 2.0, midwest: 2.0 }, legislative_effects: 4 },
      { text: "Refuse to act without direct evidence — invite Russian government representatives to present their case.", feedback: "Your outreach to Russia shocks the foreign policy establishment and dominates news for weeks. Critics say you are Putin's ally.", effects: { political_capital: -20, approval: -5, base_enthusiasm: 10, funds: 0 }, regional_effects: { plains: 2.0, south: 2.0, northeast: -5.0, west_coast: -4.0, midwest: -3.0 }, legislative_effects: -10 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "tulsi",
    question: "Healthcare costs continue to spiral. As a Hindu-American veteran, your coalition spans ideological lines. How do you tackle healthcare as a crossover president?",
    answers: [
      { text: "Propose a Medicare for All system funded by a modest payroll tax — universal coverage, no private insurance.", feedback: "Progressives cheer. Your military service gives you unusual credibility on this. Conservatives attack, but veterans support you.", effects: { political_capital: -25, approval: 4, base_enthusiasm: 20, funds: -30000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 2.0, south: -3.0, plains: -3.0 }, legislative_effects: -8 },
      { text: "Propose a VA-style federal option for civilians — open enrollment in the Veterans' health system for all Americans.", feedback: "A brilliant political frame that uses veteran credibility to expand public coverage. Veterans groups rally behind you.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 12, funds: -20000 }, regional_effects: { south: 4.0, midwest: 4.0, plains: 3.0, northeast: 3.0, west_coast: 3.0 }, legislative_effects: 5 },
      { text: "Focus on price transparency — mandate all hospitals and insurance companies publish prices nationally.", feedback: "A broadly popular free-market reform that both parties can live with. Costs don't drop dramatically but the system is fairer.", effects: { political_capital: 5, approval: 5, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "tulsi",
    question: "Big Tech platforms have deplatformed multiple political accounts for 'disinformation,' including several allied to your own anti-war coalition. The establishment defends the bans. Your base is furious.",
    answers: [
      { text: "Sign an executive order directing the FCC to treat major social media platforms as public utilities subject to free speech law.", feedback: "Free speech advocates across the aisle cheer. Silicon Valley immediately challenges in court. The legal battle is landmark.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 4.0, south: 3.0, midwest: 3.0, west_coast: -4.0, northeast: -2.0 }, legislative_effects: -5 },
      { text: "Push a bipartisan Section 230 reform bill requiring algorithmic transparency and appeals processes for deplatformed users.", feedback: "A legally sound compromise that holds platforms accountable while avoiding a free speech absolute. Both parties claim a win.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 6 },
      { text: "Refuse to regulate private companies — defend free-market principles even when you disagree with the outcomes.", feedback: "Fiscal conservatives applaud your consistency. Your anti-establishment base feels abandoned by their supposed champion.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -20, funds: 10000 }, regional_effects: { south: 3.0, plains: 3.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "tulsi",
    question: "A historic wildfire season has burned millions of acres across the West. Climate scientists demand aggressive federal action. Your coalition spans environmentalists and rural property rights advocates. What do you do?",
    answers: [
      { text: "Declare a National Climate Emergency and redirect $200B in defense spending to renewable energy and forest management.", feedback: "A bold executive pivot that reframes military spending as an environmental tool. Defense hawks are furious.", effects: { political_capital: -25, approval: 3, base_enthusiasm: 20, funds: -30000 }, regional_effects: { west_coast: 6.0, northeast: 4.0, south: -4.0, plains: -4.0 }, legislative_effects: -8 },
      { text: "Launch a massive prescribed burn and forest management program — address the root cause, not just the symptoms.", feedback: "A nonpartisan, science-based forest management approach that wins support from rural communities and environmentalists alike.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 8, funds: -20000 }, regional_effects: { west_coast: 5.0, plains: 3.0, south: 2.0, midwest: 3.0 }, legislative_effects: 5 },
      { text: "Offer federal matching grants to Western states for their own firefighting and prevention programs.", feedback: "A federalist approach that respects states' rights. Doesn't address the scale of the crisis but builds goodwill.", effects: { political_capital: 5, approval: 3, base_enthusiasm: -5, funds: -15000 }, regional_effects: { west_coast: 3.0, plains: 2.0, south: 1.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "tulsi",
    question: "You are the first Hindu American president. A series of anti-Hindu hate crimes across the country has put religious minorities in the spotlight. You can speak from painful personal experience. How do you respond?",
    answers: [
      { text: "Give a prime-time national address from your own experience — this hate is not American, and you will not tolerate it.", feedback: "Your personal courage and moral clarity make the speech one of the most watched in years. Hate crime prosecutions surge.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: 1.0, plains: 1.0 }, legislative_effects: 5 },
      { text: "Sign a sweeping federal hate crimes expansion bill and increase FBI resources for religious hate crime investigation.", feedback: "Strong legislative action that puts resources behind your words. Civil rights organizations applaud the scope.", effects: { political_capital: -15, approval: 6, base_enthusiasm: 12, funds: -10000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 2.0 }, legislative_effects: 7 },
      { text: "Use the moment to launch a national unity commission bringing together leaders from all faiths and backgrounds.", feedback: "A healing and symbolic gesture that resonates broadly. Critics want more aggressive law enforcement action.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 5, funds: -5000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0, south: 2.0, plains: 2.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "tulsi",
    question: "Your re-election campaign begins. You are the hardest to categorize candidate in American history — anti-war, pro-gun, pro-pot, veteran, Hindu. How do you run on that?",
    answers: [
      { text: "Run explicitly as a 'neither party' independent-minded president: 'I don't owe Wall Street, the Pentagon, or Silicon Valley a thing.'", feedback: "An electrifying crossover message that draws independents from both parties. Establishment Democrats and Republicans are alarmed.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 22, funds: -25000 }, regional_effects: { midwest: 5.0, south: 3.0, plains: 4.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Run as the peace candidate — make your anti-war record the single defining frame of the entire campaign.", feedback: "A strong message with passionate adherents. Veterans' groups provide authentic validation that money can't buy.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 18, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: 2.0, south: -2.0, plains: -2.0 } },
      { text: "Run as the unity candidate — your crossover coalition is America's future, not two warring tribes.", feedback: "A hopeful message that draws suburban moderates strongly. Your base wants more edge, but the center holds.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 8, funds: -30000 }, regional_effects: { midwest: 5.0, south: 3.0, plains: 3.0, northeast: 3.0, west_coast: 3.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "tulsi",
    question: "Your Republican opponent calls you 'a Russian asset and a fraud.' Your Democratic opponents say you are 'not a real Democrat.' The media loves the attack lines. How do you respond?",
    answers: [
      { text: "Challenge both: 'I served this country for 20 years in uniform. What have they sacrificed? Come at me.'", feedback: "A powerful veteran authenticity moment. The attacks collapse under the weight of your service record.", effects: { political_capital: -5, approval: 5, base_enthusiasm: 22, funds: 0 }, regional_effects: { south: 4.0, midwest: 4.0, plains: 4.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Laugh it off publicly: 'If questioning illegal wars makes me a Russian asset, then America needs more assets like me.'", feedback: "Your quick wit and calm under fire generate enormous viral moments. The attacks actually help you with independents.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 18, funds: 0 }, regional_effects: { midwest: 5.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 3.0 } },
      { text: "File defamation lawsuits against the most prominent attackers — force them to prove the claims in court.", feedback: "A fight your legal team relishes, but the lawsuit coverage keeps the attacks in the news for months.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 10, funds: -20000 }, regional_effects: { south: 1.0, plains: 1.0, northeast: -2.0, west_coast: -2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "tulsi",
    question: "You are polling at 4% in New Hampshire but 11% among veterans and active military. How do you leverage your unique coalition?",
    answers: [
      { text: "Make New Hampshire a military-first state — campaign exclusively at VFW halls, military bases, and veterans hospitals.", feedback: "Your veteran support explodes to 18%. The rest of New Hampshire's non-veteran voters give you a second look.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 20, funds: -15000 }, regional_effects: { northeast: 3.0, south: 3.0, plains: 3.0, midwest: 2.0 } },
      { text: "Hold a primetime national forum with veterans from both parties — let your military peers vouch for you.", feedback: "The forum generates enormous crossover appeal. Republicans who hate your party love your biography.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 15, funds: -10000 }, regional_effects: { south: 4.0, plains: 4.0, midwest: 4.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Announce a sweeping veterans' healthcare and homelessness initiative — put your money where your service is.", feedback: "A policy-driven moment that shows governing depth. Veterans' policy advocates flood your campaign with volunteers.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 12, funds: -20000 }, regional_effects: { south: 5.0, plains: 4.0, midwest: 3.0, northeast: 2.0, west_coast: 2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "tulsi",
    question: "The Hawaii Democratic Party has officially disendorsed your re-election, saying you have abandoned progressive values. Your own home state is threatening to vote against you. How do you handle the betrayal?",
    answers: [
      { text: "Return to Hawaii for a massive public rally — 'the party bosses don't speak for the Hawaiian people, only I do.'", feedback: "The rally draws 60,000 people to Honolulu. Hawaii stays in your column and the story becomes your independence narrative.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 20, funds: -15000 }, regional_effects: { west_coast: 5.0, northeast: 3.0, midwest: 2.0 } },
      { text: "Accept it publicly and make the rejection a badge of honor: 'If the establishment hates me, I'm doing something right.'", feedback: "Anti-establishment voters across the country send your campaign record donations. Your donor base explodes.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 18, funds: 40000 }, regional_effects: { west_coast: 4.0, northeast: 3.0, south: 2.0, plains: 2.0, midwest: 2.0 } },
      { text: "Reach out personally to Hawaiian party leaders and try to repair the relationship privately.", feedback: "Quiet diplomacy re-establishes a working relationship with the state party, but no public endorsement comes.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -5, funds: 0 }, regional_effects: { west_coast: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "tulsi",
    question: "Election Eve. Your crossover coalition means your strongest states are an unusual mix. Where do you make the final push?",
    answers: [
      { text: "A multi-state tour: Iowa, Ohio, and Nevada — the crossover battlegrounds where your message is strongest.", feedback: "Your Midwest and West crossover play works. Independents and ticket-splitting veterans deliver the margin.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 18, funds: -25000 }, regional_effects: { midwest: 6.0, south: 3.0, plains: 4.0, west_coast: 3.0 } },
      { text: "National primetime unity address — broadcast from a military base, surrounded by veterans of all parties.", feedback: "The image of bipartisan military unity is the most powerful closing argument of the election cycle.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 12, funds: -15000 }, regional_effects: { south: 4.0, midwest: 4.0, plains: 4.0, northeast: 3.0, west_coast: 3.0 } },
      { text: "Focus on Sun Belt states — Arizona, Nevada, and Georgia — where your anti-war and marijuana legalization message plays well.", feedback: "A bold Sun Belt play that makes Arizona and Nevada swing decisively in your favor.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 15, funds: -30000 }, regional_effects: { south: 5.0, west_coast: 5.0, midwest: 1.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "tulsi",
    question: "Final 12 hours. A national security crisis breaks — a North Korean missile test in the Pacific. Your opponent is calling for military strikes. The world is watching the president's response.",
    answers: [
      { text: "Immediately call for calm, activate back-channel diplomacy, and publicly refuse military escalation.", feedback: "Your anti-war credibility makes this response deeply authentic. Swing voters in the Midwest and West credit your coolness.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 15, funds: 0 }, regional_effects: { west_coast: 4.0, northeast: 4.0, midwest: 4.0, south: -2.0, plains: -2.0 } },
      { text: "Order a proportional show of military force — a naval positioning that signals strength without pulling a trigger.", feedback: "A calibrated military response that demonstrates presidential resolve without triggering war. Approval holds.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 5, funds: -5000 }, regional_effects: { south: 4.0, plains: 3.0, midwest: 3.0, northeast: 2.0, west_coast: 2.0 } },
      { text: "Hold a live emergency national address explaining the situation and reassuring the American people.", feedback: "Presidential calm in a crisis is your most powerful campaign closer. Undecideds break heavily for the incumbent.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 8, funds: 0 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 3.0 } }
    ]
  },

  // ─── JOE BIDEN SCENARIOS ──────────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "biden",
    question: "The COVID-19 vaccine has arrived. You inherited a chaotic rollout from your predecessor. 500,000 Americans have died. You have promised 100 million shots in 100 days. Can you deliver?",
    answers: [
      { text: "Invoke the Defense Production Act to nationalize vaccine manufacturing and distribution — the government takes over.", feedback: "Production explodes. 150 million shots in 100 days. The fastest vaccination drive in human history.", effects: { political_capital: -20, approval: 10, base_enthusiasm: 20, funds: -50000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 4.0, south: 3.0, plains: 2.0 }, legislative_effects: 5 },
      { text: "Partner with pharmacy chains, community health centers, and employers to distribute through existing infrastructure.", feedback: "A public-private partnership that reaches 120 million shots in 100 days. Community trust is the key advantage.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 15, funds: -30000 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 4.0, west_coast: 4.0, plains: 3.0 }, legislative_effects: 4 },
      { text: "Leave distribution to states and offer maximum federal support without overriding governors.", feedback: "A federalist approach that respects Republican governors' authority. Distribution is uneven but political conflict is minimized.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 5, funds: -20000 }, regional_effects: { south: 2.0, plains: 2.0, midwest: 2.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "biden",
    question: "Your signature $1.2 trillion Bipartisan Infrastructure Law is signed. Now your progressive wing is demanding the $3.5 trillion Build Back Better plan be passed immediately through reconciliation. Manchin and Sinema say no. How do you play this?",
    answers: [
      { text: "Go to West Virginia personally — sit down with Manchin's constituents and make the case for the full bill.", feedback: "The personal touch moves Manchin to support a trimmed package. West Virginia union workers see real dollars coming.", effects: { political_capital: -20, approval: 4, base_enthusiasm: 10, funds: -10000 }, regional_effects: { south: 3.0, plains: 2.0, midwest: 2.0 }, legislative_effects: 8 },
      { text: "Accept a scaled-down $1.5 trillion compromise that Manchin and Sinema will actually sign.", feedback: "Half a loaf is still the largest social investment in a generation. Progressives are furious but the bill is law.", effects: { political_capital: 10, approval: 3, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: 2.0, south: 1.0, northeast: -1.0, west_coast: -1.0 }, legislative_effects: 6 },
      { text: "Hold the line — tell Manchin and Sinema that the full bill is non-negotiable and let the impasse play out publicly.", feedback: "The standoff dominates the news for months. Nothing passes. Your base is energized but the agenda is stalled.", effects: { political_capital: -25, approval: -5, base_enthusiasm: 20, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: -2.0, south: -2.0 }, legislative_effects: -10 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "biden",
    question: "The military withdrawal from Afghanistan has turned chaotic. The Taliban has captured Kabul in 11 days. Americans are stranded at the airport. Images of desperate Afghans clinging to aircraft are circling the globe. How do you respond?",
    answers: [
      { text: "Fly to Kabul personally to oversee the evacuation — show the world America does not abandon its people.", feedback: "The Secret Service is appalled but the image of the president on the ground is a defining act of personal leadership.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 15, funds: -20000 }, regional_effects: { northeast: 3.0, midwest: 3.0, west_coast: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 2 },
      { text: "Defend the withdrawal as right, own the chaos, and authorize additional military assets to complete the airlift.", feedback: "120,000 people are airlifted to safety — the largest airlift in American history. The chaos narrative does not go away.", effects: { political_capital: -5, approval: -3, base_enthusiasm: 5, funds: -30000 }, regional_effects: { south: -2.0, plains: -2.0, midwest: -1.0 }, legislative_effects: 0 },
      { text: "Blame the Afghan government and military for collapsing — America cannot be responsible for a country that won't fight for itself.", feedback: "A hard-nosed but politically damaging deflection. The images of the evacuation haunt your approval rating for months.", effects: { political_capital: 5, approval: -8, base_enthusiasm: -10, funds: 0 }, regional_effects: { south: -3.0, plains: -3.0, midwest: -2.0, northeast: -2.0 }, legislative_effects: -5 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "biden",
    question: "Inflation hits 7%, the highest in 40 years. Republicans are using it to hammer Democrats in every swing district. Your progressive wing wants price controls. Moderates want Fed independence and fiscal restraint.",
    answers: [
      { text: "Stand fully behind Federal Reserve independence to raise rates — let the Fed do its job even if it means short-term pain.", feedback: "A politically painful but economically sound decision. Inflation peaks and begins to decline. Your polls drop significantly.", effects: { political_capital: 15, approval: -8, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: -3.0, plains: -2.0, south: -2.0, northeast: 2.0 }, legislative_effects: 5 },
      { text: "Announce a targeted corporate price-gouging investigation by the FTC in energy and food industries.", feedback: "A popular and politically effective move that gives voters someone to blame besides you. Gas prices begin to moderate.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 12, funds: -10000 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: 2.0, west_coast: 2.0, plains: 2.0 }, legislative_effects: 3 },
      { text: "Release record amounts of oil from the Strategic Petroleum Reserve to drive down gas prices before the midterms.", feedback: "Gas prices fall 40 cents a gallon in two months. The midterm environment improves. Long-term reserves are depleted.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 0, funds: -5000 }, regional_effects: { midwest: 4.0, south: 3.0, plains: 3.0, northeast: 2.0, west_coast: 2.0 }, legislative_effects: 0 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "biden",
    question: "The Supreme Court has overturned Roe v. Wade in a bombshell decision. Abortion is now illegal in 13 states overnight. Your base is furious and demanding executive action. What do you do?",
    answers: [
      { text: "Sign an executive order protecting access to abortion medication nationwide and directing the DOJ to protect interstate travel for abortions.", feedback: "A bold executive response that shows you are fighting. Republicans immediately challenge in court, creating a constitutional standoff.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 25, funds: 0 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: -4.0, plains: -5.0 }, legislative_effects: -5 },
      { text: "Call on Congress to codify Roe v. Wade into law, making it explicit that abortion access is federal law.", feedback: "The legislative push energizes your coalition enormously. The Senate fails by 2 votes, but the fight fires up your GOTV.", effects: { political_capital: -20, approval: 3, base_enthusiasm: 20, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, south: -3.0, plains: -3.0 }, legislative_effects: -5 },
      { text: "Issue a state of emergency protecting reproductive healthcare under federal civil rights statutes.", feedback: "A creative legal strategy that is praised for its scope. Courts stay the order but the fight becomes the centerpiece of the election.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 18, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 3.0, south: -3.0, plains: -4.0 }, legislative_effects: -3 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "biden",
    question: "Russia has invaded Ukraine with 200,000 troops. Your allies demand action. Your base is split between military support for Ukraine and fear of nuclear escalation. What is America's response?",
    answers: [
      { text: "Authorize advanced weapons packages including air defense systems and long-range artillery. 'We will give Ukraine everything it needs to win.'", feedback: "NATO allies are galvanized. Ukraine holds the front. Republicans in Congress accuse you of risking World War 3.", effects: { political_capital: -15, approval: 4, base_enthusiasm: 8, funds: -40000 }, regional_effects: { northeast: 4.0, west_coast: 3.0, midwest: 2.0, south: -1.0 }, legislative_effects: 5 },
      { text: "Organize a massive international sanctions coalition freezing Russia's central bank and removing them from SWIFT.", feedback: "The most sweeping economic sanctions in history. Russia's economy contracts sharply. NATO unity has never been stronger.", effects: { political_capital: -10, approval: 6, base_enthusiasm: 10, funds: -20000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 6 },
      { text: "Pursue direct diplomacy with Moscow, offering Ukraine's neutrality in exchange for a ceasefire and troop withdrawal.", feedback: "Ukraine feels betrayed. NATO is shaken. But your anti-war base is relieved and polling in the Midwest improves.", effects: { political_capital: 10, approval: -2, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 3.0, plains: 2.0, south: 1.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "biden",
    question: "Your re-election campaign begins. Your approval is at 44%. Inflation is still the top issue. How do you frame your campaign?",
    answers: [
      { text: "Run on 'Finish the Job' — infrastructure, chips manufacturing, veterans care. The economy just needs more time.", feedback: "A credible incumbent defense that reminds voters of real accomplishments. Moderates respond to the steady-hand message.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 5, funds: -30000 }, regional_effects: { midwest: 5.0, south: 2.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } },
      { text: "Run hard on democracy and abortion rights — make it an existential choice, not an economic referendum.", feedback: "A galvanizing progressive frame that drives base turnout, particularly among women and young voters.", effects: { political_capital: 0, approval: 1, base_enthusiasm: 22, funds: -25000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: 2.0, plains: -2.0 } },
      { text: "Run explicitly against your opponent personally — make the election a character referendum, not a policy debate.", feedback: "The contrast message is effective in reminding soft Republicans of their doubts. Bipartisan approval holds.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 10, funds: -20000 }, regional_effects: { midwest: 4.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "biden",
    question: "Debate night. Your opponent is aggressive, interrupting, and calling you 'Sleepy Joe.' You are 80 years old. The country is watching to see if you still have it. How do you play it?",
    answers: [
      { text: "Respond with sharp wit and command of facts — show the country the senator who debated Paul Ryan.", feedback: "You win the exchange on substance. The '10,000 lies' line becomes the most quoted of the cycle. Base is re-energized.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 18, funds: 0 }, regional_effects: { midwest: 4.0, south: 2.0, northeast: 4.0, west_coast: 4.0, plains: 2.0 } },
      { text: "Ignore the attacks entirely and speak directly to the kitchen table issues — insulin, Social Security, veterans.", feedback: "A presidential above-the-fray performance that suburban independents call 'dignified and reassuring.'", effects: { political_capital: 10, approval: 4, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 3.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } },
      { text: "Challenge your opponent to answer for January 6th directly — 'Look at what you did. The whole world saw.'", feedback: "The January 6th challenge lands explosively. Suburban women in Phoenix and Atlanta are visibly moved.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 22, funds: 0 }, regional_effects: { south: 4.0, midwest: 3.0, northeast: 5.0, west_coast: 5.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "biden",
    question: "A prominent progressive activist has publicly said they will not vote for you due to your handling of Gaza. The progressive-to-moderate fault line is at its worst. How do you handle the dissent?",
    answers: [
      { text: "Hold a live town hall with young progressive voters and listen to their concerns about your foreign policy.", feedback: "Your willingness to show up and listen moves more progressives than any talking point. 'He actually came.'", effects: { political_capital: -10, approval: 3, base_enthusiasm: 15, funds: -10000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 2.0 } },
      { text: "Announce a condition on further military aid — 'the path to weapons support runs through humanitarian corridors.'", feedback: "The policy shift moves the needle with uncommitted voters and generates enormous progressive goodwill.", effects: { political_capital: -15, approval: 4, base_enthusiasm: 18, funds: -10000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 2.0, south: -2.0 } },
      { text: "Defend your record firmly and tell progressives you need their vote more than their approval.", feedback: "A blunt message that resonates with pragmatic progressives. The idealist wing is unenthusiastic but shows up.", effects: { political_capital: 5, approval: 1, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 2.0, south: 1.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "biden",
    question: "Social Security cuts are being threatened by your opponent. You have defended Social Security your entire career. How do you use this moment?",
    answers: [
      { text: "Make Social Security the centerpiece of the final month — 'They will cut your check. I will not.'", feedback: "Senior voters, who decide close elections, shift dramatically toward you. Florida becomes genuinely competitive.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 12, funds: -25000 }, regional_effects: { south: 5.0, midwest: 4.0, northeast: 4.0, west_coast: 3.0, plains: 3.0 } },
      { text: "Introduce emergency legislation to expand Social Security benefits by $200/month for current recipients.", feedback: "A dramatic policy announcement that dominates news cycles and puts Republicans immediately on defense.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 18, funds: -10000 }, regional_effects: { south: 4.0, midwest: 4.0, northeast: 4.0, west_coast: 3.0, plains: 3.0 }, legislative_effects: -5 },
      { text: "Hold a forum with senior groups, AARP, and retirees — make the case through trusted messengers.", feedback: "A powerful endorsement coalition that credibly reaches undecided seniors in Florida, Pennsylvania, and Arizona.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 8, funds: -15000 }, regional_effects: { south: 4.0, midwest: 3.0, northeast: 3.0, west_coast: 2.0, plains: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "biden",
    question: "Election Eve. Pennsylvania is the firewall. Which coalition do you energize for the final GOTV?",
    answers: [
      { text: "Put every surrogate — Obama, Clinton, Springsteen — into Philadelphia and Pittsburgh for a massive unity closing.", feedback: "The star power and legacy endorsements drive record Philadelphia turnout. Pennsylvania holds.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 20, funds: -35000 }, regional_effects: { northeast: 6.0, midwest: 3.0, south: 2.0, west_coast: 2.0 } },
      { text: "Hold a personal intimate campaign event in Scranton — 'I'm coming home one last time.'", feedback: "The Scranton homecoming is an extraordinarily authentic closing. Pennsylvania's working class responds.", effects: { political_capital: 5, approval: 6, base_enthusiasm: 15, funds: -15000 }, regional_effects: { midwest: 6.0, northeast: 5.0, south: 2.0, plains: 2.0 } },
      { text: "Focus all resources on Wisconsin and Michigan GOTV — build the firewall on multiple walls.", feedback: "A strategic breadth approach that ensures electoral college paths even if Pennsylvania underperforms.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 15, funds: -30000 }, regional_effects: { midwest: 7.0, northeast: 2.0, south: 1.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "biden",
    question: "Election Night. Counting is taking days. Your opponent is claiming fraud before all votes are counted. The country is tense. What is your message to the nation?",
    answers: [
      { text: "Address the nation calmly: 'Every vote will be counted. That is how democracy works. We will accept the result.'", feedback: "Your calm, presidential statement becomes the defining contrast of the election. The nation breathes a collective sigh of relief.", effects: { political_capital: 10, approval: 7, base_enthusiasm: 8, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 4.0, south: 3.0, plains: 3.0 } },
      { text: "Stay silent and let the counting happen without presidential interference of any kind.", feedback: "A principled democratic gesture. But your supporters get nervous by the second day and want reassurance.", effects: { political_capital: 5, approval: 2, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 1.0, northeast: 1.0 } },
      { text: "Publicly challenge your opponent's fraud claims with specific, factual rebuttals from election officials.", feedback: "Your fact-based response wins over skeptical moderates and keeps the narrative from being dominated by the opposition.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0, northeast: 3.0, west_coast: 3.0, plains: 2.0 } }
    ]
  },

  // ─── GAVIN NEWSOM SCENARIOS ───────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "newsom",
    question: "California's housing crisis has become a national crisis. Rents in major cities are up 50% in five years. You campaigned on fixing it. The housing lobby, tenant unions, and NIMBY homeowners all want different things. What is your first national housing move?",
    answers: [
      { text: "Use federal zoning preemption law to override local single-family-only zoning in every major metro in America.", feedback: "The boldest housing policy in American history. Developers cheer. Suburban homeowners revolt. Millions of units begin planning.", effects: { political_capital: -25, approval: 2, base_enthusiasm: 15, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: -3.0, south: -3.0, plains: -4.0 }, legislative_effects: -8 },
      { text: "Pass a national tenant protection framework — universal rent stabilization and eviction protections for all renters.", feedback: "60 million renters wake up with new rights. Real estate stocks drop 12%. Suburban landlords fund opposition campaigns.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 22, funds: -10000 }, regional_effects: { northeast: 5.0, west_coast: 5.0, midwest: 3.0, south: -2.0, plains: -3.0 }, legislative_effects: -6 },
      { text: "Invest $300B in federal housing construction vouchers and grants to states to build more affordable units.", feedback: "A market-compatible approach that threads the needle between renters and builders. Supply starts to increase slowly.", effects: { political_capital: -15, approval: 4, base_enthusiasm: 8, funds: -40000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "newsom",
    question: "Unsheltered homelessness has exploded in major cities, with tent cities visible across America. You made this your signature issue in California. Republicans are using it to attack Democrats nationally. How do you address it?",
    answers: [
      { text: "Issue a national directive — every federal agency must make land available for emergency shelter. Housing is a right.", feedback: "Unprecedented federal mobilization that puts real resources behind the issue. Cities that resist federal direction face enormous political pressure.", effects: { political_capital: -20, approval: 4, base_enthusiasm: 20, funds: -50000 }, regional_effects: { west_coast: 6.0, northeast: 4.0, midwest: 2.0, south: -2.0, plains: -3.0 }, legislative_effects: -5 },
      { text: "Create a national homelessness czar with $50B and a mandate to reduce visible homelessness by 50% in four years.", feedback: "A bold target-setting approach that generates accountability. Cities get resources but are expected to show results.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 12, funds: -50000 }, regional_effects: { west_coast: 4.0, northeast: 4.0, midwest: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 4 },
      { text: "Fund a national mental health and substance abuse treatment system — address the root causes of chronic homelessness.", feedback: "A long-term investment that mental health advocates celebrate. Republicans attack you for not clearing encampments.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 10, funds: -40000 }, regional_effects: { west_coast: 3.0, northeast: 4.0, midwest: 2.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "newsom",
    question: "Climate-fueled wildfires and hurricanes have caused $300B in disaster costs in one year. Insurance companies are pulling out of high-risk states. Millions of homeowners cannot get insurance.",
    answers: [
      { text: "Create a federal climate disaster insurance backstop — the government guarantees coverage where private markets fail.", feedback: "Millions of homeowners breathe a sigh of relief. Fiscal conservatives call it a $500B liability. Climate advocates say it enables bad development.", effects: { political_capital: -20, approval: 6, base_enthusiasm: 10, funds: -60000 }, regional_effects: { south: 5.0, west_coast: 5.0, midwest: 3.0, northeast: 3.0, plains: 2.0 }, legislative_effects: -5 },
      { text: "Declare a National Climate Emergency and accelerate federal restrictions on fossil fuels, emissions, and coastal development.", feedback: "A bold environmental stance that your progressive base celebrates but that alienates energy-state Democrats.", effects: { political_capital: -25, approval: 3, base_enthusiasm: 25, funds: -20000 }, regional_effects: { west_coast: 7.0, northeast: 5.0, south: -5.0, plains: -5.0, midwest: -3.0 }, legislative_effects: -8 },
      { text: "Convene an emergency FEMA restructuring and double disaster recovery funding to states hit by climate disasters.", feedback: "A practical and popular response that helps without the political war of a climate emergency declaration.", effects: { political_capital: -10, approval: 5, base_enthusiasm: 8, funds: -40000 }, regional_effects: { south: 4.0, west_coast: 4.0, midwest: 3.0, northeast: 3.0, plains: 2.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "newsom",
    question: "Silicon Valley is demanding a national AI regulatory framework. Labor unions fear mass automation. Tech companies fear overregulation. Progressive advocates want strict oversight. What do you do?",
    answers: [
      { text: "Sign a landmark AI Governance Act — mandatory safety reviews for AI systems and an AI workers' protection fund.", feedback: "A globally recognized regulatory leadership moment. U.S. tech companies grumble. European allies applaud.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 12, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: 2.0 }, legislative_effects: 6 },
      { text: "Convene a year-long blue-ribbon AI commission before any regulation — get it right before you get it fast.", feedback: "Tech companies are relieved. Labor unions call it kicking the can. The report shapes the global conversation.", effects: { political_capital: 10, approval: 3, base_enthusiasm: -5, funds: 0 }, regional_effects: { west_coast: 3.0, northeast: 2.0 }, legislative_effects: 3 },
      { text: "Authorize $100B in federal AI investment for workforce retraining — let the market innovate, government helps workers adapt.", feedback: "A pro-growth approach that funds worker transition programs without restricting innovation. Both camps claim partial victory.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 5, funds: -40000 }, regional_effects: { midwest: 4.0, west_coast: 3.0, northeast: 3.0, south: 2.0, plains: 2.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "newsom",
    question: "Record numbers of migrants are arriving at the southern border. Border communities are overwhelmed. Republicans are demanding mass deportation. Your progressive base demands humane treatment and a path to citizenship.",
    answers: [
      { text: "Sign a comprehensive immigration reform bill — a path to citizenship for 11 million undocumented Americans in exchange for modernized border infrastructure.", feedback: "The most significant immigration reform in 40 years. The Senate barely passes it with 3 Republican votes. Your coalition is unified.", effects: { political_capital: -30, approval: 3, base_enthusiasm: 20, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: 2.0, south: -4.0, plains: -5.0 }, legislative_effects: -5 },
      { text: "Expand legal immigration pathways and refugee quotas while increasing resources for faster asylum processing.", feedback: "A compassionate, orderly approach that reduces backlog and illegal crossings over time. Does not satisfy either extreme.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 5, funds: -30000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 2.0, south: -1.0 }, legislative_effects: 4 },
      { text: "Deploy National Guard to assist CBP at the border and dramatically increase deportation of those denied asylum.", feedback: "A centrist enforcement approach that wins moderate approval. Your progressive base calls it a betrayal of immigrant communities.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -18, funds: -20000 }, regional_effects: { south: 4.0, plains: 3.0, midwest: 3.0, west_coast: -4.0, northeast: -2.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "newsom",
    question: "California's Proposition 8 precedent has inspired a national push. A constitutional amendment banning same-sex marriage is gaining Republican support. You are the president who championed marriage equality. How do you fight it?",
    answers: [
      { text: "Codify marriage equality into federal law immediately through the Respect for Marriage Act expansion.", feedback: "Congress passes the expansion with bipartisan support. A historic legislative achievement that also neutralizes the amendment threat.", effects: { political_capital: -20, approval: 5, base_enthusiasm: 20, funds: -10000 }, regional_effects: { west_coast: 5.0, northeast: 5.0, midwest: 2.0, south: -4.0, plains: -5.0 }, legislative_effects: 5 },
      { text: "Lead a national campaign mobilizing LGBTQ+ organizations and allies to defeat the amendment at the state level.", feedback: "A grassroots defense that stops the amendment in 12 of the 38 required state legislatures. The threat is contained.", effects: { political_capital: -15, approval: 4, base_enthusiasm: 18, funds: -30000 }, regional_effects: { west_coast: 5.0, northeast: 5.0, midwest: 2.0 }, legislative_effects: 2 },
      { text: "Challenge the constitutional amendment process itself — invoke equal protection principles in federal court immediately.", feedback: "A legal blocking strategy that delays the amendment for years while courts deliberate the procedure.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 10, funds: -5000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 1.0 }, legislative_effects: -2 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "newsom",
    question: "Your re-election campaign opens. You are the first California governor elevated to the presidency. Republicans are running against 'coastal elite liberalism.' How do you frame your campaign?",
    answers: [
      { text: "Run explicitly on California as a preview — 'What California does today, America does tomorrow. And America is ready.'", feedback: "A bold defense of progressive governance that electrifies the coasts. Midwest and South voters are skeptical but intrigued.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 22, funds: -25000 }, regional_effects: { west_coast: 6.0, northeast: 5.0, midwest: -3.0, south: -4.0, plains: -4.0 } },
      { text: "Run as an economic populist — 'We built more clean energy jobs than any state in history. Let's do it for America.'", feedback: "A compelling jobs-and-economy frame that moves working-class voters in the Rust Belt and Sun Belt.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 12, funds: -30000 }, regional_effects: { midwest: 5.0, south: 3.0, west_coast: 4.0, northeast: 3.0, plains: 2.0 } },
      { text: "Run against the opposition personally — make the choice about authoritarianism versus democracy.", feedback: "A galvanizing choice frame that drives base turnout. Every voter knows exactly what is at stake.", effects: { political_capital: 0, approval: 1, base_enthusiasm: 20, funds: -20000 }, regional_effects: { west_coast: 5.0, northeast: 5.0, midwest: 2.0, south: 1.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "newsom",
    question: "Debate night. Your opponent calls you 'a walking California failure — homelessness, housing, and high taxes.' The entire country has heard this attack for months. How do you respond?",
    answers: [
      { text: "Challenge them with data: 'California has the 5th largest GDP on Earth and 10% of America's GDP. What's your state's economy look like?'", feedback: "The economic counter-punch lands. Post-debate polling gives you a 9-point win. Silicon Valley celebrates.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 18, funds: 0 }, regional_effects: { west_coast: 5.0, northeast: 5.0, midwest: 2.0, south: 1.0 } },
      { text: "Own the challenge: 'Yes, California has hard problems. So does America. The difference is I actually show up and try.'", feedback: "An unexpectedly humble and human moment. Swing voters in the Midwest call it 'the most honest thing I've heard from a politician.'", effects: { political_capital: 0, approval: 6, base_enthusiasm: 15, funds: 0 }, regional_effects: { midwest: 5.0, south: 3.0, northeast: 4.0, west_coast: 4.0, plains: 2.0 } },
      { text: "Pivot immediately: 'Let's talk about what they did when they had power — January 6th, gutted Medicare, banned books in schools.'", feedback: "An aggressive contrast pivot that dominates the post-debate coverage. Moderates respect the discipline.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 20, funds: 0 }, regional_effects: { west_coast: 5.0, northeast: 5.0, south: 2.0, midwest: 3.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "newsom",
    question: "A major tech company based in California has announced it is moving its headquarters to Texas to 'escape California's regulatory environment.' Your opponent is calling it proof that your state is failing. How do you respond?",
    answers: [
      { text: "Call the CEO personally on live TV and challenge them to name a single policy that actually drove the move.", feedback: "The CEO declines. Your bold challenge dominates the news cycle and you win the confrontation on substance.", effects: { political_capital: -5, approval: 5, base_enthusiasm: 15, funds: 0 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: 2.0, south: -1.0 } },
      { text: "Highlight the thousands of companies that chose to STAY in California — and the new ones coming in.", feedback: "A fact-based counter that places the story in context. Business media provides credible backup.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 8, funds: -10000 }, regional_effects: { west_coast: 4.0, northeast: 3.0, midwest: 2.0 } },
      { text: "Announce immediate targeted tax incentives for tech companies that maintain their national headquarters in America.", feedback: "A policy response that converts the attack into an agenda item. Business donors respond favorably.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 5, funds: 30000 }, regional_effects: { west_coast: 3.0, northeast: 3.0, midwest: 3.0 }, legislative_effects: 3 }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "newsom",
    question: "Late-breaking polling shows Florida and Texas are closer than expected. Do you make an audacious play for one of those states?",
    answers: [
      { text: "Commit $50M and two weeks of surrogate time to Florida — make the opposition play defense in their own backyard.", feedback: "The Florida blitz shocks the political establishment. Senior voters in Tampa and Fort Lauderdale listen. The margin tightens dramatically.", effects: { political_capital: -5, approval: 3, base_enthusiasm: 15, funds: -50000 }, regional_effects: { south: 7.0, west_coast: 2.0, northeast: 2.0 } },
      { text: "Hold a massive rally in Houston, Texas — 'The future of America doesn't belong to any one party.'", feedback: "The Houston rally draws 80,000 people and generates enormous national media coverage. Texas doesn't flip, but it drains their resources.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 18, funds: -30000 }, regional_effects: { south: 6.0, midwest: 2.0, west_coast: 2.0, northeast: 2.0 } },
      { text: "Focus on Arizona and Nevada — realistically attainable Sun Belt states rather than fantasy plays.", feedback: "A disciplined electoral college strategy that locks Arizona and Nevada while keeping Ohio competitive.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 12, funds: -35000 }, regional_effects: { south: 4.0, west_coast: 4.0, midwest: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "newsom",
    question: "Election Eve. Your strongest coalition is young urban voters, Latino voters, and college-educated suburbs. Where do you make the final push?",
    answers: [
      { text: "A massive college campus tour — 20 campuses in 4 states in 24 hours with the biggest acts in music and celebrity.", feedback: "Youth turnout breaks records in Arizona, Nevada, Pennsylvania, and Wisconsin. The cultural campaign works.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 28, funds: -40000 }, regional_effects: { west_coast: 5.0, northeast: 5.0, south: 3.0, midwest: 4.0 } },
      { text: "Spanish-language advertising blitz across every Sun Belt state — the Latino coalition is your margin of victory.", feedback: "Spanish-language GOTV in Arizona, Nevada, and Florida drives record Latino turnout. The strategy succeeds decisively.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 20, funds: -35000 }, regional_effects: { south: 6.0, west_coast: 5.0, midwest: 2.0 } },
      { text: "A primetime closing speech from the Golden Gate Bridge — California as America's symbol of possibility.", feedback: "The visuals are spectacular. The message is aspirational. National press covers it as the image of the campaign.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 15, funds: -20000 }, regional_effects: { west_coast: 6.0, northeast: 5.0, midwest: 3.0, south: 3.0, plains: 2.0 } }
    ]
  },

  // ─── GEORGE W. BUSH SCENARIOS ──────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "gwbush",
    question: "September 11, 2001. The world has changed forever. You are in a classroom in Florida when you receive the news. The nation is in shock. How do you respond to the greatest crisis of your presidency?",
    answers: [
      { text: "Fly to Ground Zero immediately — take a bullhorn and speak to the rescue workers and the nation.", feedback: "The bullhorn moment becomes the defining image of your presidency. 'I can hear you! The rest of the world hears you!' Approval ratings soar to record heights.", effects: { political_capital: 20, approval: 20, base_enthusiasm: 25, funds: 0 }, regional_effects: { northeast: 8.0, midwest: 6.0, south: 5.0, plains: 5.0, west_coast: 4.0 }, legislative_effects: 10 },
      { text: "Address the nation from the Oval Office with calm, measured resolve — focus on security and the hunt for the perpetrators.", feedback: "A steady, presidential performance that reassures a frightened public. You project strength and stability during the initial chaos.", effects: { political_capital: 10, approval: 12, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 4.0, midwest: 4.0 }, legislative_effects: 5 },
      { text: "Declare a National State of Emergency and immediately ground all civilian aircraft nationwide.", feedback: "A necessary security measure that prevents further attacks but highlights the vulnerability of the nation. The public is tense but compliant.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 5, funds: -10000 }, regional_effects: { northeast: 2.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "gwbush",
    question: "In your State of the Union address, you identify an 'Axis of Evil' — North Korea, Iran, and Iraq — as regimes that support terror and seek weapons of mass destruction. How aggressively do you pursue this doctrine?",
    answers: [
      { text: "The Bush Doctrine: Proclaim that the U.S. will take preemptive action against any regime that threatens us with WMDs.", feedback: "Your base and hawks are electrified by the boldness. But the international community and domestic critics warn of endless war.", effects: { political_capital: -5, approval: -2, base_enthusiasm: 20, funds: -20000 }, regional_effects: { plains: 5.0, south: 5.0, west_coast: -4.0, northeast: -4.0 }, legislative_effects: -4 },
      { text: "Focus primarily on diplomatic isolation and sanctions while building a broad international coalition for any future action.", feedback: "Moderates and allies are relieved by the caution. Your base, however, feels you are losing the momentum of the post-9/11 surge.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -10, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 2.0 }, legislative_effects: 6 },
      { text: "Target only the immediate threat in Afghanistan while keeping other 'Axis' states under strict intelligence surveillance.", feedback: "A focused approach that avoids overextension, though critics call it 'half-measures' in the face of global terror.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 5, funds: -10000 }, regional_effects: { midwest: 2.0, northeast: 2.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "gwbush",
    question: "Intelligence reports suggest Saddam Hussein is hiding WMDs and has ties to Al-Qaeda. You are considering a full-scale invasion of Iraq to remove him from power. The UN is divided. What is your decision?",
    answers: [
      { text: "Go in with a 'Coalition of the Willing' — invade Iraq to disarm the regime and spread democracy in the Middle East.", feedback: "The invasion begins with a 'Shock and Awe' campaign. Saddam is toppled quickly, but no WMDs are found, and a long insurgency begins.", effects: { political_capital: -20, approval: -5, base_enthusiasm: 25, funds: -50000 }, regional_effects: { south: 6.0, plains: 6.0, northeast: -7.0, west_coast: -7.0, midwest: -3.0 }, legislative_effects: -8 },
      { text: "Demand a final round of UN inspections with a strict deadline for compliance or face military action.", feedback: "Delays the war but maintains international legitimacy. Saddam's stalling tactics continue to frustrate your administration and the base.", effects: { political_capital: 10, approval: 2, base_enthusiasm: -15, funds: -10000 }, regional_effects: { midwest: 2.0, northeast: 2.0 }, legislative_effects: 5 },
      { text: "Focus entirely on the war in Afghanistan and Al-Qaeda, postponing any move against Iraq for the foreseeable future.", feedback: "Avoids the Iraq quagmire entirely. Your base feels you let a major threat off the hook, but you maintain higher national approval.", effects: { political_capital: 5, approval: 8, base_enthusiasm: -10, funds: 20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 3.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "gwbush",
    question: "You want to pass a massive tax cut to stimulate the economy and return the budget surplus to the people. Democrats call it a giveaway to the rich. How do you pass your signature economic plan?",
    answers: [
      { text: "Push the full 'Bush Tax Cuts' through Congress — $1.35 trillion in cuts for everyone, including the top bracket.", feedback: "The cuts pass! The base is ecstatic, and consumer spending rises. But the national debt begins to climb rapidly.", effects: { political_capital: -15, approval: 3, base_enthusiasm: 22, funds: -40000 }, regional_effects: { plains: 5.0, south: 5.0, midwest: 3.0, northeast: -2.0 }, legislative_effects: 10 },
      { text: "Limit the tax cuts to middle and lower-income families to win over moderate Democrats.", feedback: "A bipartisan win that stabilizes your approval. Your conservative base is disappointed that you left the supply-side edge behind.", effects: { political_capital: 15, approval: 5, base_enthusiasm: -12, funds: 0 }, regional_effects: { midwest: 4.0, northeast: 2.0 }, legislative_effects: 8 },
      { text: "Couple the tax cuts with a massive expansion of Medicare to include prescription drug coverage (Part D).", feedback: "Hugely popular with seniors and moderates, but your fiscal conservative base is horrified by the new entitlement spending.", effects: { political_capital: -10, approval: 8, base_enthusiasm: 5, funds: -20000 }, regional_effects: { midwest: 5.0, south: 4.0, northeast: 4.0, west_coast: 4.0, plains: 3.0 }, legislative_effects: 6 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "gwbush",
    question: "You've proposed 'No Child Left Behind' — a sweeping education reform that mandates standardized testing and holds schools accountable. Teachers' unions and states' rights advocates are both wary.",
    answers: [
      { text: "Push for the full bill with federal oversight and strict penalties for failing schools.", feedback: "NCLB becomes law with significant bipartisan support. It reshapes American education, but the 'teaching to the test' backlash begins.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 8, funds: -10000 }, regional_effects: { midwest: 3.0, northeast: 3.0, south: 2.0 }, legislative_effects: 9 },
      { text: "Compromise to allow states more flexibility in designing their own standards and testing schedules.", feedback: "The bill passes easily but its impact is diluted. Both parties claim victory, but education advocates say it lacks teeth.", effects: { political_capital: 5, approval: 2, base_enthusiasm: -5, funds: 0 }, regional_effects: { plains: 1.0, south: 1.0 }, legislative_effects: 5 },
      { text: "Focus education reform entirely on school vouchers and private choice rather than federal mandates.", feedback: "Electrifies your conservative base but the bill dies in a Senate filibuster. You are left with no major education win.", effects: { political_capital: -20, approval: -4, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 4.0, south: 4.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: -10 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "gwbush",
    question: "Hurricane Katrina has devastated the Gulf Coast. New Orleans is underwater. The federal response is being criticized as slow and disorganized. The nation is watching. What is your move?",
    answers: [
      { text: "Fly to the region immediately and personally oversee the rescue operations from the ground.", feedback: "A hands-on response that helps repair the image of federal competence. You fire the FEMA director on the spot. Approval stabilizes.", effects: { political_capital: -5, approval: 2, base_enthusiasm: 10, funds: -30000 }, regional_effects: { south: 5.0, midwest: 2.0, plains: 2.0 } },
      { text: "Coordinate the response from Washington while ordering the military to take over all logistics and security.", feedback: "Efficient but distant. The image of you looking at the destruction from Air Force One becomes a symbol of detachment.", effects: { political_capital: 10, approval: -6, base_enthusiasm: -15, funds: -20000 }, regional_effects: { south: -5.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: -5 },
      { text: "Announce a massive federal reconstruction fund — the 'Gulf Coast Recovery Act' — to rebuild the region entirely.", feedback: "A bold financial commitment that focuses on the future, but does nothing to solve the immediate humanitarian disaster.", effects: { political_capital: -20, approval: -2, base_enthusiasm: 5, funds: -60000 }, regional_effects: { south: 3.0, midwest: 1.0 } }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "gwbush",
    question: "Your re-election campaign kicks off. Your opponent is attacking your handling of the Iraq War and the economy. What is the central message of your campaign?",
    answers: [
      { text: "Stay the Course: Frame the election as a choice of resolve in the War on Terror. You are the steady hand.", feedback: "A powerful message of strength that resonates with 'Security Moms' and the base. You paint the opponent as a 'flip-flopper.'", effects: { political_capital: 0, approval: 3, base_enthusiasm: 20, funds: -30000 }, regional_effects: { plains: 5.0, south: 5.0, midwest: 3.0, northeast: -2.0 } },
      { text: "Compassionate Conservatism: Highlight your education and Medicare wins to win over suburban moderates.", feedback: "Broadens your appeal and protects you in the Midwest, but dampens the enthusiast edge your base expects in wartime.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -5, funds: -40000 }, regional_effects: { midwest: 5.0, northeast: 2.0, south: 1.0 } },
      { text: "Faith-Based Initiative: Focus on social issues and your judicial record to fire up the evangelical base.", feedback: "Evangelical turnout is projected to be record-breaking. You secure the 'Red' states but alienate secular voters on the coasts.", effects: { political_capital: 0, approval: -1, base_enthusiasm: 25, funds: -20000 }, regional_effects: { plains: 6.0, south: 6.0, northeast: -4.0, west_coast: -5.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "gwbush",
    question: "The opponent is John Kerry, a decorated Vietnam veteran. A group called 'Swift Boat Veterans for Truth' has released ads questioning his war record. How does your campaign handle this controversy?",
    answers: [
      { text: "Quietly allow the ads to run while your campaign maintains a focus on Kerry's Senate voting record.", feedback: "The ads effectively damage Kerry's greatest strength — his war record — without you getting your hands dirty. Brutally effective.", effects: { political_capital: -5, approval: 2, base_enthusiasm: 15, funds: 0 }, regional_effects: { plains: 4.0, south: 4.0, midwest: 3.0 } },
      { text: "Publicly distance yourself from the ads and call for a focus on the issues of today.", feedback: "A high-road move that wins praise for presidential conduct, but allows Kerry to maintain his war hero narrative.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -10, funds: 0 }, regional_effects: { northeast: 3.0, west_coast: 3.0 } },
      { text: "Attack Kerry's Senate record as 'more liberal than Ted Kennedy' to shift the focus to ideology.", feedback: "Successfully paints Kerry as out-of-touch with the mainstream. The 'liberal' label sticks in the Midwest and South.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 12, funds: -20000 }, regional_effects: { midwest: 4.0, south: 3.0, plains: 2.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "gwbush",
    question: "Social issues are defining the campaign. A push for a Federal Marriage Amendment is gathering steam. Where do you stand?",
    answers: [
      { text: "Endorse the Federal Marriage Amendment — define marriage as between one man and one woman.", feedback: "Electrifies your socially conservative base in the South and Plains. It becomes a massive turnout driver on election day.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 30, funds: 0 }, regional_effects: { plains: 7.0, south: 6.0, northeast: -6.0, west_coast: -6.0, midwest: 2.0 } },
      { text: "Support civil unions but state that marriage should be left to the states to decide.", feedback: "A moderate middle ground that avoids the worst of the coastal backlash but fails to fire up the evangelical base.", effects: { political_capital: 5, approval: 3, base_enthusiasm: -5, funds: 0 }, regional_effects: { midwest: 2.0, northeast: 1.0 } },
      { text: "Pivot to your judicial appointments — promise to appoint more conservative judges like Scalia and Thomas.", feedback: "A brilliant move that unites all wings of the party. The base is happy, and the focus stays on the courts rather than the amendment.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 15, funds: 0 }, regional_effects: { plains: 4.0, south: 4.0, midwest: 2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "gwbush",
    question: "The War in Iraq is entering its second year. No WMDs have been found. The opponent is calling it a 'wrong war, at the wrong time.' How do you respond in the debates?",
    answers: [
      { text: "Double down: 'The world is better off without Saddam Hussein.' Reiterate that the intelligence was shared by all.", feedback: "Your resolve is your greatest asset. Supporters see a leader who doesn't blink; critics see a leader who won't admit a mistake.", effects: { political_capital: -5, approval: 0, base_enthusiasm: 22, funds: 0 }, regional_effects: { plains: 5.0, south: 5.0, west_coast: -5.0, northeast: -4.0 } },
      { text: "Pivot to the broader War on Terror — frame Iraq as just one front in a global struggle for freedom.", feedback: "Effectively broadens the context and makes the war seem more essential. The security message holds in the swing states.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 15, funds: 0 }, regional_effects: { midwest: 4.0, south: 3.0, plains: 2.0 } },
      { text: "Admit the intelligence was flawed but argue that Kerry's own vote for the war makes him unfit to lead.", feedback: "A tactical counter-attack that successfully labels Kerry a 'flip-flopper.' If he was wrong then, how can we trust him now?", effects: { political_capital: 5, approval: 1, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: 3.0, south: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "gwbush",
    question: "Election Eve. The map is deeply polarized. Everything comes down to Ohio. Where do you hold your final rally?",
    answers: [
      { text: "A massive 'Victory' rally in Columbus, Ohio — 'Freedom is on the march!'", feedback: "The enthusiasm in Ohio is palpable. You drive turnout to its absolute limit in the rural counties and suburbs.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 25, funds: -30000 }, regional_effects: { midwest: 7.0, plains: 3.0, south: 2.0 } },
      { text: "A multi-state blitz through Ohio, Florida, and Iowa — the 'Heartland' tour.", feedback: "You secure a broad electoral college floor. Florida and Iowa look safe, while Ohio remains a knife-edge toss-up.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 15, funds: -40000 }, regional_effects: { midwest: 4.0, south: 5.0, plains: 4.0 } },
      { text: "A primetime address from your ranch in Crawford, Texas — a message of humble strength and faith.", feedback: "The 'authenticity' play. It shores up the base across the entire country but fails to provide the targeted boost in Ohio.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 10, funds: -20000 }, regional_effects: { plains: 5.0, south: 4.0, midwest: 2.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "gwbush",
    question: "Election Night. The results are trickling in. You've won the South and the Plains. Florida is yours. It all comes down to Ohio once again. What is your final move?",
    answers: [
      { text: "Deploy your legal and ground teams to every precinct in Ohio to monitor the count and challenge provisional ballots.", feedback: "A repeat of the 2000 focus. Your team is ready for a long fight. Eventually, the margin in Ohio holds for you.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 10, funds: -25000 }, regional_effects: { midwest: 4.0, south: 2.0 } },
      { text: "Wait for the count to finish and address the nation from the White House with quiet confidence.", feedback: "A presidential posture that contrasts with the chaos of the night. When Ohio is finally called, you have the moral high ground.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 5, funds: 0 }, regional_effects: { northeast: 3.0, midwest: 3.0 } },
      { text: "Call the opponent and demand he concede once the math in Ohio becomes clear.", feedback: "A bold move that forces the narrative. Kerry concedes by morning, avoiding a repeat of the 2000 recount drama.", effects: { political_capital: 5, approval: 2, base_enthusiasm: 15, funds: 0 }, regional_effects: { south: 2.0, plains: 2.0 } }
    ]
  },

  // ─── RONALD REAGAN SCENARIOS ──────────────────────────────────────────────
  {
    id: 1, phase: "governing", candidate_id: "reagan",
    question: "The economy is in 'stagflation' — high inflation and low growth. You've proposed 'Reaganomics,' a supply-side plan of massive tax cuts, deregulation, and spending cuts. How aggressively do you push your agenda?",
    answers: [
      { text: "The full supply-side package: 25% across-the-board income tax cuts over three years.", feedback: "The 'Economic Recovery Tax Act' passes! The base is ecstatic. Inflation begins to drop as the Fed tightens, but the deficit begins to balloon.", effects: { political_capital: -10, approval: 4, base_enthusiasm: 25, funds: -40000 }, regional_effects: { plains: 5.0, south: 5.0, midwest: 4.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: 10 },
      { text: "A moderate version of the tax cuts, coupled with bipartisan Social Security reform.", feedback: "A stabilized economic approach that wins over 'Boll Weevil' Democrats. It lacks the supply-side punch but maintains broad approval.", effects: { political_capital: 15, approval: 6, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 3.0, northeast: 3.0 }, legislative_effects: 8 },
      { text: "Focus primarily on deregulation and cutting federal agencies while keeping tax rates stable for now.", feedback: "Business leaders are happy, but the 'revolution' feels stalled. Your base is restless for the promised tax relief.", effects: { political_capital: 5, approval: 2, base_enthusiasm: -15, funds: 10000 }, regional_effects: { south: 2.0 }, legislative_effects: 5 }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "reagan",
    question: "The air traffic controllers' union (PATCO) has gone on an illegal strike, demanding higher pay and shorter hours. They expect you, a former union president, to negotiate. What is your response?",
    answers: [
      { text: "Fire them all. Give them 48 hours to return to work or they are banned from federal service for life.", feedback: "A stunning display of resolve. You break the strike and the union. Business leaders cheer your strength; labor leaders are horrified.", effects: { political_capital: 10, approval: 5, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 6.0, south: 5.0, midwest: -4.0, northeast: -3.0 }, legislative_effects: 5 },
      { text: "Enter into secret negotiations to find a compromise that avoids a total shutdown of air travel.", feedback: "Avoids the drama but you appear weak to your base. The strike lingers, causing economic disruption and damaging your 'strong leader' image.", effects: { political_capital: -15, approval: -4, base_enthusiasm: -15, funds: -10000 }, regional_effects: { midwest: -2.0, south: -2.0 }, legislative_effects: -5 },
      { text: "Request a court injunction to force them back to work while the labor board mediates the dispute.", feedback: "The 'law and order' approach. It's technically correct but lacks the symbolic power of a decisive presidential action.", effects: { political_capital: 5, approval: 2, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 1.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "reagan",
    question: "The Soviet Union is the 'Evil Empire.' You want to shift from the doctrine of 'Containment' to a policy of 'Peace Through Strength,' including the Strategic Defense Initiative (SDI) — 'Star Wars.'",
    answers: [
      { text: "Launch SDI: Announce a space-based shield that will make nuclear weapons 'impotent and obsolete.'", feedback: "The Soviets are panicked by the technological challenge. Your base loves the vision. Critics call it a dangerous fantasy.", effects: { political_capital: -10, approval: 3, base_enthusiasm: 25, funds: -50000 }, regional_effects: { west_coast: 5.0, northeast: 2.0, south: 4.0, plains: 4.0 }, legislative_effects: -6 },
      { text: "Focus on a massive conventional military buildup — the 600-ship Navy and modernized land forces.", feedback: "A tangible display of strength that creates thousands of jobs in the Sun Belt and Midwest. It avoids the 'Star Wars' controversy.", effects: { political_capital: 5, approval: 6, base_enthusiasm: 15, funds: -30000 }, regional_effects: { south: 5.0, west_coast: 4.0, midwest: 4.0 }, legislative_effects: 6 },
      { text: "Pursue aggressive arms control negotiations while maintaining existing nuclear parity.", feedback: "The 'detente' approach. Reassures a nervous world but your 'New Right' base feels you are repeating the mistakes of the 70s.", effects: { political_capital: 10, approval: 5, base_enthusiasm: -15, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 3.0 }, legislative_effects: 4 }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "reagan",
    question: "Drug use is rising in American cities. You want to launch a national 'War on Drugs,' and Nancy wants to champion the 'Just Say No' campaign. How much federal power do you commit?",
    answers: [
      { text: "Full Mobilization: Sign the Anti-Drug Abuse Act, creating mandatory minimums and the 'Drug Czar' position.", feedback: "The 'Just Say No' era begins. Approval with parents and suburbs sky-rockets. But the prison population begins a long, steep climb.", effects: { political_capital: 5, approval: 8, base_enthusiasm: 10, funds: -15000 }, regional_effects: { midwest: 4.0, south: 4.0, plains: 4.0, northeast: 2.0, west_coast: 2.0 }, legislative_effects: 8 },
      { text: "Focus entirely on the cultural campaign — let Nancy lead the 'Just Say No' messaging without new laws.", feedback: "The message is popular and non-partisan, but critics across the aisle call it a 'PR stunt' that lacks the teeth to stop the cartels.", effects: { political_capital: 10, approval: 4, base_enthusiasm: 5, funds: 0 }, regional_effects: { midwest: 2.0, northeast: 2.0 }, legislative_effects: 4 },
      { text: "Target only the supply side — use the military and Coast Guard to interdict drugs at the border.", feedback: "A popular 'America First' approach to security, but it fails to address the rising demand in American cities.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 12, funds: -20000 }, regional_effects: { south: 3.0, west_coast: 2.0, plains: 2.0 }, legislative_effects: 2 }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "reagan",
    question: "Social Security is facing a funding crisis. If you don't act, benefits will be cut. You need a bipartisan compromise with Tip O'Neill's Democrats. What are you willing to trade?",
    answers: [
      { text: "The Grand Compromise: Raise the retirement age slowly and accept modest payroll tax increases in exchange for stability.", feedback: "A historic bipartisan win. You and Tip O'Neill 'save' Social Security for a generation. Your base grumbles about the tax hike, but the issue is gone.", effects: { political_capital: 15, approval: 6, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 4.0, northeast: 3.0, south: 2.0, plains: 2.0, west_coast: 2.0 }, legislative_effects: 10 },
      { text: "Push for partial privatization — allow workers to invest a portion of their taxes into private accounts.", feedback: "Electrifies your conservative base but the Democrats kill it immediately. The crisis lingers, and your approval with seniors drops.", effects: { political_capital: -20, approval: -6, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 4.0, south: 3.0, midwest: -4.0, northeast: -4.0 }, legislative_effects: -10 },
      { text: "Refuse any tax increases and demand that all solvency come from benefit cuts for future retirees.", feedback: "A principled stand for fiscal conservatism that leads to total legislative gridlock. You appear uncompromising and 'cruel' to the press.", effects: { political_capital: -15, approval: -4, base_enthusiasm: 15, funds: 0 }, regional_effects: { plains: 3.0, midwest: -2.0 }, legislative_effects: -5 }
    ]
  },
  {
    id: 6, phase: "governing", candidate_id: "reagan",
    question: "A scandal is brewing: members of your NSC secretly sold weapons to Iran to fund anti-communist 'Contra' rebels in Nicaragua, despite a Congressional ban. The press is calling it 'Iran-Contra.' How do you handle it?",
    answers: [
      { text: "Address the nation: 'My heart and my best intentions still tell me that's true, but the facts and the evidence tell me it is not.'", feedback: "A moment of vulnerability and accountability. You take the hit for the 'process' while protecting the presidency. Approval drops but you survive.", effects: { political_capital: -10, approval: -8, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: -3.0, northeast: -4.0, west_coast: -4.0 }, legislative_effects: -8 },
      { text: "Fire the principal actors (North and Poindexter) and claim total ignorance of the operational details.", feedback: "The 'plausible deniability' play. It saves your approval in the short term but leads to a long, damaging independent investigation.", effects: { political_capital: 10, approval: -2, base_enthusiasm: -15, funds: 0 }, regional_effects: { midwest: -1.0 }, legislative_effects: -5 },
      { text: "Defend the operation as a necessary strategic move in the Cold War, regardless of the 'Boland Amendment.'", feedback: "Fires up your base as a 'Cold Warrior,' but you face calls for impeachment from a furious Congress. The presidency is paralyzed.", effects: { political_capital: -30, approval: -12, base_enthusiasm: 30, funds: 0 }, regional_effects: { plains: 5.0, south: 4.0, northeast: -8.0, west_coast: -8.0 }, legislative_effects: -15 }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "reagan",
    question: "Your re-election campaign kicks off. The economy is booming, and your approval is high. What is the central theme of your campaign?",
    answers: [
      { text: "Morning in America: Focus on optimism, growth, and the restoration of American pride.", feedback: "One of the most effective campaign themes in history. You win over 'Reagan Democrats' across the industrial heartland.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 15, funds: -40000 }, regional_effects: { midwest: 6.0, south: 5.0, northeast: 3.0, west_coast: 3.0, plains: 4.0 } },
      { text: "Peace Through Strength: Focus on your military buildup and your firm stance against the Soviet Union.", feedback: "Solidifies your base and attracts security-conscious voters, but the 'Morning in America' warmth is slightly diminished.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 20, funds: -30000 }, regional_effects: { plains: 6.0, south: 5.0, west_coast: 4.0 } },
      { text: "The Tax-Cutter: Contrast your record with the opponent's promise to raise taxes to balance the budget.", feedback: "A sharp, effective contrast. You put the opponent on the defensive immediately. 'There they go again.'", effects: { political_capital: 0, approval: 4, base_enthusiasm: 12, funds: -20000 }, regional_effects: { midwest: 4.0, south: 4.0, plains: 3.0 } }
    ]
  },
  {
    id: 8, phase: "campaign", candidate_id: "reagan",
    question: "In the first debate, you appeared tired and confused. The press is raising questions about your age and mental fitness. How do you recover in the second debate?",
    answers: [
      { text: "The Wit: 'I will not make age an issue of this campaign. I am not going to exploit, for political purposes, my opponent's youth and inexperience.'", feedback: "Even your opponent laughs. The age issue is dead. You have reclaimed the narrative with a single line.", effects: { political_capital: 10, approval: 8, base_enthusiasm: 20, funds: 0 }, regional_effects: { midwest: 5.0, northeast: 5.0, south: 4.0, west_coast: 4.0, plains: 4.0 } },
      { text: "The Substance: Ignore the age comments and deliver a flawless, high-energy recitation of your second-term policy goals.", feedback: "A disciplined performance that reassures the public of your competence. It lacks the 'magic' of the wit but gets the job done.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: 3.0, northeast: 2.0 } },
      { text: "The Fighter: Attack the moderator and the press for focusing on trivialities while the world is at risk.", feedback: "Fires up the base but you appear grumpy and defensive to the undecided voters. The age questions persist.", effects: { political_capital: -5, approval: -2, base_enthusiasm: 15, funds: 0 }, regional_effects: { plains: 3.0 } }
    ]
  },
  {
    id: 9, phase: "campaign", candidate_id: "reagan",
    question: "Your opponent, Walter Mondale, has pledged to raise taxes to reduce the deficit. How does your campaign respond to this 'honesty' play?",
    answers: [
      { text: "Relentless Attack: 'He'll raise your taxes, and I won't.' Run ads showing a tax collector at a family's dinner table.", feedback: "Brutally effective. You label the Democrats as the party of 'Tax and Spend.' Mondale's support among the working class craters.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 18, funds: -30000 }, regional_effects: { midwest: 6.0, south: 5.0, plains: 5.0 } },
      { text: "Economic Education: Explain how lower taxes lead to more revenue through growth — the 'Laffer Curve' in prime time.", feedback: "Intellectually consistent but a bit academic for a campaign. It shores up the 'true believers' but leaves swing voters cold.", effects: { political_capital: 5, approval: 2, base_enthusiasm: 10, funds: -20000 }, regional_effects: { plains: 4.0, south: 3.0 } },
      { text: "Promise a future 'Tax Reform' bill that simplifies the code and lowers rates even further.", feedback: "A forward-looking message that sets the stage for your second-term agenda. It keeps the focus on your strengths.", effects: { political_capital: 10, approval: 4, base_enthusiasm: 8, funds: -25000 }, regional_effects: { midwest: 3.0, northeast: 2.0 } }
    ]
  },
  {
    id: 10, phase: "campaign", candidate_id: "reagan",
    question: "A small Caribbean island, Grenada, has been taken over by a pro-Soviet military junta. American medical students are on the island. What is your response?",
    answers: [
      { text: "Operation Urgent Fury: Launch a full-scale military invasion to rescue the students and restore democracy.", feedback: "A swift, decisive military victory. It erases the 'Vietnam Syndrome' and shows America is back. Approval ratings surge.", effects: { political_capital: 15, approval: 7, base_enthusiasm: 22, funds: -20000 }, regional_effects: { south: 6.0, plains: 5.0, midwest: 4.0, northeast: 3.0, west_coast: 3.0 } },
      { text: "Negotiate through regional partners for the safe return of the students and a transition to elections.", feedback: "A peaceful resolution but it lacks the symbolic power of the military win. The base feels you missed an opportunity.", effects: { political_capital: 5, approval: 3, base_enthusiasm: -10, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0 } },
      { text: "Issue a stern warning and move a carrier strike group into the region as a show of force.", feedback: "A measured response that avoids war but keeps the pressure on. It's safe, but doesn't provide the 'Commander in Chief' boost.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 5, funds: -10000 }, regional_effects: { south: 2.0, plains: 2.0 } }
    ]
  },
  {
    id: 11, phase: "campaign", candidate_id: "reagan",
    question: "Election Eve. You are leading in almost every state. You have a chance for a historic sweep. Where do you make your final appearance?",
    answers: [
      { text: "A massive rally in Minnesota — the opponent's home state. Try to win all 50 states.", feedback: "The audacity of the move fires up the nation. You narrowly miss winning Minnesota, but you win the other 49 states.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 25, funds: -30000 }, regional_effects: { midwest: 7.0, northeast: 5.0, south: 5.0, west_coast: 5.0, plains: 5.0 } },
      { text: "A nostalgic return to Dixon, Illinois — your childhood home. A message of American values.", feedback: "A beautiful, emotional close to the campaign. It reinforces the 'Morning in America' theme and secures the heartland.", effects: { political_capital: 5, approval: 4, base_enthusiasm: 15, funds: -25000 }, regional_effects: { midwest: 5.0, plains: 4.0 } },
      { text: "A primetime address from the Oval Office — a fatherly message of unity and the work yet to be done.", feedback: "The ultimate 'presidential' move. It wins over any remaining undecideds who want stability and continuity.", effects: { political_capital: 10, approval: 6, base_enthusiasm: 8, funds: -20000 }, regional_effects: { midwest: 3.0, northeast: 3.0, south: 3.0, west_coast: 3.0, plains: 3.0 } }
    ]
  },
  {
    id: 12, phase: "campaign", candidate_id: "reagan",
    question: "Election Night. The map is turning almost entirely red. It's a landslide of historic proportions. What is your victory message?",
    answers: [
      { text: "A message of National Unity: 'This wasn't a victory of a party, it was a victory of the American people.'", feedback: "A soaring, gracious speech that sets the tone for your second term. You have a massive mandate for further reform.", effects: { political_capital: 20, approval: 8, base_enthusiasm: 15, funds: 0 }, regional_effects: { midwest: 5.0, northeast: 5.0, south: 5.0, west_coast: 5.0, plains: 5.0 } },
      { text: "A mandate for the Revolution: 'You ain't seen nothing yet!' Reiterate your commitment to tax cuts and SDI.", feedback: "Fires up the base for the battles ahead. You've won the election, but the legislative war for the second term begins now.", effects: { political_capital: 10, approval: 4, base_enthusiasm: 25, funds: 0 }, regional_effects: { plains: 5.0, south: 5.0 } },
      { text: "A focus on the future: 'The best days of America are yet to come.' Focus on the next generation.", feedback: "A classic Reagan optimistic close. You leave the nation feeling good about themselves and their country.", effects: { political_capital: 15, approval: 6, base_enthusiasm: 10, funds: 0 }, regional_effects: { midwest: 3.0, northeast: 3.0 } }
    ]
  },

  {
    id: 12, phase: "campaign", candidate_id: "newsom",
    question: "Election Night. You are ahead in four of the six swing states. One key state is still too close to call. Late mail-in ballots are being processed. What is your final message to the nation?",
    answers: [
      { text: "Go live on national television: 'Count every vote. Every American who voted deserves to have their voice heard.'", feedback: "A democratic and principled statement that becomes the defining image of the evening. The state is eventually called for you.", effects: { political_capital: 10, approval: 7, base_enthusiasm: 10, funds: 0 }, regional_effects: { northeast: 4.0, west_coast: 4.0, midwest: 4.0, south: 3.0, plains: 3.0 } },
      { text: "Hold a victory party in your home state of California and trust the count to deliver the results.", feedback: "Your confident celebration in California is misread by some as premature. When the state is called, the relief is enormous.", effects: { political_capital: 5, approval: 3, base_enthusiasm: 15, funds: -15000 }, regional_effects: { west_coast: 5.0, northeast: 4.0, midwest: 2.0 } },
      { text: "Deploy an army of lawyers and election monitors to the outstanding state to ensure every vote is legally counted.", feedback: "A legally sound and responsible approach. The process is clean, the count is certified, and the result is uncontested.", effects: { political_capital: 0, approval: 4, base_enthusiasm: 8, funds: -20000 }, regional_effects: { northeast: 3.0, west_coast: 3.0, midwest: 3.0, south: 2.0, plains: 2.0 } }
    ]
  }
];
