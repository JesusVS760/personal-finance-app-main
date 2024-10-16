import { useEffect, useState } from "react";
import arrow from "../../starter-code/assets/images/icon-caret-right.svg";
import savedSign from "../../starter-code/assets/images/icon-nav-pots.svg";
import { useNavigate } from "react-router-dom";
import AddPot from "./AddPot";
import EditPotCard from "./EditPotCard";

const Pots = ({ pots, card }) => {
  const [saved, setSaved] = useState(0);
  const [potsUpdated, setPotsUpdated] = useState([]);
  const [showCard, setShowCard] = useState(true);
  const [addPot, setAddPot] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editingPot, setEditingPot] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getTotal = pots
      .filter((pot) => pot.total >= 0)
      .map((pot) => pot.total)
      .reduce((acc, current) => acc + current, 0);

    setSaved(getTotal);
  }, [pots, card]);

  useEffect(() => {
    const potsValues = pots.filter((pot) => pot.name !== "").map((pot) => pot); // Extract the names

    if (card) {
      const potsToDisplay = potsValues.slice(0, 4);
      setPotsUpdated(potsToDisplay);
    } else {
      setPotsUpdated(potsValues);
    }
  }, [pots, card]);

  const getBorderColor = (theme) => {
    switch (theme) {
      case "#277C78":
        return "border-theme1";
      case "#626070":
        return "border-theme2";
      case "#82C9D7":
        return "border-theme3";
      case "#F2CDAC":
        return "border-theme4";
      default:
        return "border-theme5";
    }
  };

  // callback function for receiving new pots
  const receiveNewPot = ({
    name: userInput,
    target: targetInput,
    total: amountInput,
  }) => {
    const newObj = {
      name: userInput,
      target: targetInput,
      total: amountInput,
    };

    setPotsUpdated((prevValue) => [...prevValue, newObj]);
    console.log("success: ", {
      name: userInput,
      target: targetInput,
      total: amountInput,
    });

    fetch("http://localhost:5000/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowCard(false);
  };

  // useEffect(() => {
  //   console.log("Pot Edit is: ", editingPot);
  // }, [editingPot]);

  return (
    <div
      className={
        card
          ? "  pots-container rounded-xl p-7 max-w-2xl bg-white mt-10"
          : "relative flex flex-col w-full"
      }
    >
      <div className="pots-heading flex flex-row">
        <div className="pots-title mr-auto mb-10">
          <h3 className="text-2xl font-bold">Pots</h3>
        </div>
        <div className="pots-details">
          {card && (
            <button
              onClick={() => navigate("/Pots")}
              className="detail-button flex items-center gap-2 cursor-pointer  hover:bg-slate-500 hover:transition ease-in-out delay-100 hover:font-bold hover:p-2 hover:rounded-md"
            >
              <h3> See Details</h3>
              <img src={arrow} alt="arrow" />
            </button>
          )}
        </div>
      </div>
      <div
        className={
          card
            ? "pots-content flex flex-row"
            : "flex flex-col  max-w-[60vw] w-[60vw]"
        }
      >
        <div className="pots-saved-total flex   gap-8 bg-slate-200  pl-5 px-24 pt-7 rounded-md mb-8 ">
          <div className="pots-saved-total-img">
            <img className="pots-image w-11" src={savedSign} alt="saved" />
          </div>
          <div className="pots-saved-total-value text-white ">
            <h4 className="text-gray-500">Total Saved</h4>
            <h2 className="saved-amount text-black font-bold text-3xl">
              ${saved}
            </h2>
            {!card && (
              <button
                className="text-black font-bold p-2 border-solid border-black"
                onClick={() => {
                  setAddPot(!addPot);
                  setShowEdit(!showCard);
                }}
              >
                Add Pot
              </button>
            )}
          </div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {!card && showCard && (
              <AddPot addPot={addPot} handleAdd={receiveNewPot} />
            )}
          </div>
        </div>

        <div
          className={
            card
              ? "pots-more grid grid-rows-2 grid-cols-2 gap-4 ml-8"
              : "flex flex-col gap-4 w-full "
          }
        >
          {potsUpdated.map((pot) => (
            <div
              key={pot.name}
              className={`pots-savings bg-white p-2  rounded-sm border-l-4 ${getBorderColor(
                pot.theme
              )} pl-4`}
            >
              <div className="flex align-center">
                <div>
                  <h5>{pot.name}</h5>
                  <h2 className="font-bold">
                    ${parseInt(pot.total).toFixed(2)}
                  </h2>
                </div>

                {!card && (
                  <div
                    className="ml-auto p-4"
                    onClick={() => {
                      setEditingPot(pot);
                      setShowEdit(!showEdit);
                    }}
                  >
                    <button>Edit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="w-72	">
            {!card && showEdit && <EditPotCard potContent={editingPot} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pots;
