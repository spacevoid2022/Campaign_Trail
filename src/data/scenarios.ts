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
  }
];
