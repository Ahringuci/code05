import React, { useEffect } from "react";

const PokeItems = (props) => {
    const { pokeData } = props;
    const [pokeDetailData, setPokeDetailData] = React.useState(false);
    const [pokeDetailState, setPokeDetailState] = React.useState(false);

    useEffect(() => {
        fetch(pokeData.url)
            .then((res) => res.json())
            .then((res) => {
                setPokeDetailData(res);
            });
    }, [pokeData.url]);

    const handleDetailButtonClick = () => {
        setPokeDetailState(!pokeDetailState);
    };
    return (
        <div className="poke__item">
            <p className="poke__name">{pokeData.name}</p>
            <button
                className="btn poke__detail"
                onClick={handleDetailButtonClick}
            >
                Detail
            </button>

            {pokeDetailState && (
                <div className="popup">
                    <div
                        className="popup-mask"
                        onClick={handleDetailButtonClick}
                    ></div>
                    <div className="popup-content">
                        <p>
                            {pokeDetailData.order} - {pokeDetailData.name}
                        </p>

                        <p>height: {pokeDetailData.height}</p>
                        <p>weight: {pokeDetailData.weight}</p>
                        <p>base_experience: {pokeDetailData.base_experience}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokeItems;
