import sc from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={sc.footer}>
      <span>© copyright 2025 - All rights reserved</span> developed by{" "}
      <strong>Yomar Barrera</strong>
    </div>
  );
};
