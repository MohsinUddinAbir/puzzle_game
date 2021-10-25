import './Game.css'
import React, { Component } from 'react'
import Green from './Green'
import Purple from './Purple'
import Pink from './Pink'
import Blue from './Blue'
import Aqua from './Aqua'
import Yellow from './Yellow'
import Swal from 'sweetalert2'


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isWin: false,
            selected: null,
            pattern: [
                [0, 0, 0, 7, 0, 0, 0],
                [0, 0, 7, 7, 7, 0, 0],
                [0, 7, 7, 7, 7, 7, 0],
                [7, 7, 7, 7, 7, 7, 7],
                [0, 7, 7, 7, 7, 7, 0],
                [0, 0, 7, 7, 7, 0, 0],
                [0, 0, 0, 7, 0, 0, 0]
            ],
            placed: [0, 0, 0, 0, 0, 0, 0, 0],
            collors: ['#aabbcc80', '#08a53c', '#b90fb9', '#b92d5c', '#1f7cbb', '#00c0b6', '#f79401']
        }
        this.handleSelected = this.handleSelected.bind(this)
        this.resetGame = this.resetGame.bind(this)
    }

    handleSelected(value) {
        if (this.state.placed[value] === 0) {
            if (this.state.selected === value) {
                this.setState({ ...this.state, selected: null })
            } else {
                if (!this.state.selected)
                    this.setState({ ...this.state, selected: value })
            }
        } else {
            if (!this.state.selected) {
                let pattern = [...this.state.pattern];

                pattern.forEach((row, i) => {
                    row.forEach((col, j) => {
                        if (col === value) {
                            pattern[i][j] = 7
                        }
                    })
                })
                this.state.selected = null;
                this.state.placed[value] = 0;
                this.setState({ ...this.state, pattern: pattern })
            }
        }
    }

    winCheck() {
        let pattern = [
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 4, 5, 0, 0],
            [0, 6, 4, 2, 5, 5, 0],
            [6, 6, 2, 2, 2, 5, 5],
            [0, 6, 3, 2, 1, 1, 0],
            [0, 0, 3, 3, 1, 0, 0],
            [0, 0, 0, 3, 0, 0, 0]
        ];

        let p1 = this.state.pattern.toString()
        let p2 = pattern.toString()

        if (p1 == p2) {
            this.setState({ ...this.state, isWin: true });
            setTimeout(() => {
                Swal.fire({
                    title: 'You win!',
                    text: 'You have successfully done this.',
                    icon: 'success',
                    confirmButtonText: 'Got it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.resetGame()
                    }
                });
                setTimeout(() => {
                    const event = new Event('game-win');
                    document.dispatchEvent(event);
                }, 500)
            }, 500)
        }
    }

    resetGame() {
        this.setState({
            ...this.state,
            isWin: false,
            selected: null,
            pattern: [
                [0, 0, 0, 7, 0, 0, 0],
                [0, 0, 7, 7, 7, 0, 0],
                [0, 7, 7, 7, 7, 7, 0],
                [7, 7, 7, 7, 7, 7, 7],
                [0, 7, 7, 7, 7, 7, 0],
                [0, 0, 7, 7, 7, 0, 0],
                [0, 0, 0, 7, 0, 0, 0]
            ],
            placed: [0, 0, 0, 0, 0, 0, 0, 0],
        })
    }

    renderRow() {
        return this.state.pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        this.renderCol(ind)
                    }
                </tr>
            )
        });
    }

    renderCol(row) {
        return this.state.pattern[row].map((col, ind) => {
            let element;
            switch (col) {
                case 0:
                    element = <td key={ind} className="no-color" onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 1:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[1] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 2:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[2] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 3:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[3] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 4:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[4] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 5:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[5] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 6:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[6] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                case 7:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[0] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
                default:
                    element = <td key={ind} style={{ backgroundColor: this.state.collors[0] }} onClick={() => this.addPuzzlePice(row, ind)}></td>
                    break;
            }
            return element;
        })
    }

    render() {
        return (
            <div className="board" >
                <button onClick={this.resetGame} className="reset-btn">
                    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/000000/synchronize.png" />
                </button>
                <div className="main-board">
                    <table>
                        <tbody>
                            {
                                this.renderRow()
                            }
                        </tbody>
                    </table>
                </div>
                <Green onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
                <Pink onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
                <Blue onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
                <Yellow onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
                <Purple onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
                <Aqua onSelected={this.handleSelected} selectedPice={this.state.selected} placed={this.state.placed} colors={this.state.collors} />
            </div>
        )
    }


    addPuzzlePice(row, col) {
        let selected = this.state.selected
        if (selected) {
            let pattern = [...this.state.pattern]
            let placed = this.state.placed
            switch (selected) {
                case 1:
                    if (row < 6 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row + 1][col] = selected
                        placed[selected] = 1;
                    } else if (row < 6 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row + 1][col - 1] = selected
                        placed[selected] = 1
                    } else if (row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 1][col + 1] = selected
                        placed[selected] = 1
                    } else {
                        return
                    }
                    break
                case 2:
                    if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row + 1][col] = selected
                        placed[selected] = 1
                    } else if (row < 5 &&
                        pattern[row][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 2][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row + 1][col] = selected
                        pattern[row + 1][col - 1] = selected
                        pattern[row + 1][col + 1] = selected
                        pattern[row + 2][col] = selected
                        placed[selected] = 1
                    } else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row][col + 2] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row][col + 2] = selected
                        pattern[row - 1][col + 1] = selected
                        pattern[row + 1][col + 1] = selected
                        placed[selected] = 1
                    }
                    else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row][col - 2] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row][col - 2] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row + 1][col - 1] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row - 2][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row - 1][col + 1] = selected
                        pattern[row - 2][col] = selected
                        placed[selected] = 1
                    } else {
                        return
                    }
                    break
                case 3:
                    if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row + 1][col + 1] = selected
                        placed[selected] = 1
                    } else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row + 1][col] = selected
                        pattern[row - 1][col - 1] = selected
                        placed[selected] = 1
                    } else if (row < 5 &&
                        pattern[row][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 2][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row + 1][col] = selected
                        pattern[row + 1][col + 1] = selected
                        pattern[row + 2][col + 1] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row - 2][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row - 2][col - 1] = selected
                        placed[selected] = 1
                    } else {
                        return
                    }
                    break
                case 4:
                    if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col + 1] = selected
                        pattern[row + 1][col] = selected
                        placed[selected] = 1;
                    } else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row + 1][col - 1] = selected
                        placed[selected] = 1
                    } else if (row < 5 &&
                        pattern[row][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        pattern[row + 2][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row + 1][col] = selected
                        pattern[row + 1][col - 1] = selected
                        pattern[row + 2][col - 1] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row - 2][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 1][col + 1] = selected
                        pattern[row - 2][col + 1] = selected
                        placed[selected] = 1
                    } else {
                        return
                    }
                    break
                case 5:
                    if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row + 1][col] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row + 1][col + 1] = selected
                        placed[selected] = 1
                    } else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 1][col + 2] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row + 1][col + 1] = selected
                        pattern[row + 1][col + 2] = selected
                        placed[selected] = 1
                    } else if (row < 5 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 2][col + 1] === 7 &&
                        pattern[row + 2][col + 2] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row + 1][col] = selected
                        pattern[row + 1][col + 1] = selected
                        pattern[row + 2][col + 1] = selected
                        pattern[row + 2][col + 2] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row - 2][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row - 2][col - 1] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        pattern[row - 1][col - 2] === 7 &&
                        pattern[row - 2][col - 2] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row - 1][col - 1] = selected
                        pattern[row - 1][col - 2] = selected
                        pattern[row - 2][col - 2] = selected
                        placed[selected] = 1
                    } else {
                        return
                    }
                    break
                case 6:
                    if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col - 1] = selected
                        pattern[row - 1][col] = selected
                        pattern[row + 1][col] = selected
                        placed[selected] = 1;
                    } else if (row < 6 && row > 0 &&
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row][col + 1] = selected
                        pattern[row - 1][col + 1] = selected
                        pattern[row + 1][col + 1] = selected
                        placed[selected] = 1
                    } else if (row < 5 &&
                        pattern[row][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        pattern[row + 2][col] === 7 &&
                        pattern[row + 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row + 1][col] = selected
                        pattern[row + 2][col] = selected
                        pattern[row + 1][col - 1] = selected
                        placed[selected] = 1
                    } else if (row > 1 &&
                        pattern[row][col] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row - 2][col] === 7 &&
                        pattern[row - 1][col - 1] === 7 &&
                        placed[selected] !== 1
                    ) {
                        pattern[row][col] = selected
                        pattern[row - 1][col] = selected
                        pattern[row - 2][col] = selected
                        pattern[row - 1][col - 1] = selected
                        placed[selected] = 1;
                    } else {
                        return
                    }
                    break
            }
            this.setState({
                ...this.state,
                selected: null,
                placed: placed,
                pattern: pattern
            })
            if (!this.state.isWin)
                this.winCheck()
        }
    }
}

export default Game;