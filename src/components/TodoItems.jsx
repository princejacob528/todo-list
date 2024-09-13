import React from "react";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <i className="fa-solid fa-circle-check text-orange-600 text-2xl w-7"></i>
        ) : (
            <i class="fa-regular fa-circle text-slate-600 text-2xl w-7"></i>
        )}
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through": ""}`}>{text}</p>
      </div>
      <i
        class="fas fa-solid fa-trash text-red-500 text-xl w-3.5 cursor-pointer mr-6"
        onClick={() => {
          deleteTodo(id);
        }}
      ></i>
    </div>
  );
};

export default TodoItems;
