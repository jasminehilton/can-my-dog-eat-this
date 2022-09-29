const FOODLIST = [
  {
    item: "apple",
    IsItsafe: "safe",
    extraInfo:
      "Apple slices make a delicious, healthy snack for your dog and can help keep your dog's teeth clean and their breath fresh.",
  },
  {
    item: "banana",
    IsItsafe: "inModeration",
    extraInfo:
      "They're high in potassium, vitamins, biotin, fiber, and copper. They are low in cholesterol and sodium, but because of their high sugar content, bananas should be given as a treat, not part of your dog's main diet.",
  },
  {
    item: "beef",
    IsItsafe: "safe",
    extraInfo:
      "Dogs can eat beef and as long as your pooch isn't allergic, they can safely munch this meat every day as part of a balanced diet or snack on bits of beef as a healthy treat. Most dogs can eat beef whether it's raw or cooked, just as long as it is kept plain and doesn't have any sauces or seasonings smothered on it.",
  },
  {
    item: "cheese",
    IsItsafe: "inModeration",
    extraInfo:
      "Mozzarella and cottage cheese are lower in fat than other types of cheeses, making them a good snack for dogs. Swiss cheese is low in lactose, which is easier on your pet's digestive system. Cheddar is a common household cheese and has a relatively low level of salt, so it is safe in small doses.",
  },
  {
    item: "garlic",
    IsItsafe: "notSafe",
    extraInfo:
      "Garlic might be good for people, but dogs metabolize certain foods differently than we do. According to the Merck Veterinary Manual, garlic and other members of the allium family, including onions, contain thiosulfate, which is toxic to dogs but not to humans.",
  },
  {
    item: "onion",
    IsItsafe: "notSafe",
    extraInfo:
      "All parts of the onion plant are toxic to dogs, including the flesh, leaves, juice, and processed powders. Whether raw or cooked, fried or powdered, onions and the rest of the allium family (garlic, shallots, leeks, and chives) are harmful to dogs.",
  },
  {
    item: "peanut butter",
    IsItsafe: "inModeration",
    extraInfo:
      "Yes, dogs can eat peanut butter as long as it is fed in moderation and does not contain xylitol, so get out that pet-safe peanut butter jar and share the good news.",
  },
  {
    item: "carrot",
    IsItsafe: "safe",
    extraInfo:
      "Raw and cooked carrots are healthy options for dogs and make a nutritious add-on to meals. While carrots are generally safe, it is important to cut whole carrots and even carrot sticks into bite-size chunks before feeding them to your dog.",
  },
];

function capitalizeFirstLetter(foodInput) {
  return foodInput.charAt(0).toUpperCase() + foodInput.slice(1);
}

let foodInput;
document.querySelector(".main__button").addEventListener("click", (event) => {
  foodInput = document.querySelector(".main__input").value.toLowerCase();

  for (let i = 0; i < FOODLIST.length; i++) {
    if (FOODLIST[i].item === foodInput) {
      if (FOODLIST[i].IsItsafe === "safe") {
        document.querySelector(
          ".main__answer"
        ).innerHTML = `${capitalizeFirstLetter(
          FOODLIST[i].item
        )} is safe <br><br> ${FOODLIST[i].extraInfo}`;
        document.body.style.backgroundColor = "#2dc937";
        return;
      } else if (FOODLIST[i].IsItsafe === "notSafe") {
        document.querySelector(
          ".main__answer"
        ).innerHTML = `${capitalizeFirstLetter(
          FOODLIST[i].item
        )} is NOT safe <br><br> ${FOODLIST[i].extraInfo}`;
        document.body.style.backgroundColor = "#dc1d23";
        return;
      } else if (FOODLIST[i].IsItsafe === "inModeration") {
        document.querySelector(
          ".main__answer"
        ).innerHTML = `${capitalizeFirstLetter(
          FOODLIST[i].item
        )} is safe in moderation <br><br> ${FOODLIST[i].extraInfo}`;
        document.body.style.backgroundColor = "#f5e532";
        return;
      }
    }
    document.querySelector(
      ".main__answer"
    ).innerHTML = `${capitalizeFirstLetter(foodInput)} is not in our directory`;
  }
});
