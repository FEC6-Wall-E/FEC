import React from 'react';
import Image from './image/index.jsx';

function Overview({ product, styles }) {
  const [style, setStyle] = React.useState(styles[0])

  return (
    <div id="overview">
      <Image images={style.photos} />
    </div>
  );
}

export default Overview;
