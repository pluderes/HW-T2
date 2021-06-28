export const AutoCreateID = (a) => {
  a + new Date().getDate() + new Date().getMilliseconds();
  return console.log(a);
};

export const formatDate = () => {
  console.log("dd-mm-yyyy");
};
