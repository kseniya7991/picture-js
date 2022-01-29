const scrollPage = () => {
  const scrollHeight = document.documentElement.scrollHeight,
    clientHeight = document.documentElement.clientHeight,
    height = scrollHeight + clientHeight,
    page = document.documentElement;

  function consoleData() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    console.log(scrollHeight, clientHeight, scrollTop);
  }

  document.addEventListener("scroll", () => {
    consoleData();
  });
};

export default scrollPage;
