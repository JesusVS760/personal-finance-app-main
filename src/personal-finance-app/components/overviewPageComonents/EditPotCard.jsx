import React, { useEffect } from "react";

const EditPotCard = ({ potContent }) => {
  useEffect(() => {
    console.log("received pot info", potContent);
  }, [potContent]);

  return (
    <div className="edit-pot-container p-5 bg-slate-500	rounded-md text-white	font-bold flex justify-center">
      <form action="submit">
        <h1 className="text-2xl">Edit Pot</h1>
        <div className="edit-pot-content mb-2">
          <h3>Edit Name:</h3>
          <input className="p-2" type="text" placeholder="e.g Table" />
        </div>
        <div className="edit-pot-content mb-2">
          <h3>Edit Amount:</h3>
          <input className="p-2" type="text" placeholder="e.g 50.00" />
        </div>
        <div className="edit-pot-content mb-2">
          <h3>Edit Target Amount:</h3>
          <input className="p-2" type="text" placeholder="e.g 100.00" />
        </div>
        <div className="edit-pot-button">
          <button className="p-2 bg-white mt-2 text-black hover:bg-black hover:text-white">
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPotCard;
