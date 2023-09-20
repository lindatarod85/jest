import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = ` <a href="/" class="${
    pathname === "/" || pathname === "/.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<a href="loggedin.html" class="${
      pathname === "/loggedin.html" ? "active" : ""
    }">Logged in</a>
        <button id="logout">Logout ${username}</button>`;
  }

  if (pathname !== "/loggedin.html" && username) {
    document.location.href = "/loggedin.html";
  }

  console.log(username);

  container.innerHTML = `<div class="menu">
   
    ${authLink}
</div>`;

  logoutButton();
}
