export const createId = () => {
  let today = new Date();
  const date = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const id = month + date + year + hours + minutes + seconds;
  return id;
};

export const cloneList = (list) => {
  if (!list) return;
  return JSON.parse(JSON.stringify(list));
};
