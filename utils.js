const d = JSON.parse(JSON.stringify(db.data));

const getItemWithRefItems = (origin, dataList) => {
  return origin.ref.reduce((a, c) => {
    const idx = dataList.findIndex((v) => v.idx === c);

    if(idx >= 0) {
      if(!a.refItems) {
        a.refItems = [];  
      }

      a.refItems.push(dataList[idx]);
    }
    
    return a;
  }, origin);
}

const getCategories = (db) => {
  return db.data.reduce((a, c) => {
    const _idx = a.findIndex((v) => v.idx === c.category);
  
    const _c = getItemWithRefItems(c, d);
  
    if(_idx >= 0) {
      if(!a[_idx]?.items) {
        a[_idx].items = [];  
      }
  
      a[_idx].items.push(_c);
    }
  
    return a;
  }, db.category);
}