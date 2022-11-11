import { useState } from "react";

export const Clothes = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <section className="clothes">
        <h2 onClick={() => setHidden(!hidden)}>
          Clothes {hidden ? <span>\/</span> : <span>/\</span>}
        </h2>

        {hidden && (
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        )}
      </section>
    </>
  );
};
