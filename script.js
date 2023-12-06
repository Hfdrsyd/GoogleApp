const scriptURL =
  "https://script.google.com/macros/s/AKfycbyOKvNOxCA16UGQpQzK_Cz4Ki_FS5XZwvL8oaETnwkJqDpFy1W9s0MdFNAQna11jvsA/exec";

const form = document.forms["regist-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .then((data) => data.json())
    .then((responseData) => {
      alert("Terima kasih telah mendaftar!");
      window.location.reload();
    })
    .catch((error) => console.error("Error:", error.message));
    console.log("razan");
});
