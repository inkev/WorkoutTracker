import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import 'react-calendar/dist/Calendar.css';


const HomePage = () => {
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="Sample">
          <div className="Sample__container">
            <main className="Sample__container__content">
              <Calendar onChange={onChange} value={value} />
            </main>
          </div>
        </div>
      );
}

export default HomePage