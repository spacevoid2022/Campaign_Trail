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
    id: 6, phase: "campaign",
    question: "The campaign has officially launched. What is your opening strategic play?",
    answers: [
      { text: "Energetic coastal base mobilization — massive rallies in liberal cities.", feedback: "Base enthusiasm explodes on the coasts. But rural America sees it as out-of-touch elitism.", effects: { political_capital: 0, approval: 2, base_enthusiasm: 20, funds: -20000 }, regional_effects: { northeast: 4.0, west_coast: 4.0 }, trump_effects: { south: -3, plains: -2 }, trump_tag: 'minus' },
      { text: "Heavy TV advertising blitz targeting suburban Midwest families.", feedback: "Drains funds but converts suburban moderates and builds a solid Midwest edge.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 5, funds: -50000 }, regional_effects: { midwest: 6.0, south: 1.0 }, trump_effects: null, trump_tag: null },
      { text: "Populist economic tour through Southern industrial and rural towns.", feedback: "Resonates strongly with working-class Southern and Plains voters. Makes the South genuinely competitive.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 10, funds: -30000 }, regional_effects: { south: 5.0, midwest: 2.0, plains: 2.0 }, trump_effects: { south: 3, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 7, phase: "campaign",
    question: "Debate night. Your opponent hammers your economic record. The whole country is watching. How do you respond?",
    answers: [
      { text: "Go on the offensive — attack the opponent's corporate lobbying record.", feedback: "The base is fired up by your fight. But some moderates see it as unpresidential.", effects: { political_capital: -5, approval: 1, base_enthusiasm: 15, funds: 0 }, regional_effects: { northeast: 2.0, west_coast: 2.0, south: -2.0 }, trump_effects: null, trump_tag: null },
      { text: "Calmly explain the international economic factors behind inflation.", feedback: "Scores with educated suburbanites, but feels academic and defensive to working-class viewers.", effects: { political_capital: 10, approval: 3, base_enthusiasm: -5, funds: 0 }, regional_effects: { northeast: 3.0, midwest: 1.0 }, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "Pivot hard to your jobs record and infrastructure achievements.", feedback: "Solid and relatable. Working-class voters across the Midwest and South respond strongly.", effects: { political_capital: 0, approval: 5, base_enthusiasm: 8, funds: 0 }, regional_effects: { midwest: 4.0, south: 2.0, plains: 2.0 }, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 8, phase: "campaign",
    question: "A whistleblower reveals a major donor received a private White House meeting before winning a government contract. The press is in a feeding frenzy.",
    answers: [
      { text: "Publish all records, own the optics, and announce ethics reforms.", feedback: "A moment of transparency that restores integrity — but short-term approval takes a significant hit.", effects: { political_capital: 10, approval: -6, base_enthusiasm: 5, funds: -30000 }, regional_effects: { midwest: -2.0, northeast: 1.0, west_coast: 1.0 }, trump_effects: { south: -2, plains: -1 }, trump_tag: 'minus' },
      { text: "Attack the whistleblower's credibility and call it a partisan hoax.", feedback: "Your base rallies hard. But swing voters in the Midwest and Northeast are disgusted.", effects: { political_capital: -15, approval: -8, base_enthusiasm: 20, funds: 0 }, regional_effects: { plains: 2.0, south: 1.0, northeast: -4.0, west_coast: -4.0, midwest: -3.0 }, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Flood the airwaves with positive ads to drown out the coverage.", feedback: "Effectively neutralizes the scandal in the short term, but at enormous financial cost.", effects: { political_capital: 0, approval: 1, base_enthusiasm: 0, funds: -60000 }, regional_effects: { midwest: 1.0 }, trump_effects: null, trump_tag: null }
    ]
  },
  {
    id: 9, phase: "campaign",
    question: "A popular progressive third-party candidate is siphoning young voters in key coastal states. What is your play?",
    answers: [
      { text: "Offer a major policy concession — invite their leaders to your climate advisory council.", feedback: "Progressives return home, but fiscal moderates in the Midwest feel the leftward lurch.", effects: { political_capital: -10, approval: 2, base_enthusiasm: 15, funds: -10000 }, regional_effects: { west_coast: 4.0, northeast: 4.0, midwest: -2.0 }, trump_effects: { south: -4, plains: -3 }, trump_tag: 'minus' },
      { text: "Ignore them entirely and focus all attacks on the main opponent.", feedback: "Avoids elevating their profile, but the bleeding in safe coastal states quietly continues.", effects: { political_capital: 5, approval: -2, base_enthusiasm: -10, funds: 0 }, regional_effects: { west_coast: -3.0, northeast: -3.0 }, trump_effects: null, trump_tag: null },
      { text: "Run targeted attack ads exposing their lack of governing experience.", feedback: "Successfully damages their credibility with swing voters. A bit cynical, but effective.", effects: { political_capital: 0, approval: 3, base_enthusiasm: -5, funds: -25000 }, regional_effects: { west_coast: 3.0, northeast: 3.0 }, trump_effects: { south: 1, plains: 1 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 10, phase: "campaign",
    question: "Election Eve. One last move. Where do you direct your final resources and energy?",
    answers: [
      { text: "Massive urban and college GOTV (Get Out The Vote) drive.", feedback: "Base enthusiasm surges to its peak. Turnout in key urban corridors should be enormous.", effects: { political_capital: 0, approval: 3, base_enthusiasm: 25, funds: -30000 }, regional_effects: { northeast: 2.0, west_coast: 2.0, midwest: 2.0, south: 2.0, plains: 1.0 }, trump_effects: { south: -2, plains: -2 }, trump_tag: 'minus' },
      { text: "All-out negative ad blitz in the Midwest and South toss-up districts.", feedback: "Chips away at the opponent in key states through relentless attack ads. Polarizing, but targeted.", effects: { political_capital: -10, approval: -3, base_enthusiasm: 10, funds: -40000 }, regional_effects: { midwest: 6.0, south: 5.0 }, trump_effects: null, trump_tag: null },
      { text: "Nationwide primetime unity speech — no attacks, just your vision.", feedback: "A sweeping, presidential close that wins over remaining undecideds and national press.", effects: { political_capital: 15, approval: 8, base_enthusiasm: -5, funds: -20000 }, regional_effects: { midwest: 3.0, south: 3.0, northeast: 3.0, west_coast: 3.0, plains: 3.0 }, trump_effects: { south: -1, plains: -1 }, trump_tag: 'minus' }
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
    id: 6, phase: "campaign", candidate_id: "lincoln",
    question: "The 1864 election is here. Democrats are running on an 'immediate peace' platform, calling the war a failure. Defeatism is spreading in the North. Where do you make your stand?",
    answers: [
      { text: "Campaign purely on military victory — no peace without restoration of the Union and an end to slavery.", feedback: "Sherman's March and the fall of Atlanta deliver you a thunderous military victory just in time to seal the election.", effects: { political_capital: 0, approval: 6, base_enthusiasm: 20, funds: -30000 }, regional_effects: { northeast: 5.0, midwest: 6.0 }, trump_effects: null, trump_tag: null },
      { text: "Hint at possible negotiated peace to peel off moderate voters, then pivot once re-elected.", feedback: "The political triangulation works short-term, but abolitionists and Radical Republicans call it a betrayal.", effects: { political_capital: 5, approval: 3, base_enthusiasm: -10, funds: 0 }, regional_effects: { midwest: 4.0, northeast: 1.0 }, trump_effects: null, trump_tag: null },
      { text: "Barnstorm the Midwest, focusing on soldiers voting from the battlefield via absentee ballot.", feedback: "The soldier vote swings massive majorities in your direction. It's the decisive edge in the closest states.", effects: { political_capital: -5, approval: 4, base_enthusiasm: 25, funds: -25000 }, regional_effects: { midwest: 8.0, northeast: 3.0 }, trump_effects: null, trump_tag: null }
    ]
  },
  {
    id: 7, phase: "campaign", candidate_id: "lincoln",
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
      { text: "Declare a national emergency and redirect military construction funds — build it by executive order.", feedback: "The base goes wild. 'BUILD THAT WALL!' trends nationally. Legal challenges immediately flood the courts.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 30, funds: -80000 }, regional_effects: { plains: 7.0, south: 6.0, northeast: -5.0, west_coast: -5.0 }, legislative_effects: -8, trump_effects: { south: 8, plains: 8 }, trump_tag: 'plus' },
      { text: "Negotiate a comprehensive immigration reform bill that trades wall funding for a path to citizenship.", feedback: "A grand compromise passes, but your base feels betrayed. Right-wing media calls it 'amnesty.'", effects: { political_capital: 15, approval: 3, base_enthusiasm: -25, funds: -40000 }, regional_effects: { midwest: 3.0, south: -3.0, plains: -4.0, northeast: 3.0 }, legislative_effects: 10, trump_effects: { south: -8, plains: -8 }, trump_tag: 'minus' },
      { text: "Use the budget reconciliation process to sneak wall funding into an omnibus spending bill.", feedback: "$5B in wall funding passes quietly. The base is mollified. The move sparks a government shutdown threat.", effects: { political_capital: -20, approval: 0, base_enthusiasm: 10, funds: -30000 }, regional_effects: { south: 3.0, plains: 3.0 }, legislative_effects: -4, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 2, phase: "governing", candidate_id: "trump",
    question: "Tech companies and Silicon Valley executives are furious that you want to restrict the H-1B visa program, which imports hundreds of thousands of high-skilled foreign workers annually. Your MAGA base cheers. Big Tech threatens to move jobs overseas.",
    answers: [
      { text: "Slash H-1B quotas by 75% — American jobs for American workers, no exceptions.", feedback: "The base is ecstatic. Silicon Valley erupts in fury. Several tech giants announce they are relocating engineering hubs to Canada.", effects: { political_capital: -5, approval: -3, base_enthusiasm: 22, funds: -20000 }, regional_effects: { plains: 6.0, south: 5.0, midwest: 3.0, west_coast: -8.0, northeast: -4.0 }, legislative_effects: -8, trump_effects: { south: 6, plains: 6 }, trump_tag: 'plus' },
      { text: "Raise H-1B minimum salaries dramatically to $200K+ so companies can't use them as cheap labor.", feedback: "A clever compromise that protects American wages without alienating all of tech. Both sides claim partial victory.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 8, funds: 0 }, regional_effects: { plains: 2.0, south: 2.0, midwest: 2.0, west_coast: -2.0 }, legislative_effects: 5, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' },
      { text: "Give tech executives exactly what they want — maintain H-1B in exchange for massive domestic job pledges.", feedback: "Billion-dollar factory announcements flood the news cycle. But MAGA influencers say you sold out to globalists.", effects: { political_capital: 10, approval: 4, base_enthusiasm: -20, funds: 40000 }, regional_effects: { midwest: 4.0, west_coast: 2.0, plains: -4.0, south: -3.0 }, legislative_effects: 8, trump_effects: { south: -6, plains: -6 }, trump_tag: 'minus' }
    ]
  },
  {
    id: 3, phase: "governing", candidate_id: "trump",
    question: "You are on the brink of a massive trade war with China. Your economists warn tariffs will raise consumer prices. Your base loves the 'America First' framing. The stock market is jittery.",
    answers: [
      { text: "Slap 25% tariffs on all Chinese goods — America First, take it or leave it.", feedback: "The base is roaring. China retaliates against American soybeans and pork. Plains farmers feel the pain immediately.", effects: { political_capital: 5, approval: -4, base_enthusiasm: 18, funds: -30000 }, regional_effects: { plains: -4.0, south: -3.0, midwest: -2.0, northeast: -2.0, west_coast: -2.0 }, legislative_effects: -5, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Threaten tariffs loudly, extract concessions privately, then declare victory without full implementation.", feedback: "A classic negotiating win on paper, but the art-of-the-deal crowd is suspicious. Markets breathe easier.", effects: { political_capital: 10, approval: 3, base_enthusiasm: 5, funds: 10000 }, regional_effects: { midwest: 3.0, south: 1.0, plains: 1.0 }, legislative_effects: 3, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' },
      { text: "Negotiate a broad Phase One trade deal — China agrees to purchase billions in American agricultural goods.", feedback: "Farmer incomes surge. The heartland cheers. But critics say you let China off easy on structural reforms.", effects: { political_capital: 5, approval: 5, base_enthusiasm: 10, funds: 20000 }, regional_effects: { plains: 6.0, south: 4.0, midwest: 5.0, northeast: 1.0, west_coast: 1.0 }, legislative_effects: 5, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 4, phase: "governing", candidate_id: "trump",
    question: "The Department of Justice, run by your own appointees, is investigating allegations of financial misconduct from your business empire pre-presidency. It is dominating the news cycle. What is your move?",
    answers: [
      { text: "Fire the DOJ officials leading the investigation — the deep state is out to get you.", feedback: "Your base cheers your defiance. Every mainstream outlet calls it an obstruction of justice. Your approval craters with moderates.", effects: { political_capital: -15, approval: -8, base_enthusiasm: 20, funds: 0 }, regional_effects: { south: 3.0, plains: 3.0, northeast: -6.0, west_coast: -6.0, midwest: -4.0 }, legislative_effects: -10, trump_effects: { south: 5, plains: 5 }, trump_tag: 'plus' },
      { text: "Release your tax returns to prove financial transparency and call the investigation baseless.", feedback: "The tax returns reveal some embarrassing details but nothing criminal. Moderates are relieved. The story fades.", effects: { political_capital: 5, approval: 6, base_enthusiasm: -15, funds: -10000 }, regional_effects: { northeast: 3.0, midwest: 4.0, south: -3.0, plains: -3.0 }, legislative_effects: 5, trump_effects: { south: -4, plains: -4 }, trump_tag: 'minus' },
      { text: "Attack the investigation relentlessly on social media — keep your base fired up and on offense.", feedback: "Your base sees it as a political witch hunt and donates record amounts. But the story never dies.", effects: { political_capital: -5, approval: -4, base_enthusiasm: 15, funds: 30000 }, regional_effects: { plains: 1.0, south: 1.0, northeast: -3.0, west_coast: -3.0 }, legislative_effects: -5, trump_effects: { south: 3, plains: 3 }, trump_tag: 'plus' }
    ]
  },
  {
    id: 5, phase: "governing", candidate_id: "trump",
    question: "Tech giants Twitter and Facebook have banned you from their platforms for policy violations. Tens of millions of your most loyal followers are cut off from your primary communication channel.",
    answers: [
      { text: "Launch your own social media platform — Truth Social — and make it a subscriber-funded movement.", feedback: "Truth Social becomes a massive fundraising ecosystem for your base. Tech establishment calls it a vanity project.", effects: { political_capital: -10, approval: -2, base_enthusiasm: 25, funds: 40000 }, regional_effects: { plains: 5.0, south: 5.0, northeast: -4.0, west_coast: -4.0 }, legislative_effects: -3, trump_effects: { south: 7, plains: 7 }, trump_tag: 'plus' },
      { text: "File antitrust lawsuits against Big Tech — use the DOJ to investigate censorship as market manipulation.", feedback: "Populists across the aisle support antitrust action. Silicon Valley lobbyists mobilize against you.", effects: { political_capital: -15, approval: 5, base_enthusiasm: 15, funds: -20000 }, regional_effects: { plains: 3.0, south: 3.0, midwest: 3.0, west_coast: -2.0 }, legislative_effects: 5, trump_effects: { south: 4, plains: 4 }, trump_tag: 'plus' },
      { text: "Use the moment to push through Section 230 reform in Congress — make platforms legally liable for censorship.", feedback: "A policy win that reshapes the internet legal landscape, but the legislative fight takes months and drains capital.", effects: { political_capital: -25, approval: 3, base_enthusiasm: 10, funds: -10000 }, regional_effects: { plains: 2.0, south: 2.0, midwest: 1.0 }, legislative_effects: 8, trump_effects: { south: 2, plains: 2 }, trump_tag: 'plus' }
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
  }
];

