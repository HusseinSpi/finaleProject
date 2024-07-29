const RestructuringDataFormat = (data, language) => {
  const languageMap = {
    en: "word_en",
    ar: "word_ar",
    he: "word_he",
  };

  const languageKey = languageMap[language];

  const word = data.map((element) => {
    return {
      word: element[languageKey],
      id: element._id,
      match: false,
    };
  });

  const image = data.map((element) => {
    return {
      image: element.image,
      id: element._id,
      match: false,
    };
  });

  return { word, image };
};

export default RestructuringDataFormat;
