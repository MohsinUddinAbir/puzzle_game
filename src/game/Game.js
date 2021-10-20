import './Game.css'
import React, { useState, useEffect, Component } from 'react'

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
            palaced: [0, 0, 0, 0, 0, 0, 0, 0],
            collors: ['#69696973', '#08a53c', '#b90fb9', '#b92d5c', '#1f7cbb', '#00c0b6', '#f79401']
        }
        this.handleSelected = this.handleSelected.bind(this)
    }

    handleSelected(value) {
        this.setState({ ...this.state, selected: value })
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

        let p1 = this.state.pattern.toString();
        let p2 = pattern.toString();

        if (p1 == p2) {
            alert("You win!");
        }
    }

    addPuzzlePice(row, col) {
        if (this.state.selected) {
            let pattern = [...this.state.pattern];
            switch (this.state.selected) {
                case 1:
                    if (pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected
                        pattern[row][col + 1] = this.state.selected
                        pattern[row + 1][col] = this.state.selected
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
                case 2:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col - 1] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col - 1] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col] = this.state.selected;
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
                case 3:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
                case 4:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col + 1] = this.state.selected;
                        pattern[row + 1][col] = this.state.selected;
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
                case 5:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        pattern[row + 1][col + 2] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        pattern[row + 1][col + 2] = this.state.selected;
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
                case 6:
                    if (
                        pattern[row][col] === 7 &&
                        pattern[row][col + 1] === 7 &&
                        pattern[row - 1][col + 1] === 7 &&
                        pattern[row + 1][col + 1] === 7 &&
                        this.state.palaced[this.state.selected] !== 1
                    ) {
                        pattern[row][col] = this.state.selected;
                        pattern[row][col + 1] = this.state.selected;
                        pattern[row - 1][col + 1] = this.state.selected;
                        pattern[row + 1][col + 1] = this.state.selected;
                        this.state.palaced[this.state.selected] = 1;
                    }
                    break
            }
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
                <Green onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
                <Pink onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
                <Blue onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
                <Yellow onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
                <Purple onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
                <Aqua onSelected={this.handleSelected} selectedPice={this.state.selected} palaced={this.state.palaced} colors={this.state.collors} />
            </div>
        )
    }
}

const Green = (props) => {
    const pattern = [
        [1, 1],
        [1, 0]
    ]

    function handleClick() {
        props.onSelected(1);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 1 && props.palaced[1] === 1 ? props.colors[0] : props.colors[1];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="green-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

const Purple = (props) => {
    let pattern = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
    ]

    function handleClick() {
        props.onSelected(2);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 2 && props.palaced[2] === 1 ? props.colors[0] : props.colors[2];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="purple-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

const Pink = (props) => {
    let pattern = [
        [1, 0],
        [1, 1],
        [0, 1]
    ]
    function handleClick() {
        props.onSelected(3);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 3 && props.palaced[3] === 1 ? props.colors[0] : props.colors[3];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="pink-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

const Blue = (props) => {
    let pattern = [
        [0, 1],
        [1, 1,],
        [1, 0]
    ]

    function handleClick() {
        props.onSelected(4);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 4 && props.palaced[4] === 1 ? props.colors[0] : props.colors[4];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="blue-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

const Aqua = (props) => {
    let pattern = [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ]

    function handleClick() {
        props.onSelected(5);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 5 && props.palaced[5] === 1 ? props.colors[0] : props.colors[5];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="aqua-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

const Yellow = (props) => {
    let pattern = [
        [0, 1],
        [1, 1],
        [0, 1]
    ]

    function handleClick() {
        props.onSelected(6);
    }

    function renderRow() {
        return pattern.map((row, ind) => {
            return (
                <tr key={ind}>
                    {
                        renderCel(ind)
                    }
                </tr>
            )
        })
    }

    function renderCel(row) {
        let color = props.selectedPice === 6 && props.palaced[6] === 1 ? props.colors[0] : props.colors[6];
        return pattern[row].map((col, ind) => {
            if (pattern[row][ind] === 1) {
                return <td key={ind} onClick={handleClick} className="color" style={{ backgroundColor: color }}></td>
            } else {
                return <td key={ind} className="no-color"></td>
            }
        });
    }

    return (
        <div className="yellow-pice">
            <table>
                <tbody>
                    {
                        renderRow()
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Game;