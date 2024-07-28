const RestructuringDataFormat = (data) => {
  const hebrew = data.map((element) => {
    if (element.HeEn)
      return {
        He: element.He,
        HeEn: element.HeEn,
        id: element._id,
        match: false,
      };
    else
      return {
        He: element.He,
        match: false,
        id: element._id,
      };
  });
  const arabic = data.map((element) => {
    if (element.ArEn)
      return {
        Ar: element.Ar,
        ArEn: element.ArEn,
        id: element._id,
        match: false,
      };
    else
      return {
        Ar: element.Ar,
        match: false,
        id: element._id,
      };
  });
  return { arabic: arabic, hebrew: hebrew };
};

export default RestructuringDataFormat;
