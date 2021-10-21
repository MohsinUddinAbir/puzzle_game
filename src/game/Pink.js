
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
        let color = props.selectedPice === 3 || props.placed[3] === 1 ? props.colors[0] : props.colors[3];
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

export default Pink;