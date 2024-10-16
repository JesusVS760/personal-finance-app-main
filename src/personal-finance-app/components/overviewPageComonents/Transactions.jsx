import React, { useEffect, useState } from "react";
import arrow from "../../starter-code/assets/images/icon-caret-right.svg";
import test from "../../starter-code/assets/images/avatars/emma-richardson.jpg";
import { useNavigate } from "react-router-dom";

const Transactions = ({ transactionValues, card, pageIdentifier }) => {
  const [isCard, setIsCard] = useState(card);
  const [pageId, setPageId] = useState(
    pageIdentifier !== undefined ? pageIdentifier : "transactions"
  );
  const [displayPreview, setDisplayPreview] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (pageId !== "overview") {
      setPageId("transactions");
      console.log("current page: ", "transactions");
    }
  }, [pageIdentifier]);

  useEffect(() => {
    const validTransactions = transactionValues
      .filter((transaction) => transaction.name != "")
      .map((transaction) => transaction);
    if (isCard) {
      setDisplayPreview(validTransactions.slice(0, 5));
    } else {
      setDisplayPreview(validTransactions);
    }
    // console.log(validTransactions);
  }, [transactionValues, isCard]);

  function formatDate(isoString) {
    const date = new Date(isoString);

    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const getImagePath = (avatarPath) => {
    try {
      return new URL(
        `../../starter-code/${avatarPath.replace("./", "")}`,
        import.meta.url
      ).href;
    } catch (error) {
      console.error("Error loading image:", error);
      return "";
    }
  };

  return (
    <div
      className={
        isCard
          ? "transaction-container max-w-2xl rounded-xl p-7 bg-white mt-5"
          : "w-full "
      }
    >
      <div className="transactions-heading flex align-middle justify-center">
        <h3 className=" mr-auto mb-4 font-bold text-2xl">Transactions</h3>

        {isCard ? (
          <button className="detail-button flex items-center gap-2 cursor-pointer  hover:bg-slate-500 hover:transition ease-in-out delay-100 hover:font-bold hover:p-2 hover:rounded-md">
            <h3 onClick={() => navigate("/Transactions")}> View All</h3>
            <img src={arrow} alt="arrow" />
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          isCard
            ? "max-h-96	flex flex-col "
            : "flex flex-wrap max-h-screen overflow-y-auto"
        }
      >
        {displayPreview.map((transaction, index) => (
          <div
            key={`${pageId}-${transaction.id || index}`}
            className={
              card
                ? "transactions-card flex  mb-2"
                : "transactions-card flex w-4/5 mb-2"
            }
          >
            <div className="transaction-info  mr-auto flex align-middle justify-center gap-2">
              <img
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-full"
                src={getImagePath(transaction.avatar)}
                alt=""
              />
              <p>{transaction.name}</p>
            </div>
            <div className="transactions-value ">
              <div className="transaction-amt flex">
                <div
                  className={
                    transaction.amount > 0
                      ? "text-green-500 font-bold ml-auto"
                      : "text-black font-bold ml-auto"
                  }
                >
                  <span>{transaction.amount > 0 ? "+" : "-"}</span>$
                  {transaction.amount.toString().replace("-", "")}
                </div>
              </div>
              <div className="transaction-date">
                {formatDate(transaction.date)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
