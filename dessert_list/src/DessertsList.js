function DessertsList(props) {

    const lowCalItems = props.data
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <li>
                    {dessert.name} - {dessert.calories} cal
                </li>
            );
        });

    return (
        <div>
            <ul>
                {lowCalItems}
            </ul>
        </div>
    );
}

export default DessertsList;