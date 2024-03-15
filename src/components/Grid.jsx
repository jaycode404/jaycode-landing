
import React from 'react';


const BentoGrid = () => {
  return (
    <Bento
      className="grid"
      itemHeight={[200, 150, 100]}
      breakpoint={[600, 800]}
      minCols={[1, 2, 3]}
    >
      <BentoItem>
        <div className="bg-gray-200 h-full">
          {/* Contenido del primer elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-300 h-full">
          {/* Contenido del segundo elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-400 h-full">
          {/* Contenido del tercer elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-500 h-full">
          {/* Contenido del cuarto elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-600 h-full">
          {/* Contenido del quinto elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-700 h-full">
          {/* Contenido del sexto elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-800 h-full">
          {/* Contenido del séptimo elemento */}
        </div>
      </BentoItem>
      <BentoItem>
        <div className="bg-gray-900 h-full">
          {/* Contenido del octavo elemento */}
        </div>
      </BentoItem>
    </Bento>
  );
};

export default BentoGrid;
