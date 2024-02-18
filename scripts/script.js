let seatQuan = 0;
let totalCost = 0;
const seatLimit = 4;
let freeseat = 40;

const allSeatBtn = document.getElementsByClassName("seatBtn");

for (const btn of allSeatBtn) {
    btn.addEventListener("click", function () {
        if (!btn.classList.contains("bg-[#1cd100]")) {
            if (seatQuan < seatLimit) {
                btn.classList.add("bg-[#1cd100]", "text-white");
                seatQuan++;
                freeseat--;
                document.getElementById("seatQuan").innerText = seatQuan;
                document.getElementById("leftSeat").innerText = freeseat;

                const priceContainer = document.getElementById("priceContainer");
                const div = document.createElement("div");
                div.classList.add("flex", "justify-around");
                div.innerHTML = `
                    <p>${btn.textContent}</p>
                    <p>Economy</p>
                    <p>550</p>
                `;
                priceContainer.appendChild(div);

                totalCost += 550;
                document.getElementById("totalCost").innerText = totalCost;
            } else {
                alert("You can only select up to 4 seats.");
            }
        } else {
            alert("You have already selected this seat.");
        }
    });
}

document.getElementById("apply").addEventListener("click", function () {
    const couponInput = document.getElementById("inputQupon").value.trim();
    const total = parseInt(document.getElementById("totalCost").innerText);
    const discountCon = document.getElementById("discountCon");
    const discountField = document.getElementById("discountFild");
    const Discount = document.getElementById("Discount");
    const grandTotal = document.getElementById("grandTotal");

    if (couponInput === "NEW15") {
        const new15Discount = total * 15 / 100;
        Discount.innerText = new15Discount;
        grandTotal.innerText = total - new15Discount;
        discountCon.classList.remove("hidden");
    } else if (couponInput === "Couple 20") {
        const couple20Discount = total * 20 / 100;
        Discount.innerText = couple20Discount;
        grandTotal.innerText = total - couple20Discount;
        discountCon.classList.remove("hidden");
    } else {
        discountField.classList.add("hidden");
    }
});

document.getElementById("next").addEventListener('click', function () {
    const inputname = document.getElementById("name").value;
    const inputnumber = document.getElementById("number").value;
    const inputemail = document.getElementById("email").value;

    if (seatQuan !== 0 && inputname.trim() !== '' && inputnumber.trim() !== '' && inputemail.trim() !== '') {
        document.location = '#my_modal_8';
    } else {
        alert("Please book a seat and fill all information.");
    }
});

function nextBtnDisAndEnable() {
    const nextButton = document.getElementById("next");
    const inputname = document.getElementById("name").value;
    const inputnumber = document.getElementById("number").value;
    const inputemail = document.getElementById("email").value;

    nextButton.disabled = !(seatQuan > 0 && inputname.trim() !== '' && inputnumber.trim() !== '' && inputemail.trim() !== '');
}


document.getElementById("name").addEventListener('input', nextBtnDisAndEnable);
document.getElementById("number").addEventListener('input', nextBtnDisAndEnable);
document.getElementById("email").addEventListener('input', nextBtnDisAndEnable);

nextBtnDisAndEnable();


document.getElementById("buytick").addEventListener("click", function () {
    document.location = "#my_modal_9"
})