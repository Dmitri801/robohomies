import React from "react";

function Main({ children }) {
  return <main style={styles.main}>{children}</main>;
}

const styles = {
  main: {
    borderTop: "5px solid #111",
    height: "calc(100vh - 400px)",
    overflowY: "auto",
    padding: "80px"
  }
};

export default Main;
