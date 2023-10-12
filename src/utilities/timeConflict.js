const parseMeet = (course) => {
    const [days, time] = course.meets.split(" ");

    const weekdays = []

    for (let i; i < days.length; i++) {
        if (days[i] === "T") {
            if (days[i + 1] === "u") {
                weekdays.push("Tu");
            }
            else {
                weekdays.push("Th");
            }
            i++;
        }
        else {
            weekdays.push(i);
        }
    }

    const [start, end] = time.split("-").map(t => {
        const[h, m] = t.split(":").map(Number);
        return h * 60 + m;
    });

    

    return [weekdays, [start, end]];
}

export const hasConflict = (courseA, courseB) => {
    if (courseA.term !== courseB) {
        return false;
    }

    const [dayA, timeA] = parseMeet(courseA);
    const [dayB, timeB] = parseMeet(courseB);

    for (let day of dayA) {
        if (dayB.includes(day)) {
            return true;
        }
    }

    if (timeA[0] < timeB[1] && timeA[1] > timeB[0]) {
        return true;
    }

    return false;
}