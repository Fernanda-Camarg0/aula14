const petsData = [
    {
      name: "Lisi",
      species: "Gata",
      favFoods: ["Rurururururur",'Miaaau, miiaauu'],
      birthYear: 2016,
      photo: "https://i.pinimg.com/originals/15/64/71/15647113df79021a6047a16f47355833.jpg"
    },
    {
      name: "Liv e Aru",
      species: "Lince",
      favFoods: ["Rurururururur",'Miaaau, miiaauu'],
      birthYear: 2019,
      photo: "https://i.pinimg.com/originals/f2/27/be/f227be51bae1872470106030b62d4714.jpg"
    }
  ];
  
  function idade(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
      return "1 year old";
    } else if (calculatedAge == 0) {
      return "Baby";
    } else {
      return `${calculatedAge} anos`;
    }
  }
  
  function foods(foods) {
    return `
  <h4>Sons:</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  
  function petTemplate(pet) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      <p><strong>Idade:</strong> ${idade(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} disponíveis)</h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer"></p>
  `;