import React from 'react';

const PrimeToyRetail = () => {
    return (
      <div>
        <h1 className="mt-20 text-center font-bold text-4xl text-blue-600">Prime Toy Retail</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66R0EizUqIPd1va2f_dIBwhVeo8MoCVjVBA&usqp=CAU" alt="Image 1" className="w-80" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn7iK9HDzX_2YILm_ZpIQkptwjoNfb7vzYg&usqp=CAU" alt="Image 2" className="w-80" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXxEY0ZamnZfj3fyVd8ie9Foxv4p9odr_qg&usqp=CAU" alt="Image 2" className="w-80" />
      </div>
      <div>
        <img src="data:image/png;base64,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" alt="Image 2" className="w-80" />
      </div>
    </div>
    </div>
 );
};

export default PrimeToyRetail;