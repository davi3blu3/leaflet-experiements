var popup = function(park) {
  return `
    <div>
      <b>${park.name}</b>
      <br>${park.location.streetAddr}
      <br>${park.location.cityStZip}
      <div class="popup-btnGroup">
        <a href="https://www.google.com/maps/place/${park.location.coord[0]}+${park.location.coord[1]}">Directions</a>
        <a href=#>Park Info</a>
      </div>
    </div>
  `;
};