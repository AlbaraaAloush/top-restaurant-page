

function createMenu (){
    const contentDiv = document.getElementById("content");

    const menuList = document.createElement("ul");
    const menuItems = ["chicken sandwich", "french fries", "burger", "milkshake", "tea"];

    menuItems.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        menuList.appendChild(listItem);
    });

    contentDiv.appendChild(menuList);
}

export {createMenu};