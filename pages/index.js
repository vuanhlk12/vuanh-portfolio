import { useEffect } from "react";
import WebContent from "../src/app";

export default function Home() {
  useEffect(() => {
    const toggle = document.querySelector(".hover-show");

    toggle?.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });

    let Icons = document.querySelectorAll(".navigation .icon");

    Icons?.forEach((icon) => {
      icon.addEventListener("click", () => {
        changeactive();

        icon.classList.add("active-nav");
      });
    });

    function changeactive() {
      Icons.forEach((icon) => {
        icon.classList.remove("active-nav");
      });
    }
  }, []);

  return <WebContent />;
}
