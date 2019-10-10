// fetch api
var count = 19;
var i = 1;
for (i=1;i<count;i++) {
  fetch('https://pokeapi.co/api/v2/pokemon/'+i)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    document.getElementById("itemList").innerHTML += 
    `<li>
      <div class="item">
        <div class="item-thumb"><img src="${data.sprites.front_default}" alt="${data.name}"></div>
        <div class="item-desc">
          <div href="${data.sprites.front_default}" class="text-bold text-blue" target="_blank">${data.name}</div>
          <div class="text-bold text-grey">EXP. ${data.base_experience}</div>
          <a href="javascript:void(0)" class="text-bold text-red" onClick="deleteItem(this);">Remove</a>
        </div>
      </div>
    </li>`;

  })
  .catch(error => console.error(error))
}

// delete
function deleteItem(e)
{
  e.parentNode.parentNode.parentNode.remove()
}
