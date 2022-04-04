import React, { useEffect } from "react";
import PokeItems from "./pokeItems";
const PokeApp = () => {
    const defaultTemp = {
        pokeLists: [],
        pokeRender: [],
    };
    const defaultApi = {
        prev: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
        curr: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
        next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
    };

    const [api, setApi] = React.useState(defaultApi);
    const [pokeState, setPokeState] = React.useState(defaultTemp);
    const [inputValue, setInputValue] = React.useState("");

    useEffect(() => {
        fetch(api.curr)
            .then((res) => res.json())
            .then((res) => {
                let _temp = {
                    ...pokeState,
                    pokeLists: res.results,
                    pokeRender: res.results,
                };
                let _api = {
                    ...api,
                    prev: res.previous,
                    next: res.next,
                };
                setApi(_api);
                setPokeState(_temp);
            });
    }, [api.curr]);

    const handleInputChange = (e) => {
        let _inputValue = e.target.value;

        let _pokeRender = pokeState.pokeLists.filter((val) => {
            return val.name.includes(_inputValue);
        });
        setPokeState({ ...pokeState, pokeRender: _pokeRender });
        setInputValue(e.target.value);
    };
    const handleApiButtonClick = (type) => {
        switch (type) {
            case "prev": {
                if (api.prev && api.prev !== "") {
                    let _api = { ...api, curr: api.prev };

                    setApi(_api);
                } else {
                    alert("het prev duoc roi");
                }
                break;
            }
            case "next": {
                if (api.next && api.next !== "") {
                    let _api = { ...api, curr: api.next };

                    setApi(_api);
                } else {
                    alert("het next duoc roi");
                }
                break;
            }
            default:
                break;
        }
    };
    return (
        <div>
            <input
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={inputValue}
            />
            <div className="flexbox">
                <button
                    className="btn api-prev"
                    onClick={() => handleApiButtonClick("prev")}
                >
                    Prev
                </button>
                <button
                    className="btn api-next"
                    onClick={() => handleApiButtonClick("next")}
                >
                    Next
                </button>
            </div>
            <div className="poke">
                {pokeState.pokeRender.length !== 0 &&
                    pokeState.pokeRender.map((val, ind) => (
                        <PokeItems key={ind} pokeData={val} />
                    ))}
            </div>
        </div>
    );
};

export default PokeApp;
