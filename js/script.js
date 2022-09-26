// Essa function "countDate" é usada para setar uma data (TEM QUE SER NO FUTURO)
// A function now vai ter o horário de agora (por isso o "Date" esta vazio)
// gap é a "distancia" de tempo entre o tempo de agora, e o tempo setado

const countdown = () => {
    const countDate = new Date("Sep 29, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Para coolocar os tempos certinhos, porque senão fica quebrado 

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Pra colocar os tempos em seus devidos lugares 

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);