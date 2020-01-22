import React from 'react';

export default function Header() {
    return (
    <div style={headStyle}>
      <h1>Book Store</h1>
    </div>
  );
}

const headStyle = {
    padding: '7px',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
}

// HOOK ;)

//import React, { useState } from 'react';
// export default function Header() {
//     const [count, setCount] = useState(0);

//     return (
//     <div>
//       <p>Naciśnięto {count} razy</p>
//       <button onClick={() => setCount(count + 1)}>
//         Naciśnij mnie
//       </button>
//     </div>
//   );
// }