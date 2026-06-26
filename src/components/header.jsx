export default function Header({score, bestScore}){
    return <header className="game-header">
        <div className="title-container">
            <h1>Poki Memory</h1>
            <p>Get points by clicking on a card, but don't click on any card more than once!</p>
        </div>
        <div className="score-board">
            <div className="score-box">
                <span>Current Score</span>
                <strong>{score}</strong>
            </div>
            <div className="score-box">
                <span>Best Score</span>
                <strong>{bestScore}</strong>
            </div>
        </div>
    </header>
}