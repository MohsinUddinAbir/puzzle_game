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
            collors: ['#69696973', '#08a53c', '#b90fb9', '#b92d5c', '#1f7cbb', '#00c0b6', '#f79401']
        }
        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(value) {
        if (this.state.placed[value] === 0) {
            this.setState({ ...this.state, selected: value })
        } else {
            let pattern = [...this.state.pattern];

            pattern.forEach((row, i) => {
                row.forEach((col, j) => {
                    if (col === value) {
                        pattern[i][j] = 7
                    }
                })
            })
            let placed = this.state.placed;
            placed[value] = 0;
            this.setState({ ...this.state, placed: placed })
            this.setState({ ...this.state, selected: null })
            this.setState({ ...this.state, pattern: pattern })
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
        }
    }

    resetGame() {
        this.setState({
            ...this.state,
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

    addPuzzlePice(row, col) {
        if (this.state.selected) {
            let pattern = [...this.state.pattern];
            let placed = this.state.placed;
            switch (this.state.selected) {
                case 1:
                    if (pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected
                        pattern[row][col + 1] = this.state.selected
                        pattern[row + 1][col] = this.state.selected
                        placed[this.state.selected] = 1;
                    }
                    break
                case 2:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col - 1] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col] = this.state.selected;
                        placed[this.state.selected] = 1;
                    }
                    break
                case 3:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        placed[this.state.selected] = 1;
                    }
                    break
                case 4:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col + 1] = this.state.selected;
                        pattern[row + 1][col] = this.state.selected;
                        placed[this.state.selected] = 1;
                    }
                    break
                case 5:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 1][col + 2] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        pattern[row + 1][col + 2] = this.state.selected;
                        placed[this.state.selected] = 1;
                    }
                    break
                case 6:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        placed[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col + 1] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        placed[this.state.selected] = 1;
                    }
                    break
            }
            this.setState({ ...this.state, placed: placed })
            this.setState({ ...this.state, pattern: pattern });

            this.winCheck();
        }
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
}

export default Game;