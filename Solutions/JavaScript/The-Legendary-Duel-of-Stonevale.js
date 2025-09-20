// Legendary Duel of Stonevale - JavaScript Console Application
// Implements the Agent Mode adventure specification with themed output.

const WINNING_MOVES = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
};

    const ROK_ASCII = [
        "       _.-''''-._",
        "     .'  _     _  '.",
        "    /   (o)   (o)   /",
        "   |     (  .-.  )   |",
        "   |     ( (   ) )   |",
        "   |      `-`-`-'    |",
        "    '.             .'",
        "      '-._____.-'"
    ].join('\n');

    const PAPYRA_ASCII = [
        "      .-''''-.",
        "     |  .--.  |",
        "     | (    ) |",
        "     |  '--'  |",
        "     '.__.__.'"
    ].join('\n');
}

function playDuel(rokMoves, papyraMoves) {
    const rounds = Math.min(rokMoves.length, papyraMoves.length);
    let rokScore = 0;
    let papyraScore = 0;

    const ROK_ASCII = [
        "       _.-''''-._",
        "     .'  _     _  '.",
        "    /   (o)   (o)   \\\",
        "   |  /\\\\   .-.   /\\\\  |",
        "   | |  | (   ) |  | |",
        "   | |  |  `-'  |  | |",
        "   | |  |       |  | |",
        "    \\\\  \\\\  \\\\_/  /  /",
        "     '._ '-.___.-' _.'",
        "        '\\"-.___.-\\"'"
    ].join('\n');

    const PAPYRA_ASCII = [
        "       .-\"\"\"-.",
        "      /  .--. \\\",
        "     /  /    \\ \\\",
        "     |  |    |  |",
        "     |  |.-\"\"-.|",
        "    ///`.::::.`\\\\\\",
        "   |||  :::::  |||",
        "   |||  :::::  |||",
        "    \\\\ '::::' ///",
        "     `\"-\`\"--'`\"-'"
    ].join('\n');

    console.log('⚔️ Welcome to the Legendary Duel of Stonevale! ⚔️\n');
    console.log('🏛️ In the ancient arena of Scissoria, two warriors face destiny...\n');
    console.log('🛡️ Rok the Stone Warrior vs 📜 Papyra the Swift\n');
    console.log('Rok:');
    console.log(ROK_ASCII + '\n');
    console.log('Papyra:');
    console.log(PAPYRA_ASCII + '\n');

    for (let i = 0; i < rounds; i++) {
        const roundNum = i + 1;
        const rawRok = rokMoves[i];
        const rawPapyra = papyraMoves[i];
        const rok = normalize(rawRok);
        const papyra = normalize(rawPapyra);

        console.log(`=== Round ${roundNum} ===`);
        console.log(`⚔️ Rok chooses: ${describeMove(rok)}`);
        console.log(`🛡️ Papyra chooses: ${describeMove(papyra)}`);

        // invalid move handling
        if (!POINTS.hasOwnProperty(rok) || !POINTS.hasOwnProperty(papyra)) {
            console.log('⚠️ Invalid move detected — round is skipped.');
            console.log(`Current Scores: Rok: ${rokScore} | Papyra: ${papyraScore}\n`);
            continue;
        }

        if (rok === papyra) {
            console.log("🤝 It's a draw — no points awarded.");
        } else if (WINNING_MOVES[rok] === papyra) {
            const pts = POINTS[rok];
            rokScore += pts;
            console.log(`🏆 Rok wins! ${capitalize(rok)} beats ${papyra} (+${pts} point${pts > 1 ? 's' : ''})`);
        } else {
            const pts = POINTS[papyra];
            papyraScore += pts;
            console.log(`🏆 Papyra wins! ${capitalize(papyra)} beats ${rok} (+${pts} point${pts > 1 ? 's' : ''})`);
        }

        console.log(`\nCurrent Scores: Rok: ${rokScore} | Papyra: ${papyraScore}\n`);
    }

    console.log(`Final Scores: Rok: ${rokScore} | Papyra: ${papyraScore}\n`);

    if (rokScore > papyraScore) {
        console.log('👑 ROK THE STONE WARRIOR WINS THE LEGENDARY DUEL! 👑\n');
        console.log("🏛️ Rok's tribe shall prosper for the next century in Stonevale! 🏛️");
    } else if (papyraScore > rokScore) {
        console.log('👑 PAPYRA THE SWIFT WINS THE LEGENDARY DUEL! 👑\n');
        console.log("🏛️ Papyra's cunning shall guide her people to acclaim in Stonevale! 🏛️");
    } else {
        console.log("🤝 The duel ends in a solemn draw — both warriors earn honor.");
    }
}

function capitalize(s) {
    if (!s) return s;
    return s[0].toUpperCase() + s.slice(1);
}

// Run the duel with predefined moves
playDuel(ROK_MOVES, PAPYRA_MOVES);

// Export for tests or reuse
module.exports = { playDuel, WINNING_MOVES, POINTS };
