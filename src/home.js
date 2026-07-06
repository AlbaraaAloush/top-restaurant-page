import restaurantImage from "./restaurant.jpg";

function createHome(){
    const contentDiv = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Tea Day";

    const image = document.createElement("img");
    image.src = restaurantImage;

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fugiat veritatis nobis amet tenetur ullam dignissimos similique delectus, pariatur natus, optio consequuntur, iure maxime in debitis aut officiis repellendus? Voluptatibus!"

    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(paragraph);
}

export {createHome};