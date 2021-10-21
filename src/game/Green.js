
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
        let color = props.selectedPice === 1 || props.placed[1] === 1 ? props.colors[0] : props.colors[1];
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

export default Green;