import { useState } from "react";
import DishList from "./DishList";

const RestaurantCategory = ({ categories }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        // If the same index is clicked, close it by setting activeIndex to null
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="dish-list">
            {categories.map((res, index) => (
                <div key={res.card.card.title} className="m-auto w-6/12">
                    <button
                        onClick={() => handleToggle(index)}
                        className="p-2 text-left w-full bg-slate-300 rounded-lg"
                    >
                        <span className="font-bold flex justify-between">
                            {res.card.card.title} ({res.card.card.itemCards.length})
                            <span>{activeIndex === index ? '🔼' : '🔽'}</span> {/* Arrow to indicate open/close */}
                        </span>
                    </button>
                    {activeIndex === index && (
                        <div className="p-2 bg-gray-200 rounded-b-lg">
                            <DishList item={res.card.card.itemCards} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RestaurantCategory;
