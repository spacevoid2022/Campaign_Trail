# 🗳️ Campaign Trail: The Presidency Simulator

An interactive political strategy game where you step into the shoes of historic and modern American presidents. Navigate the treacherous waters of the **Governing Phase**, maintain your party's control of Congress, and then pivot to the high-stakes **Campaign Phase** to secure your re-election.

## 🌟 Key Features

*   **Two-Phase Gameplay:** 
    *   **Governing (Turns 1-6):** Pass legislation, handle national crises, and manage your legislative support. Your performance determines whether you keep Congress in the Midterms.
    *   **Campaign (Turns 7-12):** Travel the country, hold rallies, and win the hearts and minds of voters in key battleground regions.
*   **Diverse Candidate Roster:** Choose from a wide range of presidents, from **Abraham Lincoln** and **Ronald Reagan** to **Donald Trump** and **AOC**. Each candidate has unique starting stats and region-specific strengths/weaknesses.
*   **Dynamic Regional Mechanics:** 5 key regions (Northeast, Midwest, West Coast, South, Plains) with unique demands and sensitivities.
*   **Trump Mode & Loyalty:** Specialized logic for populist candidates where base enthusiasm can override national disapproval in sensitive regions.

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher)
*   npm

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/your-repo/campaign-trail.git
    cd campaign-trail
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🎮 How to Play

### 1. The Dashboard (Statistics)
*   **Approval Rating:** Your standing with the general public. Low approval (<40%) causes "Apathy," draining your base enthusiasm every turn.
*   **Political Capital:** Your "currency" for taking big actions. If it hits zero during Governing, you will face a primary challenge. Lost Congress? Your capital is locked at 0.
*   **Base Enthusiasm:** How fired up your core supporters are. High enthusiasm is critical for winning battleground states.
*   **Legislative Support:** Your standing with Congress. You need >50% to retain control during the Midterms (Turn 6).

### 2. Governing Phase
Every answer you choose has consequences. Some pass laws (Legislative Effects), some boost your base (Enthusiasm), and some win over moderates (Approval). Balancing these is key to surviving the Midterms.

### 3. Campaign Phase
Unlock **Campaign Stops**! Click on regions on the map to visit them and gain a polling bonus. Your visits are more effective if you have high national approval and control of Congress.

## 🏛️ Candidate Guide

| Candidate | Icon | Era | Focus |
| :--- | :---: | :--- | :--- |
| **Abraham Lincoln** | 🎩 | Civil War | Unity & Moral Clarity |
| **Ronald Reagan** | 🎬 | 80s Populism | Reaganomics & Cold War |
| **George W. Bush** | 🤠 | War on Terror | Resolve & Security |
| **Donald J. Trump** | 🦅 | MAGA | Base Mobilization |
| **Barack Obama** | 🌅 | Hope & Change | Coalition Building |
| **AOC** | ✊ | New Left | Progressive Reform |

## 🛠️ Technology Stack
*   **Vite** - Build Tool
*   **React** - UI Framework
*   **TypeScript** - Type Safety
*   **Vanilla CSS** - Styling (No bloated frameworks)

---
*Built for political junkies and strategy enthusiasts.*
