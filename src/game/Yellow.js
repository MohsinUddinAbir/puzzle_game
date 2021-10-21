
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
        let color = props.selectedPice === 6 || props.placed[6] === 1 ? props.colors[0] : props.colors[6];
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

export default Yellow;