
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
        let color = props.selectedPice === 2 || props.placed[2] === 1 ? props.colors[0] : props.colors[2];
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

export default Purple;