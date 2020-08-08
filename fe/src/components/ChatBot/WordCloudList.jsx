import React from "react";

import WordCloud from "./WordCloud";

const WordCloudList = (message) => {
  return (
    <div>
      <WordCloud message={message} />
    </div>
  );
};

export default WordCloudList;
