//FRONT
const socket = io();

//FRONT EMITE
//paso 1 - Un front/Usuario envia un msg,

//BACK ATAJA Y LUEGO EMITE
//paso 2 -
//el back lo ataja,
//lo guarda en un array
//y lo devuelve a todo

//FRONT ATAJA
//paso 3 - atajar el array de msgs en el front
// y mostrarlo en pantalla

//FRONT EMITE
setInterval(() => {
  socket.emit("msg_front_to_back", {
    msg: "msg " + Date.now(),
  });
}, 3000);

//FRONT RECIBE
socket.on("msg_back_to_front", (msgs) => {
  console.log(msgs);
});
