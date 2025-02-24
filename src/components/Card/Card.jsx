import React from "react";
import { ButtonCard } from "../ButtonCard/ButtonCard";

export const Card = ({ products }) => {
  return (
    <div className="flex justify-center items-center ">
        <div className="grid grid-cols-3 gap-4">
            {products.map(( product ) => (
                <div key={ product.id } className="flex flex-col bg-white border border-black/15 rounded-lg shadow-md relative transition hover:opacity-90">
                    <figure>
                        <img src={ product.img } alt={ product.nombre } className="w-full h-48 object-cover rounded-md" />
                    </figure>
                    <div className="flex flex-col p-4 mt-2 gap-y-2">
                        <h2 className="text-md font-semibold rounded-md">{ product.nombre }</h2>
                        <span className="text-gray-700  text-sm">{ product.descripcion }</span>
                    </div>
                    <div className="flex items-center w-full p-2 mb-2">
                        <ButtonCard />
                        <span className="flex justify-end w-full text-lg text-blue-900 font-semibold">${ product.precio }</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
