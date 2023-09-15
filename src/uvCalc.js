export default function uvCalc(uvData) {
  const modal = document.getElementById("myModal");
  const uvMessage = document.getElementById("uvMessage");
  const closeBtn = document.getElementsByClassName("close")[0];

  if (uvData <= 2) {
    uvMessage.textContent = "UV DATA: You can safely enjoy being outside!";
  } else if (uvData <= 7) {
    uvMessage.textContent =
      "UV DATA: Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!";
  } else if (uvData >= 8) {
    uvMessage.textContent =
      "UV DATA: Avoid being outside during midday hours! Make sure you seek shade! Shirt, sunscreen, and hat are a must!";
  }

  // Display the modal
  modal.style.display = "block";

  // Close the modal when the close button is clicked
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when clicking outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
