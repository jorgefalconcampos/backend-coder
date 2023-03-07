const task = (params) => {
  return new Promise((res, rej) => {});
};

const dividir = (dividendo, divisor) => {
  return new Promise((res, rej) => {
    if (divisor === 0) {
      rej({ msg: "No se puede dividir por 0" });
    } else {
      res(dividendo / divisor);
    }
  });
};

dividir(15, 3)
    .then((respRes) => {return respRes*100 })
    .then((respRes2) => { console.log(respRes2); })
    
    .catch((err) => {
        console.log(err);
    })

    .finally(() => { console.log("Programa finalizado") });


async function funcionAsync() {

    try {
        let res = await dividir(10, 2);
        console.log(res);
    } catch (error) {
        console.error(error);   
    }
}

funcionAsync();