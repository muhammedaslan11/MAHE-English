import PropTypes from "prop-types";
import { useEffect } from "react";

export const PageContainer = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "#E0F4FF" }}
      className="w-screen h-screen flex justify-center"
    >
      {children}
    </div>
  );
};

export const Container = ({ children, overflow }) => {
  let o = !overflow ? "overflow-hidden" : overflow;

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className={`h-full max-w-screen-xl px-12 py-4 flex ${o}`}
    >
      {children}
    </div>
  );
};

export const Column = ({
  children,
  width,
  height,
  overflow,
  border,
  backgroundColor,
  boxShadow,
  className,
}) => {
  var x = window;

  useEffect(() => {
    console.log(x.matchMedia("(max-width: 1500px)"));
  }, [x.matchMedia("(max-width: 1500px)")]);

  // let w = !width ? "full" : width;
  // let h = !height ? "full" : height;
  // let o = !overflow ? null : overflow;

  // function myFunction(x) {
  // var mediaElements = document.getElementsByClassName("media");

  // if (x.matchMedia("(max-width: 1500px)")) {
  //   for (var i = 0; i < mediaElements.length; i++) {
  //     mediaElements[i].style.height = "800px";
  //   }
  // } else if (x.matchMedia("(max-width: 1300px)")) {
  //   for (var a = 0; a < mediaElements.length; a++) {
  //     mediaElements[a].style.height = height;
  //   }
  // }
  // }

  // var x = window;
  // x.addEventListener("change", myFunction);
  // myFunction(x);

  return (
    <div
      style={{
        height: height,
        width: width,
        overflow: overflow,
        overflowX: "hidden",
        border: border,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
      }}
      className={`flex flex-col gap-3 p-2 rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

export const Row = ({ children, width, direction }) => {
  let w = !width ? "full" : width;
  let d = direction ? direction : null;
  return <div className={`flex flex-row gap-2 w-${w} ${d}`}>{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node, //! children propu aslında bir React node
};

Container.propTypes = {
  children: PropTypes.node,
  overflow: PropTypes.string,
};

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  overflow: PropTypes.string,
  style: PropTypes.string,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
  className: PropTypes.string,
};

Row.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  overflow: PropTypes.string,
  direction: PropTypes.string,
};
