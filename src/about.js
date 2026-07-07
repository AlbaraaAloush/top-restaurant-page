import restaurantImage from "./restaurant.jpg";

function createAbout() {
  const contentDiv = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Story";

  const paragraph = document.createElement("p");
  paragraph.textContent = `The story of \"Tea Day\" begins not with a noble quest for the perfect brew,
     but with a caffeine-deprived, sleepwalking accountant named Barry who, in a fugue state,
    accidentally bid his life savings on a dusty, defunct laundromat at an online auction.
    Waking up to the smell of mildew and regret,
    Barry decided that if he was going to be the proud owner of a room full of industrial washing machines,
    he might as well use the hot water hookups for something useful.
          After a series of unfortunate events involving a 50-pound bag of Earl Grey and a botched plumbing job that flooded the
           entire block with a fragrant, milky tsunami, the health inspector, overwhelmed by the delicious aroma,
            simply shrugged and granted him a permit. Thus, "Tea Day" was born,
             a cafe where the only thing cleaner than the teacups is the story of how it all started, 
             and where Barry is still trying to figure out how to make
              a latte without his hands trembling from the sheer terror of his own accidental success.`;

  contentDiv.appendChild(heading);
  contentDiv.appendChild(paragraph);
}

export { createAbout };
